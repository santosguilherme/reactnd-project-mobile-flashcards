import React from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';

import TextButton from '../commons/components/TextButton';


export default function NewDeck() {


    return (
        <View style={styles.container}>
            <Text>What is the title of your new deck?</Text>
            <View style={styles.inputContainer}>
                <TextInput/>
            </View>
            <TextButton>
                Submit
            </TextButton>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15
    }
});