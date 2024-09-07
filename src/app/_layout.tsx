import { Stack } from "expo-router";

export default function StackLayout() {
    return (
        <Stack
            screenOptions={{
                statusBarColor: "#1d1d2d",
                statusBarStyle: "light",
                headerShown: false
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    )
}