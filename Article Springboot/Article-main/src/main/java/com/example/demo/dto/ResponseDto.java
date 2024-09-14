package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseDto <T>{
    private String massage;
    private T data;
    
}
