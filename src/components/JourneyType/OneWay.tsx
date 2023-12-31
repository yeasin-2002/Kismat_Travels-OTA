import { TravelDate, TravelersAndClass } from "$components";
import { SelectAirport } from "$components/SelectAirport/SelectAirport";
import { useOneWay } from "$store";
import { useId } from "react";

export const OneWay = () => {
  const store = useOneWay();
  const id = useId();

  return (
    <div className="grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-4" key={id}>
      <SelectAirport
        placeholder="From"
        selected={store.from}
        onSelect={store.setFrom}
        searchValue={store.searchFrom}
        setSearchValue={store.setSearchFrom}
      />

      <SelectAirport
        placeholder="To"
        selected={store.to}
        onSelect={store.setTo}
        searchValue={store.searchTo}
        setSearchValue={store.setSearchTo}
      />

      <TravelDate
        departure={store.departure}
        setDeparture={store.setDeparture}
        departurePlaceholder="Departure"
        expand={false}
      />

      <TravelersAndClass travelerAndClasses={store.travelerAndClasses} onValueChange={store.setTravelerAndClasses} />
    </div>
  );
};
