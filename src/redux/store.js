import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from "./reducer/dishes";
import { Comments } from './reducer/comment';
import { Promotions } from './reducer/promotions';
import { Leaders } from './reducer/leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}