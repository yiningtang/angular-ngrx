import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Store, select } from '@ngrx/store';
import { UserState } from './state/user.reducer';
import { getUsers} from './state/user.selector';
import { Observable } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { LoadUsers } from './state/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public newUser: string;
  public users$: any;
  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.users$ = this.store.pipe(select(getUsers));
  }

  onUserFormSubmitted(newUser) {
    this.newUser = newUser;
  }

}
