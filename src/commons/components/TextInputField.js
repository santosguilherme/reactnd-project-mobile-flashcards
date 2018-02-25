import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View, TextInput} from 'react-native';

import {grey} from '../styles/colors';


function TextInputField(props) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        width: '100%'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: grey
    }
});

TextInputField.defaultProps = {
    value: ''
};

TextInputField.propTypes = {
    value: PropTypes.any,
    onChangeText: PropTypes.func.isRequired
};

export default TextInputField;