import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
type directions = {
    latitudeOrigin: number;
    longitudeOrigin: number;
    latitudeDestiny: number;
    longitudeDestiny: number;
    routeId: number;
};
type Props = {
    route: {
        latitudeInitial: number;
        longitudeInitial: number;
        latitudeFinal: number;
        longitudeFinal: number;
        directions: [directions];
    };
};

interface Direction {
    latitude: number;
    longitude: number;
}

interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

const initialRegion: Region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
};

const GOOGLE_MAPS_API_KEY: string = 'AIzaSyC609kWABckIXgKvXk6ijsfSpMbAxoBjys';

const MapDirections = ({ route }: Props) => {
    const origin: Direction = {
        latitude: route.latitudeInitial,
        longitude: route.longitudeInitial,
    };
    const destination: Direction = {
        latitude: route.latitudeFinal,
        longitude: route.longitudeFinal,
    };
    return (
        <SafeAreaView style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={initialRegion}
                style={styles.map}
            >
                <Marker coordinate={origin} />
                <Marker coordinate={destination} />
                {route.directions &&
                    route.directions.map((item: directions) => {
                        const _origin: Direction = {
                            latitude: item.latitudeOrigin,
                            longitude: item.longitudeOrigin,
                        };
                        const _destination: Direction = {
                            latitude: item.latitudeDestiny,
                            longitude: item.longitudeDestiny,
                        };
                        return (
                            <MapViewDirections
                                key={item.routeId}
                                origin={_origin}
                                destination={_destination}
                                apikey={GOOGLE_MAPS_API_KEY}
                                strokeWidth={3}
                                strokeColor="hotpink"
                            />
                        );
                    })}
            </MapView>
        </SafeAreaView>
    );
};
export default MapDirections;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.9,
    },
});
