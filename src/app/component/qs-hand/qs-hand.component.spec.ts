import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsHandComponent } from './qs-hand.component';

describe('QsHandComponent', () => {
  let component: QsHandComponent;
  let fixture: ComponentFixture<QsHandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsHandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
