import { StyleSheet } from 'react-native';
import { colors } from '../../GlobalScreenStyles';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
    },
    top: {
        elevation: 5,
        paddingBottom: '5%',
        backgroundColor: colors.primaryOrange,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePictureContainer: {
        elevation: 5,
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        borderRadius: 999,
    },
    profilePicture: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: 999,
    },
    profileName: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: moderateScale(16),
    },
    content: { paddingVertical: 10, paddingHorizontal: 10 },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: moderateScale(16),
        padding: 2,
    },
    board: {
        borderTopColor: 'orange',
        borderTopWidth: 1,
    },
});
export default styles;
