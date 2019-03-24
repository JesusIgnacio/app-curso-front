import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RegistroService{
    constructor(private http: HttpClient){}

    registrarInscripcion(inscrip): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('inscripcion', JSON.stringify(inscrip));
        return this.http.post('', httpParams);

    }
}