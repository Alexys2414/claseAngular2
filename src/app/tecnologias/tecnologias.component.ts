import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CategoriasComponent } from '../categorias/categorias.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [RouterOutlet,CategoriasComponent,TecnologiasComponent,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {

}
