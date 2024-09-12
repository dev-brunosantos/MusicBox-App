import { PagesStyles } from "@/src/styles/PagesStyles";
import { View, Text, ScrollView, Alert, StyleSheet } from "react-native";

import turmas from '@/src/json/turmas.json'
import { CardTurma } from "@/src/components/Cards/CardTurma";

export default function Turmas() {
    return (
        <View style={PagesStyles.page}>
            <View style={[styles.container]}>
                {turmas.map((turma) => (
                    <CardTurma
                        key={turma.id_turma}
                        turma={turma.turma}
                        onPress={() => Alert.alert(`Turma ${turma.turma}`)}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // borderWidth: 1
    }
})