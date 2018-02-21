import React, {Component} from 'react';

import {Platform, View, StatusBar, SafeAreaView} from 'react-native';
import {Constants} from 'expo';

import {StackNavigator, TabNavigator} from 'react-navigation';

import {Ionicons, FontAwesome} from '@expo/vector-icons';

import Decks from './src/Decks/Decks';
import NewDeck from './src/NewDeck/NewDeck';
import DeckDetails from './src/DeckDetails/DeckDetails';
import Quiz from './src/Quiz/Quiz';


const Tabs = TabNavigator({
        Decks: {
            screen: Decks,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-albums' size={30} color={tintColor}/>
            }
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'Add NewDeck',
                tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
            }
        }
    },
    {
        navigationOptions: {},
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#ccc' : '#fff',
            style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? '#fff' : '#ccc',
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

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            title: 'Flashcards'
        }
    },
    DeckDetails: {
        screen: DeckDetails,
        navigationOptions: {}
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
            backgroundColor: 'red',
        }
    }
});

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar
                    backgroundColor={'yellow'}
                    barStyle="light-content"
                />
                <MainNavigator/>
            </SafeAreaView>
        );
    }
}