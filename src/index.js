import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { MainProvider, MainConsumer } from './stores/MainStore'
import { Navbar } from './components'
import { Home, Profile, Planning } from './containers'

export default class App extends Component {
    render() {
        return (
			<MainProvider>
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
					<Navbar />
				</View>
			</MainProvider>
        );
    }
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		flex: 1
	}
})