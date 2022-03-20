import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';


export default function CameraApp() {
        const [hasPermission, setHasPermission] = useState(null);
        const [type, setType] = useState(Camera.Constants.Type.front);
        const camera = useRef(null)

        useEffect(() => {
                (async () => {
                        const { status } = await Camera.requestCameraPermissionsAsync();
                        const { library } = await MediaLibrary.requestPermissionsAsync()
                        setHasPermission(status === 'granted');
                })();
        }, []);

        if (hasPermission === null) {
                return <View />;
        }
        if (hasPermission === false) {
                return <Text>No access to camera</Text>;
        }
        const take_selfie = async () => {
                let photo = await camera.current.takePictureAsync();
                console.log("photo=> ", photo)
                await MediaLibrary.saveToLibraryAsync(photo.uri)
        }
        return (
                <View style={styles.container}>
                        <Camera ref={camera} flashMode={Camera.Constants.FlashMode.on} style={styles.camera} type={type}>
                                <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                        setType(
                                                                type === Camera.Constants.Type.back
                                                                        ? Camera.Constants.Type.front
                                                                        : Camera.Constants.Type.back
                                                        );
                                                }}>
                                                <Text style={styles.text}> Flip </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => {
                                                        take_selfie()
                                                }}
                                        >
                                                <Text style={styles.text}> Take Selfie </Text>
                                        </TouchableOpacity>
                                </View>
                        </Camera>
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
        },
        camera: {
                flex: 1,
        },
        buttonContainer: {
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                margin: 20,
        },
        button: {
                flex: 1,
                alignSelf: 'flex-end',
                alignItems: 'center',
        },
        text: {
                fontSize: 16,
                color: 'white',
                justifyContent: 'center'
        },
});