import * as React from 'react';
import { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';


export default function Map() {
        const [location, setLocation] = useState(null);
        const [errorMsg, setErrorMsg] = useState(null);
        useEffect(() => {
                (async () => {
                        let { status } = await Location.requestForegroundPermissionsAsync();
                        if (status !== 'granted') {
                                setErrorMsg('Permission to access location was denied');
                                return;
                        }

                        let location = await Location.getCurrentPositionAsync({});
                        setLocation(location);

                })();
        }, []);
        return (
                <View style={styles.container}>
                        <MapView
                                initialRegion={{
                                        latitude: location ? location.coords.latitude : 24.8826782,
                                        longitude: location ? location.coords.longitude : 67.0680806,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                }}
                                style={styles.map} >
                                <Marker coordinate={{
                                        latitude: location ? location.coords.latitude : 24.8826782,
                                        longitude: location ? location.coords.longitude : 67.0680806
                                }} />
                        </MapView>
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
        },
        map: {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
        },
});