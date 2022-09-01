import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Home } from './src/components/Home'
import { Cadastro } from './src/components/Cadastro'
import { Consulta } from './src/components/Consulta'
// import { useContext, useState } from 'react'
import UserProvider from './src/context/UserContex'

const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Cadastro' component={Cadastro} />
          <Tab.Screen name='Consulta' component={Consulta} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
