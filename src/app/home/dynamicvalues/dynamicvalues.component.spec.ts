import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicvaluesComponent } from './dynamicvalues.component';

describe('DynamicvaluesComponent', () => {
  let component: DynamicvaluesComponent;
  let fixture: ComponentFixture<DynamicvaluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicvaluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
