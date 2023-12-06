import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import styles from "./index.style";
// import {
//   Nearbyjobs,
//   Popularjobs,
//   ScreenHeaderBtn,
//   Welcome,
// } from "../components";
// import { Nearbyjobs } from "../components/home/nearby/Nearbyjobs";
import Welcome from "../components/home/welcome/Welcome";
import Popularjods from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";

const Home = () => {
  return (
    <SafeAreaView
      // style={{
      //   flex: 1,
      //   backgroundColor: COLORS.lightWhite,
      // }}\
      style={styles.container}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView>
        <View>
          <Welcome />
          <Popularjods />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
