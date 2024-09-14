package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Auther;

@Repository
public interface AutherRepository extends JpaRepository<Auther, Long> {
    
}
