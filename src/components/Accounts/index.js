import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Card from '@mui/material/Card';
import { DataGrid } from '@mui/x-data-grid';
import { getConfigValue } from '../../services/Configuration'
import { useAxiosClient } from '../../services/RestClient'

const ACCOUNTS_API = getConfigValue('ACCOUNTS_API');

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const usdPrice = {
  type: 'number',
  width: 130,
  valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
  cellClassName: 'font-tabular-nums',
};

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  { field: 'userName', headerName: 'User', width: 130 },
  { field: 'type', headerName: 'Type', width: 120 },
  { field: 'balance', headerName: 'Balance', ...usdPrice },
  { field: 'overdraftLimit', headerName: 'Limit', ...usdPrice }
];

export default function Users() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const axios = useAxiosClient();

  React.useEffect(() => {
    axios.get(ACCOUNTS_API)
      .then((response) => setRows(response.data))
      .catch(setError)
      .then(() => setLoading(false));
  }, [axios]);

  return (
    <>
      <Container component="main" maxWidth="x1">
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Accounts
          </Typography>

          <TableContainer component={Card} sx={{ marginTop: 2, maxWidth: 650 }}>
            <DataGrid
              autoHeight
              loading={loading}
              error={error}
              rows={rows}
              columns={columns}
            />
          </TableContainer>
        </Box>
      </Container>
    </>
  );
}