// React & React Native - Imports
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";

// Packages from Expo
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
// console.log(Constants.statusBarHeight);
import { Ionicons } from "@expo/vector-icons";

// Colors - Imports
import colors from "./assets/colors";
const {
  btnBlue,
  greyText,
  bgGrey,
  viewGrey1,
  viewGrey2,
  cardGrey,
  iconYellow,
  iconGreen,
} = colors;

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.wrapper}>
            <Image
              style={styles.imgLogo}
              resizeMode="contain"
              source={require("./assets/logo-imdb.png")}
            />
          </View>
        </View>

        {/* Main view 1 - Movie details */}
        <View style={[styles.view, styles.view1]}>
          <View style={styles.wrapper}>
            <Text style={[styles.h2, styles.whiteText]}>Interstellar</Text>
            <View style={styles.movieDetails1}>
              <Text style={[styles.greyText, styles.detailTextMargin]}>
                2014
              </Text>
              <Text style={[styles.greyText, styles.detailTextMargin]}>
                PG-13
              </Text>
              <Text style={[styles.greyText, styles.detailTextMargin]}>
                2h 49min
              </Text>
              <Text style={styles.greyText}>Adventure, Drama, Sci-Fi</Text>
            </View>

            <View style={styles.movieDetails2}>
              <View style={styles.bloc1}>
                <Image
                  style={styles.imgMovie}
                  resizeMode="contain"
                  source={require("./assets/cover-interstellar.jpg")}
                />
              </View>

              <View style={styles.bloc2}>
                <Text style={[styles.whiteText, styles.textDetails]}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <TouchableOpacity
                  style={styles.btnBlue}
                  onPress={() => {
                    console.log("hello");
                  }}
                >
                  <Text style={styles.whiteText}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.bloc3}>
              <View style={styles.icon1Bloc}>
                <Ionicons size={30} color={iconYellow} name="ios-star" />
                <View style={styles.rateText}>
                  <Text style={[styles.whiteText, styles.rateTextBold]}>
                    8.6
                  </Text>
                  <Text style={styles.whiteText}>/10</Text>
                </View>

                <Text style={styles.greyText}>1.1M</Text>
              </View>
              <View style={styles.icon2Bloc}>
                <Ionicons name="ios-star-outline" size={30} color="white" />
                <Text style={styles.whiteText}>RATE THIS</Text>
              </View>
              <View style={styles.icon3Bloc}>
                <Ionicons
                  size={30}
                  color="red"
                  name="square-sharp"
                  color={iconGreen}
                />
                <Text style={styles.iconAbsolute}>74</Text>
                <Text style={styles.whiteText}>Metascore</Text>
                <Text style={styles.greyText}>46 critic reviews</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Main view 2 - Actors cards */}
        <View style={[styles.view, styles.view2]}>
          <View style={styles.wrapper}>
            <View style={styles.seeAll}>
              <Text style={[styles.h2, styles.whiteText]}>Top Billed Cast</Text>
              <Text style={styles.blueText}>SEE ALL</Text>
            </View>

            <View style={styles.actorsScroll}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.card}>
                  <Image
                    style={styles.imgActors}
                    resizeMode="cover"
                    source={require("./assets/matthew-mcconaughey.jpg")}
                  />
                  <View style={styles.cardDetails}>
                    <Text style={styles.whiteText} numberOfLines={1}>
                      Matthew McConaughey
                    </Text>
                    <Text style={styles.greyText}>Cooper</Text>
                  </View>
                </View>

                <View style={styles.card}>
                  <Image
                    style={styles.imgActors}
                    resizeMode="cover"
                    source={require("./assets/anne-hathaway.jpg")}
                  />
                  <View style={styles.cardDetails}>
                    <Text style={styles.whiteText}>Anne Hathaway</Text>
                    <Text style={styles.greyText}>Brand</Text>
                  </View>
                </View>

                <View style={styles.card}>
                  <Image
                    style={styles.imgActors}
                    resizeMode="cover"
                    source={require("./assets/timothee-chalamet.jpg")}
                  />
                  <View style={styles.cardDetails}>
                    <Text style={styles.whiteText}>Timothée Chalamet</Text>
                    <Text style={styles.greyText}>Tom</Text>
                  </View>
                </View>

                <View style={styles.card}>
                  <Image
                    style={styles.imgActors}
                    resizeMode="cover"
                    source={require("./assets/mackenzie-foy.jpg")}
                  />
                  <View style={styles.cardDetails}>
                    <Text style={styles.whiteText}>Mackenzie Foy</Text>
                    <Text style={styles.greyText}>Murph</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>

        {/* Main view 3 - Movie's direction */}
        <View style={styles.view3}>
          <View style={styles.wrapper}>
            <View style={styles.director}>
              <Text style={[styles.whiteText, styles.h3]}>Director</Text>
              <Text style={styles.greyText}>Christopher Nolan</Text>
            </View>
            <View>
              <Text style={[styles.whiteText, styles.h3]}>Writers</Text>
              <Text style={styles.greyText}>
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

// CSS down below
const styles = StyleSheet.create({
  // Global rules
  screen: {
    backgroundColor: bgGrey,
    flex: 1,
  },
  scrollView: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  wrapper: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  // ----- Text color
  greyText: {
    color: greyText,
  },
  whiteText: {
    color: "white",
  },
  blueText: {
    color: btnBlue,
    fontWeight: "bold",
  },
  // ----- Titles
  h2: {
    fontSize: 28,
    fontWeight: "300",
  },
  h3: {
    fontSize: 16,
  },
  // ----- Buttons
  btnBlue: {
    backgroundColor: btnBlue,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },

  // Header
  header: {
    backgroundColor: viewGrey2,
    width: "100%",
    height: 60,
    justifyContent: "center",
    marginBottom: 15,
  },
  imgLogo: {
    height: 60,
    width: 70,
  },

  // Views
  view: {
    backgroundColor: viewGrey1,
    width: "100%",
    // height: 300,
  },
  view1: {
    marginBottom: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },

  // Main view 1 - Details of movie
  movieDetails1: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
  },
  imgMovie: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  movieDetails2: {
    flexDirection: "row",
  },
  detailTextMargin: {
    marginRight: 10,
  },
  bloc1: {
    width: "30%",
  },
  bloc2: {
    width: "70%",
  },
  textDetails: {
    marginBottom: 15,
  },
  bloc3: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon1Bloc: {
    alignItems: "center",
    width: "30%",
  },
  icon2Bloc: {
    alignItems: "center",
    width: "30%",
  },
  icon3Bloc: {
    alignItems: "center",
    width: "30%",
  },
  iconAbsolute: {
    position: "absolute",
    top: 8,
    color: "white",
  },

  // Main view 2 - Actors
  view2: {
    paddingTop: 10,
    marginBottom: 20,
  },
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  actorsScroll: {
    flexDirection: "row",
    marginRight: "-10%",
  },
  imgActors: {
    width: 160,
    height: 230,
  },
  card: {
    backgroundColor: cardGrey,
    marginRight: 10,
    paddingBottom: 15,
    alignItems: "center",
  },
  cardDetails: {
    paddingTop: 10,
    width: "95%",
  },
  rateText: {
    flexDirection: "row",
    alignItems: "center",
  },
  rateTextBold: {
    fontWeight: "bold",
    fontSize: 16,
  },

  // Main view 3 - Direction
  view3: {
    marginBottom: 20,
  },
  director: {
    marginBottom: 10,
  },
});
