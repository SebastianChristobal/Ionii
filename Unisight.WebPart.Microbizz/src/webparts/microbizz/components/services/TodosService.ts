
import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';
import { ITodos } from '../models';

export class TodosService {
    private _spHttpOptions: any = {
        headers: {
            'ACCEPT': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };
    constructor(private client: HttpClient) {
    }
   

    public getPersonIdFromMicroBizzCall(_userEmail: string): Promise<any> {

        let promise: Promise<any> = new Promise<any>((resolve, reject) => {
            this.client.post(`https://system.microbizz.dk/api/endpoint.php?json={\"contract\":\"2563\",\"apikey\":\"4895-5394-5205-1647-5033-3140\",\"username\":\"integration@brightify.se\",\"password\":\"Dek32Yh\",\"remoteagent\":\"Microbizz test\",\"commands\":[{\"command\":\"GetPersonByEmail\",\"email\":\"${_userEmail}"\}]}`,
                HttpClient.configurations.v1,
                this._spHttpOptions
            ).
            then((response: HttpClientResponse): Promise<any> => {
                    return response.json();
            })
            .then((response: any) => {
                    let personId = response.results[0].persons[0].values.personid;
                    resolve(personId);
            })
            .catch((error) => {
                    reject(error);
            });
        });
        return promise;
    }

    public getMyTodosFromMicroBizzCall(_userId): Promise<ITodos[]> {

        let promise: Promise<ITodos[]> = new Promise<ITodos[]>((resolve, reject) => {

            this.client.post(`https://system.microbizz.dk/api/endpoint.php?json={\"contract\":\"2563\",\"apikey\":\"4895-5394-5205-1647-5033-3140\",\"username\":\"integration@brightify.se\",\"password\":\"Dek32Yh\",\"remoteagent\":\"Microbizz test\",\"commands\":[{\"command\":\"GetTodosByPersonID\",\"personid\":\"${_userId}"\}]}`,
                HttpClient.configurations.v1,
                this._spHttpOptions
            )
                .then((response: HttpClientResponse) => {
                    return response.json();
                })
                .then((response) => {

                    let todos = response.results[0].todos;
                    resolve(todos);
                })
                .catch((error) => {
                    reject(error);
                });
        });
        return promise;
    }
}