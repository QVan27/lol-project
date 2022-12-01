import axios from "axios";

export class ApiFetch {
  private static URL: string = "http://127.0.0.1:8000/bdd/";

  public static getPlayer(name: string) {
    let playerUrl = `${this.URL + name}`;
    return axios.get(playerUrl);
  }
}
