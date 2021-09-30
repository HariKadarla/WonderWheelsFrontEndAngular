import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditrouteComponent } from './add-editroute.component';

describe('AddEditrouteComponent', () => {
  let component: AddEditrouteComponent;
  let fixture: ComponentFixture<AddEditrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
