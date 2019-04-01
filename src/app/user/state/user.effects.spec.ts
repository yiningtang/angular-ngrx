import { Actions } from '@ngrx/effects';
import { empty, Observable } from 'rxjs';
import { UserEffects } from './user.effects';
import { UserService } from '../user.service';
import { TestBed } from '@angular/core/testing';
import { LoadUsers, LoadSuccess } from './user.actions';
import { User } from '../user.model';
import { hot, cold } from 'jasmine-marbles';



export class TestActions extends Actions {
    constructor() {
        super(empty());
    }

    set stream(source: Observable<any>) {
        this.source = source;
    }

    LoadSuccess(users: any[]) {
        return {
            type: '[User]Load Success',
            payLoad: users
        };
    }
}

export function getActions() {
    return new TestActions();
}

describe('UserEffects', () => {
    let actions: TestActions;
    let effects: UserEffects;
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UserEffects,
                {
                    provide: Actions,
                    useFactory: getActions
                },
                {
                    provide: UserService,
                    useValue: {
                        loadUsers: () => [{ userId: 1, userName: 'test', dept: 'test' }]
                    }
                }
            ]
        });

        actions = TestBed.get(Actions);
        effects = TestBed.get(UserEffects);
        userService = TestBed.get(UserService);
    });

    it('Effects should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('Load Success should be dispatched', () => {
        const users: User[] = [{ userId: '1', userName: 'test', dept: 'marketing' }];
        const action = new LoadUsers();
        const outcome = new LoadSuccess(users);

        actions.stream = hot('-a', { a: action });
        const response = cold('-a|', { a: users });
        const expected = cold('--b', { b: outcome });
        userService.loadUsers = () => (response);

        expect(effects.LoadUsers$).toBeObservable(expected);
    });
});
//https://brianflove.com/2018/06/28/ngrx-testing-effects/