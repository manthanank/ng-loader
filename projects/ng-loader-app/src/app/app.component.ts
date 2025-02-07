import { Component } from '@angular/core';
import { NgLoaderComponent } from '../../../ng-loader/src/public-api';

@Component({
    selector: 'app-root',
    imports: [NgLoaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] // changed from styleUrl to styleUrls
})
export class AppComponent {
  isLoading = false;
  loaderMessage: string = 'Loading, please wait...';

  toggleLoader() {
    this.isLoading = true;
    // Optionally update the loader message here if desired.
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}