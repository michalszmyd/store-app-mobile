import React from 'react';
import { ScrollView } from 'react-native';
import CategoryPanel from '../components/categories/CategoryPanel';
import CategoriesService from '../services/CategoriesService';

class CategoryScreen extends React.Component {
  state = {
    categories: []
  }

  componentDidMount () {
    CategoriesService.all().then((categories) => {
      this.setState({
        categories: categories
      })
    })
  }

  categoryNavigate = (categoryId) => {
    this.props.navigation.navigate('Products', { categoriesIds: [categoryId] })
  }

  render () {
    const { categories } = this.state;

    return (
      <ScrollView>
        { categories.map((category) => (
          <CategoryPanel
            onCategorySelect={this.categoryNavigate}
            key={category.id}
            {...category}
          />
        )) }
      </ScrollView>
    )
  }
}

export default CategoryScreen;