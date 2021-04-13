import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Age extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 25,
    };
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "60%",
          marginBottom: 20,
        }}
      >
        <Text style={ageStyles.text}>Age: </Text>
        <Button
          title=" - "
          onPress={() => {
            this.setState({ age: this.state.age - 1 });
          }}
        />
        <Text style={ageStyles.text}>{this.state.age}</Text>
        <Button
          title=" + "
          onPress={() => {
            this.setState({ age: this.state.age + 1 });
          }}
        />
      </View>
    );
  }
}

function Keypad() {
  const [getText, setText] = useState("");
  const buttonPress = (msg) => {
    setText(getText + msg);
  };
  

  return (
    <View>
      <View style={styless.getTextStyle}>
        <Text style={{fontSize: 40, color: 'white'}}>{getText}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styless.buttonStyle}>
          <Button title="7" onPress={buttonPress.bind(this, 7)} />
        </View>
        <View style={styless.buttonStyle}>
          <Button title="8" onPress={buttonPress.bind(this, 8)} />
        </View>
        <View style={styless.buttonStyle}>
          <Button title="9" onPress={buttonPress.bind(this, 9)} />
        </View>
        <View style={styless.buttonStyle}>
          <Button title="-" onPress={buttonPress.bind(this, "-")} />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styless.buttonStyle}>
          <Button title="4" onPress={buttonPress.bind(this, 4)} />
        </View>
        <View style={styless.buttonStyle}>
          <Button title="5" onPress={buttonPress.bind(this, 5)} />
        </View>
        <View style={styless.buttonStyle}>
          <Button title="6" onPress={buttonPress.bind(this, 6)} />
        </View>
        <View style={styless.buttonStyle}>
          <Button title="+" onPress={buttonPress.bind(this, "+")} />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styless.buttonStyle}>
          <Button title="1" onPress={buttonPress.bind(this, 1)} />
        </View>
        <View style={styless.buttonStyle}>
          <Button title="2" onPress={buttonPress.bind(this, 2)} />
        </View>
        <View style={styless.buttonStyle}>
          <Button title="3" onPress={buttonPress.bind(this, 3)} />
        </View>
        <View style={styless.buttonStyle}>
          <Button title="/" onPress={buttonPress.bind(this, "/")} />
        </View>
      </View>
    </View>
  );
}

function App() {
  // const [getFirstName, setFirstName] = useState("First Name Here!");
  // const [getLastName, setLastName] = useState("Last Name Here!");

  const [getName, setName] = useState({
    fName: "FirstName",
    lName: "LastName",
  });

  const buttonPress = (msg) => {
    setText(getText + msg);
  };

  const updateFirstName = (firstname) => {
    setName({ fName: firstname, lName: getName.lName });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.innerView}>
        <Text style={styles.text}>{getName.fName}</Text>
      </View>

      <View style={styles.innerView}>
        <Text style={styles.text}>{getName.lName}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ padding: 10 }}>
          <Button
            title="UPDATE FIRSTNAME"
            onPress={updateFirstName.bind(this, "John")}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Button
            title="UPDATE LASTNAME"
            onPress={() => {
              setName({ fName: getName.fName, lName: "Bengston" });
            }}
          />
        </View>
      </View>
      <Age />
      <Keypad />
    </View>
  );
}

const ageStyles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerView: {
    padding: 10,
  },
  text: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    // padding: 10,
    width: "25%",
  },
  bottomButtonStyle: {
    padding: 10,
    width: "45%",
  },
  getTextStyle: {
    backgroundColor: '#808080',
    marginBottom: 1,
    alignItems: 'flex-end',
    height: 70,
    justifyContent: "center"
      },
});

export default App;
