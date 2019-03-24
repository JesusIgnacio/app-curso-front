import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RegistroService{
    constructor(private http: HttpClient){}

    registrarInscripcion(inscrip): Observable<any> {

        return null;

    }
}