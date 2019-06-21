class FlashModel {
  constructor ({ title, description, type }) {
    this.id = Math.floor(Math.random() * 1000);
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
