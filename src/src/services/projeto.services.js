import API from './webapi.services';
import {BASE_URL} from './urls';

export const getProjeto = async () => {
  try {
    return await API.get(`${BASE_URL}/660/projeto`).then(
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

export const insertProjeto = async (param) => {
  try {
    return await API.post(`${BASE_URL}/660/projeto`, param).then(
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

export const updateProjeto = async (param) => {
  try {
    return await API.put(`${BASE_URL}/660/projeto/${param.id}`, param).then(
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

export const deleteProjeto = async (param) => {
  try {
    return await API.delete(`${BASE_URL}/660/projeto/${id}`, param).then(
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

