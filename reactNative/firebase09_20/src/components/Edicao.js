import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import database from '../config/FirebaseConfig'
import Toast from 'react-native-toast-message'

export const Edicao = ({ navigation, route }) => {
    const [nome, setNome] = useState(route.params.contato.nome)
    const [email, setEmail] = useState(route.params.contato.email)
    const [fone, setFone] = useState(route.params.contato.fone)
    const id = route.params.contato.id

    const updateContato = () => {
        if (!nome || !email || !fone){
            Toast.show({
                type: 'error',
                text1: 'Dados inválidos!',
                text2: 'Algum campo obrigatório está vazio.'
            })
        } else {
            database.collection('contatos').doc(id).update({
                nome,
                email,
                fone
            })
            navigation.navigate('Lista')
            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Contato atualizado.'
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text>Tela de edicao</Text>
            <Text>Id:</Text>
            <TextInput defaultValue={id} style={styles.input} />
            <Text>Nome:</Text>
            <TextInput value={nome} onChangeText={setNome} style={styles.input} />
            <Text>E-mail:</Text>
            <TextInput value={email} onChangeText={setEmail} style={styles.input} />
            <Text>Fone:</Text>
            <TextInput value={fone} onChangeText={setFone} style={styles.input} />
            
            <TouchableOpacity onPress={updateContato}>
                <Text style={styles.buttonNav}>Salva Edição</Text>
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
        marginVertical: 5
    },
    buttonNav: {
        backgroundColor: 'purple',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 5
    }
})