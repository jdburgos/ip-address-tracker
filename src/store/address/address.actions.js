/** Actions **/
import { addressActions } from './address.reducer';

export const fetchAddressData = ip => {
  return async dispatch => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`);

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();
      const { ip: ipAddress, isp, location } = data;
      const { city, country, lat, lng, postalCode, timezone } = location;

      return { ip: ipAddress, isp, city, country, position: [lat, lng], postalCode, timezone };
    };

    try {
      const addressData = await fetchData();

      dispatch(addressActions.setAddress(addressData));
    } catch (error) {
      console.log(error);
    }
  };
};
