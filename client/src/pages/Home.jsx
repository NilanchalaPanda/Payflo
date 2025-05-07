import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Box, Typography, Button, Container } from "@mui/material";
import Invoices from "../components/Invoices";
import AddInvoice from "../components/AddInvoice";
import { getAllInvoices, deleteInvoice } from "../services/api";

const Home = () => {
  const [invoices, setInvoices] = useState([]);
  const [addInvoice, setAddInvoice] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllInvoices();
      response && response.data && setInvoices(response.data);
    };
    getData();
  }, [addInvoice]);

  const removeInvoice = async (id) => {
    await deleteInvoice(id);

    const updatedInvoices = invoices.filter((invoice) => invoice.id != id);
    setInvoices(updatedInvoices);
  };

  const toggleInvoice = () => {
    setAddInvoice(true);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h4" fontWeight={500}>
            Pending Invoices
          </Typography>
          {!addInvoice && (
            <Button variant="contained" onClick={toggleInvoice}>
              Add Invoice
            </Button>
          )}
        </Box>

        {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
        <Invoices invoices={invoices} removeInvoice={removeInvoice} />
      </Container>
    </>
  );
};

export default Home;
