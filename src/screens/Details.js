import React from "react";
import { Dimensions, Image, StyleSheet, View,Text } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "react-navigation-hooks";
import Animated, {
  Extrapolate,
  and,
  block,
  call,
  cond,
  eq,
  interpolate,
  set,
  useCode,
} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import {
  onGestureEvent,
  snapPoint,
  timing,
  useValues,
} from "react-native-redash";
import { useMemoOne } from "use-memo-one";

import { SafeAreaView } from "react-native-safe-area-context";

//import { Description } from "./components";
//import { Listing as ListingModel } from "./components/Listing";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: width,
  },
  thumbnailOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 16,
  },
});
const Details = ({ route, navigation }) => {
  const { goBack, getParam } = useNavigation();
  console.log(route);
  console.log(navigation.state.params.hero);
    return(
        <View>
           <Text>Description</Text> 
        </View>
    )
/*   
  
  const [
    translationX,
    translationY,
    velocityY,
    translateX,
    translateY,
    snapBack,
    state,
  ] = useValues(0, 0, 0, 0, 0, 0, State.UNDETERMINED);
  const snapTo = snapPoint(translationY, velocityY, [0, height]);
  const scale = interpolate(translateY, {
    inputRange: [0, height / 2],
    outputRange: [1, 0.75],
    extrapolate: Extrapolate.CLAMP,
  });
  const gestureHandler = useMemoOne(
    () => onGestureEvent({ translationX, translationY, velocityY, state }),
    [state, translationX, translationY, velocityY]
  );
  useCode(
    () =>
      block([
        cond(
          and(eq(state, State.END), eq(snapTo, height), eq(snapBack, 0)),
          set(snapBack, 1)
        ),
        cond(
          snapBack,
          call([], () => goBack()),
          cond(
            eq(state, State.END),
            [
              set(
                translateX,
                timing({ from: translationX, to: 0, duration: 250 })
              ),
              set(
                translateY,
                timing({ from: translationY, to: 0, duration: 250 })
              ),
            ],
            [set(translateX, translationX), set(translateY, translationY)]
          )
        ),
      ]),
    []
  );
  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: "white",
            transform: [{ translateX }, { translateY }, { scale }],
          }}
        >
          <View>
            <SharedElement id={listing.id}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={listing.picture}
              />
            </SharedElement>
            <SafeAreaView style={styles.thumbnailOverlay}>
              <Icon.Button
                name="x"
                backgroundColor="transparent"
                underlayColor="transparent"
                onPress={() => goBack()}
              />
            </SafeAreaView>
          </View>
          <Description />
        </Animated.View>
      </PanGestureHandler>
    </View>
  ); */
};


export default Details;