import { describe, it } from 'kavun';
import * as assert from 'assert';
import recurringFrequency from './challenge-2';

describe('Recurring Frequency', () => {
  it('"+1, -1" => 0', () => {
    assert.strictEqual(recurringFrequency('+1, -1'), 0);
  });
  it('"+3, +3, +4, -2, -4" => 10', () => {
    assert.strictEqual(recurringFrequency('+3, +3, +4, -2, -4'), 10);
  });
});
