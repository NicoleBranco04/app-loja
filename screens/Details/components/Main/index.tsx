import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ipserver2 } from "../../../config/servidor";
import { styles } from "./style";
export default function Main(props:any) {

    const [produto, setProduto] = useState({
        idproduto: "",
        nomeproduto: "",
        descricao: "",
        categoria: "",
        preco: "",
        foto1: "",
        foto2: "",
        foto3: "",
        foto4: "",
    });

    useEffect(() => {
        fetch(`${ipserver2}/produto/pesquisar/${props.id}`)
            .then((response) => response.json())
            .then((rs) => setProduto(rs))
            .catch((erro) => console.error(`Erro ao tentar conectar na api -> ${erro}`))
    }, [])

    return (
        <View style={styles.main}>
            <View style={styles.main}>
                <Image source={require("../../../../assets/logo5.png")}
                    style={{ width: "100%", height: 200, resizeMode: "cover" }} />

                <View style={styles.infoproduto}>
                    <Text>{produto.nomeproduto}</Text>
                    <Text>{produto.categoria}</Text>
                    <Text>{produto.descricao}</Text>
                    <Text>{produto.preco}</Text>

                    <TouchableOpacity onPress={() => alert("oi")}
                        style={styles.btncarrinho}>
                        <FontAwesome name="shopping-basket" size={24} color="white" />
                        <Text>Adicionar ao carrinho</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}