import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEntityComponent } from './comment-entity.component';

describe('CommentEntityComponent', () => {
  let component: CommentEntityComponent;
  let fixture: ComponentFixture<CommentEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
