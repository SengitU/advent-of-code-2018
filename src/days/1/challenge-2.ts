type FrequencyState = {
  currentFrequency: number,
  isCalibrationCompleted: boolean,
  previousFrequencies?: Set<number>
}

const initialFrequencyState: FrequencyState = {
  currentFrequency: 0,
  isCalibrationCompleted: false,
  previousFrequencies: new Set<number>().add(0)
};

const toFrequency = (number: string): FrequencyState => ({ currentFrequency: Number(number) } as FrequencyState);

const calibrate = (prevFrequency: FrequencyState, currentFrequency: FrequencyState): FrequencyState => {
  if (prevFrequency.isCalibrationCompleted) return prevFrequency;

  const totalFrequency: number = prevFrequency.currentFrequency + currentFrequency.currentFrequency;

  if(prevFrequency.previousFrequencies.has(totalFrequency)) {
    return {
      currentFrequency: totalFrequency,
      isCalibrationCompleted: true
    };
  } else {
    return {
      currentFrequency: totalFrequency,
      previousFrequencies: prevFrequency.previousFrequencies.add(totalFrequency),
      isCalibrationCompleted: false
    }
  }
};

export default (frequencies: string): number => frequencies.split(',').map(toFrequency).reduce(calibrate, initialFrequencyState).currentFrequency