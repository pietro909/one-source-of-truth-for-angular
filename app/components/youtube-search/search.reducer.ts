import { ActionReducer, Action } from '@ngrx/store';

export interface CurrentSearch {
    text: string
}

export const searchReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch, action: Action) => {
    switch (action.type) {
        case 'TEXT':
            const update = { text: action.payload.text };
            return Object.assign({}, state, update);
        default:
            return state;
    }
};
