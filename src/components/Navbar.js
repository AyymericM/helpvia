import React, { Component } from 'react';
import {
	StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { texts } from '../styles'
import { MainConsumer } from '../stores/MainStore'

export default class Navbar extends Component {
    render() {
        return (
            <MainConsumer>
                {({state, actions}) => (
                    <View style={styles.container}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('home')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/balance.png')}
                            />
                            <Text style={texts.label}>Cagnotte</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('home')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/donate.png')}
                            />
                            <Text style={texts.label}>Dons</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('home')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/add.png')}
                            />
                            <Text style={texts.label}>Ajouter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('planning')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/planning.png')}
                            />
                            <Text style={texts.label}>Agenda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.navitem} onPress={() => actions.navigate('profile')}>
                            <Image
                                style={styles.navimage}
                                source={require('../assets/menu/profile.png')}
                            />
                            <Text style={texts.label}>Profil</Text>
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
        borderTopColor: '#E2E2E2'
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
    }
});