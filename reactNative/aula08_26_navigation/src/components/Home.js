import { NavigationContainer } from "@react-navigation/native"
import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const carros = ['Fusca', 'Golf', 'Jetta']

export const Home = ({ navigation }) => {
    const [carrosArray, setCarrosArray] = useState(carros)

    const gravarDados = (carro) => {
        console.log(carro)
        if (carrosArray.find(item => item === carro ? true : false)) {
            alert('Item repetido')
        } else {
            setCarrosArray(prevState => [...prevState, carro])
        }
    }

    const limparDados = () => {
        setCarrosArray([])
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Home</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Cadastro', {gravarDados, limparDados, carrosArray})
                }}>
                    <Text style={styles.button}>Cadastro</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Consulta', {carrosArray})
                }}>
                    <Text style={styles.button}>Consulta</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Edicao', { subtitulo: 'Aqui podemos editar os itens' })
                }}>
                    <Text style={styles.button}>Nav com parametros</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: 350,
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#000',
        color: 'white',
        padding: 10,
        borderRadius: 5
    },
    title: {
        marginVertical: 5,
        fontSize: 30,
        color: 'purple'
    }
});
