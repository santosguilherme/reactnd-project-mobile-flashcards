import React from 'react';
import PropTypes from 'prop-types';

import {compose} from 'redux';
import {connect} from 'react-redux';

import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

import DeckCard from './DeckCard';

import {selectors as decksSelectors} from '../redux/modules/decks';
import Container from '../commons/components/Container';


function Decks(props) {
    const {decks} = props;

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
        <Container>
            <FlatList
                data={Object.keys(decks)}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
        </Container>
    );
}

Decks.defaultProps = {
    decks: {}
};

function mapStateToProps(state) {
    return {
        decks: decksSelectors.getDecks(state)
    };
}

export default connect(mapStateToProps)(Decks);


const styles = StyleSheet.create({
    itemContainer: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});