import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotifyComponent } from './form-notify.component';

describe('FormNotifyComponent', () => {
  let component: FormNotifyComponent;
  let fixture: ComponentFixture<FormNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
