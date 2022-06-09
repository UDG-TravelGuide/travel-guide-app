import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../GlobalScreenStyles';

const styles = StyleSheet.create({
    listHeader: {
        backgroundColor: colors.primaryOrange,
        padding: 10,
        justifyContent: 'center',
    },
    inputContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 5,
    },
    icon: {
        fontSize: moderateScale(20),
    },
    headerInput: {
        width: '95%',
    },
    filter: {
        alignSelf: 'center',
        marginTop: 7,
        padding: 3,
        backgroundColor: 'white',
        borderRadius: 99,
    },
    filterText: {
        fontSize: moderateScale(15),
        backgroundColor: colors.primaryOrange,
        padding: 7,
        borderRadius: 99,
        color: 'white',
    },
    card: {
        backgroundColor: 'white',
        elevation: 5,
        padding: 15,
        margin: 7,
        borderRadius: 5,
    },
    title: {
        fontSize: moderateScale(15),
        color: 'black',
        fontWeight: 'bold',
    },
    description: {
        fontSize: moderateScale(15),
        color: 'black',
        fontWeight: '300',
    },
    more: {
        fontSize: moderateScale(13),
        color: colors.primaryOrange,
    },
    pointsContainer: {
        marginTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    points: {
        fontSize: moderateScale(12),
        color: 'gray',
    },
    pointsNum: {
        fontSize: moderateScale(14),
        color: 'gray',
    },
    cardBottom: {
        marginTop: 5,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        borderStyle: 'dashed',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
export default styles;
