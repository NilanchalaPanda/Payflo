import axios from "axios";

const API_URL = "http://localhost:8081";

export const saveInvoice = async (payload) => {
  try {
    return await axios.post(`${API_URL}/invoice`, payload);
  } catch (error) {
    return error.response ? error.response.data : { message: "Network Error" };
  }
};

export const deleteInvoice = async (id) => {
  try {
    return await axios.delete(`${API_URL}/invoice/${id}`);
  } catch (error) {
    return error.response ? error.response.data : { message: "Network Error" };
  }
};

export const getAllInvoices = async () => {
  try {
    const data = await axios.get(`${API_URL}/invoice`);
    console.log(data);
    return data;
  } catch (error) {
    return error.response ? error.response.data : { message: "Network Error" };
  }
};
