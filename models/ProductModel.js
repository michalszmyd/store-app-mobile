class ProductModel {
  constructor (params) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.imageUrl = params.image_url;
    this.price = params.price;
  }
}

export default ProductModel;
