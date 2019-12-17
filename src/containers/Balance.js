import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import { texts } from '../styles'
import { MainConsumer } from '../stores/MainStore'

export default class Balance extends Component {
    render() {
        return (
            <MainConsumer>
                {({state}) => (
                    <View>
                        <View style={styles.header}>
                            <Text style={texts.title}>Hello world</Text>
                        </View>
                    </View>
                )}
            </MainConsumer>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    header_text: {
        fontSize: 24
    }
});