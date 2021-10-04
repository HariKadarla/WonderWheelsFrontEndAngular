import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoachbookingsComponent } from './mycoachbookings.component';

describe('MycoachbookingsComponent', () => {
  let component: MycoachbookingsComponent;
  let fixture: ComponentFixture<MycoachbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycoachbookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycoachbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
