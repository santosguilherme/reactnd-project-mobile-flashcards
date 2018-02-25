import React, {Component} from 'react';

import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

import {selectors} from '../redux/modules/decks';

import {cancelAllScheduled} from '../commons/notification/pushLocalNotification';

import TextButton from '../commons/components/TextButton';
import Container from '../commons/components/Container';
import Feedback from './Feedback';
import Title from '../commons/components/Title';


const initialState = {
    questionIndex: 0,
    showQuestion: true,
    showAnswer: false,
    corrects: 0,
    done: false
};

class Quiz extends Component {
    state = {
        ...initialState
    };

    handleClickSwap = () => {
        this.setState(state => ({
            showQuestion: !state.showQuestion,
            showAnswer: !state.showAnswer
        }));
    };

    updatedQuizState = isCorrect => {
        this.setState(state => {
            const {questionIndex} = state;
            const {deck} = this.props;
            const deckQuestionsLength = deck.questions.length;

            const newState = {
                showQuestion: true,
                showAnswer: false,
            };

            newState.done = questionIndex === deckQuestionsLength - 1;
            newState.questionIndex = questionIndex < deck.questions.length - 1
                ? questionIndex + 1
                : questionIndex;

            isCorrect && (newState.corrects = ++state.corrects);
            newState.done && cancelAllScheduled();

            return newState;
        });
    };

    handleCorrectClick = () => {
        this.updatedQuizState(true);
    };

    handleIncorrectClick = () => {
        this.updatedQuizState();
    };

    handleRestartQuizClick = () => {
        this.setState({
            ...initialState
        });
    };

    handleBackToDeckClick = () => {
        this.props.navigation.goBack();
    };

    render() {
        const {questionIndex, showQuestion, showAnswer, corrects, done} = this.state;
        const {deck} = this.props;

        const text = showQuestion
            ? deck.questions[questionIndex].question
            : deck.questions[questionIndex].answer;

        return (
            <Container>
                <View style={styles.content}>
                    <View style={styles.indicator}>
                        <Text style={styles.indicatorText}>
                            {`${questionIndex + 1}/${deck.questions.length}`}
                        </Text>
                    </View>
                    {!done
                        ? (
                            <View style={styles.body}>
                                <View style={styles.textContent}>
                                    <Title text={text}/>
                                </View>
                                {showAnswer
                                    ? (
                                        <View style={styles.answerActions}>
                                            <TextButton
                                                onPress={this.handleIncorrectClick}
                                                variant="secondary"
                                            >
                                                Incorrect
                                            </TextButton>
                                            <TextButton onPress={this.handleCorrectClick}>
                                                Correct
                                            </TextButton>
                                        </View>
                                    )
                                    : (
                                        <View style={{flex: 1}}>
                                            <TextButton
                                                onPress={this.handleClickSwap}
                                                variant="secondary"
                                            >
                                                {`Show ${showQuestion ? 'answer' : 'question'}`}
                                            </TextButton>
                                        </View>
                                    )
                                }
                            </View>
                        )
                        : (
                            <Feedback
                                score={(corrects * 100) / deck.questions.length}
                                onRestart={this.handleRestartQuizClick}
                                onBack={this.handleBackToDeckClick}
                            />
                        )}
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
    indicator: {
        backgroundColor: '#4496EC',
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'flex-start'
    },
    indicatorText: {
        color: '#fff',
        fontWeight: '600'
    },
    body: {
        flex: 1,
        width: '100%',
        display: 'flex',
    },
    textContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    answerActions: {
        flex: 1,
        width: '100%',
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

export default connect(mapStateToProps)(Quiz);