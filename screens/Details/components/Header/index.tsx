import { AntDesign } from "@expo/vector-icons";
import { View, Image, Text} from "react-native";

export default function Header() {
    return (
        <View style={{ height:"25%", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <View style={{ flexDirection: "row" }}>
                <Image source={{uri:"https://imagensemoldes.com.br/wp-content/uploads/2020/07/Logo-Carrinho-de-Compras-PNG.png"}} style={{ width: 50, height: 50, marginTop:30 }} />
                <Text style={{color:"white", fontSize:30, marginTop:35}}> Canes </Text>
                <AntDesign name="shoppingcart" size={35} color="white" style={{marginLeft:"40%", marginTop:30}}/>
            </View>
        </View>
    )
}