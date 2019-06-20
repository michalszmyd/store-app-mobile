class FlashModel {
  constructor ({ title, description, type }) {
    this.id = new Date();
    this.title = title;
    this.description = description;
    this.type = type;

    this.validateType();
  }

  validateType = () => {
    if (!['danger', 'warning', 'success'].includes(this.type)) {
      throw new TypeError('Incorrect type');
    }
  }
}

export default FlashModel;