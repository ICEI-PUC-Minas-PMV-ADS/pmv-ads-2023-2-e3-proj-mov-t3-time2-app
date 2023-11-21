import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper'


const Status = () => {
    const [checked, setChecked] = React.useState('andamento');
    return (
        <View style={styles.containerRadio}>
            <View style={styles.containerItem}>
                <RadioButton
                    value="andamento"
                    color="#620B66"
                    status={checked === 'andamento' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('andamento')}
                />
                <Text>Em Andamento</Text>
            </View>
            <View style={styles.containerItem}>
                <RadioButton
                    value="finalizado"
                    color="#0D7634"
                    status={checked === 'finalizado' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('finalizado')}
                />
                <Text>Finalizado</Text>
            </View>


        </View>
    )
};

const styles = StyleSheet.create({
    containerRadio: {
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    containerItem: {
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

export default Status;
