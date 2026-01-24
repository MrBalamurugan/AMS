import { IconButton, Stack, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Props<T> {
  row: T;
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

export function TableActions<T>({ row, onView, onEdit, onDelete }: Props<T>) {
  return (
    <Stack direction="row" spacing={0.5}>
      {onView && (
        <Tooltip title="View">
          <IconButton size="small" onClick={() => onView(row)}>
            <VisibilityIcon fontSize="small" sx={{ color: "#2563EB" }} />
          </IconButton>
        </Tooltip>
      )}

      {onEdit && (
        <Tooltip title="Edit">
          <IconButton size="small" onClick={() => onEdit(row)}>
            <EditIcon fontSize="small" sx={{ color: "#2563EB" }} />
          </IconButton>
        </Tooltip>
      )}

      {onDelete && (
        <Tooltip title="Delete">
          <IconButton size="small" onClick={() => onDelete(row)}>
            <DeleteIcon fontSize="small" sx={{ color: "#DC2626" }} />
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  );
}
