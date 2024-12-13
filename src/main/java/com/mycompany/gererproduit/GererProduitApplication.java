package com.mycompany.gererproduit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.mycompany.gererproduit")
public class GererProduitApplication {
    public static void main(String[] args) {
        SpringApplication.run(GererProduitApplication.class, args);
    }
}
