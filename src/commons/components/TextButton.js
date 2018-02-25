import React from 'react';
import PropTypes from 'prop-types';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';


function TextButton({children, onPress, disabled = false, style = {}, variant = 'primary'}) {
    const buttonTextStyle = [styles.container, styles[`${variant}Container`], style, disabled ? styles.disabeld : {}];
    const textStyle = [styles.text, styles[variant]];

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
        >
            <View style={buttonTextStyle}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        borderWidth: 1,
        borderColor: '#4496EC',
    },
    text: {
        textAlign: 'center',
        fontWeight: '500'
    },
    primaryContainer: {
        backgroundColor: '#4496EC',
    },
    secondaryContainer: {},
    primary: {
        color: '#fff',
    },
    secondary: {
        color: '#4496EC'
    },
    disabeld: {
        opacity: 0.7
    }
});

TextButton.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool
};

export default TextButton;