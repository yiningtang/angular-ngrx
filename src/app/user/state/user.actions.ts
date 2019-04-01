import { Action } from '@ngrx/store';
import { User } from '../user.model';

export enum UserActionTypes {
    LoadUsers = '[User] Load Users',
    LoadSuccess = '[User] Load Success',
    LoadFailure = '[User] Load Failure'
}

export class LoadUsers implements Action {
    readonly type = UserActionTypes.LoadUsers;
    constructor() {}
}

export class LoadSuccess implements Action {
    readonly type = UserActionTypes.LoadSuccess;
    constructor(public payLoad: User[]) {}
}

export class LoadFailure implements Action {
    readonly type = UserActionTypes.LoadFailure;
    constructor(public error: string) {}
}


export type UserActions = LoadUsers | LoadSuccess | LoadFailure;
