import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Column, ToDo } from '../../models/todo.model'
import { CommonModule } from '@angular/common';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, CommonModule, TodoDialogComponent, DialogModule],
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {

  constructor(
    private dialog: Dialog
  ) { }

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id:'1',
          title: 'Task 1',
        },
        {
          id:'2',
          title: 'Task 2',
        },
        {
          id:'3',
          title: 'Task 3',
        },
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id:'3',
            title: 'Watch Angular Path in Platzi',
          },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id:'4',
          title: 'Play Videogames',
        },
      ]
    },
  ]

  todos = <ToDo[]> [];

  doing = <ToDo[]> [];

  done = <ToDo[]> [];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }
  }

  dropColumn(event: CdkDragDrop<Column[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    )
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    })
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      minHeight: '50%',
      autoFocus: false,
      data: {
        id: todo,
      }
    })
    dialogRef.closed.subscribe(output => {
      console.log(output)
    })
  }

}
