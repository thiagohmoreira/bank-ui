import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function NotFound() {
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
                        Ops! I think we took a wrong left..
                    </Typography>

                    <Typography component="h1" variant="subtitle1">
                        Let's start over from <Link to="/home">home</Link>
                    </Typography>
                </Box>
            </Container>
        </>
    );
}