import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorisedcustomerdetailsComponent } from './unauthorisedcustomerdetails.component';

describe('UnauthorisedcustomerdetailsComponent', () => {
  let component: UnauthorisedcustomerdetailsComponent;
  let fixture: ComponentFixture<UnauthorisedcustomerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorisedcustomerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorisedcustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
