package com.example.demo.controller;

import com.example.demo.entity.Auther;
import com.example.demo.service.AutherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")  
@RequestMapping("/authers")
public class AuthersController {

    @Autowired
    private AutherService autherService;

    @GetMapping
    public ResponseEntity<List<Auther>> getAllAuthers() {
        List<Auther> authers = autherService.getAuthersList();
        return ResponseEntity.status(200).body(authers);
    }

    @PostMapping
    public ResponseEntity<Auther> createAuther(@RequestBody Auther auther) {
        try {
            Auther createdAuther = autherService.createAuther(auther);
            return ResponseEntity.status(201).body(createdAuther);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(400).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAuther(@PathVariable long id) {
        try {
            autherService.deleteAuther(id);
            return ResponseEntity.status(204).build(); 
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(400).build(); 
        }
    }
}
