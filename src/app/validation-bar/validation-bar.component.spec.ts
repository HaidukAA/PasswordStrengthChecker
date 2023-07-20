import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationBarComponent } from './validation-bar.component';

describe('ValidationBarComponent', () => {
  let component: ValidationBarComponent;
  let fixture: ComponentFixture<ValidationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationBarComponent]
    });
    fixture = TestBed.createComponent(ValidationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
