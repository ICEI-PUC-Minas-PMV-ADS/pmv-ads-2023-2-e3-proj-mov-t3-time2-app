import react from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Projetos() {
    return (
        <View style={styles.container}>
        <Text>Projetos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center',
    },
});