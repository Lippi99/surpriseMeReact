import { api } from "./api";

export const getPlans = async (): Promise<{
  data: [
    {
      id: number;
      name: string;
    }
  ];
}> => {
  const response = await api.get("/plans");
  return response.data;
};
