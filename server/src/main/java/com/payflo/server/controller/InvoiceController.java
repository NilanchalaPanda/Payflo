package main.java.com.payflo.server.controller;

// model
import main.java.com.payflo.server.model.Invoice;
import main.java.com.payflo.server.services.InvoiceService;

// annotation
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.AutoWired;

@RestController
public class InvoiceController {

    @AutoWired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice) {
        return this.invoiceService.addInvoice(invoice);
    }
}