describe('Template literals', () => {
  test(`should be easier to determine whether a string includes another`, () => {
    const sentence = 'It was the best of times. It was the worst of times';
    // create a variable called `result` that is assigned to a call of sentence.includes
    expect(result).toBe(true);
  });

  test(`should be easier to repeat a string`, () => {
    const repeated = 'abc123';
    // create a variable called `result` that is the result of repeating the string 4 times
    expect(result).toBe('abc123abc123abc123abc123');
  });

  test('should support string interpolation', () => {
    const brand = {
      name: 'Toyota',
      friends: ['Aygo', 'Yaris', 'Corolla', 'Prius', 'IQ'],
    };
    // construct a string using template literal string interpolation
    const brandModels = ``;
    expect(brandModels).toBe(
      'Toyota has 5 car models: Aygo, Yaris, Corolla, Prius, IQ'
    );
  });

  test(`should support multi-line strings`, () => {
    // construct a string with multiple lines without needing escaped newline characters
    const multiLine = ``;
    expect(multiLine).toBe(
      '\n    You can use multi-line\n    effortlessly\n    '
    );
  });

  test(`should support string escaping`, () => {
    // properly escape a string in a template literal for each of these
    expect(``).toBe('Hi\nthere!');
    expect(``).toBe('This is `escaped` backticks');
  });

  test(`should call the tagging function`, () => {
    const noun = 'World';
    const emotion = 'happy';
    const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`;
    expect(result).toBe(
      'Hello super-cool World! Are you feeling really happy today?'
    );

    function tagIt(literalString, noun, emotion) {
      // implement this function to make the test pass
      return `fixme`;
    }
  });
});
