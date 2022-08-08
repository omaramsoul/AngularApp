import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    baseURL : string = "http://localhost:5000/clientId";
    clientId: string;
    client: any;
    searchChange: Subject<boolean> = new Subject<boolean>();

    constructor(
        private http: HttpClient
    ) {}

    setClientIdValue(clientId: string) {
        this.clientId = clientId;
    }

    getClient() {
        return this.client;
    }
    setClient(clients:any){
        this.client=clients;

        this.searchChange.next(clients);
    }

    getClientById() {
        return this.http.get("http://localhost:8080/api/clients/" + this.clientId);
    }

}