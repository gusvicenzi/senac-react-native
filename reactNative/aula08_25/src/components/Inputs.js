import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Inputs = (props) => {
    const [carro, setCarro] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de veículos</Text>
            <TextInput style={styles.input} placeholder='Digite um carro' value={carro} onChangeText={setCarro} />
            <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {
                props.gravarDados(carro)
                setCarro('')
            }}>
                <Text style={styles.buttonText}>
                    Gravar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                props.limpaDados()
                setCarro('')
            }}>
                <Text style={styles.buttonText}>
                    Limpar
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        color: 'white'
    },
    input: {
        color: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: 'purple',
        padding: 8,
        borderRadius: 8
    },
    buttonText: {
        color: 'white'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-around'
    }
});
