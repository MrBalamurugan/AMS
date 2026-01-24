import { Button, Typography, Stack, Paper } from "@mui/material";

import FacilitiesTable from "@/features/facilities/components/FacilitiesTable";
import { useFacilities } from "@/features/facilities/hooks/useFacilities";
import { useCreateFacility } from "@/features/facilities/hooks/useCreateFacility";
import { useUpdateFacility } from "@/features/facilities/hooks/useUpdateFacility";
import Loader from "@/components/common/Loader";
import ErrorState from "@/components/common/ErrorState";

export default function FacilitiesPage() {
  const { data, isLoading, isError } = useFacilities();
  const createFacility = useCreateFacility();
  const updateFacility = useUpdateFacility();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorState />;

  return (
    <Paper sx={{ p: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight={600}>
          Facilities
        </Typography>

        <Button
          variant="contained"
          onClick={() =>
            createFacility.mutate({
              name: "New Facility",
              isActive: true,
            })
          }
        >
          Add Facility
        </Button>
      </Stack>

      {data && (
        <FacilitiesTable
          data={data}
          onToggle={(f) =>
            updateFacility.mutate({
              id: f.id,
              data: { isActive: !f.isActive },
            })
          }
        />
      )}
    </Paper>
  );
}
