import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../user.model';
import { UserActionTypes, LoadSuccess, LoadFailure } from './user.actions';
import { UserService } from '../user.service';
import { catchError, map, mergeMap } from 'rxjs/operators';




@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) {

    }

    @Effect()
    LoadUsers$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.LoadUsers),
        mergeMap(action =>
            this.userService.loadUsers().pipe(
                map((users: User[]) => new LoadSuccess(users)),
                catchError(err => of(new LoadFailure(err)))
            )
        )
    );
}
