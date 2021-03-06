import { expect } from 'chai';
import { generateID } from '..';

describe('when generating IDs', () => {
  it('should generate different IDs', () => {
    const id1 = generateID();
    const id2 = generateID();

    expect(id1).not.to.equal(id2);
  });
});
