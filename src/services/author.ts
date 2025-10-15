import { ApiClient, ServiceProps } from "@/types";

class AuthorService {
  private api: ApiClient;

  constructor(props: ServiceProps) {
    this.api = props.api;
  }

  async get(id: string) {
    const response = await this.api.get(`/user/${id}.json`);
    return response.data;
  }
}

export default AuthorService;
