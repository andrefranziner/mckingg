import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importando todas as telas
import Cria_Cadastro from './src/Cria_Cadastro';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Endereco from './src/Endereco';
import Pedidos from './src/Pedidos';
import Produto from './src/Produto';
import Carrinho from './src/Carrinho';
import Pagamento from './src/Pagamento';
import Finalizado from './src/Finalizado';
import CadastroProdutos from "./src/CadastroProdutos";

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
            headerShown: false,
            headerStyle: { backgroundColor: "#0c212d" },
            headerTintColor: "#b88e41"
          }}
        />
        <Stack.Screen
          name="CadastroProdutos"
          component={CadastroProdutos}
          options={{
            title: "CadastroProdutos",
            headerShown: false,
            headerStyle: { backgroundColor: "#0c212d" },
            headerTintColor: "#b88e41"
          }}
        />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          // Registrando a tela Carrinho
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#0c212d" },
            headerTintColor: "#b88e41"
          }} // Remove a barra

        />
        {/* Adicione outras telas conforme necessário */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cria_Cadastro" component={Cria_Cadastro} />
        <Stack.Screen name="Endereco" component={Endereco} />
        <Stack.Screen name="Produto" component={Produto} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="Finalizado" component={Finalizado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;