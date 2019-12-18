import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { texts, buttons, inputs, colors } from '../styles'

export default class Carousel extends Component{

  render() {

    return (
    //    <View>
    //         <Text style={[styles.agenda, { textAlign: 'center'}]}>🗓</Text>
    //         <Text style={[styles.carouselTitle, { textAlign: 'center'}]}>Le super Agenda</Text>
    //         <Text style={[texts.info, styles.carouselInfo, { textAlign: 'center'}]}>Ayez une vue sur les personnes que vous allez aider grace à l’agenda</Text>
            // <View style={[styles.row]}>
            //     <View style={[styles.dot, { backgroundColor: '#040E19' }]}></View>
            //     <View style={[styles.dot, { backgroundColor: '#DEDEDE' }]}></View>
            //     <View style={[styles.dot, { backgroundColor: '#DEDEDE' }]}></View>
            // </View>
    //    </View>
        // <View>
        //     <Text style={[styles.agenda, { textAlign: 'center'}]}>💰</Text>
        //     <Text style={[styles.carouselTitle, { textAlign: 'center'}]}>La cagnotte</Text>
        //     <Text style={[texts.info, styles.carouselInfo, { textAlign: 'center'}]}>En temps réel, vous pouvez avoir une vision sur les dons récoltés par votre commerce</Text>
        //     <View style={[styles.row]}>
        //         <View style={[styles.dot, { backgroundColor: '#DEDEDE' }]}></View>
        //         <View style={[styles.dot, { backgroundColor: '#040E19' }]}></View>
        //         <View style={[styles.dot, { backgroundColor: '#DEDEDE' }]}></View>
        //     </View>
        // </View>
        <View>
            <Text style={[styles.agenda, { textAlign: 'center'}]}>📝</Text>
            <Text style={[styles.carouselTitle, { textAlign: 'center'}]}>La Liste des dons</Text>
            <Text style={[texts.info, styles.carouselInfo, { textAlign: 'center'}]}>Retrouvez une liste des dons pour savoir exactement ce que vous avez donnez</Text>
            <View style={[styles.row]}>
                <View style={[styles.dot, { backgroundColor: '#DEDEDE' }]}></View>
                <View style={[styles.dot, { backgroundColor: '#DEDEDE' }]}></View>
                <View style={[styles.dot, { backgroundColor: '#040E19' }]}></View>
            </View>
        </View>
    )
  }

}

const styles = StyleSheet.create({
    agenda: {
        fontSize: 84,
        lineHeight: 20,
        height: 50,
        marginTop: 80
    },
    carouselTitle: {
        fontSize: 18,
        lineHeight: 20,
        fontFamily: 'HelveticaNeue-Bold',
        marginTop: 25
    },
    carouselInfo: {
        width: '80%',
        marginHorizontal: '10%',
        marginTop: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: "center",
        width: '100%',
        marginTop: 80
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 10
    }
});