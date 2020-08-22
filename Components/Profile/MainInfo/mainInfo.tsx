import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";


export const MainInfo: FC<any> = props => {
    return (
        // Вес, возраст, рост, %мышц - жира, объемы всякого
        <View>
            <View>
                <Text>Основная информация:</Text>
            </View>
            <View>
                <Text>Вес:</Text>
            </View>
            <View>
                <Text>Рост:</Text>
            </View>
            <View>
                <Text>Мышцы(%, кг):</Text>
            </View>
            <View>
                <Text>Жир(%, кг)</Text>
            </View>
        </View>
    )
}
