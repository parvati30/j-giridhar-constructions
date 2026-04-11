import { $axios } from "./axios.instance";


const getApiCall = async (
  endPoint: string,
  params: string,
) => {
  try {
    const response = await $axios.get(endPoint + params);
    return response;
  } catch (error: any) {
    return error?.response;
  }
};

const postApiCall = async (
  endPoint: string,
  payload: { [key: string]: any },
) => {
  try {
    const response = await $axios.post(endPoint, payload);
    return response.data;
  } catch (error: any) {
    return error?.response.data;
  }
};

const putApiCall = async (
  endPoint: string,
  payload: { [key: string]: any },
) => {
  try {
    const response = await $axios.put(endPoint, payload);
    return response.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

const patchApiCall = async (
  endPoint: string,
  payload: { [key: string]: any },
) => {
  try {
    const response = await $axios.patch(endPoint, payload);
    return response.data;
  } catch (error: any) {
    return error?.response.data;
  }
};

const deleteApiCall = async (
  endPoint: string,
) => {
  try {
    // const response = await $axios.delete(endPoint, { data: params });
    const response = await $axios.delete(endPoint);
    return response.data;
  } catch (error: any) {
    return error?.response.data;
  }
};

const s3putApiCall = async (url: string, file: File) => {
  try {
    await fetch(url, {
      method: "PUT",
      body: file,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  getApiCall,
  postApiCall,
  putApiCall,
  patchApiCall,
  deleteApiCall,
  s3putApiCall,
};
