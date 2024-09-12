import { Stack } from "expo-router";
import { LoginProvider } from "../contexts/LoginContext";

export default function StackLayout() {
    return (
        <LoginProvider>
            <Stack
                screenOptions={{
                    statusBarColor: "#1d1d2d",
                    statusBarStyle: "light",
                    headerShown: false
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="NovoUsuario" />
                <Stack.Screen name="(drawer)" />
            </Stack>
        </LoginProvider>
    )
}