import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackreceComponent } from './feedbackrece.component';

describe('FeedbackreceComponent', () => {
  let component: FeedbackreceComponent;
  let fixture: ComponentFixture<FeedbackreceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackreceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackreceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
