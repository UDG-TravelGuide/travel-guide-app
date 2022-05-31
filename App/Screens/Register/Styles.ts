import { StyleSheet } from 'react-native';
import { colors } from '../../GlobalScreenStyles';
import { moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    flex: { flex: 1 },
    scrollView: { backgroundColor: colors.primaryOrange },
    header: {
        borderBottomColor: 'white',
        paddingVertical: '2%',
        borderBottomWidth: 1,
        paddingHorizontal: '5%',
        alignContent: 'center',
    },
    headerText: { color: 'white', textAlign: 'right' },
    container: {
        backgroundColor: colors.primaryOrange,
        alignItems: 'center',
    },
    informativeText: { paddingVertical: '5%', paddingHorizontal: '10%' },
    mainTitle: { color: 'white', fontSize: moderateScale(25) },
    description: {
        color: 'white',
        fontSize: moderateScale(18),
        textAlign: 'left',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        width: '80%',
        borderRadius: 5,
        alignItems: 'center',
    },
    backButton: { width: '90%', alignItems: 'center', marginTop: 15 },
    inputText: {
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginBottom: '10%',
        minWidth: '80%',
        maxWidth: '80%',
    },
    dateInput: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginBottom: '10%',
        marginTop: '2%',
        minWidth: '80%',
        maxWidth: '80%',
    },
    textInput: { color: 'white', fontSize: moderateScale(15) },
    textButton: { color: colors.primaryOrange },
});
export default styles;
