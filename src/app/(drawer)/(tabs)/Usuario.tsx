import { BtnComponent } from "@/src/components/BtnComponents";
import { useLogin } from "@/src/contexts/LoginContext";
import { PagesStyles } from "@/src/styles/PagesStyles";
import { router } from "expo-router";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Usuario() {

    const { usuario } = useLogin()
    const { email } = usuario

    return (
        <View style={PagesStyles.page}>
            <View style={[PagesStyles.container, { height: 250, alignItems: 'center', justifyContent: 'center' }]}>
                <View style={{ width: 150, height: 150, borderRadius: 300, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
                    {email === "Bruno" || email === "bruno" ?
                        <Image
                            source={require('../../../assets/perfil.png')}
                            style={{ width: '100%', height: '100%' }}
                        /> :
                        <Image
                            source={require('../../../assets/user.png')}
                            style={{ width: '100%', height: '100%' }}
                        />
                    }
                </View>
                <Text style={PagesStyles.titulos}>
                    {email}
                </Text>
            </View>

            {/* EXCLUIR ESSA LINHA */}
            <View style={PagesStyles.container} />

            <View style={PagesStyles.container}>
                <TouchableOpacity>
                    <Text>Alterar perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Alterar Senha</Text>
                </TouchableOpacity>
            </View>

            {/* EXCLUIR ESSA LINHA */}
            <View style={PagesStyles.container} />

            <View style={PagesStyles.container}>
                <BtnComponent
                    titulo="Sair"
                    onPress={() => router.navigate('./index')  }
                />
            </View>
        </View>
    )
}