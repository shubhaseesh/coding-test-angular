import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	baseUrl: string = 'http://localhost:4000/api';

	constructor(private http: HttpClient) {}

	createTodo(data: any): Observable<any> {
		let uri = `${this.baseUrl}/create`;
		return this.http.post(uri, data);
	}
	getTodos(): Observable<any> {
		return this.http.get(this.baseUrl);
	}
}
