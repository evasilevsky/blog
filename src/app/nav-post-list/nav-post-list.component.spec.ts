/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavPostListComponent } from './nav-post-list.component';

describe('NavPostListComponent', () => {
  let component: NavPostListComponent;
  let fixture: ComponentFixture<NavPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
