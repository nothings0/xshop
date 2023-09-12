import axiosClient from "ui/config/axiosConfig";
import {
  IResOrderServer,
  IResProduct,
  IResAOrderServer,
  IResSimpleProduct,
} from "ui/type";

export const GetOrders = async () => {
  try {
    const res = await axiosClient.get(
      `/orders?populate[0]=order_details.product.picture_cover&populate[1]=status`
    );
    const data: IResOrderServer = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const GetProducts = async () => {
  try {
    const res = await axiosClient.get(`/products?populate=*`);
    const data: IResProduct = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const GetOrder = async (id: number | string) => {
  try {
    const res = await axiosClient.get(
      `/orders/${id}?populate[0]=order_details.product.picture_cover&populate[1]=status`
    );
    const data: IResAOrderServer = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const GetProduct = async (slug: string) => {
  try {
    const res = await axiosClient.get(`products/${slug}?populate=*`);
    const data: IResSimpleProduct = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
