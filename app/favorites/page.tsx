import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListings from "@/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const favoritesListings = await getFavoriteListings();

  const currentUser = await getCurrentUser();

  if (favoritesListings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      />
    );
  }

  return (
    <FavoritesClient listings={favoritesListings} currentUser={currentUser} />
  );
};

export default ListingPage;
