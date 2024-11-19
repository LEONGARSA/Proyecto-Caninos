import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(nombreUser, Nombres, Apellidos, Correo, Contraseña, Telefono, Rol) {
  return { nombreUser, Nombres, Apellidos, Correo, Contraseña, Telefono, Rol };
}

const rows = [
  createData('xxxxxxxxx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Activo/Inactivo</StyledTableCell>
            <StyledTableCell align="right">Nombre de Usuario</StyledTableCell>
            <StyledTableCell align="right">Nombres&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Apellidos&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Correo&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Telefono&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Contraseña&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Rol&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.nombreUser}</StyledTableCell>
              <StyledTableCell align="right">{row.Nombres}</StyledTableCell>
              <StyledTableCell align="right">{row.Apellidos}</StyledTableCell>
              <StyledTableCell align="right">{row.Correo}</StyledTableCell>
              <StyledTableCell align="right">{row.Contraseña}</StyledTableCell>
              <StyledTableCell align="right">{row.Telefono}</StyledTableCell>
              <StyledTableCell align="right">{row.Rol}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}