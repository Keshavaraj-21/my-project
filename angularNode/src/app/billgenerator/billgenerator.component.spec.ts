import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillgeneratorComponent } from './billgenerator.component';

describe('BillgeneratorComponent', () => {
  let component: BillgeneratorComponent;
  let fixture: ComponentFixture<BillgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillgeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
