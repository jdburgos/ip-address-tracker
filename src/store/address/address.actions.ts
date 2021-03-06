/** Interfaces **/
import { IAddress } from '../../interfaces/address.interface';

/** Actions **/
import { addressActions } from './address.reducer';

export const fetchAddressData = (ip: string) => {
  return async (dispatch: (arg0: { payload: IAddress; type: string }) => void) => {
    const fetchData = async (): Promise<IAddress> => {
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
