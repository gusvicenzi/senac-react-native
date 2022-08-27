import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const Cadastro = ({ navigation, route }) => {
    const [carro, setCarro] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>

            <TextInput style={styles.input} placeholder='Digite um carro' value={carro} onChangeText={setCarro} />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    route.params.gravarDados(carro)
                    setCarro('')
                }}>
                    <Text style={styles.buttonText}>
                        Gravar
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    route.params.limparDados()
                    setCarro('')
                }}>
                    <Text style={styles.buttonText}>
                        Limpar
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Consulta',{carrosArray: route.params.carrosArray})
                }}>
                    <Text style={styles.buttonText}>
                        Consultar
                </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginVertical: 5,
        fontSize: 30,
        color: 'purple'
    },
    button: {
        backgroundColor: 'purple',
        padding: 8,
        borderRadius: 8
    },
    buttonText: {
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
    buttonsContainer: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-around'
    }
})
