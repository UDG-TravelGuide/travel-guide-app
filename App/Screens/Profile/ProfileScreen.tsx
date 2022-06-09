import React, { useContext, useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StatusBar,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import { colors } from '../../GlobalScreenStyles';
import { getCurrent } from '../../Logic/UserAPI';
import UserContext from '../../Contexts/UserContext';
import {
    getUserFavorites,
    getUserPublications,
} from '../../Logic/PublicationsAPI';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';

const emptyList = () => {
    return (
        <View style={styles.empty}>
            <Icon name="playlist-plus" style={styles.emptyIcon} />
        </View>
    );
};
const cardView = (title: string, points: string) => {
    return (
        <View style={styles.cardView}>
            <Text>{title}</Text>
            <Text>Points:</Text>
            <Text>{points}</Text>
        </View>
    );
};

const ProfileScreen = ({ navigation }) => {
    const { token } = useContext(UserContext);

    const [user, setUser] = useState(null);
    const [userPublications, setUserPublications] = useState(null);
    const [favoritePublications, setFavoritePublications] = useState(null);

    const loadUser = async () => {
        const _user = await getCurrent(token);
        setUser(_user);
        const _userPublications = await getUserPublications(_user.id, token);
        setUserPublications(_userPublications);
        const _favoritePublications = await getUserFavorites(token);
        setFavoritePublications(_favoritePublications);
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primaryOrange} />
            <View style={styles.top}>
                <View style={styles.iconContainer}>
                    <Icon
                        name="account-wrench"
                        style={styles.icon}
                        onPress={() =>
                            navigation.navigate('EditProfile', {
                                userId: user.id,
                            })
                        }
                    />
                </View>
                <View style={styles.profilePictureContainer}>
                    <Image
                        style={styles.profilePicture}
                        source={require('../../Assets/Images/blankprofile.png')}
                    />
                </View>
                <Text style={styles.profileName}>{user?.userName}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Your Publications</Text>
                <View style={styles.board} />
                <FlatList
                    horizontal={true}
                    data={userPublications}
                    renderItem={({ item }) => {
                        return cardView(item.title, item.points);
                    }}
                    ListEmptyComponent={emptyList()}
                />
                <Text style={styles.title}>Your Favourites</Text>
                <View style={styles.board} />
                <FlatList
                    horizontal={true}
                    data={favoritePublications}
                    renderItem={({ item }) => {
                        return cardView(item.title, item.points);
                    }}
                    ListEmptyComponent={emptyList()}
                />
                <View style={styles.board} />
                <TouchableOpacity
                    style={styles.bottom}
                    onPress={() => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Loggout' }],
                            }),
                        );
                    }}
                >
                    <Text style={styles.titleBlue}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
