class ProductModel {
  constructor (params) {
    this.id = params.id || null;
    this.name = params.name || '';
    this.description = params.description || '';
    this.imageUrl = params.image_url;
    this.price = params.price || 0;
  }

  formattedPrice = () => {
    return `$${this.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }
}

export default ProductModel;
