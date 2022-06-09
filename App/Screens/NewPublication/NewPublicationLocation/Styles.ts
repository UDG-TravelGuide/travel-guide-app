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
    input: {
        backgroundColor: 'white',
        paddingVertical: 10,
        marginVertical: 5,
        borderRadius: 5,
        paddingLeft: 5,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: '75%',
    },
});
export default styles;
