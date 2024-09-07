import { StyleSheet, TouchableOpacity, Text, ActivityIndicator } from "react-native";

interface BtnProps {
    titulo: string;
    onPress: () => void;
    // loading: boolean;
}

export const BtnComponent = ({ titulo, onPress }: BtnProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.btnTxt}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 54,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    btnTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})