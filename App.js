import React, {Component} from 'react';

import {Platform, View, StatusBar, SafeAreaView} from 'react-native';
import {Constants} from 'expo';
import {Provider} from 'react-redux';

import {StackNavigator, TabNavigator} from 'react-navigation';

import {Ionicons, FontAwesome} from '@expo/vector-icons';

import Decks from './src/Decks/Decks';
import NewDeck from './src/NewDeck/NewDeck';
import DeckDetails from './src/DeckDetails/DeckDetails';
import Quiz from './src/Quiz/Quiz';
import configureStore from './src/redux/store';
import NewCard from './src/NewCard/NewCard';


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
    NewCard: {
        screen: NewCard,
        navigationOptions: {
            title: 'Add Card'
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
            backgroundColor: 'red',
        }
    }
});

const store = configureStore();

export default class App extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                    <StatusBar/>
                    <MainNavigator/>
                </SafeAreaView>
            </Provider>
        );
    }
}