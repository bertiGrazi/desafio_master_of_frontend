import { detailsGetByGroup } from './detailsGetByGroup'

export async function detailGetByGroupAndTeam(group: string, brand: string) {
  try {
    const storage = await detailsGetByGroup(group)

    const cars = storage.filter(car => car.brand === brand)

    return cars
  } catch (err) {
    throw (err);
  }
}