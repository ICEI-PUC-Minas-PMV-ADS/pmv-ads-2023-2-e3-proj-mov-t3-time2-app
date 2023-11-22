import API from './webapi.services';


export const register = async (param) => {
  try {
    return await API.post(`http://192.168.18.25:3000/v1/api/register`, param).then(
      response => {
        return response.data;
      },
      error => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (param) => {
  try {
    return await API.post(`${BASE_URL}/login`, param).then(
      response => {
        return response.data;
      },
      error => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
