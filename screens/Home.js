import react from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ route, navigation }) => {

    
    const {Name} = route.params;

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.textStyle}> Hello  {Name? Name : null}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Go back" onPress={() => navigation.goBack()} style={styles.buttonStyle}/>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        textAlign: "center"
    },
    textStyle: {
        fontSize: 20,
    },
    buttonContainer: {
        width: 100,
        marginVertical: 20,
        display : "flex",
        justifyContent: "center",
        alignSelf: "center",
    },
    buttonStyle:{
        borderRadius: 8,

    }
});

export default Home;