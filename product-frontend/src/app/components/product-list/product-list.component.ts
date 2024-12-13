import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  error: string = '';
  loading: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    console.log('ProductListComponent initialized');
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories(): void {
    console.log('Loading categories...');
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        console.log('Categories loaded:', categories);
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
        this.error = 'Failed to load categories';
      }
    });
  }

  loadProducts(): void {
    console.log('Loading products...');
    this.loading = true;
    this.error = '';

    if (this.selectedCategoryId) {
      this.productService.getProductsByCategory(this.selectedCategoryId).subscribe({
        next: (products) => {
          console.log('Products loaded:', products);
          this.products = products;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading products:', error);
          this.error = 'Failed to load products';
          this.loading = false;
        }
      });
    } else {
      this.productService.getProducts().subscribe({
        next: (products) => {
          console.log('Products loaded:', products);
          this.products = products;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading products:', error);
          this.error = 'Failed to load products';
          this.loading = false;
        }
      });
    }
  }

  onCategoryChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedCategoryId = select.value ? Number(select.value) : null;
    console.log('Category changed to:', this.selectedCategoryId);
    this.loadProducts();
  }
}
