import React, {Component} from 'react';

import {Platform, ActivityIndicator, StatusBar, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {StackNavigator, TabNavigator} from 'react-navigation';

import {Ionicons, FontAwesome} from '@expo/vector-icons';

import Decks from './src/Decks/Decks';
import NewDeck from './src/NewDeck/NewDeck';
import DeckDetails from './src/DeckDetails/DeckDetails';
import Quiz from './src/Quiz/Quiz';
import NewCard from './src/NewCard/NewCard';

import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from './src/redux/store';
import {scheduleForTomorrow} from './src/commons/notification/pushLocalNotification';


const Tabs = TabNavigator({
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

const MainNavigator = StackNavigator({
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

const {persistor, store} = configureStore();

export default class App extends Component {
    componentDidMount() {
        scheduleForTomorrow();
    }

    renderApp() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar/>
                <MainNavigator/>
            </SafeAreaView>
        );
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator/>}
                    persistor={persistor}>
                    {this.renderApp()}
                </PersistGate>
            </Provider>
        );
    }
}