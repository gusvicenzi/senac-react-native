import { useContext } from "react"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { UserContext } from "../context/UserContex"

const renderItem = ({ item }) => {
    return (
        <View style={styles.user}>
            <Text style={styles.item}>{item.nome}</Text>
            <Text style={styles.item}>{item.email}</Text>
            <Text style={styles.item}>{item.fone}</Text>
        </View>
    )
}

export const Consulta = ({ navigation, route }) => {
    const { list } = useContext(UserContext)
    console.warn(list)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consulta</Text>

            <FlatList data={list}
                keyExtractor={(item, index) => `${index}`}
                renderItem={item => renderItem(item)}
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
        backgroundColor: '#000',
        color: 'white',
        padding: 10,
        borderRadius: 5
    },
    title: {
        marginVertical: 5,
        fontSize: 30,
        color: 'purple'
    },
    item: {
        color: 'white',
        // backgroundColor: 'grey',
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
    }
})