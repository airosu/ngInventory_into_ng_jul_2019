describe('Object APIs', () => {
  test('can use shorthand for property names', () => {
    function createMonster(name, power) {
      // Using NEW Object Literal Syntax, return a literal that will allow the tests to pass
      //   return {
      //     type: 'Monster',
      //     name: name,
      //     power: power,
      //     attack: function(target) {
      //       return `${this.name} attacked ${target.name}`;
      //     },
      //   };
    }

    const godzilla = createMonster('Godzilla', 1000);
    const mechaGodzilla = createMonster('MechaGodzilla', 5000);
    expect(godzilla.name).toBe('Godzilla');
    expect(godzilla.power).toBe(1000);
    expect(godzilla.attack(mechaGodzilla)).toBe(
      'Godzilla attacked MechaGodzilla'
    );
  });

  test('can use expressions as property names', () => {
    function createCandy(type, description) {
      return {
        tasty: true,
        type,
        // add a expression as property name where the property name is the given type.toUpperCase() + type.length
        // sound contrived? It is... 😅
      };
    }

    const twixDescription =
      'Twix is a chocolate bar made by Mars, Inc., consisting of biscuit applied with other ' +
      'confectionery toppings and coatings. Twix bars are packaged in pairs, although smaller single bars are available.';
    const twixType = 'twix';
    const snickers = createCandy('twix', twixDescription);
    expect(snickers.tasty).toBe(true);
    expect(snickers.type).toBe(twixType);
    expect(snickers.TWIX4).toBe(twixDescription);
  });
  test(`should be able to take an array-like object and convert it into an array`, () => {
    const obj = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
    // this is even more handy with a NodeList like that returned from document.querySelector
    // create a variable called `result` and assign it to a call to Array.from
    expect(result).toEqual(['a', 'b', 'c']);
  });

  test(`should be easier to fill an array with values`, () => {
    const originalArray = new Array(5);
    // create a variable called `result` and assign it to an array that's filled with 3s except for the first item.
    expect(result).toEqual([, 3, 3, 3, 3]); // eslint-disable-line no-sparse-arrays
  });

  test(`should be easy to copy properties from one object to another`, () => {
    const source1 = {
      a: {
        b: 'c',
        m: [1, 2, 3],
      },
    };
    const source2 = {
      d: false,
      z: 34,
    };
    const source3 = {
      z: 42,
      p: ['a', 'b', 'c'],
    };

    const target = {
      a: {
        q: 'r',
        m: [4, 5, 6],
        s: {
          t: 3,
        },
      },
      d: true,
      p: ['x', 'y', 'z'],
    };
    // merge the sources into the target using Object.assign

    expect(result).toEqual({
      a: {
        b: 'c',
        m: [1, 2, 3],
      },
      d: false,
      z: 42,
      p: ['a', 'b', 'c'],
    });
  });
});
