import axios from "axios";
import type { Quote } from "../types";

const getQuote = async (): Promise<Quote> => {
  const API_URL = process.env.FARM_QUOTES_API_URL as string;
  const API_KEY = process.env.FARM_QUOTES_API_KEY as string;
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    return response.data[0];
  } catch (error) {
    const message = (error as Error).message;
    console.error(message);
    throw new Error(message);
  }
};

export default getQuote;
