import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { isAuthenticated } from "../helpers/auth";
import { getProduct, getAllCategories, updateProduct } from "../helpers/api";
import { useParams } from "react-router-dom";
import {
  FaEdit,
  FaMoneyBill,
  FaRegHandPeace,
  FaShippingFast,
  FaImage,
} from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import {
  Form,
  InputContainer,
  Information,
  Row,
  Container,
  Title,
  Button,
} from "../styled-components/reusable";

const CreateProduct = () => {
  const { productId } = useParams();
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    shipping: "",
    quantity: "",
    image: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirect: false,
    formData: "",
  });

  const {
    name,
    description,
    price,
    category,
    shipping,
    quantity,
    image,
    loading,
    error,
    createdProduct,
    redirect,
    formData,
  } = values;


  
  useEffect(() => {
    getAllCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else
        setCategories(data);
    });
  }, []);

  useEffect(() => {
    getProduct(productId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } 
      else {
          console.log(data)
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          price: data.price,
          category: data.category,
          shipping: data.shipping,
          quantity: data.quantity,
          image: data.image,
          formData: new FormData(),
        });
      }
    });
  }, []);


  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
    console.log(value);
  };

  const { user, token } = isAuthenticated();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    setValues({ ...values, error: "", loading: true });
    updateProduct(productId,user._id, token, formData).then((data) => {
      if (data.error)
        setValues({
          ...values,
          error: data.error,
        });
      else
        setValues({
          ...values,
          name: "",
          description: "",
          image: "",
          price: "",
          quantity: "",
          loading: false,
          createdProduct: data.name,
        });
    });
  };
  console.log(user);
  return (
    <Layout>
      <Container>
        <Title>Update Product</Title>
        <Form onSubmit={handleSubmit} visible={true}>
          <Row>
            <h2>Name: </h2>
            <InputContainer>
              <FaEdit />
              <input
                value={name}
                placeholder="name"
                required={true}
                onChange={handleChange("name")}
              />
            </InputContainer>
          </Row>
          <Row>
            <h2>Description: </h2>
            <InputContainer>
              <FaEdit />
              <input
                value={description}
                placeholder="description"
                required={true}
                onChange={handleChange("description")}
              />
            </InputContainer>
          </Row>
          <Row>
            <h2>Price: </h2>
            <InputContainer>
              <FaMoneyBill />
              <input
                type="number"
                value={price}
                placeholder="price"
                required={true}
                onChange={handleChange("price")}
              />
            </InputContainer>
          </Row>
          <Row>
            <h2>Category: </h2>
            <InputContainer>
              <ImPriceTag />
              <select value={category} onChange={handleChange("category")}>
                <option>Select Category</option>
                {categories &&
                  categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </InputContainer>
          </Row>
          <Row>
            <h2>Quantity: </h2>
            <InputContainer>
              <FaRegHandPeace />
              <input
                type="number"
                value={quantity}
                placeholder="quantity"
                required={true}
                onChange={handleChange("quantity")}
              />
            </InputContainer>
          </Row>
          <Row>
            <h2>Shipping: </h2>
            <InputContainer>
              <FaShippingFast />
              <select value={shipping} onChange={handleChange("shipping")}>
                <option>Select Option</option>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </InputContainer>
          </Row>
          <Row>
            <h2>Image: </h2>
            <InputContainer>
              <FaImage />
              <input
                onChange={handleChange("image")}
                type="file"
                accept="image/*"
              />
            </InputContainer>
          </Row>
          <Button>Update Product</Button>
        </Form>
      </Container>
    </Layout>
  );
};
export default CreateProduct;
