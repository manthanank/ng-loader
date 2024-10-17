import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgLoaderComponent } from '../../../ng-loader/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgLoaderComponent],
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
