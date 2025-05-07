package main.java.com.payflo.server.dao;

import main.java.com.payflo.server.model.Invoice;
import org.springframework.data.jpa.reository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice, Long> {
    
}