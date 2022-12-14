import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import firebase from "firebase/compat/app";

//Screens for Nav
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyApCyjpXBjzThJ247YUUaDUt168QQ6yfkI",
//   authDomain: "instagramclone-f2dc1.firebaseapp.com",
//   projectId: "instagramclone-f2dc1",
//   storageBucket: "instagramclone-f2dc1.appspot.com",
//   messagingSenderId: "627625561274",
//   appId: "1:627625561274:web:2c974050125d436d8c0683",
//   measurementId: "G-6P95H2YWYD",
// };

// Initialize firebase app
// const firebaseApp = firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
