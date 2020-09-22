export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("JWT", JSON.stringify(data));
    next();
  }
};
export const signup = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/signUp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/signIn`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("JWT");
    next();
    return fetch(`${process.env.REACT_APP_API_URL}/signOut`, {
      method: "GET",
    })
      .then((response) => {
        console.log("signOut", response);
      })
      .catch((err) => console.log("err", err));
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("JWT")) {
    return JSON.parse(localStorage.getItem("JWT"));
  } else return false;
};
