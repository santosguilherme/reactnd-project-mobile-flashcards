import React, {Component} from 'react';

import {ActivityIndicator} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import configureStore from './src/redux/store';
import {scheduleForTomorrow} from './src/commons/notification/pushLocalNotification';

import Home from './src/Home/Home';


const {persistor, store} = configureStore();

export default class App extends Component {
    componentDidMount() {
        scheduleForTomorrow();
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator/>}
                    persistor={persistor}>
                    <Home/>
                </PersistGate>
            </Provider>
        );
    }
}