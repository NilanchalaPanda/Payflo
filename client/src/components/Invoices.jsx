import {
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Button,
  Typography,
  Paper,
  TableContainer,
} from "@mui/material";

const Invoices = ({ invoices, removeInvoice }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Vendor</strong>
            </TableCell>
            <TableCell>
              <strong>Product</strong>
            </TableCell>
            <TableCell>
              <strong>Amount</strong>
            </TableCell>
            <TableCell>
              <strong>Date</strong>
            </TableCell>
            <TableCell>
              <strong>Status</strong>
            </TableCell>
            <TableCell>
              <strong>Action</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices?.length > 0 ? (
            invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.vendor}</TableCell>
                <TableCell>{invoice.product}</TableCell>
                <TableCell>Rs {invoice.amount}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.action}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    sx={{ fontWeight: 'bold' }}
                    onClick={() => removeInvoice(invoice.id)}
                  >
                    Mark Done
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                <Typography color="text.secondary">
                  No pending invoices
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Invoices;
