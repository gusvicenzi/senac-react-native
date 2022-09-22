import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import database from '../config/FirebaseConfig'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Toast from 'react-native-toast-message'

export const Cadastro = ({ navigation, route }) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')

    const addContato = () => {

        if (!nome || !email || !fone) {
            Toast.show({
                type: 'error',
                text1: 'Dados inválidos!',
                text2: 'Algum campo obrigatório está vazio.'
            })
        } else {
            database.collection('contatos').add({
                nome,
                email,
                fone
            })
            navigation.navigate('Lista')
            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Contato criado.'
            })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput value={nome} onChangeText={setNome} style={styles.input} placeholder='Nome' />
            <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder='Email' />
            <TextInput value={fone} onChangeText={setFone} style={styles.input} placeholder='Fone' />
            <TouchableOpacity onPress={addContato}>
                <Icon name='add' style={styles.buttonAdd} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 200,
        backgroundColor: '#AAA',
        borderRadius: 10,
        marginVertical: 5,
        fontSize: 18
    },
    buttonNav: {
        backgroundColor: 'purple',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 5
    },
    buttonAdd: {
        backgroundColor: 'purple',
        color: 'white',
        fontSize: 20,
        borderRadius: 30,
        padding: 10
    }
})