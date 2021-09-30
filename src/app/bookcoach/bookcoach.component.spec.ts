import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcoachComponent } from './bookcoach.component';

describe('BookcoachComponent', () => {
  let component: BookcoachComponent;
  let fixture: ComponentFixture<BookcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
