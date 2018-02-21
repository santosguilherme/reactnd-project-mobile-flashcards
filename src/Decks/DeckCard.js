import React from 'react';

import {StyleSheet, Text, View} from 'react-native';


export default function DeckCard(props) {
    const {deck} = props;

    return (
        <View style={styles.deckContent}>
            <Text style={styles.deckTitle}>
                {deck.title}
            </Text>
            <Text>
                {`${deck.questions.length} cards`}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    deckContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    deckTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5
    }
});