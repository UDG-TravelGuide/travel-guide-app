import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from './Styles';
import Header from '../../../Componenets/Header/Header';
import DatePicker from 'react-native-date-picker';
import { getUser, putUser } from '../../../Logic/UserAPI';
import UserContext from '../../../Contexts/UserContext';

const emptyUser = {
    userName: '',
    email: '',
    password: '',
    birthDate: '',
    profilePhoto: '',
};

const EditProfileScreen = ({ route, navigation }) => {
    const { token } = useContext(UserContext);
    const [user, setUser] = useState<{
        userName: string;
        email: string;
        password: string;
        birthDate: string;
        profilePhoto: string;
    }>(emptyUser);
    const [openDateModal, setOpenDateModal] = useState<boolean>(false);
    const addImage = async () => {
        try {
            const result = await launchImageLibrary({
                selectionLimit: 1,
                mediaType: 'photo',
                includeBase64: true,
            });
            if (result.assets) {
                updateValue('profilePhoto', result.assets[0].base64);
            }
        } catch (err) {}
    };

    const loadUser = async () => {
        const _user = await getUser(token, route.params.userId);
        console.log(_user);
        setUser(_user);
    };

    useEffect(() => {
        loadUser();
    }, []);

    const updateValue = (item: string, value: string) => {
        setUser({ ...user, [item]: value });
    };

    const saveDate = (date: Date) => {
        updateValue(
            'birthDate',
            date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear(),
        );
    };

    const saveProfile = async () => {
        putUser(token, route.params.userId, user);
    };

    return (
        <>
            <Header
                onBackPress={() => navigation.goBack()}
                title="Edit profile"
            />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.profilePictureContainer}
                    onPress={() => addImage()}
                >
                    {user.profilePhoto ? (
                        <Image
                            style={styles.profilePicture}
                            source={{
                                uri: `data:image/jpeg;base64,${user.profilePhoto}`,
                            }}
                        />
                    ) : (
                        <Image
                            style={styles.profilePicture}
                            source={require('../../../Assets/Images/blankprofile.png')}
                        />
                    )}
                </TouchableOpacity>
                <Text style={styles.title}>Nickname</Text>
                <TextInput
                    style={styles.input}
                    value={user.userName}
                    onChangeText={(text) => updateValue('userName', text)}
                />
                <Text style={styles.title}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={user.email}
                    onChangeText={(text) => updateValue('email', text)}
                />
                <Text style={styles.title}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={user.password}
                    onChangeText={(text) => updateValue('password', text)}
                />
                <Text style={styles.title}>BirthDate</Text>
                <TouchableOpacity
                    style={styles.input}
                    onPress={() => setOpenDateModal(true)}
                >
                    <Text style={styles.inputText}>{user.birthDate}</Text>
                </TouchableOpacity>
                <DatePicker
                    locale={'es-ES'}
                    mode={'date'}
                    modal={true}
                    open={openDateModal}
                    date={
                        user.birthDate === ''
                            ? new Date()
                            : new Date(user.birthDate)
                    }
                    onConfirm={(date) => saveDate(date)}
                    onCancel={() => {
                        setOpenDateModal(false);
                    }}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => saveProfile()}
                >
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

export default EditProfileScreen;
