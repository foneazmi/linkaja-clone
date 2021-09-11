import {StyleSheet, Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('screen');

export const headerHeight = 50;
export const walletHeight = 180;
export const paymentHeight = 80;
// export const headerFinalHeight = 112;
// export const imageSize = (headerHeight / 3) * 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    backgroundColor: 'white',
    marginTop: walletHeight + paymentHeight,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    // paddingTop: 8,
    zIndex: 99,
  },

  /////
  sectionHeader: {
    backgroundColor: 'white',
    height: headerHeight,
    width,
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  photoProfileHeader: {
    height: headerHeight - 16,
    width: headerHeight - 16,
    borderRadius: headerHeight - 16,
  },
  nameProfileHeader: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 8,
  },
  /////
  sectionWallet: {
    width,
    height: walletHeight,
    position: 'absolute',
    backgroundColor: '#D81E1F',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  nameWallet: {
    color: 'white',
  },
  /////
  sectionPayment: {
    width,
    backgroundColor: '#F7F6FC',
    position: 'absolute',
    borderTopLeftRadius: 16,
    padding: 16,
    borderTopRightRadius: 16,

    // top: headerHeight + walletHeight,
    height: paymentHeight,
  },
  sectionContent: {
    width,
    padding: 16,
    height: height * 2,
  },
});
