import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home() {
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
                        Welcome to PPB!
                    </Typography>
                </Box>
            </Container>
        </>
    );
}