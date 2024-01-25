import axios from "axios";
import { baseUrl } from "../Config/baseUrl";
export const jsonUrl = axios.create({
  baseURL: baseUrl
 
});

export const formUrl = axios.create({
  baseURL: baseUrl
});
