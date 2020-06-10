import {createStore, combineReducers} from 'redux';
import { Dishes } from "./reducer/dishes";
import { Comments } from './reducer/comment';
import { Promotions } from './reducer/promotions';
import { Leaders } from './reducer/leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}