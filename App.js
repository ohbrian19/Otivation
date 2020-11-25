import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { authService } from "./app/fbase";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import UserContext from "./app/hooks/context";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user.email);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
