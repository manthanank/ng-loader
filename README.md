# NgLoader

This is a simple Angular loader library.

![npm](https://img.shields.io/npm/dw/@manthanankolekar/ng-loader)
![npm](https://img.shields.io/npm/dm/@manthanankolekar/ng-loader)
![npm](https://img.shields.io/npm/dy/@manthanankolekar/ng-loader)
![npm](https://img.shields.io/npm/dt/@manthanankolekar/ng-loader)

## Installation

```bash
npm install @manthanankolekar/ng-loader
```

## Usage

Import

```typescript
import { Component } from '@angular/core';

import { NgLoaderComponent } from '@manthanankolekar/ng-loader';

@Component({
  selector: 'app-root',
  imports: [
    NgLoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-loader';
}
```

Use

```html
<ng-loader [loading]="isLoading" [loaderMessage]="loaderMessage"></ng-loader>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isLoading = false;
  loaderMessage = 'Loading, please wait...';

  toggleLoader() {
    this.isLoading = true;
    // Optionally update the loader message here.
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
```

## Demo

[Stackblitz](https://stackblitz.com/edit/ng-loader-example)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
