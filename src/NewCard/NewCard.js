import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import Container from '../commons/components/Container';
import TextInputField from '../commons/components/TextInputField';
import TextButton from '../commons/components/TextButton';

import {actions as decksActions} from '../redux/modules/decks';


class NewCard extends PureComponent {
    state = {
        question: '',
        answer: ''
    };

    handleSubmitNewCard = () => {
        const {navigation, addCardToDeck} = this.props;

        const {deck} = navigation.state.params;

        addCardToDeck({
            title: deck.title,
            card: {...this.state}
        });

        navigation.goBack();
    };

    createHandleChangeState(attribute) {
        return (value) => this.setState({[attribute]: value});
    }

    renderInput(label, attribute) {
        return (
            <View>
                <Text>{label}</Text>
                <TextInputField
                    value={this.state[attribute]}
                    onChangeText={this.createHandleChangeState(attribute)}/>
            </View>
        );
    }

    render() {
        return (
            <Container>
                {this.renderInput('Question', 'question')}
                {this.renderInput('Answer', 'answer')}
                <TextButton onPress={this.handleSubmitNewCard}>
                    Submit
                </TextButton>
            </Container>
        );
    }
}

NewCard.propTypes = {
    addCardToDeck: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    addCardToDeck: decksActions.addCardToDeck
};

export default connect(null, mapDispatchToProps)(NewCard);