import React from "react";
import { estilos } from "./src/Stylesheet/estilos";
import { View } from "react-native";
import Cria_Cadastro from './src/Cria_Cadastro';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Endereco from './src/Endereco';
import Pedidos from './src/Pedidos';
import Produto from './src/Produto';
import Carrinho from './src/Carrinho';
import Pagamento from './src/Pagamento';
import Finalizado from './src/Finalizado';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pedidos">
        <Stack.Screen
          name="Pedidos"
          component={Pedidos}
          options={{ headerShown: false }} // Remove a barra
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: "Cadastro",
            headerShown: false,  // Remove a barra
            headerStyle: { backgroundColor: "#0c212d" },
            headerTintColor: "#b88e41"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;