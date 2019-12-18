import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';

import { MainProvider, MainConsumer } from './stores/MainStore'
import { Navbar } from './components'
import { Donations, Profile, Balance, Planning, Add, Onboarding } from './containers'

export default class App extends Component {
    render() {
        return (
			<MainProvider>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<StatusBar backgroundColor="white" barStyle="dark-content" />
					<View style={styles.container}>
						<MainConsumer>
							{({ state }) => (
								<View style={styles.content}>
									{(state.activeScreen === 'balance' ? <Balance /> : null)}
									{(state.activeScreen === 'planning' ? <Planning /> : null)}
									{(state.activeScreen === 'add' ? <Add /> : null)}
									{(state.activeScreen === 'donations' ? <Donations /> : null)}
									{(state.activeScreen === 'profile' ? <Profile /> : null)}
									{(state.activeScreen === 'onboarding' ? <Onboarding /> : null)}
								</View>
							)}
						</MainConsumer>
					</View>
				</ScrollView>
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