import React from 'react';

import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import DeckCard from './DeckCard';

export default function Decks(props) {
    const decks = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    };

    const handleClickDeck = deck => {
        props.navigation.navigate('DeckDetails', {deck});
    };

    const renderItem = ({item}) => {
        const deck = decks[item];

        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() => handleClickDeck(deck)}>
                    <DeckCard deck={deck}/>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={Object.keys(decks)}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    itemContainer: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});