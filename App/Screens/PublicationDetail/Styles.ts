import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../GlobalScreenStyles';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.backgroundColor,
    },
    title: {
        fontSize: moderateScale(20),
        color: 'black',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: moderateScale(15),
        color: 'black',
        fontWeight: 'bold',
    },
    text: { fontSize: moderateScale(15), color: 'black', paddingHorizontal: 5 },
    pointsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    points: { fontSize: moderateScale(20), padding: 2 },
    icon: {
        fontSize: moderateScale(20),
        padding: 2,
    },
    activeIcon: {
        fontSize: moderateScale(20),
        padding: 2,
        color: colors.primaryOrange,
    },
    imageContainer: {
        width: moderateScale(100),
        height: moderateScale(100),
        alignSelf: 'center',
    },
});
export default styles;
