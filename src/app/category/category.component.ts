import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../categoriainfo.service';
import { AuctionComponent } from '../auction/auction.component';
import { AuctionService } from '../auction.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [AuctionComponent,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categoryId: number = 0;
  category: any;
  auctions: any[] = [];

  constructor(private route: ActivatedRoute, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = +params['id']; // Asegúrate de obtener 'id' de params y convertirlo a número si es necesario
      this.getCategoriaAndAuctions(this.categoryId);
    });
  }

  getCategoriaAndAuctions(id: number): void {
    this.categoriaService.getCategoriaById(id).subscribe(
      (data: any) => {
        this.category = data;
        this.auctions = data.auctions;
      },
      (error: any) => {
        console.error('Error al obtener la categoría y sus subastas:', error);
      }
    );
  }
}
