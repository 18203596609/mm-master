import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChleftOneComponent } from './chleft-one.component';

describe('ChleftOneComponent', () => {
  let component: ChleftOneComponent;
  let fixture: ComponentFixture<ChleftOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChleftOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChleftOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
