import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAdventurePostComponent } from './single-adventure-post.component';

describe('SingleAdventurePostComponent', () => {
  let component: SingleAdventurePostComponent;
  let fixture: ComponentFixture<SingleAdventurePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAdventurePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAdventurePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
