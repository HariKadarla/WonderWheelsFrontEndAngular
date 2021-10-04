import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteslistComponent } from './routeslist.component';

describe('RouteslistComponent', () => {
  let component: RouteslistComponent;
  let fixture: ComponentFixture<RouteslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
