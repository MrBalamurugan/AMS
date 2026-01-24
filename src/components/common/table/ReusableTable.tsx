import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import type { Column } from "./types";

interface Props<T> {
  columns: Column<T>[];
  data?: T[];
  loading?: boolean;
  getRowId: (row: T) => string | number;
  emptyText?: string;
}

export default function ReusableTable<T>({
  columns,
  data = [],
  loading,
  getRowId,
  emptyText = "No data found",
}: Props<T>) {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!data.length) {
    return (
      <Typography align="center" sx={{ p: 3 }}>
        {emptyText}
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.key as string}
                align={col.align ?? "left"}
                sx={{ width: col.width, fontWeight: 600 }}
              >
                {col.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow key={getRowId(row)}>
              {columns.map((col) => (
                <TableCell key={col.key as string} align={col.align ?? "left"}>
                  {col.render ? col.render(row) : (row as any)[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
