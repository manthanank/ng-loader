import { Component, Input } from '@angular/core';

@Component({
    selector: 'ng-loader',
    imports: [],
    template: `
    @if (loading) {
    <div class="loader-overlay">
      <div class="loader"></div>
    </div>
    }
  `,
    styles: `
    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
    }
    .loader {
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid #3498db;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
})
export class NgLoaderComponent {
  @Input() loading: boolean = false;
}
