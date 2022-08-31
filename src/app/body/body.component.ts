import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-model';
import { TodoService } from '../todo.service';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: [ './body.component.css' ]
})
export class BodyComponent implements OnInit {
	todos: Todo[] = [];
	constructor(private todoService: TodoService) {
		this.getTodos();
	}

	ngOnInit(): void {}
	getTodos() {
		this.todoService.getTodos().subscribe((data) => {
			this.todos = data;
		});
	}
}
