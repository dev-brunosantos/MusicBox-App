import { PagesStyles } from "@/src/styles/PagesStyles";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface CardTurmaProps {
    turma: string;
    onPress: () => void
}

export const CardTurma = ({ turma, onPress }: CardTurmaProps) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Text style={styles.txt}>{turma}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: 10
    },
    txt: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})