import React, {useRef} from 'react';
import {Text, ScrollView, StatusBar, Animated, View, Image} from 'react-native';
import {styles, headerHeight, walletHeight, paymentHeight} from './styles';

export const App = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateWallet = scrollY.interpolate({
    inputRange: [0, headerHeight + walletHeight + paymentHeight],
    outputRange: [headerHeight, 0],
    // extrapolate: 'clamp',
  });
  const translatePayment = scrollY.interpolate({
    inputRange: [0, walletHeight + paymentHeight],
    outputRange: [walletHeight, 0],
    extrapolate: 'clamp',
  });

  const Header = () => (
    <Animated.View style={styles.sectionHeader}>
      <Image
        style={styles.photoProfileHeader}
        source={{
          uri: 'https://images.unsplash.com/photo-1509839862600-309617c3201e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        }}
      />
      <Text style={styles.nameProfileHeader}>Farkhan Azmi</Text>
    </Animated.View>
  );
  const Wallet = () => (
    <Animated.View
      style={[
        styles.sectionWallet,
        {transform: [{translateY: translateWallet}]},
      ]}>
      <Text style={styles.nameWallet}>Wallet</Text>
    </Animated.View>
  );
  const Payment = () => (
    <Animated.View
      style={[
        styles.sectionPayment,
        {transform: [{translateY: translatePayment}]},
      ]}>
      <Text>Payment</Text>
    </Animated.View>
  );
  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Header />
      <Wallet />
      <Payment />
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        <View style={styles.sectionContent}>
          <Text>Content</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
