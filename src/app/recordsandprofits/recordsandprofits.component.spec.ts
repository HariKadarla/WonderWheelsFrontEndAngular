import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsandprofitsComponent } from './recordsandprofits.component';

describe('RecordsandprofitsComponent', () => {
  let component: RecordsandprofitsComponent;
  let fixture: ComponentFixture<RecordsandprofitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsandprofitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsandprofitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
