package com.mycompany.gererproduit.controllers;

import com.mycompany.gererproduit.models.Product;
import com.mycompany.gererproduit.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/category/{categoryId}")
    public List<Product> getProductsByCategory(@PathVariable Long categoryId) {
        return productService.getProductsByCategory(categoryId);
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        if (product.getReference() == null || product.getReference().trim().isEmpty() ||
            product.getDescription() == null || product.getDescription().trim().isEmpty() ||
            product.getPrice() == null || product.getPrice() <= 0 ||
            product.getCategory() == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(productService.saveProduct(product));
    }
}
