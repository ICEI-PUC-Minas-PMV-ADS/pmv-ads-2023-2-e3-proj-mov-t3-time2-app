import react from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Perfil() {
    return (
        <View style={styles.text}>
        <Text>Perfil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center',
    },
});