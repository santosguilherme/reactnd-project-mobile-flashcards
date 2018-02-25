import React from 'react';
import PropTypes from 'prop-types';

import {Text, StyleSheet} from 'react-native';


function Title({text = ''}) {
    return (
        <Text style={styles.title}>
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 30,
        marginBottom: 20
    }
});

Title.propTypes = {
    text: PropTypes.string.isRequired
};


export default Title;