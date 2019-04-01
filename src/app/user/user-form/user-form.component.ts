import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() userFormSubmitted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.userFormSubmitted.emit('new user');
  }

}
