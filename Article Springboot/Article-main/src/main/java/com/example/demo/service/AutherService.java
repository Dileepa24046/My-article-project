package com.example.demo.service;

import java.util.List;
import com.example.demo.entity.Auther;

public interface AutherService {
    List<Auther> getAuthersList(); 
    Auther createAuther(Auther auther);
    Auther getAutherById(Long id);
    Auther updateAuther(Long id, Auther auther);
    void deleteAuther(Long id);
}
