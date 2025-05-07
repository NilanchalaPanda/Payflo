package com.example.payflo.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.payflo.backend.dao.InvoiceDao;
import com.example.payflo.backend.model.Invoice;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    @Autowired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoiceData) {
        invoiceDao.save(invoiceData);
        return invoiceData;
    }
}
