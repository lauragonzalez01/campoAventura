import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPoliciesDialogComponent } from './confirm-policies-dialog.component';

describe('ConfirmPoliciesDialogComponent', () => {
  let component: ConfirmPoliciesDialogComponent;
  let fixture: ComponentFixture<ConfirmPoliciesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmPoliciesDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmPoliciesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
