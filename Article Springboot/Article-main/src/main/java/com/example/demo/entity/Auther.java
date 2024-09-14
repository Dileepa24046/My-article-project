package com.example.demo.entity;

import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Auther {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;  

    @Column(nullable = false)
    private String emailAddress;  

    @Column(nullable = false)
    private LocalDateTime createDate; 

    @Column(nullable = false)
    private LocalDateTime lastLoginDate;  
    
}
