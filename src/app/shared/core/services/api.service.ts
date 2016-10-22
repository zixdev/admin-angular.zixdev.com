import {Http, Headers, Response} from "@angular/http";
import {Injectable, OnInit} from "@angular/core";
import "rxjs/Rx";
import "rxjs/add/observable/throw";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable()
export class ApiService implements OnInit{
    ngOnInit(): void {
        console.info(this.headers);
    }
    constructor(private http: Http) {
    }

    protected  headers: Headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
    });

    public api_url: string = environment.api_url;



    private getJson(response: Response) {
        return response.json().data; // <= API responses
    }

    private checkForError(response: Response): Response {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.warn('Got Error =>', error);
            throw error;
        }
    }

    public updateTheHeaders() {
        this.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    get(path: string): Observable<any> {
        this.updateTheHeaders();
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(`${this.api_url}${path}`, {headers: this.headers, body: ''})
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    post(path: string, body): Observable<any> {
        this.updateTheHeaders();
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(`${this.api_url}${path}`, JSON.stringify(body), {headers: this.headers})
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    put(path: string, body): Observable<any> {
        this.updateTheHeaders();
        //noinspection TypeScriptUnresolvedFunction
        return this.http.put(`${this.api_url}${path}`, JSON.stringify(body), {headers: this.headers})
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    delete(path: string): Observable<any> {
        this.updateTheHeaders();
        //noinspection TypeScriptUnresolvedFunction
        return this.http.delete(`${this.api_url}${path}`, {headers: this.headers})
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

}
