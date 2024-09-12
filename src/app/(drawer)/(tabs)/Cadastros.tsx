import { PagesStyles } from "@/src/styles/PagesStyles";
import { View, Text } from "react-native";

export default function Cadastros() {
    return(
        <View style={PagesStyles.page}>
            <Text style={PagesStyles.titulos}>
                Pagina de Cadastros
            </Text>
        </View>
    )
}