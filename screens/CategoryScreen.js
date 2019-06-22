import React from 'react';
import Screen from './Screen';
import { ScrollView } from 'react-native';
import CategoryPanel from '../components/categories/CategoryPanel';
import CategoriesService from '../services/CategoriesService';
import FlashMessages from '../components/shared/FlashMessages';

class CategoryScreen extends Screen {
  state = {
    categories: []
  }

  componentDidMount () {
    CategoriesService.all().then((categories) => {
      this.setState({
        categories: categories
      })
    }).catch((e) => {
      this.noApiResponse(e);
    })
  }

  categoryNavigate = (categoryId) => {
    this.props.navigation.navigate('Products', { categoriesIds: [categoryId] })
  }

  render () {
    const { categories } = this.state;

    return (
      <React.Fragment>
        <FlashMessages />
        <ScrollView>
          { categories.map((category) => (
            <CategoryPanel
              onCategorySelect={this.categoryNavigate}
              key={category.id}
              {...category}
            />
          )) }
        </ScrollView>
      </React.Fragment>
    )
  }
}

export default CategoryScreen;
