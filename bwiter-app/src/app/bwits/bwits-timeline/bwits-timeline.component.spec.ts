import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwitsTimelineComponent } from './bwits-timeline.component';

describe('BwitsTimelineComponent', () => {
  let component: BwitsTimelineComponent;
  let fixture: ComponentFixture<BwitsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwitsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwitsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
