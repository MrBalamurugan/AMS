import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  CircularProgress,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import type { Column } from "./types";

interface Props<T> {
  columns: Column<T>[];
  data?: T[];
  loading?: boolean;
  getRowId: (row: T) => string | number;
  emptyText?: string;
  rowsPerPageOptions?: number[];
  defaultRowsPerPage?: number;
}

export default function ReusableTable<T>({
  columns,
  data = [],
  loading = false,
  getRowId,
  emptyText = "No data available",
  rowsPerPageOptions = [4, 10, 25],
  defaultRowsPerPage = 4,
}: Props<T>) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        backgroundColor: "#ffffff",
      }}
    >
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          {/* ---------- HEADER ---------- */}
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col.key as string}
                  align={col.align ?? "left"}
                  sx={{
                    backgroundColor: "#F9FAFB",
                    fontWeight: 600,
                    color: "#374151",
                    fontSize: 13,
                    width: col.width,
                    borderBottom: "1px solid #E5E7EB",
                    py: 1.5,
                  }}
                >
                  {col.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* ---------- BODY ---------- */}
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <Box display="flex" justifyContent="center" py={3}>
                    <CircularProgress size={24} />
                  </Box>
                </TableCell>
              </TableRow>
            ) : paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ py: 3 }}
                  >
                    {emptyText}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row) => (
                <TableRow
                  hover
                  key={getRowId(row)}
                  sx={{
                    "&:last-child td": { borderBottom: 0 },
                    "&:hover": {
                      backgroundColor: "#F9FAFB",
                    },
                  }}
                >
                  {columns.map((col) => (
                    <TableCell
                      key={col.key as string}
                      align={col.align ?? "left"}
                      sx={{
                        fontSize: 14,
                        color: "#1F2937",
                        borderBottom: "1px solid #F3F4F6",
                        py: 2,
                      }}
                    >
                      {col.render ? col.render(row) : (row as any)[col.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ---------- FOOTER / PAGINATION ---------- */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
          borderTop: "1px solid #E5E7EB",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Rows per page */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2" color="#6B7280" fontSize={14}>
            Rows per page:
          </Typography>
          <select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            style={{
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #D1D5DB",
              background: "white",
              fontSize: "0.875rem",
              color: "#374151",
              cursor: "pointer",
            }}
          >
            {rowsPerPageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Stack>

        <TablePagination
          component="div"
          count={data.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[]}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} of ${count}`
          }
          sx={{
            "& .MuiTablePagination-toolbar": {
              p: 0,
            },
            "& .MuiTablePagination-displayedRows": {
              color: "#6B7280",
              fontSize: 14,
            },
            "& .MuiTablePagination-actions": {
              ml: 1,
              "& button": {
                color: "#374151",
              },
            },
          }}
        />
      </Box>
    </Paper>
  );
}
