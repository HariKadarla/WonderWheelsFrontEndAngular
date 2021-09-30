import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybusdetailsComponent } from './mybusdetails.component';

describe('MybusdetailsComponent', () => {
  let component: MybusdetailsComponent;
  let fixture: ComponentFixture<MybusdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybusdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
