import React, {Component} from 'react';

import {Text, View} from 'react-native';

import TextButton from '../commons/components/TextButton';
import Container from '../commons/components/Container';
import Feedback from './Feedback';
import {cancelAllScheduled} from '../commons/notification/pushLocalNotification';

const initialState = {
    questionIndex: 0,
    showQuestion: true,
    showAnswer: false,
    corrects: 0,
    done: false
};

export default class Quiz extends Component {
    state = {
        ...initialState
    };

    handleClickSwap = () => {
        this.setState(state => ({
            showQuestion: !state.showQuestion,
            showAnswer: !state.showAnswer
        }));
    };

    //TODO: renomear esta função
    getUpdatedState = (isCorrect) => {
        this.setState(state => {
            const {questionIndex} = state;
            const {deck} = this.props.navigation.state.params;
            const deckQuestionsLength = deck.questions.length;

            const newState = {
                showQuestion: true,
                showAnswer: false,
            };

            newState.done = questionIndex === deckQuestionsLength - 1;
            newState.questionIndex = questionIndex < deck.questions.length - 1
                ? questionIndex + 1
                : questionIndex;

            if (isCorrect) {
                newState.corrects = ++state.corrects;
            }

            if (newState.done) {
                cancelAllScheduled();
            }

            return newState;
        });
    };

    handleCorrectClick = () => {
        this.getUpdatedState(true);
    };

    handleIncorrectClick = () => {
        this.getUpdatedState();
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
        const {deck} = this.props.navigation.state.params;

        return (
            <Container>
                <View>
                    <Text>{`${questionIndex + 1}/${deck.questions.length}`}</Text>
                </View>
                {!done && (
                    <View>
                        {showQuestion && (
                            <View>
                                <Text>{deck.questions[questionIndex].question}</Text>
                            </View>
                        )}
                        {showAnswer && (
                            <View>
                                <Text>{deck.questions[questionIndex].answer}</Text>
                            </View>
                        )}
                        <TextButton onPress={this.handleClickSwap}>
                            Swap
                        </TextButton>
                        {showAnswer && (
                            <View>
                                <TextButton onPress={this.handleCorrectClick}>
                                    Correct
                                </TextButton>
                                <TextButton onPress={this.handleIncorrectClick}>
                                    Incorrect
                                </TextButton>
                            </View>
                        )}
                    </View>
                )}
                {done && (
                    <Feedback
                        score={(corrects * 100) / deck.questions.length}
                        onRestart={this.handleRestartQuizClick}
                        onBack={this.handleBackToDeckClick}
                    />
                )}
            </Container>
        );
    }
}