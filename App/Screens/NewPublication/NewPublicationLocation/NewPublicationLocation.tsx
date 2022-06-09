import {
    Dimensions,
    SafeAreaView,
    View,
    Text,
    Modal,
    TouchableOpacity,
    Button,
} from 'react-native';
import React, { useState } from 'react';
import MapView, { MapEvent, PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Header from '../../../Componenets/Header/Header';
import styles from './Styles';
import { colors } from '../../../GlobalScreenStyles';

type input = 'origin' | 'destination' | 'directions';
type mark = {
    latitude: number;
    longitude: number;
} | null;

const NewPublicationLocation = ({ navigation }) => {
    const [saveInput, setSaveInput] = useState<input | null>(null);
    const [showMap, setShowMap] = useState<boolean>(false);
    const [marker, setMarker] = useState<mark>(null);
    const [origin, setOrigin] = useState<mark>(null);
    const [destination, setDestionation] = useState<mark>(null);
    const [directions, setDirections] = useState<[mark] | null>(null);

    const onLocationSelect = (event: MapEvent) => {
        setMarker(event.nativeEvent.coordinate);
    };

    const showModal = (input: input) => {
        setMarker(null);
        setSaveInput(input);
        setShowMap(true);
    };

    const saveMarker = (mark: mark) => {
        switch (saveInput) {
            case 'origin': {
                setOrigin(mark);
                break;
            }
            case 'destination': {
                setDestionation(mark);
                break;
            }
            case 'directions': {
                directions?.push(mark);
                break;
            }
            default: {
                break;
            }
        }
        setShowMap(false);
    };

    return (
        <>
            <Header onBackPress={() => navigation.goBack()} title="New route" />
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Origin</Text>
                <TouchableOpacity
                    style={styles.input}
                    onPress={() => showModal('origin')}
                >
                    <Text>
                        {origin
                            ? 'lat:' +
                              origin?.latitude +
                              'long:' +
                              origin?.longitude
                            : 'Select origin...'}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.title}>Destination</Text>
                <TouchableOpacity
                    style={styles.input}
                    onPress={() => showModal('destination')}
                >
                    <Text>
                        {destination
                            ? 'lat:' +
                              destination?.latitude +
                              'long:' +
                              destination?.longitude
                            : 'Select destination...'}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.title}>Directions</Text>
                <TouchableOpacity
                    style={styles.input}
                    onPress={() => showModal('directions')}
                >
                    <Text>Save</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <Modal visible={showMap} onRequestClose={() => setShowMap(false)}>
                <Header
                    title="Select coordinates"
                    onBackPress={() => setShowMap(false)}
                />
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onPress={onLocationSelect}
                >
                    {marker && <Marker coordinate={marker} />}
                </MapView>
                <View style={styles.button}>
                    <Button
                        title="Save"
                        disabled={!marker}
                        onPress={() => {
                            saveMarker(marker);
                        }}
                        color={colors.primaryOrange}
                    />
                </View>
            </Modal>
        </>
    );
};

export default NewPublicationLocation;
