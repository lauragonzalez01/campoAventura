import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeFieldComponent } from './safe-field.component';

describe('SafeFieldComponent', () => {
  let component: SafeFieldComponent;
  let fixture: ComponentFixture<SafeFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafeFieldComponent]
    });
    fixture = TestBed.createComponent(SafeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
