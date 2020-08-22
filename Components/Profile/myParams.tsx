import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";



export const MyParams: FC<any> = props => {
    return (
        // Максимальные веса в упражнениях и кол во повторов за тренировку
        <View>
            <View><Text>Максимально взятые веса:</Text></View>
            <View><Text>Жим лежа(кг):</Text><Text>Повторений:</Text></View>
            <View><Text>Приседания(кг):</Text><Text>Повторений:</Text></View>
            <View><Text>Становая тяга(кг):</Text><Text>Повторений:</Text></View>
        </View>
    )
}

