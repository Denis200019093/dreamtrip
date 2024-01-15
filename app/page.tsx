import getListings, { IListingsParams } from "@/actions/getListings";

import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "@/actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingsParams;
}

export const dynamic = "force-dynamic";

const Home = async ({ searchParams }: HomeProps) => {
  const currentUser = await getCurrentUser();

  const listings = await getListings(searchParams);

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-52 xl:grid-cols-6 gap-8">
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
