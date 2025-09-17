import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { constants } from "../shared/constants";

type RootStackParamList = {
    Home: { catId: string };
    // add other screens here if needed
};

export default function Landing() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    function handleClick(category) {
        try {
            navigation.navigate('Home', { catId: category });
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: constants.colors.mainBackground }}>

            <View style={{ flex: 1, width: Dimensions.get('screen').width }}>
                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}><Text style={{ fontSize: 20, marginTop: 10, color: '#eee', marginBottom: 10 }}>Choose you flavor</Text></View>
                    <View style={{ flex: 1, width: Dimensions.get('screen').width, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', position: 'relative', alignItems: 'stretch', padding: 10 }}>
                        <TouchableOpacity onPress={() => handleClick('Movies')} style={{ position: 'relative', overflow: 'hidden', borderRadius: 10, marginBottom: 15 }}>
                            <Image source={require('../assets/images/1.png')} style={{ width: 180, height: 180, position: 'absolute' }} />
                            <View style={{ width: 180, height: 180, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0, 0.75)' }}>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '900', fontStyle: 'italic' }}>Movies</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 10, marginBottom: 15 }}>
                            <Image source={require('../assets/images/1.png')} style={{ width: 180, height: 180, position: 'absolute' }} />
                            <View style={{ width: 180, height: 180, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0, 0.75)' }}>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '900', fontStyle: 'italic' }}>Movies</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 10, marginBottom: 15 }}>
                            <Image source={require('../assets/images/1.png')} style={{ width: 180, height: 180, position: 'absolute' }} />
                            <View style={{ width: 180, height: 180, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0, 0.75)' }}>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '900', fontStyle: 'italic' }}>Movies</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity role="button" onPress={() => { }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 10, marginBottom: 15 }}>
                            <Image source={require('../assets/images/splash-icon-dark.png')} style={{ width: 180, height: 180, position: 'absolute' }} />
                            <View style={{ width: 180, height: 180, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0, 0.75)' }}>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '900', fontStyle: 'italic' }}>Movies</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 10, marginBottom: 15 }}>
                            <Image source={require('../assets/images/1.png')} style={{ width: 180, height: 180, position: 'absolute' }} />
                            <View style={{ width: 180, height: 180, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0, 0.75)' }}>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '900', fontStyle: 'italic' }}>Movies</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}