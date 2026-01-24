import ReusableTable from "@/components/common/table/ReusableTable";
import type { Column } from "@/components/common/table/types";
import { TableActions } from "@/components/common/table/TableActions";
import { useFacilities } from "@/features/facilities/hooks/useFacilities";
import type { Facility } from "@/features/facilities/types";
import { ROLES } from "@/features/auth/roles";
import { useAuthUser } from "@/features/auth/hooks/useAuthUser";

export default function FacilitiesPage() {
  const { data, isLoading } = useFacilities();
  const { data: user } = useAuthUser();

  const columns: Column<Facility>[] = [
    { key: "name", header: "Facility Name" },
    {
      key: "isActive",
      header: "Status",
      render: (row) => (row.isActive ? "Active" : "Inactive"),
    },
    {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (row) => (
        <TableActions
          row={row}
          onEdit={
            user?.role === ROLES.ADMIN
              ? (r) => console.log("Edit", r)
              : undefined
          }
          onDelete={
            user?.role === ROLES.ADMIN
              ? (r) => console.log("Delete", r)
              : undefined
          }
        />
      ),
    },
  ];

  return (
    <ReusableTable
      columns={columns}
      data={data}
      loading={isLoading}
      getRowId={(row) => row.id}
    />
  );
}
