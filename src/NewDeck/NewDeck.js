import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {Text} from 'react-native';

import TextButton from '../commons/components/TextButton';

import {actions as decksActions} from '../redux/modules/decks';
import Container from '../commons/components/Container';
import TextInputField from '../commons/components/TextInputField';


class NewDeck extends PureComponent {
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
        //FIXME: Quando clica no voltar, ele volta para tela de criação com o input preenchido com o último valor
        navigation.navigate('DeckDetails', {deck});
    };

    render() {
        return (
            <Container>
                <Text>What is the title of your new deck?</Text>
                <TextInputField
                    value={this.state.deckTitle}
                    onChangeText={this.handleChangeDeckTitle}
                />
                <TextButton onPress={this.handleSubmitNewDeck}>
                    Submit
                </TextButton>
            </Container>
        );
    }
}

NewDeck.propTypes = {
    createDeck: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    createDeck: decksActions.addDeck
};

export default connect(null, mapDispatchToProps)(NewDeck);