import React, { Component } from 'react';
import {
	StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { texts, colors } from '../styles'
import { MainConsumer } from '../stores/MainStore'

export default class Navbar extends Component {
    render() {
        return (
            <MainConsumer>
                {({state, actions}) => (
                    <View style={styles.container}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('balance')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/balance.png')}
                            />
                            <Text style={[texts.label, state.activeScreen === 'balance' ? styles.label_active : null]}>Cagnotte</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('donations')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/donate.png')}
                            />
                            <Text style={[texts.label, state.activeScreen === 'donations' ? styles.label_active : null]}>Dons</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('add')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/add.png')}
                            />
                            <Text style={[texts.label, state.activeScreen === 'add' ? styles.label_active : null]}>Ajouter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('planning')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/planning.png')}
                            />
                            <Text style={[texts.label, state.activeScreen === 'planning' ? styles.label_active : null]}>Agenda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('profile')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/profile.png')}
                            />
                            <Text style={[texts.label, state.activeScreen === 'profile' ? styles.label_active : null]}>Profil</Text>
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
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#E2E2E2',
        backgroundColor: 'white'
    },
    navitem: {
        height: 60,
        width: 70,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navimage: {
        height: 32,
        width: 32,
        resizeMode: 'contain',
        marginBottom: 5
    },
    label_active: {
        color: colors.colorBlue
    }
});