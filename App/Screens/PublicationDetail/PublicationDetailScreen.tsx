import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import Header from '../../Componenets/Header/Header';
import styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReactNativeModal from 'react-native-modal';
import MapDirections from '../../Componenets/MapDirections/MapDirections';
import {
    getPublicationAlreadyVoted,
    getPublicationHasFavorite,
    publicationAddFavorite,
    publicationAddPoints,
    publicationRemoveFavorite,
    publicationRemovePoints,
} from '../../Logic/PublicationsAPI';
import UserContext from '../../Contexts/UserContext';

const PublicationDetailScreen = ({ navigation, route }: any) => {
    const { token } = useContext(UserContext);

    const isLoged = token !== null && token !== undefined && token !== '';
    const publication = route.params?.publication;
    const [points, setPoints] = useState(route.params?.publication.points);
    const [showMap, setShowMap] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isVoted, setIsVoted] = useState(false);

    const loadFavorite = async () => {
        const favorite = await getPublicationHasFavorite(token, publication.id);
        setIsFavorite(favorite);
    };

    const loadVotedStatus = async () => {
        const voted = await getPublicationAlreadyVoted(token, publication.id);
        setIsVoted(voted);
    };

    useEffect(() => {
        if (isLoged) {
            loadFavorite();
            loadVotedStatus();
        }
    }, []);

    const manageFavorite = async () => {
        if (isFavorite) {
            publicationRemoveFavorite(token, publication.id);
        } else {
            publicationAddFavorite(token, publication.id);
        }
        setIsFavorite(!isFavorite);
    };

    const manageVotes = async () => {
        if (isVoted) {
            publicationRemovePoints(token, publication.id);
            setPoints(points - 1);
        } else {
            publicationAddPoints(token, publication.id);
            setPoints(points + 1);
        }
        setIsVoted(!isVoted);
    };

    return (
        <>
            <Header onBackPress={() => navigation.goBack()} title="Route" />
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{publication.title}</Text>
                <View style={styles.pointsContainer}>
                    <AntDesign name="barchart" style={styles.icon} />
                    <Text style={styles.points}>{points}</Text>
                    {isLoged && (
                        <AntDesign
                            name="like1"
                            style={isVoted ? styles.activeIcon : styles.icon}
                            onPress={() => manageVotes()}
                        />
                    )}
                    {isLoged && (
                        <AntDesign
                            name="star"
                            style={isFavorite ? styles.activeIcon : styles.icon}
                            onPress={() => manageFavorite()}
                        />
                    )}
                </View>
                <Text style={styles.subtitle}>Description</Text>
                <Text style={styles.text}>{publication.description}</Text>
                <Text style={styles.subtitle}>route</Text>
                <MaterialCommunityIcons
                    onPress={() => setShowMap(true)}
                    name="map-search-outline"
                    style={styles.icon}
                />
                <Text style={styles.subtitle}>content</Text>
                {publication.contents.map((item: any) => {
                    switch (item.type) {
                        case 'text':
                            return (
                                <Text style={styles.text} key={item.position}>
                                    {item.value}
                                </Text>
                            );
                        case 'image':
                            return (
                                <Image
                                    key={item.position}
                                    style={styles.imageContainer}
                                    source={{
                                        uri: `data:image/jpeg;base64,${item.image.value}`,
                                    }}
                                />
                            );
                        default:
                            return null;
                    }
                })}
                <ReactNativeModal
                    isVisible={showMap}
                    onRequestClose={() => setShowMap(false)}
                >
                    <MapDirections route={publication.route} />
                </ReactNativeModal>
            </ScrollView>
        </>
    );
};

export default PublicationDetailScreen;
