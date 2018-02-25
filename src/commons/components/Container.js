import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, View} from 'react-native';

import {white} from '../styles/colors';


function Container(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    }
});