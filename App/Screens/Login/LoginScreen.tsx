import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';
import React, { useContext, useState } from 'react';
import styles from './Styles';
import { login } from '../../Logic/UserAPI';
import UserContext from '../../Contexts/UserContext';
import { useNavigation, CommonActions } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const { token, setToken } = useContext(UserContext);
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function loginIn() {
        const _token = await login({ email: user, password: password });
        if (_token) {
            setToken(_token);
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Logged' }],
                }),
            );
        } else {
            Alert.alert('ATENTION!', 'Incorrect Credentials!');
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.middleContainer}>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={setUser}
                    value={user}
                />
                <Text>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => loginIn()}
                >
                    <Text style={styles.textButton}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
