import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-web";


const estilos = StyleSheet.create({

    fundo: {
        flex: 1,
    },
    container: {
        backgroundColor: '#FFE600',
        alignItems: 'center',
        height: 450,
        marginTop: 120,
        marginHorizontal: 20,
        borderRadius: 40,
        borderColor: '#FF5C00',
        borderWidth: 2
    },
    img: {
        marginTop: 25,
        height: 120,
        width: 142,
        marginRight: 15
    },
    fontes: {
        flexDirection: 'row',
        marginTop: 40
    },
    texto1: {
        marginRight: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    texto2: {
        marginLeft: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    linha: {
        backgroundColor: 'red',
        height: 100,
        width: 3
    },
    botaoCadastro: {
        backgroundColor: '#FF0000',
        borderRadius: 25,
        marginHorizontal: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderColor: 'darkred',
        marginTop: 8,
        marginLeft: 15
    },
    botaoLogin: {
        backgroundColor: '#FF0000',
        borderRadius: 25,
        marginHorizontal: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        borderColor: '',
        marginTop: 8,
        marginRight: 5
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
        padding: 3
    },
    titulo: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20
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
        color: 'lightgray'
    },
    enviar: {
        backgroundColor: 'red',
        color: 'white',
        fontWeight: 'bold',
        borderColor: 'darkred',
        borderWidth: 2,
        borderRadius: 25,
        padding: 5
    },
    enviarLogin: {
        backgroundColor: 'red',
        color: 'white',
        fontWeight: 'bold',
        borderColor: 'darkred',
        borderWidth: 2,
        borderRadius: 25,
        padding: 5,
        marginTop: 15
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
        backgroundColor: '#FFE600',
        height: 520,
        borderTopColor: '#FF5C00',
        borderBottomColor: '#FF5C00',
        borderTopColor: '#FF5C00',
        borderBottomColor: '#FF5C00',
        borderWidth: 2,
        borderLeftColor: '#FFE600',
        borderRightColor: '#FFE600'
    },
    pedidos: {
        backgroundColor: 'white',
        borderColor: '#FF5C00',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 15,
        height: 95,
        marginHorizontal: 10,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 3 },
        elevation: 5,
        shadowOpacity: 0.5
    },
    imgPedidos: {
        height: 110,
        width: 132,
        marginLeft: 55
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
        shadowOpacity: 0.5
    },
    barraInteracao: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgEstilos: {
        width: 50,
        height: 50
    },
    imgProduto: {
        height: 200,
        width: 220,
        marginTop: 35,
        alignSelf: 'center'
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
        width: 30
    },
    nomeProduto: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 20,
        fontWeight: 'bold'
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
        marginTop: 5
    },
    titulo: {
        color: '#B50B0B',
        fontSize: 20, 
        fontWeight: 'bold',
        alignSelf: 'center'
    }, 
    caixaProduto: {
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: { width: 3, height: 3 },
        elevation: 5,
        shadowOpacity: 0.5,
        width: 341,
        height: 40,
        alignSelf: 'center',
        marginTop: 45, 
        flexDirection: 'row' 
    },
    footer: {
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: -3 },
        elevation: 5,
        shadowOpacity: 0.5,
        height: 129,
        width: 360,
        marginTop: 150,
        borderRadius: 25,
        
    }, 
    dadosProdutos: {
        color: 'gray',
        marginLeft: 15,
        marginHorizontal: 15,
        marginTop: 5
    },
    botaoPedido: {
        backgroundColor: '#B50B0B',
        borderRadius: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
        color: 'white',
        height: 20,
        marginHorizontal: 15
    }

});
export { estilos }