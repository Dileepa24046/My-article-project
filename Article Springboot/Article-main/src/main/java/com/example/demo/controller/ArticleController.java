package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Article;
import com.example.demo.service.ArticleService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping
    public ResponseEntity<List<Article>> getAllArticles() {
        List<Article> articles = articleService.getArticleList();
        return ResponseEntity.ok(articles);
    }

    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        Article createdArticle = articleService.createArticle(article);
        return ResponseEntity.status(201).body(createdArticle);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable Long id, @RequestBody Article updatedArticle) {
        try {
            Article article = articleService.updateArticle(id, updatedArticle);
            return ResponseEntity.ok(article);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Long id) {
        articleService.deleteArticle(id);
        return ResponseEntity.noContent().build();
    }
}
