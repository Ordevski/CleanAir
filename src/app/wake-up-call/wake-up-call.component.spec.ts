import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakeUpCallComponent } from './wake-up-call.component';

describe('WakeUpCallComponent', () => {
  let component: WakeUpCallComponent;
  let fixture: ComponentFixture<WakeUpCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakeUpCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeUpCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
