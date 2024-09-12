import { Image, View } from "react-native"
import { useLogin } from "../contexts/LoginContext"

export const Perfil = () => {

    const { usuario } = useLogin()
    const { email } = usuario

    return (
        <View style={{ width: 40, height: 40, borderRadius: 50, position: 'absolute', top: 5, overflow: 'hidden' }}>
            {email.trim() === "Bruno" || email.trim() === "bruno" ?
                <Image
                    source={require('../assets/perfil.png')}
                    style={{ width: '100%', height: '100%' }}
                /> :
                <Image
                    source={require('../assets/user.png')}
                    style={{ width: '100%', height: '100%' }}
                />
            }
        </View>
    )
}