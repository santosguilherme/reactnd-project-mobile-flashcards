import React, {Component} from 'react';

import {Text, View} from 'react-native';
import TextButton from '../commons/components/TextButton';

export default class Quiz extends Component {
    state = {
        questionIndex: 0,
        showQuestion: true,
        showAnswer: false,
        corrects: 0,
        done: false
    };

    handleClickSwap = () => {
        this.setState(state => ({
            showQuestion: !state.showQuestion,
            showAnswer: !state.showAnswer
        }));
    };

    getUpdatedState = (isCprrect) => {
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

            if (isCprrect) {
                newState.corrects = ++state.corrects;
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

    render() {
        const {questionIndex, showQuestion, showAnswer, corrects, done} = this.state;
        const {deck} = this.props.navigation.state.params;

        return (
            <View>
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
                    <View>
                        <Text>
                            {`Your score ${(corrects * 100) / deck.questions.length}%`}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}