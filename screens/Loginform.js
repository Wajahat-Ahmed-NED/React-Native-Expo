import Checkbox from "expo-checkbox";
import { View, Text, TextInput, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native";
import { react, useState } from "react";
import {
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Loginform = ({ navigation }) => {


    const [agree, setAgree] = useState(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    let [fontsLoad, error] = useFonts({
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_700Bold,
    });


    if (!fontsLoad) {
        return <AppLoading />;
    }


    const submit = () => {
        console.log(userName)
        console.log(password)
        navigation.navigate("Home", {Name : `${userName}`})
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainHeader}>
                    Login Form
                </Text>
            </View>

            <View>
                <Text style={styles.textStyle}>
                    You can Login here by entering your details
                </Text>
            </View>


            <View style={styles.inputContainer}>
                <Text style={styles.textStyle}>
                    Enter Email
                </Text>
                <TextInput style={styles.inputBox}
                    autoCapitalize="none"
                    autoComplete={false}
                    value={userName}
                    onChangeText={(username) => setUserName(username)}
                />

            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.textStyle}>
                    Enter Password
                </Text>
                <TextInput style={styles.inputBox}
                    autoCapitalize="none"
                    autoComplete={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />

            </View>

            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={(agree) ? "blue" : undefined}
                />


                <Text style={styles.checkboxText}>
                    I agree with the terms and conditions
                </Text>
            </View>

            <View style={styles.buttonArea}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: (agree) ? "blue" : "grey" }]} disabled={!agree}
                    onPress={submit}
                >
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 30,
        paddingVertical: 80,
    },
    mainHeader: {
        fontSize: 25,
        paddingTop: 20,
        paddingBottom: 15,
        fontFamily: "JosefinSans_700Bold",

    },
    textStyle: {
        fontSize: 16,
        marginTop: 8,
        marginBottom: 5,
        fontFamily: "JosefinSans_500Medium",

    },
    inputContainer: {
        marginTop: 20,
    },
    inputBox: {
        borderColor: "black",
        height: 40,
        width: "100%",
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,

    },

    checkboxContainer: {
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
    },
    checkboxText: {
        marginLeft: 10,
        fontFamily: "JosefinSans_500Medium",

    },
    button: {
        backgroundColor: "blue",
        height: 40,
        width: "80%",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    buttonArea: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    loginText: {
        color: "white",
        textAlign: "center",

    }
});

export default Loginform;