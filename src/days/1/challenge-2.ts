type FrequencyState = {
  currentFrequency: number,
  previousFrequencies?: number[]
}

const initialFrequencyState: FrequencyState = { currentFrequency: 0, previousFrequencies: [0]};

const calibrate = (prevFrequency: FrequencyState, currentFrequency: FrequencyState): FrequencyState => initialFrequencyState;
const toFrequency = (number: string): FrequencyState => ({ currentFrequency: Number(number) } as FrequencyState);

export default (frequencies: string): number => frequencies.split(',').map(toFrequency).reduce(calibrate, initialFrequencyState).currentFrequency