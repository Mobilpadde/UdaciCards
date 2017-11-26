import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Deck from './Deck';

const decks = {
    "javascript": 2,
    "react": 5,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    }
});

class DeckList extends Component {
    static navigationOptions = {
        title: 'Deck List',
    };

    static propTypes = {};
    state = {};

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                {
                    decks &&
                    Object.keys(decks).map(
                        name =>
                            <Deck key={name + decks[name]} name={name} cards={decks[name]} to={() => {
                                console.log(name);
                                navigation.navigate('DeckView', { deck: name })
                            }}/>
                    )
                }
            </View>
        );
    }
}

export default DeckList;