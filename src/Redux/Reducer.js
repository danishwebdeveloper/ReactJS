import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const InitialState = {
    mydishes: DISHES,
    leaders: LEADERS,
    comments: COMMENTS,
    promotion: PROMOTIONS
}

export const Reducer = (state = InitialState, action) => {
    return state;
}