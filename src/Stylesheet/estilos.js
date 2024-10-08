import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#FFE600', // cor de fundo geral
    },
    container: {
        backgroundColor: '#FFE600',
        alignItems: 'center',
        height: 450,
        marginTop: 120,
        marginHorizontal: 20,
        borderRadius: 40,
        borderColor: '#FF5C00',
        borderWidth: 2,
    },
    img: {
        marginTop: 25,
        height: 120,
        width: 142,
        marginRight: 15,
    },
    fontes: {
        flexDirection: 'row',
        marginTop: 40,
    },
    texto1: {
        marginRight: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    texto2: {
        marginLeft: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    linha: {
        backgroundColor: 'red',
        height: 100,
        width: 3,
    },
    botaoCadastro: {
        backgroundColor: '#FF0000',
        borderRadius: 25,
        marginHorizontal: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderColor: 'darkred',
        borderWidth: 1,
        padding: 10,
        marginTop: 8,
        marginLeft: 15,
    },
    botaoLogin: {
        backgroundColor: '#FF0000',
        borderRadius: 25,
        marginHorizontal: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderWidth: 1,
        padding: 10,
        marginTop: 8,
        marginRight: 5,
    },
    facebook: {
        flexDirection: 'row',
        backgroundColor: '#3c549c',
        marginTop: 10,
        height: 30,
    },
    google: {
        flexDirection: 'row',
        backgroundColor: '#4384ed',
        marginTop: 10,
        height: 30,
        width: 203,
    },
    TextoBotao: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        padding: 3,
    },
    titulo: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        width: 250,
        margin: 12,
        borderColor: '#FF5C00',
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        color: 'black',
    },
    enviar: {
        backgroundColor: 'red',
        color: 'white',
        fontWeight: 'bold',
        borderColor: 'darkred',
        borderWidth: 2,
        borderRadius: 25,
        padding: 5,
    },
    enviarLogin: {
        backgroundColor: 'red',
        color: 'white',
        fontWeight: 'bold',
        borderColor: 'darkred',
        borderWidth: 2,
        borderRadius: 25,
        padding: 5,
        marginTop: 15,
    },
    containerEndereco: {
        backgroundColor: '#FFE600',
        alignItems: 'center',
        height: 450,
        marginTop: 120,
        marginHorizontal: 20,
        borderRadius: 40,
        borderColor: '#FF5C00',
        borderWidth: 2,
    },
    containerPedidos: {
        flex: 1,
        padding: 10,
        // Define largura máxima se necessário
        // maxWidth: '100%',
        // Se precisar, você pode adicionar margin
    },
    pedidos: {
        // Aqui você pode adicionar uma cor de fundo ou outras propriedades se necessário
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10, // Adicionando um pouco de padding para espaçamento interno
        borderColor: 'red',
        borderWidth: 1
    },
    imgPedidos: {
        height: 110,
        width: 132,
        marginLeft: 55,
    },
    inputPesquisa: {
        backgroundColor: 'white',
        height: 30,
        width: 340,
        margin: 12,
        borderColor: '#FF5C00',
        borderWidth: 2,
        borderRadius: 15,
        color: 'gray',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 3 },
        elevation: 5,
        shadowOpacity: 0.5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgEstilos: {
        width: 50,
        height: 50,
    },
    imgProduto: {
        height: 200,
        width: 220,
        marginTop: 35,
        alignSelf: 'center',
    },
    alteraQuantidade: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 35,
        width: 95,
        borderWidth: 1,
        borderRadius: 25,
        alignSelf: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 3 },
        elevation: 5,
        shadowOpacity: 0.5,
    },
    quantidade: {
        marginTop: 2,
        height: 30,
        width: 30,
        textAlign: 'center',
        fontSize: 18,
    },
    nomeProduto: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B50B0B', // Cor do texto do nome do produto
    },
    itensEstilo: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 8,
    },
    itens: {
        borderRadius: 25,
        backgroundColor: '#B50B0B',
        width: 10,
        height: 10,
        marginTop: 5,
    },
    tituloCarrinho: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
        color: '#B50B0B', // Cor do título do carrinho
    },
    valorCarrinho: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
        color: '#FF5C00', // Cor do valor total do carrinho
    },
    botaoCarrinho: {
        backgroundColor: '#B50B0B',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    textoBotaoCarrinho: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    botaoVoltar: {
        backgroundColor: '#FF5C00',
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
    },
    // Estilo para o botão excluir
    botaoExcluir: {
        backgroundColor: '#FF5C00',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
    textoBotaoExcluir: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    // Estilo para a área do carrinho
    carrinhoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF5C00',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginVertical: 5,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 3 },
        elevation: 5,
        shadowOpacity: 0.5,
    },
    // Estilo para a quantidade
    quantidade: {
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#B50B0B',
    },

    // Adicione esses estilos no seu Stylesheet
    resumoPedido: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        shadowOpacity: 0.4,
    },
    resumoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    resumoItem: {
        marginBottom: 10,
    },
    resumoNome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    resumoQuantidade: {
        fontSize: 16,
    },
    resumoPagamento: {
        fontSize: 16,
        fontStyle: 'italic',
    },

    botaoFinalizar: {
        backgroundColor: '#B50B0B',  // Cor verde para indicar ação positiva
        borderRadius: 10,            // Bordas arredondadas
        padding: 15,                 // Espaçamento interno
        alignItems: 'center',        // Alinha o texto no centro
        margin: 20,                  // Margem ao redor do botão
        shadowColor: '#000',         // Sombra
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,                // Sombra para Android
    },
    textoBotaoFinalizar: {
        color: '#fff',               // Texto branco
        fontSize: 18,                // Tamanho da fonte
        fontWeight: 'bold',          // Negrito para destacar
    },
});

export { estilos };
