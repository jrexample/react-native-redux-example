import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { fetchCategories, goToPost } from '../actions/category-action';
import CategoryItem from '../components/Category';

class Category extends Component {
  static navigationOptions = {
    title: 'Kategori',
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  pressHandler(categoryId, categoryName) {
    this.props.goToPost(categoryId, categoryName);
  }

  render() {
    return (
      <View>
        {
          this.props.requesting ?
            <Loading /> :
            <FlatList
              data={this.props.categories}
              renderItem={({ item }) => (
                <CategoryItem pressHandler={this.pressHandler.bind(this, item.id, item.name)}>
                  {item.name}
                </CategoryItem>
              )}
              keyExtractor={(item => item.id.toString())}
            />
        }
      </View>
    );
  }
}

const mapStateToProps = (state => ({
  categories: state.category.data,
  requesting: state.category.requesting,
  error: state.category.error,
}));

const mapDispatchToProps = {
  fetchCategories,
  goToPost,
};

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  requesting: PropTypes.bool.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  goToPost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
