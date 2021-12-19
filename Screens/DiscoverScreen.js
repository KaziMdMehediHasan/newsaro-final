import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../API/api";
import { NewsContext } from "../API/Context";
import Search from "../components/Search";

const DiscoverScreen = () => {
  // total width
  const windowWidth = Dimensions.get("window").width;

  // defining width between the categories
  const SLIDE_WIDTH = Math.round(windowWidth / 3);

  // data captured and destructured from context api
  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  return (
    <View style={styles.discover}>
      {/* search box */}
      <Search />

      {/* categories section */}
      <Text
        style={{ ...styles.subtitle, color:"white"}}
      >
        Categories
      </Text>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              style={styles.category}
            >
              <Image source={{ uri: item.pic }} style={styles.categoryImage} />
              <Text
                style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      {/* categories section end */}

      {/* sources section */}
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        Sources
      </Text>
      <View style={styles.sources}>
        {sources.map((source) => (
          <TouchableOpacity
            onPress={() => setSource(source.id)}
            key={source.id}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: source.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
      {/* sources section end */}
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#451445",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#DA6F3A",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "50%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap-reverse",
    justifyContent: "space-around",
    padding: 10,
  },
  sourceContainer: {
    height: 140,
    width: "40%",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "transparent",
    flex: 0,
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});