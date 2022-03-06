import Checkbox from "expo-checkbox";
import { View, Text, TextInput, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native";
import { react, useState } from "react";

const Loginform = () => {

    const [agree, setAgree] = useState(false)
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainHeader}>
                    Login Form
                </Text>
            </View>

            <View>
                <Text style={styles.formText}>
                    You can Login here by entering your details
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>
                    Enter Email
                </Text>
                <TextInput style={styles.inputBox}
                    autoCapitalize="none"
                    autoComplete={false}

                />

            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>
                    Enter Password
                </Text>
                <TextInput style={styles.inputBox}
                    autoCapitalize="none"
                    autoComplete={false}
                    secureTextEntry={true}
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
                style={[styles.button , {backgroundColor: (agree) ?  "blue"  : "grey"}]} disabled={!agree}
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
        padding: 30,
    },
    mainHeader: {
        fontSize: 25,
        paddingTop: 20,
        paddingBottom: 15,
    },
    formText: {
        fontSize: 16,
        marginVertical: 8,
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
    inputLabel: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
    },
    checkboxContainer: {
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
    },
    checkboxText: {
        marginLeft: 10
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