import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-root',
  //imports: [RouterOutlet], 
  imports: [MatButtonModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Memora';

  isChanged = false;
  toggleNavIcon() {
    this.isChanged = !this.isChanged;
  }
}