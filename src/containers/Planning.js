import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import { texts, buttons, inputs, colors } from '../styles'
import {Accordian} from '../components'

export default class Planning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agenda:[
                { 
                    hour: '10:00', 
                    data: [
                        {
                            name: 'Alexandre',
                            product: '2 croissants'
                        },
                        {
                            name: 'Raphaelo',
                            product: '1 sandwich au poulet'
                        },
                        {
                            name: 'Sarah',
                            product: "3 bouteilles d'eau"
                        }
                    ]
                },
                { 
                    hour: '12:00', 
                    data: [
                        {
                            name: 'Alexandre',
                            product: '2 croissants'
                        },
                        {
                            name: 'Raphaelo',
                            product: '1 sandwich au poulet'
                        }
                    ]
                },
                { 
                    hour: '18:00', 
                    data: [
                        {
                            name: 'Alexandre',
                            product: '2 croissants'
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={texts.title}>Votre agenda</Text>
                    <Text style={[styles.subtitle,texts.info]}>Retrouvez ici l'ensemble des fenêtres horaires proposés pour venir récupérer vos dons</Text>
                </View>
                <Text style={[buttons.primary, {marginVertical: 20}]}>Modifiez mes horaires d'ouverture</Text>
                <View>
                    { this.renderAccordians() }
                </View>
            </View>
        );
    }

    renderAccordians=()=> {
        const items = [];
        for (let item of this.state.agenda) {
            items.push(
                <Accordian 
                    hour = {item.hour}
                    data = {item.data}
                />
            );
        }
        return items;
    }
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        marginTop: 60,
    },
    subtitle: {
        marginTop: 10
    }

});