import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodorComponent } from './hodor.component';

describe('HodorComponent', () => {
  let component: HodorComponent;
  let fixture: ComponentFixture<HodorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
