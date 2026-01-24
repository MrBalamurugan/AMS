import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import type { Facility } from "../types";

interface Props {
  data: Facility[];
  onToggle: (facility: Facility) => void;
}

export default function FacilitiesTable({ data, onToggle }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((f) => (
          <TableRow key={f.id}>
            <TableCell>{f.id}</TableCell>
            <TableCell>{f.name}</TableCell>
            <TableCell align="right">
              <Button
                size="small"
                variant="outlined"
                onClick={() => onToggle(f)}
              >
                {f.isActive ? "Deactivate" : "Activate"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
