import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Result } from "../screens";



const Stack = createNativeStackNavigator()

function StackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="NextScreen" component={Result}></Stack.Screen>
              
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigator