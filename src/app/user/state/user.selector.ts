import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducer';


const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getUsers = createSelector(
    getUserFeatureState,
    state => state.users
);
