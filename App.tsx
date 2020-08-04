import {StatusBar} from 'expo-status-bar';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./Components/Navbar/navbar";
import {NativeRouter, Route} from 'react-router-native';
import {Profile} from "./Components/profile";
import {Training} from "./Components/Navbar/traing";
import {Provider} from 'react-redux'
import {store} from "./Components/Redux/store";

export default function App() {
    const profile = () => <Profile/>
    const training = () => <Training/>
    return (
        <Provider store={store}>
            <NativeRouter>
                <View style={styles.container}>
                    <View>
                        <Route path={'/profile'} component={profile}/>
                        <Route path={'/train'} component={training}/>
                    </View>
                    <View style={styles.head}>
                        <Text>Open up App.js to start working on your app!!!!!!</Text>
                    </View>
                    <View style={styles.nav}>
                        <Navbar/>
                    </View>
                </View>
            </NativeRouter>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    head: {
        backgroundColor: '#fff',
        flex: 5
    },
    nav: {
        flex: 1,
        backgroundColor: '#000'
    }
});
