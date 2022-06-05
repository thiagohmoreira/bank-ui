import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import { useAuth } from '../../services/Authentication'

export default function Profile() {
    const auth = useAuth()

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
                        Profile
                    </Typography>

                    <TableContainer component={Card} sx={{ marginTop: 2, maxWidth: 400 }}>
                        <Table aria-label="Profile">
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row" align="right" sx={{ fontWeight: 'bold' }}>Username</TableCell>
                                    <TableCell>{auth.username}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" align="right" sx={{ fontWeight: 'bold' }}>Full name</TableCell>
                                    <TableCell>{auth.fullName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" align="right" sx={{ fontWeight: 'bold' }}>E-mail</TableCell>
                                    <TableCell>{auth.email}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    );
}