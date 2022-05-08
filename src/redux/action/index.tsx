
export const addCart = (product? :any) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
};

export const deleteCart = (product? :any) => {
    return {
        type : 'DELETEITEM',
        payload: product
    }
};