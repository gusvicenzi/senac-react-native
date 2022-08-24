import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  FlatList,
  Alert
} from 'react-native';

const MeuApp = () => {
  const [text, setText] = useState('');
  const [frutas, setFrutas] = useState([]);

  const addFruta = () => {
    if (text.trim() === '') {
      // alert('Valor inválido');
      Alert.alert("Valor inválido",
      "Digite o nome de uma fruta")
    } else {
      setFrutas((f) => [...f, text]);
      setText('')
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Fruta"
        placeholderTextColor="#06283D"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <TouchableHighlight onPress={addFruta} style={styles.button}>
        <Text style={styles.buttonTitle}>Gravar</Text>
      </TouchableHighlight>

      <Text style={styles.title}></Text>

      <FlatList
        data={frutas}
        renderItem={({ item, index }) => <Text style={styles.listItem}>{item}</Text>}
      />
    </SafeAreaView>
  );
};

export default MeuApp;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#DFF6FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex',
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    color: '#1363DF',
    fontSize: 22,
  },
  listItem: {
    textAlign: 'center',
    color: '#1363DF',
    fontSize: 20,
    backgroundColor: '#47B5FF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5
  },
  input: {
    backgroundColor: '#47B5FF',
    marginVertical: 10,
    padding: 8,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    fontFamily: 'verdana',
    textAlign: 'center',
    width: 200,
  },
  button: {
    backgroundColor: '#1363DF',
    borderWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 22,
  },
});
