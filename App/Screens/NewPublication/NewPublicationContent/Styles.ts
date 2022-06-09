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
    loadedImage: {
        width: moderateScale(100),
        height: moderateScale(100),
        alignSelf: 'center',
        margin: 5,
    },
    add: {
        width: '95%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    input: {
        paddingLeft: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    button: {
        width: '95%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: colors.primaryOrange,
        fontSize: moderateScale(15),
    },
    modal: {
        backgroundColor: colors.primaryOrange,
        padding: 10,
        flex: 1,
        alignItems: 'center',
    },
    inputText: {
        backgroundColor: 'white',
        width: '95%',
        marginVertical: 10,
        paddingLeft: 5,
        borderRadius: 5,
    },
    iconContainer: {
        backgroundColor: 'white',
        width: '75%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    icon: {
        fontSize: moderateScale(30),
        color: colors.primaryOrange,
    },
    text: {
        fontSize: moderateScale(15),
        color: 'black',
    },
});
export default styles;
