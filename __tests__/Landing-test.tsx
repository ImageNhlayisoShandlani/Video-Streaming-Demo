import React from "react";

import { render } from "@testing-library/react-native";

import Landing from "../screens/Landing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View, Image, Text } from "react-native";

const Stack = createNativeStackNavigator();
describe('<Landing/>', () => {

    test("Landing Screen Should Render the Correct Hedaer", () => {
        const { getByText, getAllByRole } = render(
            <NavigationContainer>

                <Landing />
            </NavigationContainer>
        );

        getByText("Choose you flavor");
        expect( getAllByRole('button')).toBeOnTheScreen();
    });

    test("Categroy card", () => {
        const tree = render(
        <TouchableOpacity onPress={() => {}} style={{ position: 'relative', overflow: 'hidden', borderRadius: 10, marginBottom: 15 }}>
            <Image source={require('../assets/images/1.png')} style={{ width: 180, height: 180, position: 'absolute' }} />
            <View style={{ width: 180, height: 180, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0, 0.75)' }}>
                <Text>Sample Test</Text>
            </View>
        </TouchableOpacity>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});