import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { DETAIL_COLLECTION } from "@storage/storageConfig";

import { DetailStorageDTO } from './DetailStorageDTO'

export async function detaildAddByGroup(carDetails: DetailStorageDTO, group: string) {
  try {
    await AsyncStorage.setItem(`${DETAIL_COLLECTION}-${group}`, '');
  } catch (error) {
    throw (error);
  }
}