import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Layout from '../components/layout';

const FilterPage = ({navigation}) => {
  const [filterData, setFilterData] = useState([
    {
      key: 0,
      filterTitle: 'Single Selection',
      filterSelectionType: 'single',
      filterOptions: [
        {
          key: 0,
          optionName: 'Click this',
          isSelected: false,
        },
        {
          key: 1,
          optionName: 'Or this',
          isSelected: true,
        },
        {
          key: 2,
          optionName: 'Or this',
          isSelected: false,
        },
        {
          key: 3,
          optionName: 'Or this long text',
          isSelected: false,
        },
        {
          key: 4,
          optionName: 'Or maybe this long text',
          isSelected: false,
        },
        {
          key: 5,
          optionName: 'Or perhaps this really really long text',
          isSelected: false,
        },
        {
          key: 6,
          optionName: "Or I don't know maybe this really really long text",
          isSelected: false,
        },
      ],
    },
    {
      key: 1,
      filterTitle: 'Multi Selection',
      filterSelectionType: 'multiple',
      filterOptions: [
        {
          key: 0,
          optionName: 'Click this',
          isSelected: false,
        },
        {
          key: 1,
          optionName: 'And this',
          isSelected: true,
        },
        {
          key: 2,
          optionName: 'And this',
          isSelected: false,
        },
        {
          key: 3,
          optionName: 'And this long text',
          isSelected: false,
        },
        {
          key: 4,
          optionName: 'And maybe this long text',
          isSelected: false,
        },
        {
          key: 5,
          optionName: 'And perhaps this really really long text',
          isSelected: false,
        },
        {
          key: 6,
          optionName: "And I don't know maybe this really really long text",
          isSelected: false,
        },
      ],
    },
  ]);

  const handleFilterData = (filterKey, optionKey) => {
    const newFilterData = [...filterData];
    const selectedData = newFilterData[filterKey];
    if (selectedData.filterSelectionType === 'multiple') {
      // if multiple selection is allowed
      // toggle the selected option
      newFilterData[filterKey].filterOptions[optionKey].isSelected =
        !newFilterData[filterKey].filterOptions[optionKey].isSelected;
    } else if (selectedData.filterSelectionType === 'single') {
      // if is single selection
      // set all options to false and set the selected option to true
      newFilterData[filterKey].filterOptions.map(option => {
        option.isSelected = false;
        return option;
      });

      newFilterData[filterKey].filterOptions[optionKey].isSelected = true;
    }

    setFilterData(newFilterData);
  };

  return (
    <Layout navigation={navigation} title="Filter">
      <ScrollView style={styles.container}>
        {filterData.map(filter => (
          <View style={styles.filterHeader}>
            <Text style={styles.filterText}>{filter.filterTitle}</Text>
            <View style={styles.filterBoxes}>
              {filter.filterOptions.map(option => (
                <TouchableOpacity
                  style={[
                    styles.filterBox,
                    option.isSelected ? styles.selectedFilterBox : {},
                  ]}
                  onPress={() => handleFilterData(filter.key, option.key)}>
                  <Text
                    style={[
                      styles.filterBoxText,
                      option.isSelected ? styles.selectedFilterBoxText : {},
                    ]}>
                    {option.optionName}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020b44',
    padding: 20,
  },
  filterHeader: {},
  filterText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Quicksand-Bold',
    marginBottom: 20,
  },
  filterBoxes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',

    marginRight: 10,
    marginBottom: 10,

    alignSelf: 'flex-start',
  },
  filterBoxText: {
    color: '#5d3dfc',
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
  },
  selectedFilterBox: {
    backgroundColor: '#5d3dfc',
  },
  selectedFilterBoxText: {
    color: 'white',
  },
});

export default FilterPage;
