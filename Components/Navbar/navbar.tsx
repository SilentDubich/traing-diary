import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

export const Navbar:FC<any> = props => {
    return(
        <View style={styles.container}>
            <Link to="/train" underlayColor="#123456">
                <Text style={styles.text}>My trainings</Text>
            </Link>
            <Link to="/profile" underlayColor="#f0f4f7">
                <Text style={styles.text}>Profile</Text>
            </Link>
            <Link to="/" underlayColor="#f0f4f7">
                <Text style={styles.text}>Home</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    text: {
        color: '#fff',
        paddingRight: 10
    }
});
