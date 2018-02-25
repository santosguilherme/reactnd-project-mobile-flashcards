import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {Ionicons} from '@expo/vector-icons';


export default function DeckCard(props) {
    const {deck} = props;

    return (
        <View style={styles.deckContainer}>
            <View style={styles.deckContent}>
                <Text style={styles.deckTitle}>
                    {deck.title}
                </Text>
                <Text style={styles.deckSubtitle}>
                    {`${deck.questions.length} cards`}
                </Text>
            </View>
            <View style={styles.deckIconContent}>
                <Ionicons name="ios-arrow-forward" size={30} color="#999999"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    deckContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15
    },
    deckContent: {
        flex: 1
    },
    deckTitle: {
        fontSize: 16,
        fontWeight: '500'
    },
    deckSubtitle: {
        color: '#999999',
        fontWeight: '400',
    },
    deckIconContent: {}
});