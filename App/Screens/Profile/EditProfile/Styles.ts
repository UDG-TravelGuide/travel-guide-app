import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../GlobalScreenStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryOrange,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: moderateScale(15),
        color: 'white',
        marginVertical: 5,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 5,
        padding: 2,
        color: 'black',
    },
    inputText: { padding: 2, color: 'black' },
    profilePictureContainer: {
        alignSelf: 'center',
        elevation: 5,
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 10,
        borderRadius: 999,
    },
    profilePicture: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: 999,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: '15%',
        padding: 10,
        backgroundColor: 'white',
    },
    buttonText: {
        fontWeight: 'bold',
        color: colors.primaryOrange,
        fontSize: moderateScale(15),
    },
});
export default styles;
