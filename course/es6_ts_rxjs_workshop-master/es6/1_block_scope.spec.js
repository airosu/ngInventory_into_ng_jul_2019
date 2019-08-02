describe('Block scope varaibles', () => {
  const func = () => {};
  test('`let` can be used in place of `var`', () => {
    // Declare a `carName` variable using 'let'
    // Declare a `isFast` variable using 'let'
    expect(carName).toBe('Mercedes');
    expect(isFast).toBe(true);
  });

  test('can modify the value of a `let` variable in the next block statement', () => {
    let carName = 'Mercedes';
    {
      carName = 'Merc';
    }
    expect(carName).toBe(/* ??? */);
  });

  test('the value of a `const` variable cannot be changed once assigned', () => {
    function getCarName() {
      // You cannot have `const` and reassign the value, so choose one!
      const carName = 'Merc'; // For Merc, then change this to let or var
      carName = 'Mercedes'; // For Mercedes, then remove this
      return carName;
    }
    expect(getCarName).not.toThrow();
  });

  test('a `let` declaration lives only inside a block scope', () => {
    // use the `let` keyword to block scope the foo variable
    var foo = 123;
    if (true) {
      var foo = 456;
    }
    expect(foo).toBe(123);
  });

  test(`can't redeclare using the same name`, () => {
    function doLoop() {
      // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for (var i = 0; i < 10; i++) {}
      return i;
    }

    expect(doLoop).toThrow('i is not defined');
  });

  test('a `const` declared variable exist only in the block scope ', () => {
    function testBlockScope() {
      // BLOCK STATEMENT
      {
        var a = 2;
      }
      a; // should not be able to use `a` here
    }

    expect(testBlockScope).toThrow('d is not defined');
  });

  test.skip('means that we can declare constant with the same name in block statement', () => {
    // Declare a 'd' using 'const', setting the value to 5
    // BLOCK STATEMENT
    {
      // Declare a 'd' using 'const', setting the value to 10
      expect(d).toBe(10);
    }
    expect(d).toBe(5);
  });
});
