import React, {FC} from "react";
import {Text, View} from "react-native";
import {TraingType} from "../Redux/Reducers/traingReducer";
import {Link} from "react-router-native";

type PropsType = {
    training: TraingType
}


export const Training: FC<PropsType> = (props) => {
    return (
        <View>
            <Link to={`/train${props.training.id}`}>
                <View>
                    <View>
                        <Text>Дата тренировки:</Text>
                        <Text>{props.training.date}</Text>
                    </View>
                    <View>
                        <Text>Количество упражнений:</Text>
                        <Text>{props.training.totalExercise}</Text>
                    </View>
                    <View>
                        <Text>Количество подходов:</Text>
                        <Text>{props.training.totalApproach}</Text>
                    </View>
                </View>
            </Link>
        </View>

    )
}
