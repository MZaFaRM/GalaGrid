import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../assets/icons';
import {RecommendedStuffBoxCard} from '../components/homePageComponents';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';

const HomePage = ({navigation}) => {
  const [products, setProducts] = useState([
    {
      key: 0,
      company: 'PC event rentals',
      name: 'cusion chair',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/8/336556815/LU/VP/KG/12245154/home-cushion-plastic-chair-500x500.jpeg',
      item_count: 5,
    },
    {
      key: 1,
      company: 'PC event rentals',
      name: 'royal chair',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/6/319033547/ZJ/NT/AN/125999640/king-queen-throne-chair.jpeg',
      item_count: 5,
    },
    {
      key: 2,
      company: 'Taj light & sounds',
      name: 'fancy chair',
      image:
        'https://5.imimg.com/data5/ANDROID/Default/2022/1/QZ/DY/VN/45791135/product-jpeg-500x500.jpg',
      item_count: 5,
    },
    {
      key: 3,
      company: 'PCF',
      name: 'normal chair',
      image:
        'https://5.imimg.com/data5/MY/RD/IQ/ANDROID-32996277/product-jpeg.jpg',
      item_count: 5,
    },
    {
      key: 4,
      company: 'PC event rentals',
      name: 'normal handrest chair',
      image:
        'https://m.media-amazon.com/images/I/51V1dc-rJZS._AC_UF894,1000_QL80_.jpg',
      item_count: 5,
    },
    {
      key: 5,
      company: 'Taj light & sounds',
      name: 'cusion chair',
      image:
        'https://www.nilkamalfurniture.com/cdn/shop/products/1_07_c0558986-554b-4164-b481-ac25dff2d637.jpg?v=1674215514&width=360',
      item_count: 5,
    },
    {
      key: 6,
      name: 'fancy chair',
      image:
        'https://cdn.shopify.com/s/files/1/0044/1208/0217/files/FERNYLW_900x.jpg?v=1708504570',
      company: 'SNS',
      item_count: 5,
    },
    {
      key: 7,
      company: 'SNS',
      name: 'royal chair',
      image:
        'https://m.media-amazon.com/images/I/81FXphelMWL._AC_UF894,1000_QL80_.jpg',
      item_count: 5,
    },
    {
      key: 8,
      company: 'SNS',
      name: 'table',
      image:
        'https://images-cdn.ubuy.co.in/64b6d70ac8bd5b69132d62d8-mainstays-6-foot-bi-fold-plastic-folding.jpg',
      item_count: 5,
    },
    {
      key: 9,
      company: 'PC event rentals',
      name: 'table cum chair foldable',
      image:
        'https://5.imimg.com/data5/ANDROID/Default/2022/3/KY/HE/GT/108228820/product-jpeg.jpg',
      item_count: 5,
    },
    {
      key: 10,
      company: 'Taj light & sounds',
      name: 'table',
      image: 'https://cdn.moglix.com/p/cPMyaxrbLbtb9-xxlarge.jpg',
      item_count: 5,
    },
    {
      key: 11,
      company: 'SNS',
      name: 'round table',
      image:
        'https://m.media-amazon.com/images/I/61VDv8UQvtL._AC_UF894,1000_QL80_.jpg',
      item_count: 5,
    },
    // {
    //   key: 12,
    //   company: 'PCF',
    //   name: 'fancy table',
    //   image:
    //     'https://images.woodenstreet.de/image/data/dining-tables/paul-dining-table/updated/honey-finish/1.jpg',
    //   item_count: 5,
    // },
  ]);

  return (
    <Layout
      navigation={navigation}
      title={'Home Page'}
      footer={true}
      header={false}
      currentPage={pages.homePage}>
      <ScrollView style={styles.container}>
        <View style={styles.bannerBox}>
          <ImageBackground
            source={require('../assets/images/bannerBG.jpg')}
            resizeMode="stretch">
            <View style={styles.banner}>
              <Text style={styles.bannerText}>
                Explore our collection of {'\n'}event rentals & services
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.searchBox]}>
          <Icon
            type="AntDesign"
            name="search1"
            size={20}
            color="white"
            style={{flex: 1}}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="white"
            style={[styles.SearchText, {flex: 10}]}
          />
          <TouchableOpacity
            style={[styles.filterBox, {flex: 1}]}
            onPress={() => navigation.navigate(pages.filterPage)}>
            <Icon
              type="Entypo"
              name="menu"
              size={20}
              color={colors.quaternary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.typeProduct}>
          
        </View>
        <View style={[styles.StuffHeader]}>
          <Text style={styles.StuffHeaderText}>Featured Products</Text>
        </View>
        <View style={styles.recommendedStuffBoxCards}>
          {products.map(product => (
            <RecommendedStuffBoxCard
            key={product.key}
            productID={product.key}
              company={product.company}
              image={product.image}
              name={product.name}
              itemCount={product.item_count}
            />
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  searchBox: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,

    borderRadius: 10,
    padding: 15,
    paddingVertical: 10,
  },
  bannerBox: {
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  banner: {
    height: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  bannerText: {
    fontSize: 30,
    fontFamily: fonts.quaternary,
    color: 'grey',
  },
  headerText: {
    color: 'white',
    fontFamily: fonts.primary,

    fontSize: 30,
  },
  headerBox: {
    position: 'absolute',
    zIndex: 1,
    margin: 20,

    height: '75%',
    justifyContent: 'flex-end',
  },
  filterBox: {
    backgroundColor: colors.tertiary,
    padding: 5,
    borderRadius: 10,

    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SearchText: {
    color: 'white',
  },
  StuffHeader: {
    margin: 20,
  },
  StuffHeaderText: {
    color: 'white',
    fontFamily: fonts.tertiary,
    fontSize: 24,
  },
  seeAllBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  seeAllText: {
    color: colors.tertiary,
    fontFamily: fonts.quaternary,
    fontSize: 16,
  },
  recommendedStuffBoxCards: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 5,

    marginBottom: 125,
  },
});

export default HomePage;
