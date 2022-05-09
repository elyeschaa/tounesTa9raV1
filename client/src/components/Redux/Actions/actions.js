import axios from "axios";
export const register = (user) => async (dispatch) => {
  try {
    await axios
      .post("/api/user/register", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
export const login = (payload) => async (dispatch) => {
  try {
    console.log(payload)
    await axios
      .post("/api/user/login", payload.newUser)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        payload.history.push("/home");
        payload.history.go(0);

      })
      .catch((err) => console.log(err));
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
