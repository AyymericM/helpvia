import React, { Component } from 'react';
import {
	StyleSheet,
	View,
    Text,
    TextInput
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { texts, buttons, inputs, colors } from '../styles'
import { MainConsumer } from '../stores/MainStore'

export default class Balance extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedChoice: 0,
            amount: 0
        }

        this.radioProps = [
            { label: 'Ticket resto', value: 0 },
            { label: 'Espèces', value: 1 }
        ]
    }

    onRadioPress() {
        if (this.state.selectedChoice === 1) {
            this.setState({
                selectedChoice: 0
            })
        } else {
            this.setState({
                selectedChoice: 1
            })
        }
    }
    
    render() {
        return (
            <MainConsumer>
                {({state, actions}) => (
                    <View>
                        <View style={[styles.header]}>
                            <Text style={texts.title}>{state.data.balance.cb + state.data.balance.tr + state.data.balance.esp} €</Text>
                            <Text style={[texts.label, styles.text]}>Cagnotte totale</Text>
                            <View style={[styles.row, { justifyContent: 'space-around', width: '100%', marginTop: 30 }]}>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <View style={[styles.dot, { backgroundColor: '#235EB2' }]}></View>
                                    <Text style={texts.regular}>{`CB (${state.data.balance.cb}€)`}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <View style={[styles.dot, { backgroundColor: '#E69917' }]}></View>
                                    <Text style={texts.regular}>{`Ticket Resto (${state.data.balance.tr}€)`}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <View style={[styles.dot, { backgroundColor: '#23B271' }]}></View>
                                    <Text style={texts.regular}>{`Espèces (${state.data.balance.esp}€)`}</Text>
                                </View>
                            </View>
                            <Text style={[texts.info, styles.text, { textAlign: 'center' }]}>Retrouvez ici l’ensemble des dons faits par votre clientèle, triés par type de paiement</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={[texts.info, styles.text]}>Votre cagnotte s’agrandit ? Ajoutez ici la somme (reste de Ticket Resto ou Espèces)</Text>
                        </View>
                        <RadioForm
                            formHorizontal={true}
                            style={{ marginBottom: 30 }}
                        >
                            {this.radioProps.map((obj, i) => (
                                <RadioButton labelHorizontal={true} key={i}>
                                    <RadioButtonInput
                                        obj={obj}
                                        index={i}
                                        borderWidth={2}
                                        buttonSize={15}
                                        buttonOuterSize={25}
                                        buttonInnerColor={colors.colorBlue}
                                        buttonOuterColor={colors.colorBlue}
                                        isSelected={this.state.selectedChoice === i}
                                        onPress={() => this.onRadioPress()}
                                    />
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelHorizontal={true}
                                        onPress={() => this.onRadioPress()}
                                        labelStyle={texts.regular}
                                        labelWrapStyle={{marginRight: 15}}
                                    />
                                </RadioButton>
                            ))}
                        </RadioForm>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={texts.label}>Somme</Text>
                                <TextInput
                                    style={[inputs.primary, styles.input]}
                                    keyboardType={'number-pad'}
                                    maxLength={5}
                                    selectTextOnFocus={true}
                                    value={this.state.amount.toString()}
                                    onChangeText={v => this.setState({ amount: v })}>
                                </TextInput>
                            </View>
                            <Text
                                style={[buttons.primary, styles.button]}
                                onPress={() => {
                                    actions.updateBalance({
                                        choice: this.state.selectedChoice, amount: this.state.amount
                                    })
                                    this.setState({ amount: 0 })
                                }}
                            >Ajouter à la cagnotte</Text>
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
        height: 270,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 10
    },
    text: {
        marginVertical: 20
    },
    input: {
        marginTop: 5,
        marginRight: 10,
        paddingHorizontal: 10,
        width: 80
    },  
    button: {
        marginTop: 5,
        flex: 1
    },  
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    header_text: {
        fontSize: 24
    }
});