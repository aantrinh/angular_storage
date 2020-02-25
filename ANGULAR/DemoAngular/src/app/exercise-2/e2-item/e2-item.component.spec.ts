import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2ItemComponent } from './e2-item.component';

describe('E2ItemComponent', () => {
  let component: E2ItemComponent;
  let fixture: ComponentFixture<E2ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
