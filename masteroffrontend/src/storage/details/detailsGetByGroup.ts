import AsyncStorage from "@react-native-async-storage/async-storage";
import { DETAIL_COLLECTION } from "@storage/storageConfig";

import { DetailStorageDTO } from './DetailStorageDTO'

export async function detailsGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${DETAIL_COLLECTION}-${group}`);
    const detail: DetailStorageDTO[] = storage ? JSON.parse(storage) : [];
    return detail;
  } catch (err) {
    throw (err);
  }
}