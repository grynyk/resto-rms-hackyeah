import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Table } from '../../shared/models/table';
import { Dish } from '../../shared/models/dish';

@Injectable()
export class InventoryModuleService {
    constructor(private http: HttpClient) { }
    private BASE_URL = '/api/iko';

    getTablesList() {
        return this.http.get(`${this.BASE_URL}/tables`).pipe(map((res: Table[]) => res));
    }

    addTable(table: Table) {
        return this.http.post(`${this.BASE_URL}/tables`, table).pipe(map((res: any) => res));
    }

    getDishesList() {
        return this.http.get(`${this.BASE_URL}/dishes`).pipe(map((res: Dish[]) => res));
    }

    addDish(dish: Dish) {
        return this.http.post(`${this.BASE_URL}/addDish`, dish).pipe(map((res: any) => res));
    }

    editDish(dish: Dish) {
        return this.http.put(`${this.BASE_URL}/dishes`, dish).pipe(map((res: any) => res));
    }

    // deleteDish(dish: Dish) {
    //     return this.http.delete(`${this.BASE_URL}/dishes`, new RequestOptionsArgs());
    // }
}
