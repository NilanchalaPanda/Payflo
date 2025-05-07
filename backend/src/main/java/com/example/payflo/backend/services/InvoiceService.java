package com.example.payflo.backend.services;

import java.util.List;

import com.example.payflo.backend.model.Invoice;

public interface InvoiceService {
    public Invoice addInvoice(Invoice invoiceData);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(long id);
}
