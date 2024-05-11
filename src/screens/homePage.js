import {Buffer} from 'buffer';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {fetchProduct} from '../api/products';
import Icon from '../assets/icons';
import {Banner} from '../components/component';
import {RecommendedStuffBoxCard} from '../components/homeComponents';
import Layout from '../components/layout';
import {colors, fonts, pages} from '../constants/constants';
import {fetchEvent} from '../api/events';
import {handleAuthError} from '../api/auth';
import {useFocusEffect} from '@react-navigation/native';
import {getAuthToken} from '../api/src';

const HomePage = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetchProduct();
      setProducts(response.data);
    } catch (error) {
      await handleAuthError(error, navigation);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log('fetching data');
  }, []);

  const onRefresh = useCallback(() => {
    fetchData();
  }, []);

  const calculateJaccardSimilarity = (query, attribute) => {
    const querySet = new Set(query.toLowerCase().split(' '));
    const attributeSet = new Set(attribute.toLowerCase().split(' '));
    const intersectionSize = [...querySet].filter(x =>
      attributeSet.has(x),
    ).length;
    const unionSize = querySet.size + attributeSet.size - intersectionSize;
    return intersectionSize / unionSize;
  };

  const searchProducts = query => {
    const scoredProducts = products.map(product => {
      let score = 0;
      score += calculateJaccardSimilarity(query, product.name) * 2; // Double points for exact match
      score += calculateJaccardSimilarity(query, product.company_name);
      score += calculateJaccardSimilarity(query, product.description);
      score += calculateJaccardSimilarity(query, product.district);
      score += calculateJaccardSimilarity(query, product.state);
      score += calculateJaccardSimilarity(query, product.price.toString());
      score += calculateJaccardSimilarity(
        query,
        product.max_quantity.toString(),
      );
      return {product, score};
    });

    scoredProducts.sort((a, b) => b.score - a.score);

    return scoredProducts.map(scoredProduct => scoredProduct.product);
  };

  const handleSearch = query => {
    setIsLoading(true);
    const searchResults = searchProducts(query);
    setProducts(searchResults);
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <Layout
      navigation={navigation}
      title={'Home Page'}
      footer={true}
      header={false}
      currentPage={pages.homePage}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        <Banner
          image={require('../assets/images/bannerBG.jpg')}
          text={'Explore our collection of \nevent rentals & services'}
        />
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
            onChangeText={handleSearch}
          />
          {/* <TouchableOpacity
            style={[styles.filterBox, {flex: 1}]}
            onPress={() => navigation.navigate(pages.filterPage)}>
            <Icon
              type="Entypo"
              name="menu" 
              size={20}
              color={colors.quaternary}
            />
          </TouchableOpacity> */}
        </View>
        <View style={styles.typeProduct}></View>
        <View style={[styles.StuffHeader]}>
          <Text style={styles.StuffHeaderText}>Featured Products</Text>
        </View>
        {products && products.length > 0 && (
          <View style={styles.recommendedStuffBoxCards}>
            {products.map(product => (
              <RecommendedStuffBoxCard key={product.id} product={product} />
            ))}
          </View>
        )}
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
  filterBox: {
    backgroundColor: colors.yellow,
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
    color: colors.yellow,
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
