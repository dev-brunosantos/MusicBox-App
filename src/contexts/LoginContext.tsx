import { router } from "expo-router";
import { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from "react-native";

interface UsuarioProps {
    email: string;
    senha: string;
}

interface LoginProps {
    usuario: UsuarioProps;
    validarUsuario: ({ email, senha }:UsuarioProps) => void;
    msgErro: boolean;
}

const LoginContext = createContext({} as LoginProps)

function LoginProvider({ children }: { children: ReactNode }) {

    const [usuario, setUsuario] = useState<UsuarioProps>({ email: '', senha: '' })
    const [msgErro, setMsgErro] = useState(false)

    function validarUsuario({ email, senha }:UsuarioProps) {
        if(email === "" || senha === "") {
            setMsgErro(true)
            return Alert.alert("Preencha todos os campos.")
        }
        setMsgErro(false)
        setUsuario({ email, senha })
        return router.push('./(drawer)')
    }

    return (
        <LoginContext.Provider value={{ usuario, validarUsuario, msgErro}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => {
    const contexto = useContext(LoginContext)
    if(!contexto) throw new Error("Contexto de Login não encontrado.")
    return contexto
} 

export { LoginContext, LoginProvider }