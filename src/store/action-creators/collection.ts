import { db } from '../../firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';
import {
  CollectionAction,
  COLLECTION_ACTION_TYPES,
} from '../../types/collection';
import { Item } from '../../types/item';
import { Dispatch } from 'redux';

export const fetchCollectionStartAsync = () => {
  return async (dispatch: Dispatch<CollectionAction>) => {
    dispatch({
      type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START,
    });
    try {
      const collectionRef = collection(db, 'collections');
      const q = query(collectionRef);

      const querySnapshop = await getDocs(q);
      const colletionArray = querySnapshop.docs.map((docSnapshot) =>
        docSnapshot.data()
      ) as Item[];
      dispatch({
        type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_SUCCESS,
        payload: colletionArray,
      });
    } catch (error: any) {
      dispatch({
        type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_FAILURE,
        payload: error,
      });
    }
  };
};
