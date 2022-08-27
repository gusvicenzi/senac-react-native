import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const renderItem = ({ item }) => {
    return <Text style={styles.item}>{item}</Text>
}

export const Consulta = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consulta</Text>
            
            <FlatList data={route.params.carrosArray}
                keyExtractor={(item, index) => `${index}`}
                renderItem={item => renderItem(item)}
            />

            <View style={styles.buttonContainer}>
            <TouchableOpacity>
                <Text style={styles.button}>Consultar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Cadastro')
            }}>
                <Text style={styles.button}>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.button}>Voltar</Text>
            </TouchableOpacity>
            </View>
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
        backgroundColor: 'grey',
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        textAlign: 'center'
    }
  })