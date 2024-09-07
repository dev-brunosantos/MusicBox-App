import { View, Text, Alert } from 'react-native'
import { PagesStyles } from '../styles/PagesStyles'
import { useState } from 'react'
import { InputComponent } from '../components/InputComponent'
import { BtnComponent } from '../components/BtnComponents'
import { router } from 'expo-router'

export default function NovoUsuario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    function cadastrar() {
        if (nome !== "" && email !== "" && senha !== "" && confirmarSenha !== "") {
            if (confirmarSenha !== senha) {
                return Alert.alert("As senhas não estão iguais. Por favor, corrigir.")
            }
            Alert.alert("Usuário cadastrado com sucesso.")
            return router.back()
        }
        return Alert.alert("Preencha todos os campos.")
    }

    return (
        <View style={PagesStyles.page}>
            <View style={PagesStyles.container}>
                <Text style={[PagesStyles.titulos, { fontSize: 40}]}>Novo usuário</Text>
            </View>

            <View style={PagesStyles.container}>
                <InputComponent isPassword={false}
                    placeholder='Digite seu nome'
                    onChangeText={setNome}
                />
                <InputComponent isPassword={false}
                    placeholder='Digite seu email'
                    onChangeText={setEmail}
                />
                <InputComponent isPassword={true}
                    placeholder='Digite sua senha'
                    onChangeText={setSenha}
                />
                <InputComponent isPassword={true}
                    placeholder='Confirmar sua senha'
                    onChangeText={setConfirmarSenha}
                />
            </View>

            <View style={PagesStyles.container}>
                <BtnComponent titulo='Cadastrar' onPress={cadastrar} />
            </View>
        </View>
    )
}