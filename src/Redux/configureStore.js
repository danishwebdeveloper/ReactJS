// Make a Store in seperate file, we can also use another approach

import { createStore } from 'redux';
import { InitialState, Reducer } from './Reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        InitialState
    )
    return store;
}