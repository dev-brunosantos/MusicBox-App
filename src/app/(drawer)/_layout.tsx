import { useLogin } from '@/src/contexts/LoginContext';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {

    const { signOut } = useLogin()

    return(
        <Drawer 
            screenOptions={{
                headerLeftContainerStyle: {
                    position: 'absolute',
                    top: 14,
                    right: 0
                }
            }}
        >
            <Drawer.Screen name='(tabs)' options={{ title: 'Home' }} />
            <Drawer.Screen name='Turmas' />
            <Drawer.Screen name='Config' options={{ title: 'Configurações' }} />
        </Drawer>
    )
}