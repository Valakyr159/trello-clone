import { Component, signal } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isOpen = signal(false);
  isOpenBody = signal(false);

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  apiAvatar1 = 'https://avatar.iran.liara.run/public';
  apiAvatar2 = 'https://avatar.iran.liara.run/public';

  changeIsOpen(Element: 'Login' | 'Body') {
    switch (Element) {
      case 'Login':
    
        this.isOpen.update((state) => !state)
        break;
    
      case 'Body':
        this.isOpenBody.update((state) => !state)
        break;

      default:
        break;
    }
  }
}
