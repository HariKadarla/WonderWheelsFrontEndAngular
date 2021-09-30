import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditbusComponent } from './add-editbus.component';

describe('AddEditbusComponent', () => {
  let component: AddEditbusComponent;
  let fixture: ComponentFixture<AddEditbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
