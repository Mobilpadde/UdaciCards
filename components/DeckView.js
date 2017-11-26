import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class DeckView extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: `Desk: ${navigation.state.params.name}`,
	});
    static propTypes = {};

    state = {};

    render() {
    	const { name } = this.props;

        return <Text>{name}</Text>
    }
}

export default DeckView;