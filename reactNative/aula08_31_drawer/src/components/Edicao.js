import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Edicao = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de edição</Text>
            <Text style={styles.title}>{route.params.subtitulo}</Text>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.button}>Voltar</Text>
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
})
