import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import MainNavigator from '../commons/navigation/Stack';


export default function Home(){
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <StatusBar/>
            <MainNavigator/>
        </SafeAreaView>
    );
}