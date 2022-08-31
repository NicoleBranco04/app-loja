import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
        height:"50%",
    },
    lstprodutos:{
        flexDirection:"row",
        padding:10,
        borderBottomColor:"silver",
        borderBottomWidth:1,
    },
    imgproduto:{
        width:100,
        height:100,
        resizeMode:"cover"
    },
    nomeproduto:{
        fontSize:20,
        fontWeight:"bold"
    },
    categoria:{
        fontSize:15
    },
    preco:{
        color:"red",
        fontSize:18,
        fontWeight:"bold",
    },
    infoproduto:{

    },
    btndetalhe:{
        margin:20,
        backgroundColor:"#c6c6c6",
        padding:10,
        borderRadius:10
    }

})