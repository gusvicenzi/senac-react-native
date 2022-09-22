import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import db from '../config/FirebaseConfig'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const Lista = ({ navigation, route }) => {
    const [contatos, setContatos] = useState()

    useEffect(() => {
        db.collection('contatos').onSnapshot((query) => {
            const list = []
            query.forEach(doc => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setContatos(list)
        })
    }, [])

    const deleteContato = (id) => {
        db.collection('contatos').doc(id).delete()
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={contatos}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                ListFooterComponent={() => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                            <Text style={styles.buttonNav}>Ir para tela de Cadastro</Text>
                        </TouchableOpacity>
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <TouchableOpacity onPress={() => deleteContato(item.id)}>
                                <Icon name='delete' style={styles.itemText} />
                            </TouchableOpacity>
                            <Text style={[styles.itemText, { marginLeft: 10 }]} onPress={() => navigation.navigate('Edicao', { contato: item })}>{item.nome}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonNav: {
        backgroundColor: 'purple',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
        fontSize: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'grey',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5
    },
    itemText: {
        fontSize: 20,
        color: 'purple'
    }
})