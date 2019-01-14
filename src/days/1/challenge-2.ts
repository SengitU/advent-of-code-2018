type FrequencyState = {
  currentFrequency: number,
  isCalibrationCompled: boolean,
  previousFrequencies?: Set<number>
}

const initialFrequencyState: FrequencyState = {
  currentFrequency: 0,
  isCalibrationCompled: false,
  previousFrequencies: new Set<number>().add(0)
};

const toFrequency = (number: string): FrequencyState => ({ currentFrequency: Number(number) } as FrequencyState);

const calibrate = (prevFrequency: FrequencyState, currentFrequency: FrequencyState): FrequencyState => {
  if (prevFrequency.isCalibrationCompled) return prevFrequency;

  const totalFrequency: number = prevFrequency.currentFrequency + currentFrequency.currentFrequency;

  if(prevFrequency.previousFrequencies.has(totalFrequency)) {
    return {
      currentFrequency: totalFrequency,
      isCalibrationCompled: true
    };
  } else {
    return {
      currentFrequency: totalFrequency,
      previousFrequencies: prevFrequency.previousFrequencies.add(totalFrequency),
      isCalibrationCompled: false
    }
  }
};

export default (frequencies: string): number => frequencies.split(',').map(toFrequency).reduce(calibrate, initialFrequencyState).currentFrequency