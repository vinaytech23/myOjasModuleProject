import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmicalcComponent } from './emicalc.component';

describe('EmicalcComponent', () => {
  let component: EmicalcComponent;
  let fixture: ComponentFixture<EmicalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmicalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmicalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
