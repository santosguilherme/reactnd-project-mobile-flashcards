import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import MainNavigator from '../commons/navigation/Stack';

import {white} from '../commons/styles/colors';


export default function Home() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: white}}>
            <StatusBar/>
            <MainNavigator/>
        </SafeAreaView>
    );
}