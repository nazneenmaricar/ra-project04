import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureBlogComponent } from './adventure-blog.component';

describe('AdventureBlogComponent', () => {
  let component: AdventureBlogComponent;
  let fixture: ComponentFixture<AdventureBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
