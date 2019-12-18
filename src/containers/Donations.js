import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
    Image
} from 'react-native';
import { texts, colors, buttons } from '../styles';
import { MainConsumer } from '../stores/MainStore';

export default class Donations extends Component {
    render() {
        return (
            <MainConsumer>
                {({state}) => (
                    <>
                        <View>
                            <Text style={texts.title}>Votre liste de dons</Text>  
                            <Text style={[texts.info, styles.info]}>Retrouvez ici l’ensemble des produits que vous offrez aux personnes dans le besoin  </Text>  
                        </View>
                        <View style={styles.list_container}>
                            {state.data.items.map(i => (
                                <View key={i.id} style={styles.list_item}>
                                    <View style={styles.row}>
                                        <Text style={styles.emoji}>{i.emoji}</Text>
                                        <Text style={[texts.info, styles.text_amount]}>{`${i.amount}x`}</Text>
                                        <Text style={texts.regular}>{i.name}</Text>
                                    </View>
                                    <Text style={[texts.regular, styles.text_price]}>{`${i.price * i.amount} €`}</Text>
                                </View>
                            ))}
                            <Text style={[texts.regular, styles.text_total]}>{`Total: ${state.data.items.map(i => i.price * i.amount).reduce((a, b) => a + b)}`}</Text>
                        </View>
                        <View>
                            <Text style={buttons.primary}>Editer vos dons</Text>
                        </View>
                    </>
                )}
            </MainConsumer>
        );
    }
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    info: {
        marginTop: 10
    },
    list_container: {
        flex: 1,
        marginVertical: 20
    },
    list_item: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        padding: 5,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 4
    },
    text_amount: {
        marginHorizontal: 15,
        width: 30
    },
    text_price: {
        marginRight: 16
    },
    text_total: {
        width: '100%',
        textAlign: 'right',
        paddingRight: 20,
        marginVertical: 15
    },
    emoji: {
        backgroundColor: '#F9F9F9',
        fontSize: 20,
        padding: 12,
        borderRadius: 4
    }
});