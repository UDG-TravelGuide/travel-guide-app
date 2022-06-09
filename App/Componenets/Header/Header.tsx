import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../GlobalScreenStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './Styles';

type Props = {
    onBackPress: () => void;
    title?: string;
    rightIcon?: any;
    righIconPress?: () => void;
};

const Header = ({
    onBackPress = () => {},
    title = '',
    rightIcon = undefined,
    righIconPress,
}: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={colors.primaryOrange}
                barStyle={'light-content'}
            />
            <View style={styles.row}>
                <Icon name="left" style={styles.icon} onPress={onBackPress} />
                <Text style={styles.title}>{title}</Text>
                <Icon
                    name="left"
                    style={rightIcon ? styles.icon : styles.empty}
                    onPress={righIconPress}
                />
            </View>
        </SafeAreaView>
    );
};

export default Header;
