describe('Alias types', () => {
  test('simplealias', () => {
    // TODO : create a type alias StrOrNum and assign a value to call this method
    let n_actual: StrOrNum = null;
    let s_actual: StrOrNum = null;
    expect(typeof n_actual).toBe('number');
    expect(n_actual).toEqual(123);
    expect(typeof s_actual).toBe('string');
    expect(s_actual).toEqual('123');
  });
});

describe('Union types', () => {
  //   test('arguments', () => {
  //     // TODO : extend the command parameter with an union type to fix errors and this test
  //     function trim(command: string /* FILL_ME_IN */) {
  //       var line = '';
  //       if (typeof command === 'string') {
  //         line = command.trim();
  //       } else {
  //         line = command.join(' ').trim();
  //       }
  //       return line;
  //     }
  //     var n_actual = trim('  hello  ');
  //     expect(typeof n_actual).toBe('string');
  //     expect(n_actual).toEqual('hello');
  //     var s_actual = trim(['  hello', 'world', '!  ']);
  //     expect(typeof s_actual).toBe('string');
  //     expect(s_actual).toEqual('hello world !');
  //   });
  //   test('shape', () => {
  //     class Bird {
  //       constructor(public name: string) {}
  //       fly(): void {
  //         console.log('flying');
  //       }
  //     }
  //     class Fish {
  //       constructor(public name: string) {}
  //       swim(): void {
  //         console.log('swimming');
  //       }
  //     }
  //     // TODO : create a function petFactory that returns an union Fish or Bird to fix this test
  //     function petFactory(flying: boolean): void /*FILL IN TYPES*/ {}
  //     var bird = petFactory(true);
  //     expect(typeof bird).toBe('object');
  //     expect(bird.name).toEqual('Angry Bird');
  //     var fish = petFactory(false);
  //     expect(typeof fish).toBe('object');
  //     expect(fish.name).toEqual('Nemo');
  //   });
});

describe('Generics', () => {
  //   test('reverse', () => {
  //     function reverse<T>(items: T[]): T[] {
  //       // TODO : fill the reverse method to fix this test
  //     }
  //     var actual = reverse([1, 2, 3, 4, 5]);
  //     expect(actual).toEqual([5, 4, 3, 2, 1]);
  //   });
  //   test('instantateGenericClass', () => {
  //     // TODO : fill Result<T> class to fix this test
  //     class Result<T> {
  //     }
  //     var s_actual = new Result<string>(false, '{error: 42}');
  //     expect(typeof s_actual).toBe('object');
  //     expect(s_actual.wasSuccessful).toBeFalsy();
  //     expect(s_actual.data).toEqual('{error: 42}');
  //     var n_actual = new Result<number>(true, 200);
  //     expect(typeof n_actual).toBe('object');
  //     expect(n_actual.wasSuccessful).toBeTruthy();
  //     expect(n_actual.data).toEqual(200);
  //   });
  //   test('implementGenericInterface', () => {
  //     interface IRunnable<T, U> {
  //       run(input: T): U;
  //     }
  //     // TODO : implement this interface in a new class Runnable (string, number);
  //     var runnable: IRunnable<string, number> = new Runnable();
  //     var result = runnable.run('hello');
  //     expect(result).toEqual(123456789);
  //   });
});
