import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect, Suspense } from "react";
import { firebase } from "./config";
import LoginScreen from "./src/LoginOtp";

import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/views/screens/HomeScreen";
import Header from "./components/Header";
import Profile from "./src/Profile";
import DetailsScreen from "./src/views/screens/DetailsScreen"


const stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <stack.Navigator>
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Header name="CuctusShop" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
        <stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <Header name="CuctusShop" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
        <stack.Screen
          name="LoginOtp"
          component={LoginScreen}
          options={{
            headerTitle: () => <Header name="CuctusShop" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
        <stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: () => <Header name="CuctusShop" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
      </stack.Navigator>
    );
  }
  return (
    <stack.Navigator>
      <stack.Screen name="Dashboard" component={Dashboard} />
      <stack.Screen name="Profile" component={Profile} />
      <stack.Screen name="DetailsScreen" component={DetailsScreen} />

    </stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
