import getListingById, { ParamsTypes } from "@/actions/getListingById";
import getCurrentUser from "@/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";
import getReservations from "@/actions/getReservation";

const ListingDetailsPage = async ({ params }: { params: ParamsTypes }) => {
  const listingDetails = await getListingById(params);

  const currentUser = await getCurrentUser();

  const reservations = await getReservations(params);

  if (!listingDetails) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listingDetails}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
};

export default ListingDetailsPage;
