import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import DeckCard from '../Decks/DeckCard';
import TextButton from '../commons/components/TextButton';


class DeckDetails extends Component {
    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;

        return {
            title: deck.title
        };
    };

    handleStartQuiz = () => {
        const {deck} = this.props.navigation.state.params;

        this.props.navigation.navigate('Quiz', {deck});

    };

    render() {
        const {deck} = this.props.navigation.state.params;

        return (
            <View>
                <View>
                    <DeckCard deck={deck}/>
                </View>
                <View>
                    <TextButton>
                        Add card
                    </TextButton>
                    <TextButton onPress={this.handleStartQuiz}>
                        Start quiz
                    </TextButton>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    }
});

export default DeckDetails;