import { CarInfo } from "./carInfo";
import { ResponseModel } from "./responseModel";

export interface CarInfoResponseModel extends ResponseModel{
    data:CarInfo[];
}