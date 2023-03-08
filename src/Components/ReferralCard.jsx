import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ReferralCard({ npi, fullName, table }) {
    return (
        <Box sx={{ minWidth: 275, marginTop: "20px" }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardActions>
                        <Button size="small">{npi}</Button>
                    </CardActions>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {fullName}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Org Name</TableCell>
                                        <TableCell align="right">Phone Number</TableCell>
                                        <TableCell align="right">Addr Line 1</TableCell>
                                        <TableCell align="right">Addr Line 2</TableCell>
                                        <TableCell align="right">City</TableCell>
                                        <TableCell align="right">State</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {table.map((row, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.org_nm}
                                            </TableCell>
                                            <TableCell align="right">{row.phn_numbr}</TableCell>
                                            <TableCell align="right">{row.adr_ln_1}</TableCell>
                                            <TableCell align="right">{row.adr_ln_2}</TableCell>
                                            <TableCell align="right">{row.cty}</TableCell>
                                            <TableCell align="right">{row.st}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    );
}
