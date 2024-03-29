describe('Destructuring', () => {
  const func = () => {};

  function getAddress() {
    return {
      city: 'Salt Lake City',
      state: 'UT',
      zip: 84115,
      coords: {
        lat: 40.776608,
        long: -111.920485,
      },
    };
  }

  function getNumbers() {
    return [1, 2, 3, 4, 5, 6];
  }

  function getNestedNumbers() {
    return [1, 2, [3, 4, [5, 6]]];
  }

  test('can be used to pull apart objects', () => {
    // Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
    // const address = getAddress();
    // const city = address.city;
    // const state = address.state;
    // const zip = address.zip;
    expect(city).toBe('Salt Lake City');
    expect(state).toBe('UT');
    expect(zip).toBe(84115);
  });

  test('sets missing values to undefined', () => {
    // Using destructuring, call `getAddress()` and create an 'address' variable.
    expect(address).toBeUndefined();
  });

  test('can alias destructured variables', () => {
    // Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively
    expect(c).toBe('Salt Lake City');
    expect(s).toBe('UT');
    expect(z).toBe(84115);
    expect(() => func(city)).toThrow();
    expect(() => func(state)).toThrow();
    expect(() => func(zip)).toThrow();
  });

  test('can destructure nested variables', () => {
    // Using destructuring, call `getAddress()` and create `lat` and `long` variables.
    expect(lat).toBe(40.776608);
    expect(long).toBe(-111.920485);
    expect(() => func(coords)).toThrow();
  });

  test('can be used to pull apart arrays', () => {
    // Call getNumbers and pull the first value out as `one` and the second as `two`
    expect(one).toBe(1);
    expect(two).toBe(2);
  });

  test('can skip indexes in arrays', () => {
    // Call getNumbers and pull the first value out as `one` and the third as `three`
    expect(one).toBe(1);
    expect(three).toBe(3);
    expect(() => func(two)).toThrow();
  });

  test('can reach nested arrays', () => {
    // Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `sixth`.
    expect(one).toBe(1);
    expect(three).toBe(3);
    expect(six).toBe(6);
  });
});
