/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BottomMobileNavComponent } from './bottomMobileNav.component';

describe('BottomMobileNavComponent', () => {
  let component: BottomMobileNavComponent;
  let fixture: ComponentFixture<BottomMobileNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomMobileNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomMobileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
