import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { constants } from "../shared/constants";
import { useVideoPlayer, VideoView } from "expo-video";
import { Button } from "@react-navigation/elements";

export default function Home({ route }) {
    const navigation = useNavigation();
    const { catId } = route.params;
    const videoSource = "https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8";
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: constants.colors.mainBackground }}>
            <View style={{ flex: 1, borderWidth: 1, borderColor: '#777', borderRadius: 8, overflow: 'hidden', backgroundColor: 'black', height: 300, width: Dimensions.get('screen').width }}>
                <VideoView player={player} allowsFullscreen allowsPictureInPicture style={{ width: Dimensions.get('screen').width - 15, height: 230 }} />
                <View style={{ height: 50 }}>
                    <Text style={{ fontSize: 18, color: '#ddd', padding: 15 }}>My Video Title</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView >
                    <View style={{ alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                        <Button onPress={() => { }}
                            style={{
                                height: 60,
                                width: (Dimensions.get('screen').width / 2) - 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                marginBlockStart: 10
                            }
                            }>
                            Channel One
                        </Button>
                        <Button onPress={() => { }}
                            style={{
                                height: 60,
                                width: (Dimensions.get('screen').width / 2) - 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                marginBlockStart: 10,
                            }
                            }>
                            Channel One
                        </Button>
                        <Button onPress={() => { }}
                            style={{
                                height: 60,
                                width: (Dimensions.get('screen').width / 2) - 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                marginBlockStart: 10
                            }
                            }>
                            Channel One
                        </Button>
                        <Button onPress={() => { }}
                            style={{
                                height: 60,
                                width: (Dimensions.get('screen').width / 2) - 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                marginBlockStart: 10
                            }
                            }>
                            Channel One
                        </Button>
                        <Button onPress={() => { }}
                            style={{
                                height: 60,
                                width: (Dimensions.get('screen').width / 2) - 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                marginBlockStart: 10
                            }
                            }>
                            Channel One
                        </Button>
                        <Button onPress={() => { }}
                            style={{
                                height: 60,
                                width: (Dimensions.get('screen').width / 2) - 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                marginBlockStart: 10
                            }
                            }>
                            Channel One
                        </Button>
                        <Button onPress={() => { }}
                            style={{
                                height: 60,
                                width: (Dimensions.get('screen').width / 2) - 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                marginBlockStart: 10
                            }
                            }>
                            Channel One
                        </Button>
                        <Button onPress={() => { }}
                            style={{
                                height: 60,
                                width: (Dimensions.get('screen').width / 2) - 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                marginBlockStart: 10
                            }
                            }>
                            Channel One
                        </Button>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}