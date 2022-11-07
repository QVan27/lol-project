import axios from 'axios';



export class ApiFetch {
    private static URL: string = 'http://127.0.0.1:8000/bdd/azerty';

    public static getPlayer() {

        let PlayerUrl = `${this.URL}`
        return axios.get(PlayerUrl)
        
    }

}