import React from "react";
import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// width and height are determined
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index, darkTheme }) => {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }]
      }}
    >
      {/* Image of the corresponding news */}
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "40%", resizeMode: "cover", width: windowWidth }}
      />
      {/* news description */}
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#451445" : "white",
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? "white" : "black" }}>
        Covered by
          <Text style={{color: "#DA6F3A",}}>
            {" "}
            {item.author ? item.author : "unknown"}
          </Text>
        </Text>
        {/* instruction */}
        <View style={{padding: 30, alignSelf: "center"}}>
            <Text style={{ alignSelf:"center", color: "gray"}}>Swipe Up for next</Text>
            <Text style={{alignSelf:"center", color: "gray" }}>Swipe down for previous</Text>
        </View>

      </View>
      
      {/* news description section end */}

      {/* read more over lay on the single news */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={{ fontSize: 15, color: "white" }}>
              {item?.content?.slice(0, 45)}...
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </View>
        
    </View>
  );
};

export default SingleNews;

// style of the single news page
const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    color: "#EFEFEF",
    marginBottom:5,
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "white",
    marginBottom: 5
  },
  content: { fontSize: 18, paddingBottom: 10 },
  footer: {
    height: 70,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#DA6F3A",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});