import { PagesStyles } from "@/src/styles/PagesStyles";
import { View, Text } from "react-native";

export default function Turmas() {
    return(
        <View style={PagesStyles.page}>
            <Text style={PagesStyles.titulos}>
                Pagina de Turmas
            </Text>
        </View>
    )
}