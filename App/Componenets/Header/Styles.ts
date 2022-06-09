import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../GlobalScreenStyles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryOrange,
        paddingHorizontal: 10,
    },
    title: { color: 'white', fontSize: moderateScale(20), textAlign: 'center' },
    icon: {
        color: 'white',
        fontSize: moderateScale(20),
    },
    empty: {
        color: colors.primaryOrange,
        fontSize: moderateScale(20),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
export default styles;
