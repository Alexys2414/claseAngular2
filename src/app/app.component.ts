import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuctionComponent } from './auction/auction.component';
import { AuctionService } from './auction.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CategoriasComponent,CommonModule,RouterLink,RouterLinkActive,CategoryComponent,AuctionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Categoria';
}
