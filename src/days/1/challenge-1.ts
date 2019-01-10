export default (frequencies: String): number => frequencies.split(',').reduce((accumulator, frequency) =>
  Number(frequency) + accumulator, 0);
