import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { getPublications } from '../../Logic/PublicationsAPI';
import styles from './Styles';
import Icon from 'react-native-vector-icons/Feather';
import { getCountries } from '../../Logic/EntityAPI';

const PublicationsListScreen = ({ navigation }: any) => {
    const [publications, setPublications] = useState(null);
    const [countries, setCountries] = useState(null);

    const loadPublications = async () => {
        const _publications = await getPublications();
        setPublications(_publications);
    };
    const loadCountries = async () => {
        const _countries = await getCountries();
        setCountries(_countries);
    };

    useEffect(() => {
        loadPublications();
        loadCountries();
    }, []);

    const listHeader = () => {
        return (
            <SafeAreaView style={styles.listHeader}>
                <View style={styles.inputContainer}>
                    <Icon name="search" style={styles.icon} />
                    <TextInput style={styles.headerInput} />
                </View>
                <TouchableOpacity style={styles.filter}>
                    <Text style={styles.filterText}>Country</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    };

    return (
        <FlatList
            data={publications}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={listHeader}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate('PublicationDetail', {
                                publication: item,
                            })
                        }
                    >
                        <Text style={styles.title}>
                            {item.title}+ {item.id}
                        </Text>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                        <View style={styles.cardBottom}>
                            <View style={styles.pointsContainer}>
                                <Text style={styles.points}>Points</Text>
                                <Text style={styles.pointsNum}>
                                    {item.points}
                                </Text>
                            </View>
                            <Text style={styles.more}>See More..</Text>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default PublicationsListScreen;
