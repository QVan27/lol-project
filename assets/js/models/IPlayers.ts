import { Imatchs } from "./IMatchs";
export interface IPlayers {
  id: number;
  puuid: string;
  name: string;
  level: number;
  profilIconId: number;
  games: Imatchs[];
  gameMode: string;
}
