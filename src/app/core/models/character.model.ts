export interface Character {
  id: number;
  name: string;
  job: string;
  bounty: string;
  status: string;
  crew?: {
    name: string;
  };
  fruit?: {
    name: string;
    type: string;
  };
}