import { StyleSheet } from 'react-native'
import colors from './colors'

const buttons = StyleSheet.create({
    primary: {
        fontSize: 18,
        padding: 15,
        fontFamily: 'HelveticaNeue-Medium',
        backgroundColor: colors.colorBlue,
        color: 'white',
        textAlign: 'center',
        borderRadius: 4
    }
})

export default buttons