import { View, Text, TouchableOpacity } from 'react-native'
import { PagesStyles } from '../styles/PagesStyles'
import { useState } from 'react'
import { InputComponent } from '../components/InputComponent'
import { BtnComponent } from '../components/BtnComponents'
import { router } from 'expo-router'

export default function App() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <View style={PagesStyles.page}>
            <View style={PagesStyles.container}>
                <Text style={PagesStyles.titulos}>MusicBox</Text>
            </View>

            <View style={PagesStyles.container}>
                <InputComponent
                    placeholder='Digite seu email'
                    onChangeText={setEmail}
                    isPassword={false}
                />
                <InputComponent
                    placeholder='Digite seu email'
                    onChangeText={setSenha}
                    isPassword={true}
                />
            </View>

            <View style={PagesStyles.container}>
                <BtnComponent titulo='Login' onPress={() => { }} />

                <TouchableOpacity onPress={() => router.push('./NovoUsuario')}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        Não tem conta? Cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}