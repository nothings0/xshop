import { IOrder } from "ui/type";
import { create, persist } from "ui/zustand";

interface ITypeInitState {
  order: IOrder[];
  deliveryType: {
    text: string;
    id: number;
  };
  setDeliveryType: (payload: { text: string; id: number }) => void;
  setNewOrder: (payload: IOrder[]) => void;
  removeOrder: () => void;
  handleQuantity: (
    newQuantity: number,
    id: number,
    order: IOrder[],
    setOrder: (arr: IOrder[]) => void
  ) => void;
  handleCheckAll: (
    event: React.FormEvent<HTMLInputElement>,
    order: IOrder[],
    setOrder: (arr: IOrder[]) => void,
    setIsCheckedAll: (isChecked: boolean) => void
  ) => void;
}

const useOrderStore = create<ITypeInitState>()(
  persist(
    (set) => ({
      order: [],
      deliveryType: {
        id: 0,
        text: "Thanh toán khi nhận hàng",
      },
      setDeliveryType: (payload) => set(() => ({ deliveryType: payload })),
      setNewOrder: (payload) => set(() => ({ order: payload })),
      removeOrder: () => set(() => ({ order: [] })),
      handleQuantity: (newQuantity, id, order, setOrder) => {
        const arr = order.map((item) =>
          item.product?.id === id
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item
        );
        setOrder(arr);
        const newOrder: IOrder[] = [];
        arr.forEach((item) => {
          if (item.isChecked) {
            let newObj: IOrder = {
              product: item.product,
              quantity: item.quantity,
            };
            newOrder.push(newObj);
          }
        });
        set(() => ({ order: newOrder }));
      },
      handleCheckAll: (event, order, setOrder, setIsCheckedAll) => {
        const checked = event.currentTarget.checked;
        setIsCheckedAll(checked);
        const arr = order.map((item) => ({
          ...item,
          isChecked: checked,
        }));
        setOrder(arr);
        const newOrder: IOrder[] = [];
        arr.forEach((item) => {
          if (item.isChecked) {
            let newObj: IOrder = {
              product: item.product,
              quantity: item.quantity,
            };
            newOrder.push(newObj);
          }
        });
        set(() => ({ order: newOrder }));
      },
    }),
    {
      name: "order",
    }
  )
);

export default useOrderStore;
