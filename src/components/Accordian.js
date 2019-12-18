import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image} from "react-native";
import { texts, buttons, inputs, colors } from '../styles'

export default class Accordian extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            data: props.data,
            expanded : true,
        }
    }
  
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                    <View style={[styles.titles]}>
                        <Text style={[styles.title]}>{this.props.hour}</Text>
                        <Text style={[styles.subtitle]}>{this.state.data.length} personnes</Text>
                    </View>
                    <Image style={[styles.image]} source={require('../assets/dropdown.png')} />
                </TouchableOpacity>
                <View style={styles.parentHr}/>
                {this.state.expanded &&
                    <View>
                        {this.state.data.map((i, key) => (
                            <View key={key} style={styles.child}>
                                <Text style={[styles.name, {color:'white'}]}>{i.name}</Text>
                                <Text style={{color:'white'}}>{i.product}</Text>  
                            </View>
                        ))}  
                    </View>
                }
            </View>
        )
    }

    toggleExpand=()=>{
        this.setState({expanded : !this.state.expanded})
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Bold',
        color: colors.colorBlack,
        marginRight: 10
    },
    subtitle:{
        fontSize: 12,
        fontFamily: "HelveticaNeue-Regular",
        color: colors.colorGray,
    },
    titles: {
        flexDirection: 'row',
        alignItems:'center'
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft:25,
        paddingRight:18,
        marginTop: 20,
        marginBottom: 10,
        alignItems:'center'
    },
    parentHr:{
        height:1,
        color: "white",
        width:'100%'
    },
    child:{
        flexDirection: 'row',
        backgroundColor: colors.colorLightBlue,
        color: 'white',
        marginVertical: 5,
        marginLeft: 70,
        borderRadius: 5,
        padding:12,
    },
    name:{
        fontFamily: 'HelveticaNeue-Bold',
        marginRight: 10
    },
    image: {
        width: 20,
        height: 20
    }
});