describe('Classes', () => {
  test('defineClass', () => {
    // TODO : define a class Point having two properties x/y by just using a constructor (Help : use access modifiers in ctor)
    var p = new Point(100, 200);

    expect(typeof p).toBe('object');
    expect(p.x).toEqual(100);
    expect(p.y).toEqual(200);
  });

  // test('new', () => {
  //   class Program {
  //     private name: string;
  //     constructor(name: string) {
  //       this.name = name;
  //     }
  //     HasName(): boolean {
  //       return !!this.name;
  //     }
  //   }

  //   // TODO : create an instance of Program named 'myprogram' to fix these tests

  //   expect(typeof myprogram).toBe('object');
  //   expect(myprogram.HasName()).toBeTruthy();
  // });

  // test('interface', () => {
  //   interface Shape {
  //     size: number;
  //   }

  //   // TODO : implements this interface in a class named 'Rectangle'

  //   var r = new Rectangle(100, 200);
  //   expect(typeof r).toBe('object');
  //   expect(r.size).not.toEqual(0);
  // });
  // test('extend', () => {
  //   class Vector2D {
  //     constructor(public x: number, public y: number) {}
  //   }
  //   // TODO : extend the class Vector2D with a third property z in a new class Vector3D

  //   var v = new Vector3D(100, 200, 300);

  //   expect(typeof v).toBe('object');
  //   expect(v.x).toEqual(100);
  //   expect(v.y).toEqual(200);
  //   expect(v.z).toEqual(300);
  // });
  // test('super', () => {
  //   class WelcomeBase {
  //     protected GetWelcomeMessage() {
  //       return 'hello world';
  //     }
  //   }

  //   class Program extends WelcomeBase {
  //     run() {
  //       return 'foobar';
  //       // TODO : call the base class here to return the welcome message
  //     }
  //   }

  //   var program = new Program();
  //   var actual = program.run();
  //   expect(actual).toEqual('hello world');
  // });
  // test('abstract', () => {
  //   abstract class Generator {
  //     abstract IsTrue(): boolean;
  //   }

  //   // TODO : implements the abstract class in a class named 'TrueGenerator'
  //   var generator = new TrueGenerator();
  //   var actual = generator.IsTrue();
  //   expect(actual).toBeTruthy();
  // });

  // test('staticField', () => {
  //   // TODO : add a static field 'instances' that counts the number of objects created
  //   class Something {
  //     constructor() {
  //       //Something.instances++;
  //     }
  //   }

  //   new Something(), new Something();
  //   expect(Something.instances).toEqual(2);
  // });
  // test('staticMethod', () => {
  //   // TODO : add a static method 'run' to Program that returns 0
  //   class Program {}

  //   var actual = Program.run();
  //   expect(actual).toEqual(0);
  // });
});
