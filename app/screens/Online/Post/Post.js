import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../../../components/Loading';
import { fetchPosts, goToPostDetail } from '../../../actions/post-action';
import PostItem from '../../../components/Post';

class Post extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state: { params = {} } } = navigation;
    return {
      title: `Huruf ${params.categoryName}`,
    };
  };

  componentDidMount() {
    this.props.fetchPosts(this.props.navigation.getParam('categoryId'));
  }

  pressHandler(postId, postTitle) {
    this.props.goToPostDetail(postId, postTitle);
  }

  render() {
    return (
      <View>
        {
          this.props.requesting ?
            <Loading /> :
            <FlatList
              data={this.props.posts}
              renderItem={({ item }) => (
                <PostItem pressHandler={this.pressHandler.bind(this, item.id, item.title.rendered)}>
                  {item.title.rendered}
                </PostItem>
              )}
              keyExtractor={(item => item.id.toString())}
            />
        }
      </View>
    );
  }
}

const mapStateToProps = (state => ({
  posts: state.post.data,
  requesting: state.post.requesting,
  error: state.post.error,
}));

const mapDispatchToProps = {
  fetchPosts,
  goToPostDetail,
};

Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
  requesting: PropTypes.bool.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  goToPostDetail: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
