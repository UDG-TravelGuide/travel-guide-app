import React from 'react';
import { SafeAreaView, View, Text, Image, StatusBar } from 'react-native';
import styles from './Styles';
import { colors } from '../../GlobalScreenStyles';

type Props = {};

const dummy = () => {
    return (
        <View
            style={{
                elevation: 2,
                margin: 10,
                width: 100,
                height: 80,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
            }}
        >
            <Text>YOUR TITLE</Text>
            <Text>Author</Text>
            <Text>Description...?</Text>
        </View>
    );
};

const ProfileScreen = (props: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primaryOrange} />
            <View style={styles.top}>
                <View style={styles.profilePictureContainer}>
                    <Image
                        style={styles.profilePicture}
                        source={require('../../Assets/Images/blankprofile.png')}
                    />
                </View>
                <Text style={styles.profileName}>BOB ESPONJA</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Your Publications</Text>
                <View style={styles.board}>{dummy()}</View>
                <Text style={styles.title}>Publications you liked</Text>
                <View style={styles.board}>{dummy()}</View>
                <View style={styles.board} />
                <Text style={styles.title}>Edit account</Text>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
