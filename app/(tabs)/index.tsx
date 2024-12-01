import {Image, StyleSheet, Platform, TouchableOpacity} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useDispatch, useSelector} from "react-redux";
import { decrement, increment } from '@/redux/features/counter/counterSlice'

export default function HomeScreen() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
        <ThemedView>
            <TouchableOpacity
                onPress={() => dispatch(increment())}
            >
                <ThemedText>Increment</ThemedText>
            </TouchableOpacity>
            <ThemedText>{count}</ThemedText>
            <TouchableOpacity
                onPress={() => dispatch(decrement())}
            >
                <ThemedText>Decrement</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
