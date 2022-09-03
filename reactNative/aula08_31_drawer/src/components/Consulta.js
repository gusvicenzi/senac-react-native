import { useContext, useState } from "react"
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { UserContext } from "../context/UserContex"

const Item = ({ item, handleClick, backgroundColor, textColor, visible, selectedIdState }) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')

    const { list, setList } = useContext(UserContext)

    const limpar = () => {
        setNome('')
        setEmail('')
        setFone('')
        selectedIdState.setSelectedId('')
    }
    
    const updateUser = () => {
        setList(prevList => prevList.map((item, index) => {
            if (index === selectedIdState.selectedId) {
                let newItem = { nome, email, fone }
                if (!nome) {
                    newItem = { ...newItem, nome: item.nome }
                }
                if (!email) {
                    newItem = { ...newItem, email: item.email }
                }
                if (!fone) {
                    newItem = { ...newItem, fone: item.fone }
                }
                limpar()
                return newItem
            } else {
                return item
            }
        }))
    }

    const deleteUser = () => {
        setList(prevList => prevList.filter((item, index) => index !== selectedIdState.selectedId))
        limpar()
    }


    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <View style={[styles.user, backgroundColor]}>
                <Text style={[styles.item, textColor]}>{item.nome}</Text>
                <Text style={[styles.item, textColor]}>{item.email}</Text>
                <Text style={[styles.item, textColor]}>{item.fone}</Text>

                <View style={[styles.editSection, { display: visible }]}>
                    <TextInput style={styles.input} placeholder='Editar nome' value={nome} onChangeText={setNome} />
                    <TextInput style={styles.input} placeholder='Editar email' value={email} onChangeText={setEmail} />
                    <TextInput style={styles.input} placeholder='Editar fone' value={fone} onChangeText={setFone} />
                    <View style={styles.editButtonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={deleteUser}>
                            <Text>Deletar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={updateUser}>
                            <Text>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export const Consulta = () => {
    const [selectedId, setSelectedId] = useState('')
    const { list } = useContext(UserContext)

    const renderItem = ({ item, index }) => {
        const backgroundColor = index === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = index === selectedId ? 'white' : 'black';
        const visible = index === selectedId ? 'flex' : 'none';

        return (
            <Item
                item={item}
                handleClick={() => { setSelectedId(index) }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
                selectedIdState={{ selectedId, setSelectedId }}
                visible={visible} />
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consulta</Text>

            <FlatList data={list}
                keyExtractor={(item, index) => `${index}`}
                renderItem={(item, index) => renderItem(item, index)}
                extraData={selectedId}
            />
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
    buttonContainer: {
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-around'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        color: 'black',
        paddingVertical: 10,
        width: 60,
        borderRadius: 5
    },
    title: {
        marginVertical: 5,
        fontSize: 30,
        color: 'purple'
    },
    item: {
        color: 'white',
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        textAlign: 'center'
    },
    user: {
        backgroundColor: 'grey',
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
    },
    editSection: {

    },
    editButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
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
})