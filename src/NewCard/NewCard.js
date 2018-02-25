import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Container from '../commons/components/Container';
import TextInputField from '../commons/components/TextInputField';
import TextButton from '../commons/components/TextButton';

import {actions as decksActions, selectors} from '../redux/modules/decks';


class NewCard extends PureComponent {
    static propTypes = {
        addCardToDeck: PropTypes.func.isRequired
    };

    state = {
        question: '',
        answer: ''
    };

    handleSubmitNewCard = () => {
        const {navigation, addCardToDeck, deck} = this.props;

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
            <View style={styles.input}>
                <Text style={styles.label}>
                    {label}
                </Text>
                <TextInputField
                    value={this.state[attribute]}
                    onChangeText={this.createHandleChangeState(attribute)}/>
            </View>
        );
    }

    render() {
        const {question, answer} = this.state;

        return (
            <Container>
                <View style={styles.content}>
                    {this.renderInput('Question', 'question')}
                    {this.renderInput('Answer', 'answer')}
                    <TextButton
                        onPress={this.handleSubmitNewCard}
                        disabled={!question || !answer}
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
    input: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontWeight: '600'
    }
});

function mapStateToProps(state, ownProps) {
    const {deck} = ownProps.navigation.state.params;

    return {
        deck: selectors.getDeck(state, deck.title)
    };
}

const mapDispatchToProps = {
    addCardToDeck: decksActions.addCardToDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);