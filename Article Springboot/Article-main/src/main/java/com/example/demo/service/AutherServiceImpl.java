package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Auther;
import com.example.demo.repository.AutherRepository;

@Service
public class AutherServiceImpl implements AutherService {

    @Autowired
    private AutherRepository autherRepository;

    @Override
    public List<Auther> getAuthersList() {
        return autherRepository.findAll();
    }

    @Override
    public Auther createAuther(Auther auther) {
        return autherRepository.save(auther);
    }

    @Override
    public Auther getAutherById(Long id) {
        return autherRepository.findById(id).orElse(null);
    }

    @Override
    public Auther updateAuther(Long id, Auther auther) {
        Auther existingAuther = autherRepository.findById(id).orElse(null);

        if (existingAuther == null) {
            return null;
        } else {
            existingAuther.setName(auther.getName()); 
            existingAuther.setEmailAddress(auther.getEmailAddress()); 
            existingAuther.setCreateDate(auther.getCreateDate()); 
            existingAuther.setLastLoginDate(auther.getLastLoginDate());
            return autherRepository.save(existingAuther);
        }
    }

    @Override
    public void deleteAuther(Long id) {
        autherRepository.deleteById(id);
    }
}
