import { PagesStyles } from "@/src/styles/PagesStyles";
import { View, Text } from "react-native";

export default function Config() {
    return(
        <View style={PagesStyles.page}>
            <Text style={PagesStyles.titulos}>
                Pagina de Configurações
            </Text>
        </View>
    )
}