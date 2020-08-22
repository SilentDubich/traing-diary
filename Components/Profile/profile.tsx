import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {ProfileInfo} from "./profileInfo";
import {MyParams} from "./myParams";


export const Profile: FC<any> = props => {
    return (
        <View>
            <View style={styles.mainInfo}>
                <ProfileInfo/>
            </View>
            <View style={styles.myParams}>
                <MyParams/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainInfo: {
        flex: 1,
        backgroundColor: '#e600ff',
    },
    myParams: {
        flex: 1,
        backgroundColor: '#00ffc4',
    }
});
