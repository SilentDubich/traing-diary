import React, {FC} from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/store";
import {TraingType} from "../Redux/Reducers/traingReducer";
import {Training} from "./traning";


type PropsType = {
    traings: Array<TraingType>
}

export const AllTraings: FC<PropsType> = (props) => {
    const myTrainings = props.traings.map( el => <Training key={el.id} training={el}/>)
    return (
        <View>
            {myTrainings}
        </View>
    )
}


let mapStateToProps = (state: AppStateType) => {
    return {
        traings: state.traingReducer.traings
    }
}

export const AllTrainingsWrapper = connect(mapStateToProps, {})(AllTraings)
