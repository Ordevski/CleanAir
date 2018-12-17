import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoslediciComponent } from './posledici.component';

describe('PoslediciComponent', () => {
  let component: PoslediciComponent;
  let fixture: ComponentFixture<PoslediciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoslediciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoslediciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
