import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { BtnComponent } from '../btn/btn.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons'
import { ToDo } from '../../models/todo.model';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  rta: Boolean;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo
  }

  faClose = faClose
  faCheckToSlot = faCheckToSlot
  faBars = faBars
  faUser = faUser
  faTag = faTag
  faCheckSquare = faCheckSquare
  faClock = faClock

  close() {
    this.dialogRef.close({
      rta: true,
    })
  }

  closeWithRta(rta:boolean) {
    this.dialogRef.close({ rta })
  }

}
