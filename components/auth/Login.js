import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
// import * as firebase from "firebase";
import { auth } from "../../services/firebase";
import firebase from "firebase/compat";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.onSignIn = this.onSignIn.bind(this);
  }
  onSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={() => this.onSignIn()} title="Sign In" />
      </View>
    );
  }
}

export default Login;
