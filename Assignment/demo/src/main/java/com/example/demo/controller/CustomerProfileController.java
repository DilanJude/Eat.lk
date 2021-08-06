package com.example.demo.controller;

import com.example.demo.model.CustomerProfile;
import com.example.demo.service.CustomerProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin
@RequestMapping("/api")

public class CustomerProfileController {
    
    @Autowired
    CustomerProfileService customerProfileService;


    @PostMapping("/createprofile")
    public int createprofile(@RequestBody CustomerProfile customerProfile){
        try{
            customerProfileService.createprofile(customerProfile);
            return 1;
        }
        catch(Exception exception){
            System.out.print(exception);
            return 0;
        }


    }


    

    @GetMapping("/getprofile/{email}")
    public CustomerProfile getCustomerProfile(@PathVariable(name = "email") String email){
        return customerProfileService.getCustomerProfile(email);
    }


    
}
