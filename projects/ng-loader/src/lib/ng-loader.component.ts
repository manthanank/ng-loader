import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-loader',
  template: `
  @if (loading) {
    <div class="loader-overlay">
      <div class="loader"></div>
      @if (loaderMessage) {
        <div class="loader-message">{{ loaderMessage }}</div>
      }
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
      flex-direction: column;
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
    .loader-message {
      margin-top: 15px;
      color: #fff;
      font-size: 1.2rem;
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
  @Input() loaderMessage?: string;
}