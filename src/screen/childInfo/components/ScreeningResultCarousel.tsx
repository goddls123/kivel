import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";

interface ItemProps {
  title: string;
  text: string;
}

// interface Props {
//   carouselItems?: ItemProps;
// }

interface State {
  activeIndex: number;
  carouselItems: ItemProps[];
}

class ScreeningResultCarousel extends Component<any, State> {
  ref = React.createRef<any>();
  state = {
    activeIndex: 0,
    carouselItems: [
      {
        title: "Item 1",
        text: "Text 1",
      },
      {
        title: "Item 2",
        text: "Text 2",
      },
      {
        title: "Item 3",
        text: "Text 3",
      },
      {
        title: "Item 4",
        text: "Text 4",
      },
      {
        title: "Item 5",
        text: "Text 5",
      },
    ],
  };
  renderItem = ({ item, index }: { item: ItemProps; index: number }) => {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "rebeccapurple", paddingTop: 50 }}>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <Carousel
            layout={"default"}
            ref={this.ref}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this.renderItem}
            onSnapToItem={(index: number) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default ScreeningResultCarousel;
