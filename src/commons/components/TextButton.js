import React from 'react';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function TextButton({children, onPress, style = {}}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.reset, style]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    reset: {
        textAlign: 'center',
        color: '#fff',
        borderRadius: 10,
        backgroundColor: '#000',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    }
});