import axios from '../utils/axios';
const login = async ({ email, password }) => {
  try {
    const respon = await axios.post('/login', { email, password });
    console.log(respon);
    return respon.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
const register = async (user) => {
  console.log(user)
  try {
    const respon = await axios.post('/register', user);
    return respon.status;
  } catch (e) {
 
    return Promise.reject(e);
  }
};
const logout = async () => {
  try {
    let respon = await axios.post('/logout');
    return respon;
  } catch (e) {
    return e.response.data;
  }
};
export default { login, logout, register };
