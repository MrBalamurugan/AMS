import ReusableTable from "../../../components/common/table/ReusableTable";
import type { Column } from "../../../components/common/table/types";
import { Chip, Button } from "@mui/material";

type User = {
  id: string;
  userName: string;
  manager: string;
  email: string;
  organization: string;
  role: string;
  phone: string;
  status: "Active" | "Inactive";
};

const mockUsers: User[] = [
  {
    id: "1",
    userName: "John Doe",
    manager: "Alice Smith",
    email: "john.doe@example.com",
    organization: "Sales",
    role: "Admin",
    phone: "+1 234 567 8901",
    status: "Active",
  },
  {
    id: "2",
    userName: "Jane Miller",
    manager: "Bob Johnson",
    email: "jane.miller@example.com",
    organization: "Marketing",
    role: "Editor",
    phone: "+1 234 567 8902",
    status: "Inactive",
  },
  {
    id: "3",
    userName: "Robert Brown",
    manager: "Alice Smith",
    email: "robert.brown@example.com",
    organization: "Finance",
    role: "Viewer",
    phone: "+1 234 567 8903",
    status: "Active",
  },
  {
    id: "4",
    userName: "Emily Davis",
    manager: "Chris Green",
    email: "emily.davis@example.com",
    organization: "HR",
    role: "Editor",
    phone: "+1 234 567 8904",
    status: "Active",
  },
  {
    id: "5",
    userName: "Michael Wilson",
    manager: "Bob Johnson",
    email: "michael.wilson@example.com",
    organization: "IT",
    role: "Admin",
    phone: "+1 234 567 8905",
    status: "Inactive",
  },
];

const columns: Column<User>[] = [
  { key: "userName", header: "User Name", width: 180 },
  { key: "manager", header: "Manager", width: 180 },
  { key: "email", header: "Email", width: 240 },
  { key: "organization", header: "Organization", width: 160 },
  { key: "role", header: "Role", width: 120 },
  { key: "phone", header: "Phone", width: 160 },
  {
    key: "status",
    header: "Status",
    width: 120,
    render: (row) => (
      <Chip
        label={row.status}
        color={row.status === "Active" ? "success" : "default"}
        size="small"
      />
    ),
  },
  {
    key: "action",
    header: "Action",
    width: 140,
    render: (row) => (
      <Button
        size="small"
        variant="outlined"
        onClick={() => console.log("Edit user:", row.id)}
      >
        Edit
      </Button>
    ),
  },
];

const UserListPage = () => {
  return (
    <div>
      <ReusableTable<User>
        columns={columns}
        data={mockUsers}
        getRowId={(row) => row.id}
        emptyText="No users found"
      />
    </div>
  );
};

export default UserListPage;
