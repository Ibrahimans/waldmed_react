import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const flattenAppointment = (appointments) => {
  const flattened = [];
  for (const apt of appointments) {
    for (const phoneNumber of apt.phoneNumbers) {
      flattened.push({
        phoneNumber,
        name: apt.name,
        date: apt.date,
        time: apt.time,
      });
    }
  }
  return flattened;
};

export default function SMSTable({ appointments }) {
  appointments = flattenAppointment(appointments);
  return (
    <TableContainer sx={{ marginBottom: "30px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Phone Number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment.phoneNumber}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.phoneNumber}
              </TableCell>
              <TableCell align="right">{appointment.name}</TableCell>
              <TableCell align="right">{appointment.date}</TableCell>
              <TableCell align="right">{appointment.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
