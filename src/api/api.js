import { BACKEND_URL } from '../helpers/config';

export const getBackendData = async (endpoint, parameters) => {
  try {
    const response = await fetch(BACKEND_URL + endpoint, parameters);

    const data = await response.json();

    if (!data.success) throw new Error(data.message);

    return { success: true, data: data.data };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};
