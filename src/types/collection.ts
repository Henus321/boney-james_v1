import { Item } from '../types/item';

export enum COLLECTION_ACTION_TYPES {
  FETCH_COLLECTION_START = '@@collection/FETCH_COLLECTION_START',
  FETCH_COLLECTION_FAILURE = '@@collection/FETCH_COLLECTION_FAILURE',
  FETCH_COLLECTION_SUCCESS = '@@collection/FETCH_COLLECTION_SUCCESS',
}

export interface CollectionState {
  currentCollection: Item[];
  isLoading: boolean;
  error: string | null;
}

interface fetchCollectionStart {
  type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START;
}

interface fetchCollectionSuccess {
  type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_SUCCESS;
  payload: Item[];
}

interface fetchCollectionFailure {
  type: COLLECTION_ACTION_TYPES.FETCH_COLLECTION_FAILURE;
  payload: string;
}

export type CollectionAction =
  | fetchCollectionStart
  | fetchCollectionSuccess
  | fetchCollectionFailure;
