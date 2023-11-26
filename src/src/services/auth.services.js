import API from './webapi.services';
import axios from "axios"

const baseURL = "http://192.168.18.25:3000/v1/api/";


export const register = async (param) => {
  try {
    return await axios.post(baseURL + 'user', param).then(
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
  try { console.log(param)
    return await axios.post(baseURL + 'user/authUser', param).then(
      response => {
        if(response?.status){
          return {status: response?.status,
          user: response?.data.user}
        }else{
          return {status: 500,
          user: response?.data.user}
        }
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
