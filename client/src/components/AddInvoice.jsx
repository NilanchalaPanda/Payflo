import { useState } from "react";
import { TextField, Typography, Box, Button, Paper, Grid } from "@mui/material";
import { saveInvoice } from "../services/api";

const defaultObj = {
  vendor: "",
  product: "",
  amount: 0,
  date: "",
  action: "pending",
};

const AddInvoice = ({ setAddInvoice }) => {
  const [invoice, setInvoice] = useState(defaultObj);

  const onValueChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const addNewInvoice = async () => {
    await saveInvoice({ ...invoice, amount: Number(invoice["amount"]) });
    setAddInvoice(false);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add New Invoice
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            name="vendor"
            label="Vendor Name"
            fullWidth
            variant="outlined"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            name="product"
            label="Product Name"
            fullWidth
            variant="outlined"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            name="amount"
            label="Amount (Rs)"
            fullWidth
            type="number"
            variant="outlined"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            name="date"
            label="Invoice Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            onChange={onValueChange}
          />
        </Grid>
      </Grid>

      <Box mt={4} display="flex" gap={2}>
        <Button variant="contained" onClick={addNewInvoice}>
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setAddInvoice(false)}
        >
          Cancel
        </Button>
      </Box>
    </Paper>
  );
};

export default AddInvoice;
