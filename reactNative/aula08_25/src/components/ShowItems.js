import { FlatList, StyleSheet, Text, View } from 'react-native';

const renderItem = ({ item }) => {
    return <Text style={styles.item}>{item}</Text>
}

export const ShowItems = ({ carrosArray }) => {
    return (
        <View style={styles.container}>
            <FlatList data={carrosArray}
                keyExtractor={(item, index) => `${index}`}
                renderItem={item => renderItem(item)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
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
});
