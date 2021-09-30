import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderwheelsComponent } from './wonderwheels.component';

describe('WonderwheelsComponent', () => {
  let component: WonderwheelsComponent;
  let fixture: ComponentFixture<WonderwheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonderwheelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderwheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
