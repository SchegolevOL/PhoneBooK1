import { Guid } from '../Helpers/guid';
import { PhoneType } from './phone-type/phone-type';

export interface Phone {
  id: Guid;
  name: string;
  surName: string;
  patronymic: string;
  phoneNumber: string;
  typePhone: string;
}
