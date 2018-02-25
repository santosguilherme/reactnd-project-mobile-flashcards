import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';

import {selectors as decksSelectors} from '../redux/modules/decks';

import {lightGray} from '../commons/styles/colors';

import Container from '../commons/components/Container';

import DeckCard from './DeckCard';


function Decks(props) {
    const {decks} = props;

    const handleClickDeck = deck => {
        props.navigation.navigate('DeckDetails', {deck: deck.title});
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

const styles = StyleSheet.create({
    itemContainer: {
        borderBottomColor: lightGray,
        borderBottomWidth: 1,
        paddingTop: 1
    }
});

Decks.defaultProps = {
    decks: {}
};

Decks.propTypes = {
    decks: PropTypes.object
};

function mapStateToProps(state) {
    return {
        decks: decksSelectors.getDecks(state)
    };
}

export default connect(mapStateToProps)(Decks);