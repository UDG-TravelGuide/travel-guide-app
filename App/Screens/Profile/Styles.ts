import { StyleSheet } from 'react-native';
import { colors } from '../../GlobalScreenStyles';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    top: {
        elevation: 5,
        paddingBottom: '5%',
        backgroundColor: colors.primaryOrange,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 15,
        paddingTop: 5,
    },
    icon: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: moderateScale(25),
    },
    profilePictureContainer: {
        elevation: 5,
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        borderRadius: 999,
        alignSelf: 'center',
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
    cardView: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        margin: 5,
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '30%',
    },
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    emptyIcon: {
        fontSize: moderateScale(30),
        color: 'black',
    },
    titleBlue: {
        fontSize: moderateScale(16),
        color: 'blue',
    },
    bottom: {
        justifyContent: 'flex-end',
        marginVertical: '20%',
        alignItems: 'center',
    },
});
export default styles;
