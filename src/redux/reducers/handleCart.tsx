const cart: any = [];

const handleCart = (state = cart, action?: any) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const exist: any = state.find((x?: any) => x.id === product.id);
      if (exist) {
        return state.map((x?: any) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELETEITEM":
      const exist1 = state.find((x?: any) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x?: any) => x.id !== exist1.id);
      } else {
        return state.map((x?: any) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      break;
  }
};

export default handleCart;
