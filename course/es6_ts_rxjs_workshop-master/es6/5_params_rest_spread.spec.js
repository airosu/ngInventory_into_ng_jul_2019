describe('Function parameters, rest, spread', () => {
  test('can be triggered when the incoming argument is undefined', () => {
    function getName(name = 'George') {
      return name;
    }

    expect(getName('Dan')).toBe(/*???*/);
    expect(getName(undefined)).toBe(/*???*/);
    expect(getName(null)).toBe(/*???*/);
    expect(getName()).toBe(/*???*/);
  });

  test(`aren't included in arguments`, () => {
    function getName(name = 'George') {
      return arguments.length;
    }

    expect(getName('Dan')).toBe(1);
    expect(getName(null)).toBe(/*???*/);
    expect(getName()).toBe(/*???*/);
  });

  test('can trigger a function call', () => {
    let triggerCount = 0;

    function getName(name = getDefault()) {
      return name;
    }

    function getDefault() {
      triggerCount++;
      return 'Dan';
    }

    expect(triggerCount).toBe(/*???*/);
    expect(getName('Andrei')).toBe(/*???*/);
    expect(getName()).toBe(/*???*/);
    expect(getName(undefined)).toBe(/*???*/);
    expect(triggerCount).toBe(/*???*/);
  });

  test('catch non-specified params', () => {
    function resty(first, second, ...others) {
      return others;
    }

    expect(resty().length).toBe(/*???*/);
    expect(resty(1).length).toBe(/*???*/);
    expect(resty(1, 2).length).toBe(/*???*/);
    expect(resty(1, 2, 3).length).toBe(/*???*/);
    expect(
      resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length
    ).toBe(/*???*/);
  });

  test('has a different length than `arguments`', () => {
    function resty(first, second, ...others) {
      return others.length === arguments.length;
    }

    expect(resty()).toBe(/*???*/);
    expect(resty(1)).toBe(/*???*/);
    expect(resty(1, 2)).toBe(/*???*/);
    expect(resty(1, 2, 3)).toBe(/*???*/);
    expect(
      resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10)
    ).toBe(/*???*/);
  });

  test('is an actual array, unlike arguments', () => {
    function resty(...args) {
      return args;
    }

    function argy() {
      return arguments;
    }

    const args = argy(1, 2, 3);
    const rests = resty(1, 2, 3);

    expect(
      Object.getPrototypeOf(args) === Object.getPrototypeOf(rests)
    ).toBe(/*???*/);
    expect(args.splice).toBe(/*???*/);
    expect(Object.getPrototypeOf(rests)).toBe(/*???*/);
    expect(rests.splice).toBeDefined();
    expect(rests.splice).toBe(Array.prototype.splice);
  });

  test(`should be able to call a function and spread the arguments`, () => {
    const args = ['a', 'b', 'c'];
    let calls = 0;
    // call myFunction using the spread operator with args
    expect(calls).toBe(1);

    function myFunction(a, b, c) {
      expect(a).toBe('a');
      expect(b).toBe('b');
      expect(c).toBe('c');
      calls++;
    }
  });

  test(`should be easier to concatenate arrays`, () => {
    const array1 = [1, 2, 3];
    // create a result array that uses the spread operator to concatenate array1 with [4, 5, 6]
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test(`should be able to merge properties from objects`, () => {
    const obj1 = {
      foo: 'bar',
      baz: 'foobar',
    };
    // create a result object that uses the spread operator to add `eggs: 'spam'` to what exists in obj1
    expect(result).toEqual({
      foo: 'bar',
      baz: 'foobar',
      eggs: 'spam',
    });
  });
});
