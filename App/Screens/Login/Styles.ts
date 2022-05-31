import { StyleSheet } from 'react-native';
import { colors } from '../../GlobalScreenStyles';
import { moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
    },
    loginText: {
        fontSize: moderateScale(20),
        color: 'black',
        padding: 10,
    },
    middleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: '10%',
        borderRadius: 5,
    },
    inputText: {
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: '10%',
        minWidth: '80%',
    },
    text: {
        textAlign: 'left',
    },
    button: {
        backgroundColor: colors.primaryOrange,
        padding: 10,
        minWidth: '80%',
        borderRadius: 5,
        alignItems: 'center',
    },
    textButton: { color: 'white', fontSize: moderateScale(15) },
});
export default styles;
