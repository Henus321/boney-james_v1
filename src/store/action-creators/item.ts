import { db } from '../../firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';
import { Item, ItemAction, ITEM_ACTION_TYPES } from '../../types/item';
import { Dispatch } from 'redux';

export const fetchItemStartAsync = (params: string) => {
  return async (dispatch: Dispatch<ItemAction>) => {
    dispatch({
      type: ITEM_ACTION_TYPES.FETCH_ITEM_START,
    });
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);
      const querySnapshop = await getDocs(q);
      const data = querySnapshop.docs.map((docSnapshot) => docSnapshot.data());
      const [collectionItem] = data.filter(
        (item) => item.id === params
      ) as Item[];
      dispatch({
        type: ITEM_ACTION_TYPES.FETCH_ITEM_SUCCESS,
        payload: collectionItem,
      });

      const colorAndId = data
        .filter(
          (item) =>
            item.article === collectionItem.article &&
            item.season === collectionItem.season
        )
        .map((item) => {
          return { color: item.color, id: item.id };
        });
      dispatch({
        type: ITEM_ACTION_TYPES.SET_COLOR_AND_ID,
        payload: colorAndId,
      });
    } catch (error: any) {
      dispatch({
        type: ITEM_ACTION_TYPES.FETCH_ITEM_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const clearItem = () => ({
  type: ITEM_ACTION_TYPES.CLEAR_ITEM,
});
