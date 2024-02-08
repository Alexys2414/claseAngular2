import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CategoriaService } from '../categoriainfo.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RouterLink, RouterLinkActive,HttpClientModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  constructor(private categoriaService: CategoriaService, private router: Router) {}

  obtenerInformacionCategoria(id: number): void {
    this.categoriaService.getCategoriaById(id).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/category', id]);
      },
      (error) => {
        console.error(error);
      }
    );
  }











  
  categorias = [
    { id: 1, nombre: 'Tecnologia',controlador: 'tecnologias' },
    { id: 2, nombre: 'Deportes',controlador: 'deportes' },
    { id: 3, nombre: 'Hogar' ,controlador: 'hogar'},
    { id: 4, nombre: 'Moda' ,controlador: 'moda'},
    { id: 5, nombre: 'Motor' ,controlador: 'motor'},
    { id: 6, nombre: 'Coleccionismo' ,controlador: 'coleccionismo'},
    { id: 7, nombre: 'Joyeria' ,controlador: 'joyeria'},
    { id: 8, nombre: 'Mascotas' ,controlador: 'mascotas'},
    { id: 9, nombre: 'Arte' ,controlador: 'arte'},
    { id: 10, nombre: 'Libros y Peliculas' ,controlador: 'libros'},
    { id: 11, nombre: 'Viajes' ,controlador: 'viajes'},
    { id: 12, nombre: 'Electrodomésticos' ,controlador: 'electrodomésticos'},
    { id: 13, nombre: 'Instrumentos Musicales' ,controlador: 'instrumentos'},
    { id: 14, nombre: 'Belleza' ,controlador: 'belleza'},
    { id: 15, nombre: 'Videojuegos' ,controlador: 'videojuegos'},
    { id: 16, nombre: 'Moviles' ,controlador: 'moviles'},
    { id: 17, nombre: 'Otros' ,controlador: 'otros'}


  ];

  hoverCategoria: boolean = false;
  
  obtenerRutaImagen(id: number): string {
    return `assets/imagen_${id}.png`;
  }
}



