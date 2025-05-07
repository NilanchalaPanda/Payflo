package com.example.payflo.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.payflo.backend.model.Invoice;

public interface InvoiceDao extends JpaRepository<Invoice, Long> {
    
}
