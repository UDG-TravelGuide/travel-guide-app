import { TouchableOpacity, Text, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './Styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainNavigatorParams } from '../../Navigator';

type Props = NativeStackScreenProps<MainNavigatorParams>;
const HomeScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.LoginButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.LoginButton}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.LoginButton}
                onPress={() => navigation.navigate('Map')}
            >
                <Text style={styles.text}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.LoginButton}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.LoginButton}
                onPress={() => navigation.navigate('NewPublication')}
            >
                <Text style={styles.text}>NewPublication</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.LoginButton}
                onPress={() => navigation.navigate('PublicationsList')}
            >
                <Text style={styles.text}>PublicationsList</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
export default HomeScreen;
