import styles from "@/styles/HomeStyle";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import Carrousel from "@/componentes/carrouselCards";
import CarrouselPop from "@/componentes/carrouselPopular";

// IMAGENS
const bell = require("@/assets/images/notification.png");
const eyeicon = require("@/assets/images/Vector.svg");
const criaricon = require("@/assets/images/criaricon.svg");

export default function Home() {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40, alignItems: "center" }}
    >
      <View style={styles.pesquisaContainer}>
        <TextInput
          style={styles.inputPesquisa}
          placeholder="Pesquise uma categoria"
          onChangeText={setPesquisa}
          value={pesquisa}
        />
        <Image source={bell} style={styles.bellimg} />
      </View>

      {/* Corpo da tela */}
      <View style={styles.body}>
        {/* Carrossel de ferramentas */}
        <View style={styles.view1}>
          <Text style={styles.text}>Nossas ferramentas</Text>
          <Carrousel />
        </View>

        {/* Seção de controle de postagens */}
        <View style={styles.viewcontrolPOSTS}>
          <View style={styles.direita}>
            <Text style={styles.textotop}>Suas postagens:</Text>
            <Text>3</Text>
          </View>

          <View style={styles.centro}>
            <Image source={eyeicon} style={styles.imgIcon} />
            <Text style={styles.texto}>Ver meus anúncios</Text>
          </View>

          <View style={styles.esquerda}>
            <Image source={criaricon} style={styles.imgIcon} />
            <Text style={styles.texto}>Criar anúncio</Text>
          </View>
        </View>

        {/* Carrossel de serviços populares */}
        <View style={styles.CarouselServicos}>
          <Text style={styles.text}>Serviços mais populares</Text>
          <CarrouselPop />
        </View>
      </View>
    </ScrollView>
  );
}
