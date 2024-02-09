import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CategoriaService } from '../categoriainfo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RouterLink, RouterLinkActive,HttpClientModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{
  categorias: any[] = [];

  constructor(private categoriaService: CategoriaService) {}

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
}


