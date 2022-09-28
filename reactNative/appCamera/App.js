import { StatusBar } from 'expo-status-bar'
import { Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { Camera } from 'expo-camera'
import { useEffect, useRef, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

export default function App() {
  const camRef = useRef(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [foto, setFoto] = useState(null)
  const [hasPermission, setHasPermission] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === "granted");
    })(); 
    
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      setHasPermission(status === "granted");
    })();

  }, [])


  async function tirarFoto() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync()
      setFoto(data.uri)
      setOpenModal(true)
    }
  }

  async function salvarFoto() {
    const asset = await MediaLibrary.createAssetAsync(foto)
      .then(() => {
        alert('Salvo com sucesso')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Câmera</Text>
      <Camera
        type={type}
        ref={camRef}
        style={styles.camera}
      >
        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.change}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text>Alternar camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.change}
            onPress={tirarFoto}
          >
            <Text>Tirar foto</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      { foto && (
        <Modal animationType="slide" transparent={false} visible={openModal}>
          <View>
            <View style={{ margin: 10, flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ margin: 10, backgroundColor: 'red' }}
                onPress={() => setOpenModal(false)}
              >
                <FontAwesome name="window-close" size={50} color="#fff"></FontAwesome>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={salvarFoto}
              >
                <FontAwesome name="upload" size={50} color="#121212"></FontAwesome>
              </TouchableOpacity>
            </View>
            <Image style={styles.image} source={{ uri: foto }} />
          </View>
        </Modal>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
    marginHorizontal: 20
  },
  camera: {
    width: "100%",
    height: "100%"
  },
  botoes: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  change: {
    padding: 10,
    backgroundColor: 'red',
    width: 150,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 20
  }
});