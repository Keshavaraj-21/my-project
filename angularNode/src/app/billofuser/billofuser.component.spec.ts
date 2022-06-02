import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillofuserComponent } from './billofuser.component';

describe('BillofuserComponent', () => {
  let component: BillofuserComponent;
  let fixture: ComponentFixture<BillofuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillofuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
