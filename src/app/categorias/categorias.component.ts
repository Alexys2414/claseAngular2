import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CategoriaService } from '../categoriainfo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuctionComponent } from '../auction/auction.component';
import { AuctionService } from '../auction.service';


@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RouterLink, RouterLinkActive,HttpClientModule,RouterModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{
  categorias: any[] = [];

  constructor(private categoriaService: CategoriaService,
    private router: Router) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.categoriaService.getAllCategorias().subscribe(
      (cat: any) => { 
        this.categorias = cat;
      },
      error => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }
  obtenerInformacionCategoria(id: number): void {
    // Redirige a la ruta correspondiente con el ID de la categoría
    this.router.navigate(['/category', id]);
  }
}