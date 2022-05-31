import React, { useState } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { colors } from '../../GlobalScreenStyles';
import { register } from '../../Logic/UserAPI';
import styles from './Styles';

function isValidEmail(email: string) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
}

const RegisterScreen = () => {
    const [step, setStep] = useState<number>(1);

    const [email, setEmail] = useState<string>('');
    const [repeatEmail, setRepeatEmail] = useState<string>('');

    const [nickname, setNickname] = useState<string>('');
    const [birthdate, setBirthdate] = useState<Date>(new Date());
    const [openDateModal, setOpenDateModal] = useState<boolean>(false);

    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    function nextStep() {
        const emailOk =
            step === 1 &&
            email !== '' &&
            isValidEmail(email) &&
            email === repeatEmail;
        const nickAndBirth =
            step === 2 && nickname !== '' && birthdate !== new Date();
        const passwordOk =
            step === 3 && password !== '' && password === repeatPassword;

        if (emailOk || nickAndBirth || passwordOk) {
            setStep(step + 1);
        } else {
            console.log('ERR');
        }
    }

    async function submitRegister() {
        const user = {
            userName: nickname,
            email: email,
            password: password,
            birthDate:
                birthdate.getDay() +
                '/' +
                birthdate.getMonth() +
                '/' +
                birthdate.getFullYear(),
        };
        const response = await register(user);
    }

    return (
        <SafeAreaView style={styles.flex}>
            <StatusBar backgroundColor={colors.primaryOrange} />
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    keyboardShouldPersistTaps="always"
                    style={styles.scrollView}
                >
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            Create new Account
                        </Text>
                    </View>
                    <View style={styles.informativeText}>
                        <Text style={styles.mainTitle}>Hi!</Text>
                        {step === 1 && (
                            <Text style={styles.description}>
                                How we can get in touch with you?
                            </Text>
                        )}
                        {step === 2 && (
                            <Text style={styles.description}>
                                How we can identify you?
                            </Text>
                        )}
                        {step === 3 && (
                            <Text style={styles.description}>
                                Let's protect your account!
                            </Text>
                        )}
                    </View>
                    <View style={styles.container}>
                        {step === 1 && (
                            <View>
                                <Text style={styles.textInput}>Email</Text>
                                <TextInput
                                    style={styles.inputText}
                                    onChangeText={setEmail}
                                    value={email}
                                />
                                <Text style={styles.textInput}>
                                    Repeat Email
                                </Text>
                                <TextInput
                                    style={styles.inputText}
                                    onChangeText={setRepeatEmail}
                                    value={repeatEmail}
                                />
                            </View>
                        )}
                        {step === 2 && (
                            <View>
                                <Text style={styles.textInput}>Nickname</Text>
                                <TextInput
                                    style={styles.inputText}
                                    onChangeText={setNickname}
                                    value={nickname}
                                />
                                <Text style={styles.textInput}>Birthdate</Text>
                                <TouchableOpacity
                                    style={styles.dateInput}
                                    onPress={() => setOpenDateModal(true)}
                                >
                                    <Text>
                                        {birthdate.toLocaleDateString('es-ES')}
                                    </Text>
                                </TouchableOpacity>
                                <DatePicker
                                    locale={'es-ES'}
                                    mode={'date'}
                                    modal={true}
                                    open={openDateModal}
                                    date={birthdate}
                                    onConfirm={(date) => {
                                        setOpenDateModal(false);
                                        setBirthdate(date);
                                    }}
                                    onCancel={() => {
                                        setOpenDateModal(false);
                                    }}
                                />
                            </View>
                        )}
                        {step === 3 && (
                            <View>
                                <Text style={styles.textInput}>Password</Text>
                                <TextInput
                                    style={styles.inputText}
                                    secureTextEntry={true}
                                    onChangeText={setPassword}
                                    value={password}
                                />
                                <Text style={styles.textInput}>
                                    Repeat Password
                                </Text>
                                <TextInput
                                    style={styles.inputText}
                                    secureTextEntry={true}
                                    onChangeText={setRepeatPassword}
                                    value={repeatPassword}
                                />
                            </View>
                        )}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                step < 3 ? nextStep() : submitRegister();
                            }}
                        >
                            <Text style={styles.textButton}>
                                {step < 3 ? 'Next step' : 'Create Account'}
                            </Text>
                        </TouchableOpacity>
                        <View
                            opacity={step > 1 ? 1 : 0}
                            style={styles.backButton}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    step > 1 ? setStep(step - 1) : {};
                                }}
                            >
                                <Text style={styles.textButton}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RegisterScreen;
