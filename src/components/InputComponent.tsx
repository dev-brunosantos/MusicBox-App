import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react';

interface InputProps {
    placeholder: string;
    onChangeText: (txt: string) => void;
    isPassword: boolean;
}

export const InputComponent = ({
    placeholder, onChangeText, isPassword
}: InputProps) => {

    const [seguranca, setSeguranca] = useState(false)
    const [btnIcone, setBtnIcone] = useState('eye-with-line')

    function verSenha() {
        setSeguranca(!seguranca)
        btnIcone === 'eye-with-line' ?
            setBtnIcone('eye') :
            setBtnIcone('eye-with-line')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={isPassword && seguranca}
            />
            {isPassword && (
                <TouchableOpacity
                    style={styles.btn}
                    onPress={verSenha}
                >
                    <Entypo name={btnIcone} size={30} />
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 54,
        borderWidth: 1,
        borderRadius: 10
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        fontSize: 18
    },
    btn: {
        height: '100%',
        padding: 5,
        position: 'absolute',
        right: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})