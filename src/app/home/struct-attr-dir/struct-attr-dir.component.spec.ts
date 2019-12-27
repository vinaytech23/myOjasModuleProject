import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructAttrDirComponent } from './struct-attr-dir.component';

describe('StructAttrDirComponent', () => {
  let component: StructAttrDirComponent;
  let fixture: ComponentFixture<StructAttrDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructAttrDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructAttrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
