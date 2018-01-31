import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';


class DeckDetails extends Component {
    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;

        return {
            title: deck.title
        };
    };

    render() {
        return (
            <View>
                <Text>Deck details</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    }
});

export default DeckDetails;