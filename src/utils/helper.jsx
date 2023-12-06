export const filterData = (searchedText, filteredRestaurants) => {
  return filteredRestaurants.filter((filteredRestaurants) =>
    filteredRestaurants?.info?.name
      ?.toLowerCase()
      ?.includes(searchedText.toLowerCase())
  );
};
