import { Tabs } from "expo-router";
import { useLogin } from "@/src/contexts/LoginContext";
import { Perfil } from "@/src/components/PerfilComponent";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="Cadastros" />
            <Tabs.Screen name="Usuario" options={{ tabBarIcon: (() => (<Perfil />)), tabBarLabel: '' }} />
        </Tabs>
    )
}