import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import { MainConsumer } from '../stores/MainStore'

export default class Navbar extends Component {
    render() {
        return (
            <MainConsumer>
                {({state, actions}) => (
                    <View style={styles.container}>
                        <View
                            style={[styles.navitem, state.activeScreen === 'planning' ? styles.navactive : {}]}
                            onTouchEnd={() => actions.navigate('planning')}>
                        </View>
                        <View
                            style={[styles.navitem, state.activeScreen === 'home' ? styles.navactive : {}]}
                            onTouchEnd={() => actions.navigate('home')}>
                        </View>
                        <View
                            style={[styles.navitem, state.activeScreen === 'profile' ? styles.navactive : {}]}
                            onTouchEnd={() => actions.navigate('profile')}>
                        </View>
                    </View>
                )}
            </MainConsumer>
        );
    }
};

const styles = StyleSheet.create({
    container: {
		width: '100%',
        height: 80,
        bottom: 0,
        left: 0,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navitem: {
        height: 80,
        width: 80,
        backgroundColor: 'blue'
    },
    navactive: {
        backgroundColor: 'green'
    }
});