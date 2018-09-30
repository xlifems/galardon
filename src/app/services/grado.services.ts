import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Grado } from '../models/grado';



@Injectable()
export class GradoService {
    public configUrl: string;

    constructor(private _httpCliente: HttpClient) {
        this.configUrl = 'http://localhost:8080/home/grados';
    }

    getPrueba() {
        return this._httpCliente.get(this.configUrl);
    }

    saveGrado( grado: Grado) {
        return this._httpCliente.post('http://localhost:8080/home/addGrado', grado );
    }
}
