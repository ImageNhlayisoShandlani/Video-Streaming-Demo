import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ScrollView, Platform, StatusBar } from "react-native";
import { constants } from "../shared/constants";
import { useVideoPlayer, VideoView } from "expo-video";
import { Button } from "@react-navigation/elements";
import mobileAds, { AdEventType, BannerAd, BannerAdSize, InterstitialAd, TestIds, } from "react-native-google-mobile-ads";




export default function Home({ route }) {
    const navigation = useNavigation();
    const { catId } = route.params;
    const videosToPlay = [
        {
            videoId: 1,
            title: "Big Buck Bunney",
            videoUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            category: "Sports"
        },
        {
            videoId: 2,
            title: "CNN Special Report",
            videoUrl: "https://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8",
            category: "News"
        },
        {
            videoId: 3,
            title: "Aviion TV",
            videoUrl: "https://playertest.longtailvideo.com/adaptive/aviion/manifest.m3u8",
            category: "Documentary"
        },
        {
            videoId: 4,
            title: "Space TV",
            videoUrl: "https://playertest.longtailvideo.com/adaptive/aes-with-tracks/master.m3u8",
            category: "Sci-Fi"
        },
        {
            videoId: 5,
            title: "TMC",
            videoUrl: "https://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8",
            category: "Movies"
        },
        {
            videoId: 6,
            title: "Rugby Champs",
            videoUrl: "https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8",
            category: "Sports"
        }
    ];

    const [currentVideo, setCurrentVideo] = useState(videosToPlay[0]);


    const player = useVideoPlayer(currentVideo.videoUrl, player => {
        player.loop = true;
        player.play();
    });


    const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
        keywords: ['fashion', 'clothing']
    });
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        mobileAds().initialize().then((adapterStatus) => {
            console.log("Ads initialzed >>>> " + adapterStatus);
        });

        const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);

            setTimeout(() => {
                interstitial.show();
            }, 5000);

            console.log("Interstal Good >>>> ");
        });

        const unsubscribeOpened = interstitial.addAdEventListener(AdEventType.OPENED, () => {
            if (Platform.OS === 'ios') {
                // Prevent the close button from being unreachable by hiding the status bar on iOS
                StatusBar.setHidden(true);
            }
        });

        const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
            if (Platform.OS === 'ios') {
                StatusBar.setHidden(false);
            }
            player.play();
        });

        interstitial.load();

        return () => {
            unsubscribeLoaded();
            unsubscribeOpened();
            unsubscribeClosed();
        };
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: constants.colors.mainBackground }}>
            <View style={{ flex: 1, borderWidth: 1, borderColor: '#777', borderRadius: 8, overflow: 'hidden', backgroundColor: 'black', height: 300, width: Dimensions.get('screen').width }}>
                <VideoView player={player} allowsFullscreen allowsPictureInPicture style={{ width: Dimensions.get('screen').width, height: 250 }} />
                <View style={{ height: 50 }}>
                    <Text style={{ fontSize: 16, color: '#ddd', padding: 5, fontWeight: 'bold' }}>{currentVideo.title}</Text>
                    <Text style={{ fontSize: 14, color: constants.colors.mainBackground, padding: 5, }}>{currentVideo.category}</Text>
                </View>

            </View>
            <View style={{ flex: 1 }}>
                <ScrollView >
                    <View style={{width: Dimensions.get('screen').width, alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
                    <BannerAd unitId={TestIds.BANNER} size={'320x50'} />
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

                        {videosToPlay.map((video) => (
                            <Button key={video.videoId} onPress={() => { 
                                
                                player.showNowPlayingNotification = true;
                                setCurrentVideo(video);
                                //player.replace(currentVideo.videoUrl);
                                //player.play();
                            }}

                            style={{
                                height: 60,
                                width: (Dimensions.get('screen').width / 2) - 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#000',
                                marginBlockStart: 10
                            }
                            }>
                            {video.title}
                        </Button>))}

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}