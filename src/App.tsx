import { useRef } from "react";
import { Text, Animated, View, Image } from "react-native";
import { styles, headerHeight, walletHeight, paymentHeight } from "./styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface WalletProps {
  translateWallet: Animated.AnimatedInterpolation<number>;
}

interface PaymentProps {
  translatePayment: Animated.AnimatedInterpolation<number>;
}

const Header = () => (
  <Animated.View style={styles.sectionHeader}>
    <Image
      style={styles.photoProfileHeader}
      source={{
        uri: "https://images.unsplash.com/photo-1509839862600-309617c3201e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      }}
    />
    <Text style={styles.nameProfileHeader}>John Doe</Text>
  </Animated.View>
);

const Wallet = ({ translateWallet }: WalletProps) => (
  <Animated.View
    style={[
      styles.sectionWallet,
      { transform: [{ translateY: translateWallet }] },
    ]}
  >
    <Text style={styles.nameWallet}>Wallet</Text>
  </Animated.View>
);

const Payment = ({ translatePayment }: PaymentProps) => (
  <Animated.View
    style={[
      styles.sectionPayment,
      { transform: [{ translateY: translatePayment }] },
    ]}
  >
    <Text>Payment</Text>
  </Animated.View>
);

export const App = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateWallet = scrollY.interpolate({
    inputRange: [0, headerHeight + walletHeight + paymentHeight],
    outputRange: [headerHeight, 0],
    extrapolate: "clamp",
  });

  const translatePayment = scrollY.interpolate({
    inputRange: [0, walletHeight + paymentHeight],
    outputRange: [walletHeight, 0],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Header />
          <Wallet translateWallet={translateWallet} />
          <Payment translatePayment={translatePayment} />
          <Animated.ScrollView
            bounces={false}
            contentContainerStyle={styles.scrollContentContainer}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              {
                useNativeDriver: true,
              },
            )}
          >
            <View style={styles.sectionContent}>
              <Text>Content</Text>
            </View>
          </Animated.ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
