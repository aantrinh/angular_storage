import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2CardComponent } from './e2-card.component';

describe('E2CardComponent', () => {
  let component: E2CardComponent;
  let fixture: ComponentFixture<E2CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
