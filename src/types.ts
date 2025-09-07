export interface Media {
  id: number;
  title: string;
  description: string;
  services: string[];
}

export interface VodService {
  name: string;
  fee: string;
  url:string;
  otherDramas?: string[];
}
