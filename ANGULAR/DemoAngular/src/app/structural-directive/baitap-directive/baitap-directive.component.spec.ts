import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapDirectiveComponent } from './baitap-directive.component';

describe('BaitapDirectiveComponent', () => {
  let component: BaitapDirectiveComponent;
  let fixture: ComponentFixture<BaitapDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
