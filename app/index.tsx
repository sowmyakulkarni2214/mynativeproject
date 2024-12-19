import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const index = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
         <View style={styles.container}>
      <Image
        source={{uri: 'https://www.bootdey.com/image/280x280/20B2AA/20B2AA'}}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image
          source={{uri: 'https://www.bootdey.com/img/Content/avatar/avatar7.png'}}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
            />
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
      },
      logoContainer: {
        alignItems: 'center',
        marginTop: 120,
      },
      logo: {
        width: 120,
        height: 120,
        borderRadius:60,
        resizeMode: 'contain',
      },
    
        formContainer: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        title: {
          fontSize: 24,
          color: '#fff',
          marginBottom: 20,
          marginTop: 20,
        },
        card: {
          width: '80%',
          backgroundColor: '#fff',
          borderRadius: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          padding: 20,
          marginBottom: 20,
        },
        inputContainer: {
          marginBottom: 20,
        },
        label: {
          fontSize: 16,
          color: '#333',
        },
        input: {
          height: 40,
          borderRadius:6,
          borderWidth: 1,
          borderColor: '#ddd',
          color: '#333',
          paddingLeft:10,
        },
        button: {
          width: '100%',
          height: 40,
          backgroundColor: '#00BFFF',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        },
        buttonText: {
          color: '#fff',
          fontSize: 16,
        },
})