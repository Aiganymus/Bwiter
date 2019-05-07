import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwitComponent } from './bwit.component';

describe('BwitComponent', () => {
  let component: BwitComponent;
  let fixture: ComponentFixture<BwitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
