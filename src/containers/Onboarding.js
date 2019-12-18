import React, { Component } from 'react';
import {
	StyleSheet,
	View,
    Text,
} from 'react-native';
import { Carousel } from '../components'
import { texts, buttons, inputs, colors } from '../styles'

export default class Onboarding extends Component {

    render() {
        return (
            <View>
                <Text style={[texts.title, styles.title, { textAlign: 'center'}]}>Bonjour et bienvenue sur le réseau Helpvia !</Text>
                <Text style={[texts.info, styles.text, { textAlign: 'center'}]}>Vous êtes sur le point de faire un millier de bonnes actions autour de vous, merci !</Text>
                <Carousel></Carousel>
                <Text style={[buttons.primary, styles.submit]}>Commencer à aider son prochain</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        width: '80%',
        marginTop: 50,
        marginHorizontal: '10%',
        lineHeight: 32
    },
    text: {
        width: '80%',
        marginHorizontal: '10%',
        marginTop: 10
    },
    submit: {
        marginTop: 100
    }
});