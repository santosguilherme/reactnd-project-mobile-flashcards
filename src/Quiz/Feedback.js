import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View} from 'react-native';

import TextButton from '../commons/components/TextButton';
import Title from '../commons/components/Title';


function Feedback({score = 0, onRestart, onBack}) {
    return (
        <View style={styles.body}>
            <View style={styles.text}>
                <Title text={`Your score is ${score}%`}/>
            </View>
            <View style={styles.actions}>
                <TextButton
                    onPress={onRestart}
                    variant="secondary"
                >
                    Restart Quiz
                </TextButton>
                <TextButton onPress={onBack}>
                    Back to Deck
                </TextButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20
    },
    text: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actions: {
        width: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
});

Feedback.propTypes = {
    score: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
};

export default Feedback;