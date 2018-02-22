import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import DeckCard from '../Decks/DeckCard';
import TextButton from '../commons/components/TextButton';
import Container from '../commons/components/Container';


class DeckDetails extends Component {
    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;

        return {
            title: deck.title
        };
    };

    handleAddCard = () => {
        const {deck} = this.props.navigation.state.params;

        this.props.navigation.navigate('NewCard', {deck});
    };

    handleStartQuiz = () => {
        const {deck} = this.props.navigation.state.params;

        this.props.navigation.navigate('Quiz', {deck});

    };

    render() {
        const {deck} = this.props.navigation.state.params;

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


export default DeckDetails;