import AsyncStorage from "@react-native-async-storage/async-storage";

import { DETAIL_COLLECTION } from "@storage/storageConfig";
import { detailsGetByGroup } from './detailsGetByGroup'

export async function detailsRemoveByGroup(carName: string, group: string) {
  try {
    const storage = await detailsGetByGroup(group)

    const filtered = storage.filter(car => car.carModel !== carName)
    const cars = JSON.stringify(filtered)

    await AsyncStorage.setItem(`${DETAIL_COLLECTION}-${group}`, cars);
  } catch (error) {
    throw (error);
  }
}