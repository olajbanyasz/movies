import ReleaseDate from '../../../src/js/components/release-date/ReleaseDate';

describe('test function on movie ReleaseDate', () => {
  it('should display the year only from the given date', () => {
    expect(ReleaseDate.getReleaseYear('2018-05-22')).toMatch(/2018/);
  });
})