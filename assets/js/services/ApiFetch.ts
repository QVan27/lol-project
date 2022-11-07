export class ApiFetch {
    basicUrl: string = "http://127.0.0.1:8000/bdd/";

    getPlayer(name: string) {
        return fetch(this.basicUrl + name);
    }
}