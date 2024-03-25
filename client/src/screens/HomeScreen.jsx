import React, { useEffect } from "react";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/userSlice";
import { BACKEND_URL } from "../constants";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { data: products, isLoading, error } = useGetProductsQuery();

  const getUser = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/auth/login/success`, {
        withCredentials: true,
      });
      // console.log(res.data);
      dispatch(
        setCredentials({
          ...res.data.user._json,
          _id: res.data._id,
          isAdmin: res.data.user.isAdmin,
        })
      );
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    toast.error(error?.data?.message || error?.error);
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products?.map((product, i) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
