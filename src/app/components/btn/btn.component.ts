import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button'
  @Input() color: 'success' | 'primary' | 'danger' | 'light' | 'sky' = 'primary'

  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-4 focus:ring-success-300':true,
      'text-white': true
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white': true
    },
    danger: {
      'bg-danger-700': true,
      'hover:bg-danger-800': true,
      'focus:ring-danger-300': true,
      'text-white': true
    },
    sky: {
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:ring-sky-300': true,
      'text-white': true
    },
    light: {
      'bg-light-200': true,
      'hover:bg-light-500': true,
      'focus:ring-light-50': true,
      'text-gray-700': true
    },   
  }


  // gray-light
  get colors() {
    const colors = this.mapColors[this.color]
    if (colors) {
      return colors
    }
    return {}
  }
}
