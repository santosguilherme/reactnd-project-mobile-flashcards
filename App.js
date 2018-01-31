import React, {Component} from 'react';

import {Platform, View, StatusBar} from 'react-native';
import {Constants} from 'expo';

import {StackNavigator, TabNavigator} from 'react-navigation';

import {Ionicons, FontAwesome} from '@expo/vector-icons';

import Decks from './src/Decks/Decks';
import NewDeck from './src/NewDeck/NewDeck';
import DeckDetails from './src/DeckDetails/DeckDetails';


function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    );
}

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
        navigationOptions: {
            header: null
        },
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
    },
    DeckDetails: {
        screen: DeckDetails,
        navigationOptions: {
            headerTintColor: '#ccc',
            headerStyle: {
                backgroundColor: '#000',
            }
        }
    }
});

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <UdaciStatusBar
                    backgroundColor={'#e5e5e5'}
                    barStyle="light-content"
                />
                <MainNavigator/>
            </View>
        );
    }
}