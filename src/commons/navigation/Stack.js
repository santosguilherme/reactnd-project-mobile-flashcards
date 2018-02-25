import React from 'react';

import {StackNavigator} from 'react-navigation';

import NewCard from '../../NewCard/NewCard';
import Quiz from '../../Quiz/Quiz';
import DeckDetails from '../../DeckDetails/DeckDetails';

import Tabs from './Tabs';


export default StackNavigator({
    Home: {
        screen: Tabs
    },
    DeckDetails: {
        screen: DeckDetails
    },
    NewCard: {
        screen: NewCard,
        navigationOptions: {
            title: 'Add New Card'
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
        }
    }
}, {
    navigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#4496EC',
        }
    }
});