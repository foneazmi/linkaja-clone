import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
StatusBar.setBarStyle("dark-content");

export const { width, height } = Dimensions.get("window");

export const headerHeight = 50;
export const walletHeight = 180;
export const paymentHeight = 80;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    backgroundColor: "white",
    marginTop: walletHeight + paymentHeight,
    zIndex: 99,
  },
  sectionHeader: {
    backgroundColor: "white",
    height: headerHeight,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  photoProfileHeader: {
    height: headerHeight - 16,
    width: headerHeight - 16,
    borderRadius: (headerHeight - 16) / 2,
  },
  nameProfileHeader: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 8,
  },
  sectionWallet: {
    height: walletHeight,
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#D81E1F",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  nameWallet: {
    color: "white",
  },
  sectionPayment: {
    backgroundColor: "#F7F6FC",
    position: "absolute",
    left: 0,
    right: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    height: paymentHeight,
  },
  sectionContent: {
    padding: 16,
    height: Platform.select({ android: height * 1.25, default: height * 0.91 }), // i not sure why on android not full screen
    backgroundColor: "white",
  },
});
