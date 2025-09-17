import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import Home from "../screens/Home";

describe('<Home/>', () => {
    test('', () => {
        const {getByText} = render(
            <NavigationContainer>
                <Home/>
            </NavigationContainer>
        );

        getByText("Home");
    });
});