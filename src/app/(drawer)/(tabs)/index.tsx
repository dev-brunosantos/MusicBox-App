import { PagesStyles } from "@/src/styles/PagesStyles";
import { View, Text } from "react-native";

export default function Home() {
    return (
        <View style={PagesStyles.page}>
            <Text style={PagesStyles.titulos}>
                Tela HOME
            </Text>
        </View>
    )
}