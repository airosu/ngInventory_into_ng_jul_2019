import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MovieItemComponent } from './components/movie-item.component';



@NgModule({
    declarations: [
        MovieItemComponent // Any component in the MoviesModule (and only in this module) can use MovieItemComponent
    ],
    imports: [
        CommonModule, // CommonModule contains useful NG directives such as *ngFor and ngIf, ngStyle, ngClass
        MaterialModule,
        FlexLayoutModule,
        FormsModule // Provides ngModel, used for two-way bindings
    ],
    exports: [
        MovieItemComponent // other modules that import MoviesModule can use MovieItemComponent
    ],
})
export class MoviesModule {}  // This needs to be added to app.module.ts, to imports

