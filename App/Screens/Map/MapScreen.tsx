import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HI</Text>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <Text>HO</Text>
        </View>
    );
};
export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
