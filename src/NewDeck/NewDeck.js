import React from 'react';

import {StyleSheet, View, Text} from 'react-native';


export default function NewDeck() {


    return (
        <View style={styles.container}>
            <Text>NewDeck</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    }
});