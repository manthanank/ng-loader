import { Component } from '@angular/core';
import { NgLoaderComponent } from '../../../ng-loader/src/public-api';

@Component({
    selector: 'app-root',
    imports: [NgLoaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading = false;

  toggleLoader() {
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
