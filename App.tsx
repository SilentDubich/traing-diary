import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Navbar} from "./Components/Navbar/navbar";
import {NativeRouter, Redirect, Route} from 'react-router-native';
import {Profile} from "./Components/Profile/profile";
import {AllTrainingsWrapper} from "./Components/Training/allTraings";
import {Settings} from "./Components/Settings/settings";
import {Provider} from 'react-redux'
import {store} from "./Components/Redux/store";

export default function App() {
    const profile = () => <Profile/>
    const training = () => <AllTrainingsWrapper/>
    const settings = () => <Settings/>
    return (
        <Provider store={store}>
            <NativeRouter>
                <View style={styles.container}>
                    {/*<View style={styles.upper}></View>*/}
                    <ScrollView>
                        <View style={styles.head}>
                            <Route path={'/profile'} component={profile}/>
                            <Route path={'/train'} component={training}/>
                            <Route path={'/settings'} component={settings}/>
                            <Redirect from={'/'} to={'/profile'}/>
                        </View>
                    </ScrollView>
                    <View style={styles.nav}>
                        <Navbar/>
                    </View>
                </View>
            </NativeRouter>
        </Provider>
    );
}

const styles = StyleSheet.create({
    upper: {
        flex: 1
    },
    container: {
        flex: 1,
        // backgroundColor: '#ff0000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    head: {
        backgroundColor: '#828282',
        flex: 20,
        // maxHeight: 1024,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nav: {
        // flex: 1,
        height: 30,
        backgroundColor: '#232323'
    }
});
