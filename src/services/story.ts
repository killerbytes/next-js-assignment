import { ServiceProps } from "@/types";
import services from ".";
import { Item } from "@/types/item";

class StoryService {
  private api;

  constructor(props: ServiceProps) {
    this.api = props.api;
  }

  async getTopStories(limit = 10): Promise<Item[]> {
    const res = await this.api.get<string[]>("/topstories.json");
    const ids = res.data.slice(0, limit);

    const stories = await Promise.all(
      ids.map(async (id) => {
        const item = await services.item.get(id);
        return item;
      })
    );

    return stories;
  }
}

export default StoryService;
