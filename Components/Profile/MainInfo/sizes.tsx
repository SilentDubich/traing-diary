import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";



export const Sizes: FC<any> = props => {
    return (
        // Максимальные веса в упражнениях и кол во повторов за тренировку
        <View>
            <View><Text>Размеры мышц:</Text></View>
            <View><Text>Складка на животе(мм):</Text></View>
            <View><Text>Грудь(см):</Text></View>
            <View><Text>Талия(см):</Text></View>
            <View><Text>Предплечье(см):</Text></View>
            <View><Text>Бицепс(см):</Text></View>
            <View><Text>Бедро(см)</Text></View>
            <View><Text>Икры(см)</Text></View>
        </View>
    )
}
