import { User } from '../user.model';
import { UserActionTypes, LoadSuccess } from './user.actions';

export interface UserState {
    users: User[];
}
export const initialUserState = {
    users: []
};

export const userReducer = (state = initialUserState, action): UserState => {
    switch (action.type) {
        case UserActionTypes.LoadSuccess:
            const users = [...state.users, ...action.payLoad];
            return Object.assign({}, state, { users });
        default:
            return state;
    }
};
