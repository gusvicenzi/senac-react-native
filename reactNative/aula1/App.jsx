import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const MeuApp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('Usuário');
  const [age, setAge] = useState();
  const [maiorDeIdade, setMaiorDeIdade] = useState();

  const isOlderThen18 = () => {
    if (age >= 18) {
      setMaiorDeIdade('É maior de idade');
    } else {
      setMaiorDeIdade('É menor de idade');
    }
  }

  const updateFullName = () => {
    setFullName(`${name} ${lastName}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.subtitle}>Complete seu cadastro</Text>

      <TextInput
        placeholder="Informe seu nome"
        placeholderTextColor="#06283D"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Informe seu sobrenome"
        placeholderTextColor="#06283D"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        placeholder="Informe seu email"
        placeholderTextColor="#06283D"
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Informe seu fone"
        placeholderTextColor="#06283D"
        style={styles.input}
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="Informe sua idade"
        placeholderTextColor="#06283D"
        style={styles.input}
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
      />

      <View style={styles.buttonView}>
        <TouchableHighlight
          onPress={() => {
            isOlderThen18();
            updateFullName()
          }}
          style={styles.button}>
          <Text style={styles.buttonTitle}>Gravar</Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.title}>Ola: {fullName}</Text>
      <Text style={styles.title}>{maiorDeIdade}</Text>
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
  subtitle: {
    textAlign: 'center',
    color: '#1363DF',
    fontSize: 12,
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
  buttonView: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around',
  }
});
