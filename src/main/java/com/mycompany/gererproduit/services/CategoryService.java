package com.mycompany.gererproduit.services;

import com.mycompany.gererproduit.models.Category;
import com.mycompany.gererproduit.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
    
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }
}
