import axios from "axios";

export default {
  async getProducts() {
    try {
      const {
        data: { contacts }
      } = await axios.get("http://sample.bmaster.kro.kr/contacts");

      return contacts;
    } catch (e) {
      console.error(e);
    }
  }
};
