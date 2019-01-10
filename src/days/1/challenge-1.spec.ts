import { describe, it } from 'kavun';
import * as assert from 'assert';
import firstChallenge from './challenge-1';

describe('Chronal Calibration', () => {
  it('"+1" => 1', () => {
    assert.strictEqual(firstChallenge('+1'), 1);
  });
  it('"+1, -2" => -1', () => {
    assert.strictEqual(firstChallenge('+1, -2'), -1);
  });
  it('"+1, -2, +3, +1" => 3', () => {
    assert.strictEqual(firstChallenge('+1, -2, +3, +1'), 3);
  });
  it('should solve the final frequency', () => {
    const frequencies = require('../../../../inputs/challenge-1-input.js');
    assert.strictEqual(firstChallenge(frequencies.default), 490);
  });
});
