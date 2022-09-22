import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Cadastro } from './src/components/Cadastro'
import { Edicao } from './src/components/Edicao'
import { Lista } from './src/components/Lista'
import Toast from 'react-native-toast-message'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lista' screenOptions={{headerTintColor: 'purple'}}>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerTitle: 'Cadastro de contato'}} />
        <Stack.Screen name='Edicao' component={Edicao} options={{headerTitle: 'Edição de contato'}} />
        <Stack.Screen name='Lista' component={Lista} options={{headerTitle: 'Lista de contatos'}} />  
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  )
}

