import React, {FC} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {MainInfo} from "./MainInfo/mainInfo";
import {Sizes} from "./MainInfo/sizes";


export const ProfileInfo: FC<any> = props => {
    return (
        // Вес, возраст, рост, %мышц - жира, объемы всякого
        <View>
            <View><MainInfo/></View>
            <View><Sizes/></View>
        </View>
    )
}
