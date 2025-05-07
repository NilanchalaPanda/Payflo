package main.java.com.payflo.server.services;

import main.java.com.payflo.server.model.Invoice;
import org.springframework.beans.factory.annotation.AutoWired;

public class InvoiceServiceImpl implements InvoiceService {

    @AutoWired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);
        return invoice;
    }
}
