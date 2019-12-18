import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { texts, buttons, inputs, colors } from '../styles'
import Swiper from 'react-native-swiper'

export default class Carousel extends Component{

  render() {

    return (
        <Swiper style={styles.wrapper} loop={false}  dot={<View style={{backgroundColor: '#DEDEDE', width: 8, height: 8, borderRadius: 4, marginRight: 10}} />}
        activeDot={<View style={{backgroundColor: '#040E19', width: 8, height: 8, borderRadius: 4, marginRight: 10}} />}
        paginationStyle={{
            bottom: -23
          }}>
        <View style={styles.slide}>
            <Text style={[styles.agenda, { textAlign: 'center'}]}>🗓</Text>
            <Text style={[styles.carouselTitle, { textAlign: 'center'}]}>Le super Agenda</Text>
            <Text style={[texts.info, styles.carouselInfo, { textAlign: 'center'}]}>Ayez une vue sur les personnes que vous allez aider grace à l’agenda</Text>
        </View>
        <View style={styles.slide}>
        <Text style={[styles.agenda, { textAlign: 'center'}]}>💰</Text>
            <Text style={[styles.carouselTitle, { textAlign: 'center'}]}>La cagnotte</Text>
            <Text style={[texts.info, styles.carouselInfo, { textAlign: 'center'}]}>En temps réel, vous pouvez avoir une vision sur les dons récoltés par votre commerce</Text>
        </View>
        <View style={styles.slide}>
        <Text style={[styles.agenda, { textAlign: 'center'}]}>📝</Text>
            <Text style={[styles.carouselTitle, { textAlign: 'center'}]}>La Liste des dons</Text>
            <Text style={[texts.info, styles.carouselInfo, { textAlign: 'center'}]}>Retrouvez une liste des dons pour savoir exactement ce que vous avez donnez</Text>
        </View>
      </Swiper>
    )
  }

}

const styles = StyleSheet.create({
    wrapper: {
        height: 350
    },
    agenda: {
        fontSize: 84,
        marginTop: 50,
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
    }
});