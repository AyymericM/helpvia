import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { MainProvider, MainConsumer } from './stores/MainStore'
import { Navbar } from './components'
import { Home, Profile, Planning } from './containers'

export default class App extends Component {
    render() {
        return (
			<MainProvider>
				<StatusBar backgroundColor="white" barStyle="dark-content" />
				<View style={styles.container}>
					<MainConsumer>
						{({ state }) => (
							<View style={styles.content}>
								{(state.activeScreen === 'planning' ? <Planning /> : null)}
								{(state.activeScreen === 'home' ? <Home /> : null)}
								{(state.activeScreen === 'profile' ? <Profile /> : null)}
							</View>
						)}
					</MainConsumer>
				</View>
				<Navbar />
			</MainProvider>
        );
    }
};

const styles = StyleSheet.create({
	container: {
		padding: 25,
		flex: 1,
		backgroundColor: 'white'
	},
	content: {
		flex: 1
	}
})