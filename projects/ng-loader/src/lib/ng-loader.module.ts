import { NgModule } from '@angular/core';
import { NgLoaderComponent } from './ng-loader.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    NgLoaderComponent,
    LoaderComponent
  ],
  imports: [
  ],
  exports: [
    NgLoaderComponent
  ]
})
export class NgLoaderModule { }
