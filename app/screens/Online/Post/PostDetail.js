import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../../../components/Loading';
import { fetchPostById } from '../../../actions/post-detail-action';

class Post extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state: { params = {} } } = navigation;
    return {
      title: params.postTitle,
    };
  };

  componentDidMount() {
    this.props.fetchPostById(this.props.navigation.getParam('postId'));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.props.requesting ?
            <Loading /> :
            <WebView source={{ html: this.props.post.content.rendered }} />
        }
      </View>
    );
  }
}

const mapStateToProps = (state => ({
  post: state.postDetail.data,
  requesting: state.postDetail.requesting,
  error: state.postDetail.error,
}));

const mapDispatchToProps = {
  fetchPostById,
};

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  requesting: PropTypes.bool.isRequired,
  fetchPostById: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
