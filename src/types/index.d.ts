export interface ApiClient {
  get<T>(url: string): Promise<{ data: T }>;
}

export interface ServiceProps {
  api: ApiClient;
}
