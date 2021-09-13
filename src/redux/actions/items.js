import MockService from "../../services/MockService";

const mockService = new MockService();

export const setItems = (items) => {
    return {
        type: "SET_ITEMS",
        payload: items,
    }
}

export const fetchItems = () => (dispatch) => {
    mockService.getAllClothes()
      .then(items => {
        dispatch(setItems({ items, isLoading: false }));
      })
}