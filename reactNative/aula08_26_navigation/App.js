import { Image, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './src/components/Home'
import { Cadastro } from './src/components/Cadastro'
import { Consulta } from './src/components/Consulta'
import { Edicao } from './src/components/Edicao'
import { useState } from 'react'

const Stack = createNativeStackNavigator()
const carros = ['Fusca', 'Golf', 'Jetta']



const LogoTitle = () => {
  const [carrosArray, setCarrosArray] = useState(carros)
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        style={{ width: 50, height: 50 }}
        // source={{uri: 'https://ionicframework.com/docs/react'}}
        source={require('./assets/logo-react-icon.png')}
      />
      <Text style={styles.title}>Cadastro de cliente</Text>
    </View>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{}} />
        <Stack.Screen name='Cadastro' component={Cadastro} options={{
          title: 'Cadastro de cliente', headerStyle: {
            backgroundColor: 'purple'
          }, headerTintColor: 'white', headerTitle: (props) => <LogoTitle {...props} />
        }} />
        <Stack.Screen name='Consulta' component={Consulta} options={{ headerShown: false }} />
        <Stack.Screen name='Edicao' component={Edicao} options={{
          title: 'Tela de edição', headerStyle: {
            backgroundColor: 'purple'
          }, headerTintColor: 'white'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 30,
    color: 'white'
  }
});
