import { Tabs } from "expo-router";
import { Image } from "react-native";

const chaticon = require("@/assets/images/chaticon.png");
const agendaicon = require("@/assets/images/agendaicon.png");
const profileicon = require("@/assets/images/profileicon.png");
const anuncioicon = require("@/assets/images/anuncioicon.png");
const homeicon = require("@/assets/images/homeicon.png");

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={homeicon}
              style={{
                width: 20,
                height: 22,
                tintColor: focused ? "#007AFF" : "gray",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "chat",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={chaticon}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? "#007AFF" : "gray",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="anuncio"
        options={{
          title: "anuncio",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={anuncioicon}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? "#007AFF" : "gray",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: "agenda",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={agendaicon}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? "#007AFF" : "gray",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={profileicon}
              style={{
                width: 20,
                height: 22,
                tintColor: focused ? "#007AFF" : "gray",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
