import queryString from "query-string";

export const createCategory = (user, token, category) => {
  return fetch(`${process.env.REACT_APP_API_URL}/category/create/${user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = (user, token, product) => {
  return fetch(`${process.env.REACT_APP_API_URL}/product/create/${user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllCategories = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getProducts = (sortBy) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/products?sortBy=${sortBy}&order=desc&limit=6`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getImageUrl = (item, url) => {
  return `${process.env.REACT_APP_API_URL}/${url}/photo/${item._id}`;
};

export const getShortDescription = (description) => {
  return description.length > 110
    ? description.slice(0, 110).concat(" ...")
    : description;
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters,
  };
  return fetch(`${process.env.REACT_APP_API_URL}/products/by/search/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchQuery = (params) => {
  const query = queryString.stringify(params);
  console.log("qqqqq", query)
  return fetch(`${process.env.REACT_APP_API_URL}/products/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getProduct = (id) => {
  return fetch(`${process.env.REACT_APP_API_URL}/product/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getRelatedList = (id) => {
  return fetch(`${process.env.REACT_APP_API_URL}/products/related/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getBraintreeClientToken = (id, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/braintree/getToken/${id}`, {
    method: "GET",
    headers:{
      Accept: "application/json",
      "Content-Type": "aplication/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const processPayment = (id, token, paymentData) => {
    return fetch(`${process.env.REACT_APP_API_URL}/braintree/payment/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const createOrder = (id, token, orderData) => {
  return fetch(`${process.env.REACT_APP_API_URL}/order/create/${id}`, {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ order: orderData})
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
};

export const getOrderList = (id, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/order/list/${id}`, {
      method: "GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
      }
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
};