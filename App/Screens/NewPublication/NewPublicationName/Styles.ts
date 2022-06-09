import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../GlobalScreenStyles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryOrange,
        padding: 10,
        flex: 1,
    },
    title: { color: 'white', fontSize: moderateScale(15) },
    inputText: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 5,
        marginVertical: 5,
        paddingVertical: 2,
        color: 'black',
    },
    button: {
        width: '95%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: colors.primaryOrange,
        fontSize: moderateScale(15),
    },
});
export default styles;
