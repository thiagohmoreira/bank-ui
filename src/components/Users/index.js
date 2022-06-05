import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Card from '@mui/material/Card';
import { DataGrid } from '@mui/x-data-grid';
import { getConfigValue } from '../../services/Configuration'
import { useAxiosClient } from '../../services/RestClient'

const USERS_API = getConfigValue('USERS_API');

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'email', headerName: 'E-mail', width: 200 },
  { field: 'address', headerName: 'Address', width: 200 }
];

export default function Users() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const axios = useAxiosClient();

  React.useEffect(() => {
    axios.get(USERS_API)
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
            Users
          </Typography>

          <TableContainer component={Card} sx={{ marginTop: 2, maxWidth: 650 }}>
            <DataGrid
              autoHeight
              loading={loading}
              error={error}
              rows={rows}
              columns={columns}
              // pageSize={5}
              // rowsPerPageOptions={[5]}
              // checkboxSelection
            />
          </TableContainer>
        </Box>
      </Container>
    </>
  );
}