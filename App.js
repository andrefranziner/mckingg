import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const usuario = await AsyncStorage.getItem('usuario');
        setIsLoggedIn(!!usuario); // Converte para booleano
      } catch (error) {
        console.error("Erro ao verificar o status de login:", error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Pedidos" : "Pedidos"}>
        <Stack.Screen
          name="Pedidos"
          component={Pedidos}
          options={{ headerShown: false }}
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
            title: "Cadastro de Produtos",
            headerShown: false,
            headerStyle: { backgroundColor: "#0c212d" },
            headerTintColor: "#b88e41"
          }}
        />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#0c212d" },
            headerTintColor: "#b88e41"
          }}
        />
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
