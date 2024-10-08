import { useLogin } from "@/src/contexts/LoginContext";
import { PagesStyles } from "@/src/styles/PagesStyles";
import { View, Text } from "react-native";

export default function Home() {

    const { usuario } = useLogin()

    return (
        <View style={PagesStyles.page}>
            <Text style={PagesStyles.titulos}>
                Tela HOME
            </Text>

            <Text>{usuario.email}</Text>
        </View>
    )
}