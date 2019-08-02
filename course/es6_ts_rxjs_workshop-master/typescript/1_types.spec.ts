describe('Types', () => {
  test('assignToLet', () => {
    // TODO : assign the correct value to this variable to fix this test
    let thenumber = '12';

    expect(typeof thenumber).toBe('number');
    expect(thenumber).toEqual(42);
  });
  // test('assignToVar', () => {
  //   // TODO : review the compiler error, fix it and fix the test
  //   var thenumber: number = '12';

  //   expect(typeof thenumber).toBe('number');
  //   expect(thenumber).toEqual(42);
  // });

  // test('assignToVar', () => {
  //   // TODO : review the compiler error and fix this test
  //   var theboolean: boolean = 'false';

  //   expect(theboolean).toBeFalsy();
  // });
});

describe('Functions', () => {
  // test('assign default value', () => {
  //   // TODO : assign a default value to a parameter in fn to fix this test
  //   var fn = function(a: number, b: number) {
  //     return a + b;
  //   };
  //   var result = fn(1);
  //   expect(result).toEqual(3);
  // });
  // test('returnType', () => {
  //   // TODO : fix the return type to fix this error
  //   var fn = function(a: number, b: number): string {
  //     return a + b;
  //   };
  //   var result = fn(1, 2);
  //   expect(typeof result).toBe('number');
  // });
  // test('missingReturnType', () => {
  //   // TODO : replace FILL_ME_IN by the correct type (Tip : use intellisense ...)
  //   var fn = function(a: string, b: string) {
  //     return !!(a || b);
  //   };
  //   var result = fn('1', 'code');
  //   expect(typeof result).toBe(/*???*/);
  // });
  // test('rest', () => {
  //   // TODO : replace FILL_ME_IN by the correct type (Tip : use intellisense ...)
  //   var buildName = function(firstName: string, ...restOfName: string[]) {
  //     return firstName + ' ' + restOfName.join(' ');
  //   };
  //   let name1 = buildName('Cedie', 'Player');
  //   expect(name1).toEqual(/* ??? */);
  //   let name2 = buildName('Cristiano', 'Ronaldo', 'dos Santos', 'Aveiro');
  //   expect(name2).toEqual(/* ??? */);
  // });
});

describe('Enums', () => {
  // test('define enums', () => {
  //   // TODO : define an enum with 3 values (Zero, One, Two) to fix this test
  //   expect(MyEnum.Zero).toEqual(0);
  //   expect(MyEnum.One).toEqual(1);
  //   expect(MyEnum.Two).toEqual(2);
  // });
  // test('startingIndex', () => {
  //   // TODO : define an enum 'MyEnum' with 2 values (Ten, Eleven) to fix this test
  //   enum MyEnum {
  //     Ten = 10,
  //     Eleven = 11,
  //   }
  //   expect(MyEnum.Ten).toEqual(10);
  //   expect(MyEnum.Eleven).toEqual(11);
  // });
  // test('openEnded', () => {
  //   enum Number {
  //     Zero,
  //     Two,
  //     Four,
  //   }
  //   // TODO : add a new enum with the same name and 2 values (One, Three)
  //   // Note : do not change the existing declaration
  //   expect(Number.Zero).toEqual(0);
  //   expect(Number.One).toBeDefined();
  //   expect(Number.Three).toBeDefined();
  // });
});
