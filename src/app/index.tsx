import { View, Text } from 'react-native'
import { PagesStyles } from '../styles/PagesStyles'
import { useState } from 'react'
import { InputComponent } from '../components/InputComponent'


export default function App() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
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
        </View>
    )
}