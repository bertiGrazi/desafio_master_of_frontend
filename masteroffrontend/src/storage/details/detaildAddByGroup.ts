import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { DETAIL_COLLECTION } from "@storage/storageConfig";
import { detailsGetByGroup } from './detailsGetByGroup'
import { DetailStorageDTO } from './DetailStorageDTO'

export async function detaildAddByGroup(newCarDetails: DetailStorageDTO, group: string) {
  try {
    const storedDetails = await detailsGetByGroup(group);
    const datailAlreadyExists = storedDetails.filter(car => car.carModel === newCarDetails.carModel);

    if (datailAlreadyExists.length > 0) {
      throw new AppError('Carro já cadastrado!');
    }
    const storage = JSON.stringify([...storedDetails, newCarDetails])
    
    await AsyncStorage.setItem(`${DETAIL_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw (error);
  }
}