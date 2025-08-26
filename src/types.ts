export interface Media {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  services: string[];
}

export interface VodService {
  name: string;
  fee: string;
  url: string;
}
