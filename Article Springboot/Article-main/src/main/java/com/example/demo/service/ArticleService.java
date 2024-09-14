package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;

import com.example.demo.entity.Article;

public interface ArticleService {
    List<Article> getArticleList();
    Article createArticle(Article article);
    Article setCreateDateArticle(Article article, LocalDateTime createDate);
    Article setUpdateArticle(Article article, LocalDateTime updateDateTime);
    
    // New methods for updating and deleting
    Article updateArticle(Long id, Article article);  // Method to update an article
    void deleteArticle(Long id);  // Method to delete an article
}
