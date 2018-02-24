import {createAction, handleActions} from 'redux-actions';

import {createType} from '../../commons/redux/actionTypeUtils';


const STATE_KEY = 'decks';

/* Actions Types*/
const ADD_DECK = createType(STATE_KEY, 'ADD_DECK');
const ADD_CARD_TO_DECK = createType(STATE_KEY, 'ADD_CARD_TO_DECK');

export const types = {
    ADD_DECK,
    ADD_CARD_TO_DECK
};

/* Actions */
const addDeck = createAction(ADD_DECK);
const addCardToDeck = createAction(ADD_CARD_TO_DECK);

export const actions = {
    addDeck,
    addCardToDeck
};

/* State */
const initialState = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
};

/* Reducer */
export default handleActions({
    [ADD_DECK]: (state, action) => {
        const deck = action.payload;

        return {
            ...state,
            [deck.title]: deck
        };
    },
    [ADD_CARD_TO_DECK]: (state, action) => {
        const {title, card} = action.payload;

        const deck = {
            ...state[title],
            questions: [...state[title].questions, card]
        };
        return {
            ...state,
            [title]: deck
        };
    }
}, initialState);

/* Selectors */
export const selectors = {
    getDecks: state => state.decks,
    getDeck: (state, title) => state.decks[title]
};
