package com.example.demo.service;

import com.example.demo.model.CustomerProfile;
import com.example.demo.repo.CustomerProfileRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerProfileService {
    
    @Autowired
    CustomerProfileRepo customerProfileRepo;

    public void createprofile(CustomerProfile customerProfile){
        customerProfileRepo.save(customerProfile);
    }



    public CustomerProfile getCustomerProfile(String email){
        CustomerProfile customerProfile = customerProfileRepo.findByEmail(email);
        return customerProfile;
    }



    
}
