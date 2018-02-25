import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {StyleSheet, Text, View} from 'react-native';
import {NavigationActions} from 'react-navigation';

import {actions as decksActions} from '../redux/modules/decks';

import TextButton from '../commons/components/TextButton';
import Container from '../commons/components/Container';
import TextInputField from '../commons/components/TextInputField';


class NewDeck extends PureComponent {
    static propTypes = {
        createDeck: PropTypes.func.isRequired
    };

    state = {
        deckTitle: ''
    };

    handleChangeDeckTitle = deckTitle => {
        this.setState({deckTitle});
    };

    handleSubmitNewDeck = () => {
        const {navigation, createDeck} = this.props;
        const deck = {
            title: this.state.deckTitle,
            questions: []
        };

        createDeck(deck);

        const resetAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({routeName: 'Home'}),
                NavigationActions.navigate({routeName: 'DeckDetails', params: {deck}})
            ]
        });
        navigation.dispatch(resetAction);
    };

    render() {
        const {deckTitle} = this.state;

        return (
            <Container>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        What is the title of your new deck?
                    </Text>
                    <TextInputField
                        value={deckTitle}
                        onChangeText={this.handleChangeDeckTitle}
                    />
                    <TextButton
                        onPress={this.handleSubmitNewDeck}
                        style={styles.button}
                        disabled={!Boolean(deckTitle)}
                    >
                        Submit
                    </TextButton>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 30,
        marginBottom: 20
    },
    button: {
        marginTop: 20
    }
});

const mapDispatchToProps = {
    createDeck: decksActions.addDeck
};

export default connect(null, mapDispatchToProps)(NewDeck);