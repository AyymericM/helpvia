import { StyleSheet } from 'react-native'
import colors from './colors'

const texts = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'HelveticaNeue-Bold',
        color: colors.colorBlack
    },
    regular: {
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium',
        color: colors.colorBlack
    },
    label: {
        fontSize: 11,
        fontFamily: "HelveticaNeue-Medium",
        color: colors.colorBlack,
        textTransform: 'uppercase'
    },
    info: {
        fontSize: 14,
        fontFamily: "HelveticaNeue-Regular",
        color: colors.colorGray,
        lineHeight: 20
    },
    link: {
        fontSize: 10,
        fontFamily: "HelveticaNeue-Medium",
        textDecorationLine: 'underline',
        color: colors.colorBlack
    }
})

export default texts