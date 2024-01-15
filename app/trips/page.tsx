import getReservations from "@/actions/getReservation";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unautorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you haven't reserved any trips"
      />
    );
  }

  return <div>
    <TripsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  </div>;
};

export default TripsPage;
