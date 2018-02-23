import React from 'react';
import PropTypes from 'prop-types';

import {Text, View} from 'react-native';

import TextButton from '../commons/components/TextButton';


function Feedback({score = 0, onRestart, onBack}) {
    return (
        <View>
            <Text>
                {`Your score ${score}%`}
            </Text>
            <TextButton onPress={onRestart}>
                Restart Quiz
            </TextButton>
            <TextButton onPress={onBack}>
                Back to Deck
            </TextButton>
        </View>
    );
}

Feedback.propTypes = {
    score: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
};

export default Feedback;