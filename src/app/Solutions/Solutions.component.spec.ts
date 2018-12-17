import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoluciiComponent } from './solucii.component';

describe('SoluciiComponent', () => {
  let component: SoluciiComponent;
  let fixture: ComponentFixture<SoluciiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoluciiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoluciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
