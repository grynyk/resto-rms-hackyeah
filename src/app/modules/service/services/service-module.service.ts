import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Table } from '../../shared/models/table';

@Injectable()
export class ServiceModuleService {
    constructor(private http: HttpClient) { }
    private BASE_URL = '/api/iko';

    getTablesList() {
        return this.http.get(`${this.BASE_URL}/tables`).pipe(map((res: Table[]) => res));
    }

}
