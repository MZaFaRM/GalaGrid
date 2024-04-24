import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import HomePageBanner from '../assets/images/HomePageBanner.svg';
import Icon from '../assets/icons';
import {
  RecommendedStuffBoxCard,
  OtherStuffBoxCards,
} from '../components/homePageComponents';
import pages from '../constants/pages';
import {colors, fonts} from '../constants/constants';

const HomePage = ({navigation}) => {
  const [searchBoxHeight, setSearchBoxHeight] = useState(0);
  headerSize = 300;

  const handleLayout = event => {
    const {height} = event.nativeEvent.layout;
    setSearchBoxHeight(height);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.searchBox]} onLayout={handleLayout}>
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
          <Icon type="Entypo" name="menu" size={20} color={colors.quatertiary} />
        </TouchableOpacity>
      </View>
      <View style={[styles.StuffHeader]}>
        <Text style={styles.StuffHeaderText}>Featured Products</Text>
      </View>
      <TouchableOpacity style={styles.seeAllBox}>
        <Text style={styles.seeAllText}>
          See More{'\t\t'}
          <Icon
            type="FontAwesome"
            name="caret-right"
            size={16}
            color={colors.tertiary}
          />
        </Text>
      </TouchableOpacity>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.recommendedStuffBoxCards}
        showsHorizontalScrollIndicator={false}>
        <RecommendedStuffBoxCard />
        <RecommendedStuffBoxCard />
        <RecommendedStuffBoxCard />
        <RecommendedStuffBoxCard />
      </ScrollView>
      <View style={styles.ListAllBlock}>
        <View style={[styles.StuffHeader]}>
          <Text style={styles.StuffHeaderText}>Running Events</Text>
        </View>
        <View style={styles.OtherStuffBoxCards}>
          <OtherStuffBoxCards />
          <OtherStuffBoxCards />
          <OtherStuffBoxCards />
          <OtherStuffBoxCards />
          <OtherStuffBoxCards />
          <OtherStuffBoxCards />
          <OtherStuffBoxCards />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#030316',
  },
  searchBox: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,

    borderRadius: 10,
    padding: 15,
    paddingVertical: 10,
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
    marginBottom: 0,
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
    fontFamily: fonts.quatertiary,
    fontSize: 16,
  },
  recommendedStuffBoxCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomePage;
