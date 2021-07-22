export const SET_USER_INFOR = "SET_USER_INFOR";
export const SET_USER_INFOR_REMOVE = "SET_USER_INFOR_REMOVE";

export const actSetUserInfo = (user) => {
  console.log("user----------", user);
  localStorage.setItem("USER_INFO", JSON.stringify(user.data.user));

  return {
    type: SET_USER_INFOR,
    payload: { user },
  };
};

export const actRemoveUserInfo = (user) => {
  localStorage.removeItem("USER_INFO");
  return {
    type: SET_USER_INFOR_REMOVE,
    payload: { user },
  };
};
