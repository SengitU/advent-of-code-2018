export default (frequencies: string): number => frequencies.split(",").reduce((accumulator, frequency) =>
  Number(frequency) + accumulator, 0);
