import { useContext, useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { UserContext } from "../context/UserContex"

export const Cadastro = ({ navigation, route }) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [msg, setMsg] = useState('')

    const { list } = useContext(UserContext)

    const checkInputs = () => {
        if (!nome) {
            setMsg('Digite um nome')
        } else if (!email) {
            setMsg('Digite um email')
        } else if (!fone) {
            setMsg('Digite um fone')
        } else {
            const contato = {
                nome,
                email,
                fone
            }
            // setUserList(prevList => [...prevList, contato])
            // alert(JSON.stringify(contato))
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput style={styles.input} placeholder='Informe seu nome' value={nome} onChangeText={setNome} />
            {(msg.search('nome') > -1) ? <Text style={styles.alert}>{msg}</Text> : false}
            <TextInput style={styles.input} placeholder='Informe seu email' value={email} onChangeText={setEmail} />
            {(msg.search('email') > -1) ? <Text style={styles.alert}>{msg}</Text> : false}
            <TextInput style={styles.input} placeholder='Informe seu fone' value={fone} onChangeText={setFone} />
            {(msg.search('fone') > -1) ? <Text style={styles.alert}>{msg}</Text> : false}

            <TouchableOpacity style={styles.button} onPress={checkInputs}>
                <Text style={styles.buttonText}>Gravar</Text>
            </TouchableOpacity>
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
    alert: {
        color: 'white'
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
        paddingHorizontal: 10,
        marginVertical: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-around'
    }
})
