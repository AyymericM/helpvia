import { StyleSheet } from 'react-native'
import colors from './colors'

const texts = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'HelveticaNeue-Bold',
        color: colors.colorBlack
    },
    label: {
        fontSize: 11,
        fontFamily: "HelveticaNeue-Medium",
        color: colors.colorBlack
    },
    info: {
        fontSize: 14,
        fontFamily: "HelveticaNeue-Regular",
        color: colors.colorGray
    }
})

export default texts