import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewbillComponent } from './userviewbill.component';

describe('UserviewbillComponent', () => {
  let component: UserviewbillComponent;
  let fixture: ComponentFixture<UserviewbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
