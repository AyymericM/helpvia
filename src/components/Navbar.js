import React, { Component } from 'react';
import Image from 'react-native-remote-svg';
import {
	StyleSheet,
	View,
    TouchableOpacity
} from 'react-native';

import { MainConsumer } from '../stores/MainStore'

export default class Navbar extends Component {
    render() {
        return (
            <MainConsumer>
                {({state, actions}) => (
                    <View style={styles.container}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('planning')}>
                            {state.activeScreen === 'planning' ?
                                <Image
                                    style={styles.navimage}
                                    source={require('../assets/menu/planning_active.svg')}
                                />
                            :
                                <Image
                                    style={styles.navimage}
                                    source={require('../assets/menu/planning.svg')}
                                />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('home')}>
                            {state.activeScreen === 'home' ?
                                <Image
                                    style={styles.navimage}
                                    source={require('../assets/menu/home_active.svg')}
                                />
                            :
                                <Image
                                    style={styles.navimage}
                                    source={require('../assets/menu/home.svg')}
                                />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('profile')}>
                            {state.activeScreen === 'profile' ?
                                <Image
                                    style={styles.navimage}
                                    source={require('../assets/menu/profile_active.svg')}
                                />
                            :
                                <Image
                                    style={styles.navimage}
                                    source={require('../assets/menu/profile.svg')}
                                />
                            }
                        </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navitem: {
        height: 80,
        width: 80,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navimage: {
        height: 50,
        width: 50,
    }
});