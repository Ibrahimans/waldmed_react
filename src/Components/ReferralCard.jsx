import { useState } from 'react';
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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BusinessIcon from '@mui/icons-material/Business';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const getAddressFromRow = ({ adr_ln_1, adr_ln_2, cty, st }) => `${adr_ln_1}${adr_ln_2 && ` ${adr_ln_2}`} ${cty}, ${st}`;
const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

export default function ReferralCard({ npi, fullName, table, preferred }) {
    const [showTable, setShowTable] = useState(false);

    return (
        <Box sx={{ minWidth: 275, margin: "30px", display: 'flex', justifyContent: "center" }}>
            <Card variant="outlined" sx={{ width: showTable ? 1000 : 500 }}>
                <>
                    <CardActions>
                        {preferred && <StarBorderIcon />}
                        <Button size="small" onClick={() => window.open(`https://npiregistry.cms.hhs.gov/provider-view/${npi}`, "_blank")}>{npi}</Button>
                    </CardActions>
                    <Typography component="div" style={{ fontWeight: "bold" }}>
                        {fullName}
                    </Typography>
                    {!showTable && (
                        <Box sx={{ bgcolor: 'background.paper' }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    {table[0].phn_numbr && <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <PhoneIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={formatPhoneNumber(table[0].phn_numbr)} />
                                        </ListItemButton>
                                    </ListItem>}
                                    {getAddressFromRow(table[0]) && <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <ContactMailIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={getAddressFromRow(table[0])} />
                                        </ListItemButton>
                                    </ListItem>}
                                    {table[0].org_nm && <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <BusinessIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={table[0].org_nm} />
                                        </ListItemButton>
                                    </ListItem>}
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <Button size="small" onClick={() => setShowTable(true)}>Show Table</Button>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                    )}
                    {showTable && (
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
                            <ListItem disablePadding>
                                <Button size="small" onClick={() => setShowTable(false)}>Hide Table</Button>
                            </ListItem>
                        </CardContent>
                    )}
                </>
            </Card>
        </Box>
    );
}
