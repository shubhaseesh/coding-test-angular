import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	todoForm: any;
	constructor(public fb: FormBuilder, private todoService: TodoService) {
		this.mainForm();
	}

	ngOnInit(): void {}
	mainForm() {
		this.todoForm = this.fb.group({
			todo: [ '', [ Validators.required ] ]
		});
	}
	onSubmit() {
		if (!this.todoForm.valid) {
			return false;
		} else {
			return this.todoService.createTodo(this.todoForm.value).subscribe({
				complete: () => {
					console.log('success!!');
				}
			});
		}
	}
}
