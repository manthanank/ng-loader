import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLoaderComponent } from './ng-loader.component';

describe('NgLoaderComponent', () => {
  let component: NgLoaderComponent;
  let fixture: ComponentFixture<NgLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgLoaderComponent]
    });
    fixture = TestBed.createComponent(NgLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
