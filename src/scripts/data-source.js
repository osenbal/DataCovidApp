import axios from 'axios';

class DataSource {
  /* eslint-disable */
  static async searchDataByProvince(keyword) {
    try {
      const resultDatas = [];
      const responseSearchJson = await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more');

      responseSearchJson.data.forEach((datas) => {
        if (datas.provinsi.toLowerCase().includes(keyword)) {
          resultDatas.push(datas);
        }
      });
      if (resultDatas.length != 0) {
        return resultDatas;
      }
      return resultDatas.length;
    } catch (error) {
      console.log(error);
    }
  }
}
export default DataSource;
