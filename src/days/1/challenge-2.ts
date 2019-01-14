interface IFrequencyState {
  currentFrequency: number;
  isCalibrationCompleted: boolean;
  previousFrequencies?: Set<number>;
}

const initialFrequencyState: IFrequencyState = {
  currentFrequency: 0,
  isCalibrationCompleted: false,
  previousFrequencies: new Set<number>().add(0),
};

const toFrequency = (frequencyValue: string): IFrequencyState =>
  ({ currentFrequency: Number(frequencyValue) } as IFrequencyState);

const calibrate = (prevFrequency: IFrequencyState, currentFrequency: IFrequencyState): IFrequencyState => {
  if (prevFrequency.isCalibrationCompleted) { return prevFrequency; }

  const totalFrequency: number = prevFrequency.currentFrequency + currentFrequency.currentFrequency;

  if (prevFrequency.previousFrequencies.has(totalFrequency)) {
    return {
      currentFrequency: totalFrequency,
      isCalibrationCompleted: true,
    };
  } else {
    return {
      currentFrequency: totalFrequency,
      isCalibrationCompleted: false,
      previousFrequencies: prevFrequency.previousFrequencies.add(totalFrequency),
    };
  }
};

export default (frequencies: string): number =>
  frequencies.split(",").map(toFrequency).reduce(calibrate, initialFrequencyState).currentFrequency;
