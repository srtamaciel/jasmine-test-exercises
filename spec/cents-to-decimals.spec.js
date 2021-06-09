/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
 https://jasmine.github.io/api/3.4/global
*/

describe('centsToDecimals function', () => {
  // Describes the suite / group of tests

  // Use this test suite as a starting point/reference.

  it('Returns undefined when parameter passed is a string.', () => {
    // console.log(centsToDecimals('abcdef') === undefined);

    // expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals('abcdef')).toEqual(undefined);
  });

  // Fix the below test suites:

  it('Returns undefined when parameter passed is a string containing number characters.', () => {
    expect(centsToDecimals('12345')).toEqual(undefined);
  });

  it('Returns undefined when NaN value is passed as a parameter.', () => {
    expect(centsToDecimals(NaN)).toEqual(undefined);
  });

  it('Returns undefined when undefined value is passed as a parameter', () => {
    expect(centsToDecimals(undefined)).toEqual(undefined);
  });

  it('Returns undefined when parameter is not passed.', () => {
    expect(centsToDecimals()).toEqual(undefined);
  });

  it('Should convert a number of cents to a string representation in a floating number format.', () => {
    expect(centsToDecimals(1000).slice(0, 5)).toEqual('10.00');
    expect(centsToDecimals(50273).slice(0, 6)).toEqual('502.73');
    expect(centsToDecimals(0).slice(0, 4)).toEqual('0.00');
  });

  it('Should return a string representation of a number with `$` sign appended at the end.', () => {
    expect(centsToDecimals(1000)).toEqual('10.00$');
    expect(centsToDecimals(0)).toEqual('0.00$');
  });
});