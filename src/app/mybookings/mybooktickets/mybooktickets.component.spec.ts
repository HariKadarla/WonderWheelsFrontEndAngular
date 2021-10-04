import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybookticketsComponent } from './mybooktickets.component';

describe('MybookticketsComponent', () => {
  let component: MybookticketsComponent;
  let fixture: ComponentFixture<MybookticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybookticketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybookticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
