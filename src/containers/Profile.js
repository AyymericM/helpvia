import React, { Component } from 'react';
import {
	StyleSheet,
	View,
    Text,
    TextInput,
    Picker
} from 'react-native';

import { texts, inputs, colors } from '../styles'

export default class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            business: ''
        }        
    }

    render() {
        return (
            <View>
                <Text style={texts.title}>Votre Profil</Text> 
                <Text style={[texts.info, styles.text]}>Retrouvez ici l’ensemble des données de votre magasin : vos horaires, votre emplacement, etc</Text>
                <Text style={[texts.label, styles.label]}>Nom du commerce</Text>
                <TextInput style={[inputs.fullWidth, styles.input]}></TextInput> 
                <Text style={[texts.label, styles.label]}>Adresse</Text>
                <TextInput style={[inputs.fullWidth, styles.input]}></TextInput>
                <Text style={[texts.label, styles.label]}>telephone</Text>
                <TextInput style={[inputs.fullWidth, styles.input]}></TextInput>
                <Text style={[texts.label, styles.label]}>Type de commerce</Text>
                <View style={styles.select} >
                    <Picker
                        selectedValue={this.state.business}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({business: itemValue})
                        }>
                        <Picker.Item label="Boulangerie" value="boulangerie" />
                        <Picker.Item label="Epicerie" value="epicerie" />
                    </Picker>
                </View>
                <Text style={[texts.label, styles.label]}>Adresse mail</Text>
                <TextInput style={[inputs.fullWidth, styles.input]}></TextInput>
                <Text style={[texts.label, styles.label]}>Mot de passe</Text>
                <TextInput secureTextEntry={true} style={[inputs.fullWidth, styles.input, styles.inputPassword]}></TextInput>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    text: {
        width: '85%',
        marginTop: 10
    },
    firsLabel: {
        marginTop: 41
    },
    label: {
        marginTop: 25
    },
    input: {
        marginTop: 6,
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 18,
        lineHeight: 24,
        color: colors.colorBlack,
        paddingLeft: 16,
        paddingVertical: 14,
        backgroundColor: colors.colorLightGray,
        borderColor: colors.colorDarkGray,
        borderWidth: 1,
        borderRadius: 4,
        height: 50
    },
    select : {
        height: 50,
        marginTop: 6,
        width: '100%',
        alignContent: "center",
        paddingVertical: 1,
        paddingLeft: 7,
        color: colors.colorBlack,
        fontFamily: 'HelveticaNeue-Medium',
        backgroundColor: colors.colorLightGray,
        borderWidth: 1,
        borderColor: colors.colorDarkGray,
        borderRadius: 4
    },
    inputPassword : {
        
    }
});