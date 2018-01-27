import React from 'react';

import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';


export default function Decks() {
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

    const renderItem = ({item}) => {
        const deck = decks[item];

        return (
            <TouchableOpacity onPress={() => console.log('pressed', deck)}>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>
                        {deck.title}
                    </Text>
                    <Text>
                        {`${deck.questions.length} cards`}
                    </Text>
                </View>
            </TouchableOpacity>
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
    item: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5
    }
});