import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
    TextInput,
    Picker
} from 'react-native';
import { texts, buttons, inputs, colors } from '../styles'

export default class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: 'croissants',
            count: 0
        }        
    }

    minusOneProduct(){
        if(this.state.count>0){
            this.setState({
                count: this.state.count-=1
            })
        }
    }
    render() {
        return (
            <View>
                <View style={[styles.header]}>
                    <Text style={texts.title}>Ajouter un produit</Text>
                    <Text style={[texts.info,styles.subtitle]}>
                        Selectionner le type de produit et la quantité, Helpvia s'occupe du reste !
                    </Text>
                </View>
                <Text style={texts.label}>Type de produit</Text>
                <View style={styles.select} >
                    <Picker
                        selectedValue={this.state.product} 
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({product: itemValue})
                        }>
                        <Picker.Item label="Croissant" value="croissants" />
                        <Picker.Item label="Café" value="cafés" />
                    </Picker>
                </View>
                <Text style={[{textAlign:"right",marginTop:10},texts.link]}>ou ajouter un autre type de produit</Text>
                <View style={styles.inputs}>
                    <View>
                        <Text style={texts.label}>Prix à l'unité</Text>
                        <TextInput style={[inputs.primary, styles.input, { textAlign: 'right', paddingRight: 14}]}></TextInput>
                    </View>
                    <View>
                        <Text style={texts.label}>Quantité</Text>
                        <View style={styles.count}>
                            <Text onPress={() => this.minusOneProduct() } style={[buttons.primary, styles.button]}>-</Text>
                            <Text style={[inputs.primary,styles.countInput]}>{this.state.count}</Text>
                            <Text onPress={() => this.setState({count:this.state.count+=1}) } style={[buttons.primary, styles.button]}>+</Text>
                        </View>
                    </View>
                </View>
                <Text style={[buttons.primary, styles.submit]}>Ajouter {this.state.count} {this.state.product}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 10
    },
    select : {
        marginTop: 6,
        width: '100%',
        height: 50,
        color: colors.colorBlack,
        fontFamily: 'HelveticaNeue-Medium',
        backgroundColor: colors.colorLightGray,
        borderWidth: 1,
        borderColor: colors.colorDarkGray,
        borderRadius: 4
    },
    inputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    input:{
        marginTop: 5,
        marginRight: 10,
        width: 120,
        backgroundColor: colors.colorLightGray
    },
    count: {
        flexDirection: 'row',
    },
    countInput: {
        marginTop: 5,
        width: 60,
        marginHorizontal: 10,
        textAlign: 'center',
        paddingTop: 14
    },
    button:{        
        marginTop: 5,
        width: 50
    },
    submit: {
        marginTop: 100
    }
});

