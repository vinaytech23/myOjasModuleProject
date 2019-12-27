import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesnowComponent } from './servicesnow.component';

describe('ServicesnowComponent', () => {
  let component: ServicesnowComponent;
  let fixture: ComponentFixture<ServicesnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
