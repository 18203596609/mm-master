import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterOneComponent } from './center-one.component';

describe('CenterOneComponent', () => {
  let component: CenterOneComponent;
  let fixture: ComponentFixture<CenterOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
