describe('Interfaces', () => {
  test('classic', () => {
    // TODO : define the interface Vehicle (Note : Vehicle should not be empty)
    class Car implements Vehicle {
      name: string;
      speed: number;
      constructor(name: string) {
        this.name = name;
        this.speed = 0;
      }
      accelerate(speed: number) {}
    }
    var car: Vehicle = new Car('Kit');
    expect(typeof car).toBe('object');
    expect(car.name).toEqual('Kit');
    expect(car.accelerate(50)).toEqual(50);
  });
  // test('inline', () => {
  //   var car: {
  //     name: string;
  //     speed: number;
  //   };
  //   // TODO : instanciate a new car
  //   expect(typeof car).toBe('object');
  //   expect(car.name).toEqual('Kit');
  //   expect(car.speed).toEqual(75);
  // });
  // test('optional', () => {
  //   interface MyConfig {
  //     path: string;
  //     debug?: boolean;
  //     recursive?: boolean;
  //     pattern?: string;
  //   }
  //   var run = function(config: MyConfig) {
  //     let command = config.path;
  //     if (config.debug) {
  //       command += ' --debug';
  //     }
  //     if (config.recursive) {
  //       command += ' --recursive';
  //     }
  //     if (config.pattern) {
  //       command += ' --grep=' + config.pattern;
  //     }
  //     return command;
  //   };
  //   // TODO : call the method run with the correct parameters (Replace FILL_ME_IN)
  //   //simple call
  //   var command = run({ path: '???' });
  //   expect(typeof command).toBe('string');
  //   expect(command).toEqual('myprogram.exe');
  //   //simple call
  //   var command = run({ path: '???' });
  //   expect(typeof command).toBe('string');
  //   expect(command).toEqual('myprogram.exe --debug --grep=**/*test.js');
  // });
  // it('extendInterface', () => {
  //   interface Shape {
  //     color: string;
  //   }
  //   // TODO : extend Shape to a new interface Square with a new property sideLength
  //   let square: Square = { color: 'n/a', sideLength: 0 };
  //   expect(typeof square).toBe('object');
  //   expect(square.color).toEqual('blue');
  //   expect(square.sideLength).toEqual(10);
  // });
  // it('multiple', () => {
  //   interface Disposable {
  //     isDisposed: boolean;
  //     dispose(): boolean;
  //   }
  //   interface Activatable {
  //     isActive: boolean;
  //     activate(): boolean;
  //     deactivate(): boolean;
  //   }
  //   // TODO : implement both interfaces in a class name Button and fix the test
  //   var btn = new Button();
  //   expect(btn.isDisposed).toBeFalsy();
  //   expect(btn.isActive).toBeFalsy();
  //   btn.activate();
  //   expect(btn.isActive).toBeTruthy();
  //   btn.dispose();
  //   expect(btn.isDisposed).toBeTruthy();
  // });
  // it('function', () => {
  //   interface Select {
  //     (source: string): string;
  //   }
  //   // TODO : create an uppercase selector called fn (ie JUST a function) from this interface
  //   var fn: Select = null;
  //   var actual = fn('foobar');
  //   expect(actual).toEqual('FOOBAR');
  // });
  // it('indexer', () => {
  //   class MyType {
  //     constructor(public someVal: string) {}
  //   }
  //   interface IDictionary {
  //     [name: string]: MyType;
  //   }
  //   var collection: IDictionary = {};
  //   // TODO : add new items to collection to fix this test
  //   var actual = collection['item1'];
  //   expect(typeof actual).toBe('object');
  //   expect(actual.someVal).toEqual('foobar');
  // });
  // it('any', () => {
  //   // TODO : fix the test by using the any type annotation
  //   function MyToString(obj: any) {
  //     return /*???*/;
  //   }
  //   var n_actual = MyToString(123);
  //   expect(n_actual).toEqual('123');
  //   var a_actual = MyToString([1, 2, 3]);
  //   expect(a_actual).toEqual('1,2,3');
  //   var s_actual = MyToString('123');
  //   expect(s_actual).toEqual('123');
  // });
});
