describe('Set and Map', () => {
  test('has an add method and a has method', () => {
    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set

    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(true);
    expect(mySet.has(3)).toBe(true);
    expect(mySet.has(4)).toBe(false);
  });

  test('doesn`t allow duplicates', () => {
    // Create a new Set
    // add the following numbers to it, using set.add(num): 1, 1, 1

    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(false);
    expect(mySet.has(3)).toBe(false);
    expect(mySet.has(4)).toBe(false);
  });

  test('has a set method', () => {
    // Create a new map called 'myMap'
    // add a new entry. Use 'name' as the key and 'Aaron' as the value

    expect(myMap.get('name')).toBe('Aaron');
  });

  test('can use objects as a key', () => {
    const user = { name: 'Aaron' };
    const value = { twitter: '@js_dev', gplus: '+AaronFrost' };

    // Create a map called 'myMap'
    // add a new entry. Use user as the key, and value as the value

    expect(myMap.has(user)).toBe(true);
    expect(myMap.get(user)).toBe(value);
  });

  test(`doesn't coerce keys`, () => {
    const myMap = new Map();
    myMap.set(1, 'Aaron');
    expect(myMap.get('1')).toBe(/*ENTER YOUR GUESS HERE*/);
    myMap.set('1', 'Aaron');
    expect(myMap.get('1')).toBe(/*ENTER YOUR GUESS HERE*/);
  });
});
