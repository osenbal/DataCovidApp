/* eslint-disable */
import '../components/search-list.js';
import '../components/national-data.js';
import mapboxgl from 'mapbox-gl';
import DataSource from './data-source.js';
import axios from 'axios';

/* eslint-enable */
const main = () => {
  // Map Covid-19 world
  const mapCovid = () => {
    const mapboxToken = 'pk.eyJ1IjoiaXFiYWwxNzI3IiwiYSI6ImNrc242YmhuZDAwcnYybnBiOG1vMWRvdmgifQ.ke9PvwTAZVFOxkirYp9PXw';
    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            iconSize: [50, 50],
          },
        },
      ],
    };
    mapboxgl.accessToken = mapboxToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 3.5,
      center: [120, 0],
    });
    const urlBase = 'https://covid19.mathdro.id/api/confirmed';
    axios.get(urlBase)
      .then((responseJson) => {
        responseJson.data.forEach((feature) => {
          const {
            countryRegion,
            lastUpdate,
            lat,
            long,
            confirmed,
            deaths,
          } = feature;
          // create the popup
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<b>${countryRegion}</b><br>
              Kasus Positif : ${confirmed}<br>
              Meninggal Dunia  : ${deaths}<br><br>
              <i>last Update</i> : ${new Date(lastUpdate)}
            `,
          );

          /* eslint-disable */
          for (const marker of geojson.features) {
            // Create a DOM element for each marker.
            const el = document.createElement('div');
            const width = marker.properties.iconSize[0];
            const height = marker.properties.iconSize[1];
            el.className = 'marker';
            el.style.backgroundColor = 'rgba(255, 51, 51, 0.5)';
            el.style.width = `${width}px`;
            el.style.height = `${height}px`;
            el.style.borderRadius = '50%';
            // Add markers to the map.
            new mapboxgl.Marker(el)
              .setLngLat([long, lat])
              .setPopup(popup)
              .addTo(map);
          }
        });
      })
    
  };

  /* eslint-enable */
  // Get Total Data Covid-19 di Indonesia
  const nationalDataElement = document.querySelector('national-datas');
  const getNationalCase = async () => {
    try {
      const responseTotalCaseJson = await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia');
      nationalDataElement.NationalDatas = responseTotalCaseJson.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Search Data by Provinsi In Indonesia
  const searchElement = document.querySelector('search-bar');
  const searchListElement = document.querySelector('search-list');
  const renderSearchDatas = (datas) => {
    searchListElement.datas = datas;
  };
  const rejectMessage = (message) => {
    searchListElement.renderError(message);
  };
  const onClickButtonSearch = async () => {
    try {
      const result = await DataSource.searchDataByProvince(searchElement.value);
      renderSearchDatas(result);
    } catch (error) {
      rejectMessage('Not Found!');
    }
  };

  mapCovid();
  getNationalCase();
  searchElement.clickEvent = onClickButtonSearch;
};

export default main;
