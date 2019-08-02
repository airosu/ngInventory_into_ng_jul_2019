import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MovieItemComponent } from './components/movie-item/movie-item.component';



@NgModule({
    declarations: [
        MovieItemComponent  // any component in the MoviesModule (and only in this module) can use MovieItemComponent
    ],
    imports: [        // Only modules are imported!
        CommonModule, // Contains useful Angular directives such as *ngFor and *ngIf
        MaterialModule,  // The good stuff!
        FlexLayoutModule,  // easier use of Flex layout, includes fxLayout and fxFlex directives
    ],
    exports: [
        MovieItemComponent  // other modules that import MoviesModule can use MovieItemComponent
    ]
})
export class MovieModule {}
