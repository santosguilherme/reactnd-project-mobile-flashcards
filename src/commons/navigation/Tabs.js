import React from 'react';

import {TabNavigator} from 'react-navigation';

import {Ionicons, FontAwesome} from '@expo/vector-icons';

import Decks from '../../Decks/Decks';
import NewDeck from '../../NewDeck/NewDeck';

export default TabNavigator({
        Decks: {
            screen: Decks,
            navigationOptions: {
                title: 'Flashcards',
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-albums' size={30} color={tintColor}/>
            }
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                title: 'Add New Deck',
                tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#4496EC',
            style: {
                height: 52,
                backgroundColor: '#fff',
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    });