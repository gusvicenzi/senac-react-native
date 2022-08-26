import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Inputs } from './src/components/Inputs';
import { ShowItems } from './src/components/ShowItems';


const carros = ['Fusca', 'Golf', 'Jetta']

export default function App() {

  const [carrosArray, setCarrosArray] = useState(carros)

  const gravarDados = (carro) => {
    if (carrosArray.find(item => item === carro ? true : false)) {
      alert('Item repetido')
    } else {
      setCarrosArray(prevState => [...prevState, carro])
    }
  }

  const limpaDados = () => {
    setCarrosArray([])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TESTE</Text>
      <Inputs gravarDados={gravarDados} limpaDados={limpaDados}/>
      <ShowItems carrosArray={carrosArray}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
