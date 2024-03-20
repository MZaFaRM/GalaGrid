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

const HomePage = ({navigation}) => {
  const [searchBoxHeight, setSearchBoxHeight] = useState(0);
  headerSize = 300;

  const handleLayout = event => {
    const {height} = event.nativeEvent.layout;
    setSearchBoxHeight(height);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{height: headerSize, backgroundColor: 'white'}}>
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Find the {'\n'}trending Events</Text>
        </View>
        <HomePageBanner
          style={styles.background}
          height={'100%'}
          width={'100%'}
          preserveAspectRatio="xMaxYMax slice"
        />
      </View>
      <View
        style={[
          styles.searchBox,
          {marginTop: headerSize - searchBoxHeight / 2},
        ]}
        onLayout={handleLayout}>
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
          <Icon type="Entypo" name="menu" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={[styles.StuffHeader, {marginTop: 20 + searchBoxHeight / 2}]}>
        <Text style={styles.StuffHeaderText}>Popular Events</Text>
      </View>
      <TouchableOpacity style={styles.seeAllBox}>
        <Text style={styles.seeAllText}>See all</Text>
        <Icon
          type="FontAwesome"
          name="caret-right"
          size={15}
          color="#5d3dfc"
          style={{alignSelf: 'center'}}
        />
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
      <View style={{height: 600, backgroundColor: '#020b44'}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020b44',
  },
  searchBox: {
    backgroundColor: '#0b144b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,

    borderRadius: 10,
    padding: 15,
    paddingVertical: 10,
    zIndex: 1,
    position: 'absolute',
  },
  headerText: {
    color: 'white',
    fontFamily: 'Quicksand-Bold',

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
    backgroundColor: '#5d3dfc',
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
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
  },
  seeAllBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  seeAllText: {
    color: '#5d3dfc',
    fontFamily: 'Quicksand-Medium',
    fontSize: 15,
    marginRight: 10,

    alignSelf: 'center',
  },
  recommendedStuffBoxCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomePage;
