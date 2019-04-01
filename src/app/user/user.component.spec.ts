import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

import { Component, EventEmitter, Output } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-user-form',
  template: '<button (click)="submit()">submit</button>'
})
export class MockUserFormComponent {
  @Output() userFormSubmitted = new EventEmitter();

  constructor() { }

  submit() {
    this.userFormSubmitted.emit('new user');
  }

}


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, MockUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit new user', () => {
    spyOn(component, 'onUserFormSubmitted');
    // const btn = fixture.debugElement.nativeElement.querySelector('button');
    // btn.click();  Simulate click event Option 1
    // Simulate click event Option 2
    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onUserFormSubmitted).toHaveBeenCalled();
  });
});
