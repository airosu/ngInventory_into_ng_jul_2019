# My Notes go Here

### Setup

Install Angular CLI
```
npm install -g @angular/cli
```

Install dependencies
```
npm install
```

### Ng CLI commands

Dev mode watcher http://localhost:4200/ (-o = open in default browser)
```
ng serve -o
```



## Random Notes

* The first folder within src/app is the feature. Each feature contains:
    - feature-name.module.ts


#### Bindings

* Bindings are made using {{}}, within tag content  // <p>{{someText}}</p>
* One way bindings:
    - Event bindings are made with (), within opening tag  // <button (click)="someEvent()">CLICK ME!</button>
    - Attribute bindings are made with [], on attributes within opening tag // <img [src]="imageSource">
* Two way bindings:
    - Are made with [()] (aka banana in a box)