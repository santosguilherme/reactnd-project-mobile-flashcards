import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {StyleSheet, View, Text} from 'react-native';

import {selectors} from '../redux/modules/decks';

import TextButton from '../commons/components/TextButton';
import Container from '../commons/components/Container';
import Title from '../commons/components/Title';


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
        const {navigation, deck} = this.props;

        navigation.navigate('NewCard', {deck: deck.title});
    };

    handleStartQuiz = () => {
        const {navigation, deck} = this.props;

        navigation.navigate('Quiz', {deck: deck.title});

    };

    renderDeckContent() {
        const {deck} = this.props;

        return (
            <View style={styles.deckContent}>
                <Title text={deck.title}/>
                <Text style={styles.deckSubtitle}>
                    {`${deck.questions.length} cards`}
                </Text>
            </View>
        );
    }

    renderActionsContent() {
        const {deck} = this.props;

        return (
            <View style={styles.actionsContent}>
                <TextButton
                    onPress={this.handleAddCard}
                    variant="secondary"
                >
                    Add card
                </TextButton>
                <TextButton
                    onPress={this.handleStartQuiz}
                    disabled={!deck.questions.length}
                >
                    Start quiz
                </TextButton>
            </View>
        );
    }

    render() {
        return (
            <Container>
                <View style={styles.content}>
                    {this.renderDeckContent()}
                    {this.renderActionsContent()}
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20
    },
    deckContent: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckSubtitle: {
        fontSize: 20,
        color: '#999999',
        fontWeight: '400',
    },
    actionsContent: {
        width: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
});

function mapStateToProps(state, ownProps) {
    const {deck} = ownProps.navigation.state.params;

    return {
        deck: selectors.getDeck(state, deck)
    };
}

export default connect(mapStateToProps)(DeckDetails);