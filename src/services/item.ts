import { ServiceProps } from "@/types";
import services from ".";
import { Item } from "@/types/item";
import { Story } from "@/types/story";
import { ApiError } from "next/dist/server/api-utils";

class ItemService {
  private api;

  constructor(props: ServiceProps) {
    this.api = props.api;
  }

  async get(id: string) {
    try {
      const { data }: { data: Item } = await this.api.get(`/item/${id}.json`);
      if (!data) {
        throw new Error("Item not found");
      }
      const author = await services.author.get(data?.by);
      return { ...data, author } as Story;
    } catch (error) {
      const apiError = error as ApiError;
      throw {
        statusCode: 404,
        message: apiError.message,
      };
    }
  }
}

export default ItemService;
