import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NgModel } from '@angular/forms';

export const routes: Routes = [
    { path: 'categoria/:id', component: CategoryComponent }
];

