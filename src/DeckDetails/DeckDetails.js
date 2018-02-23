import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {StyleSheet, View, Text} from 'react-native';
import DeckCard from '../Decks/DeckCard';
import TextButton from '../commons/components/TextButton';
import Container from '../commons/components/Container';
import {selectors} from '../redux/modules/decks';


class DeckDetails extends Component {
    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;

        return {
            title: deck.title
        };
    };

    static propTypes = {
        deck: PropTypes.object
    };

    handleAddCard = () => {
        const {deck} = this.props;

        this.props.navigation.navigate('NewCard', {deck});
    };

    handleStartQuiz = () => {
        const {deck} = this.props;

        this.props.navigation.navigate('Quiz', {deck});

    };

    render() {
        const {deck} = this.props;

        return (
            <Container>
                <View>
                    <DeckCard deck={deck}/>
                </View>
                <View>
                    <TextButton onPress={this.handleAddCard}>
                        Add card
                    </TextButton>
                    <TextButton onPress={this.handleStartQuiz}>
                        Start quiz
                    </TextButton>
                </View>
            </Container>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const {deck} = ownProps.navigation.state.params;

    return {
        deck: selectors.getDeck(state, deck.title)
    };
}

export default connect(mapStateToProps)(DeckDetails);