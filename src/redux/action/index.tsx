
export const addCart = (product? :any) => {
    return {
        type: 'ADDCART',
        payload: product
    }
};

export const deleteCart = (product? :any) => {
    return {
        type : 'DELETECART',
        payload: product
    }
};