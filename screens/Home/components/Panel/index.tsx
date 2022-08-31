import { Image, View } from "react-native";

export default function Panel(){
    return(
        <View style={{height:"25%"}}> 
            <Image source={{uri:"https://sucodemanga.com.br/wp-content/uploads/2022/04/kabum-2022-promo-abril.jpg"}} style={{width:"100%", height:"100%", resizeMode:"cover"}}/>
        </View>
    )
}