import { useQuery } from "@tanstack/react-query";

const fetchApi = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.results) {
      throw new Error('Invalid API response: missing results');
    }
    
    return data.results;
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new Error('Network error: Failed to connect to API');
    }
    throw error;
  }
};

const filterData = (results) => {
  if (!results || !Array.isArray(results)) {
    throw new Error("Invalid or empty results from API");
  }

  const filteredData = results.map(
    ({
      DocumentID,
      ItemReceivedDate,
      SalesStatus,
      NumberOfEngines,
      SalesRep,
      LastModificationDate,
      OriginalPrice,
      Price,
      BoatLocation,
      ModelYear,
      MakeString,
      Model,
      BoatCategoryCode,
      BuilderName,
      BeamMeasure,
      NominalLength,
      Engines,
      BoatClassCode,
      GeneralBoatDescription,
      AdditionalDetailDescription,
      Images,
    }) => ({
      DocumentID,
      ItemReceivedDate,
      SalesStatus,
      NumberOfEngines,
      SalesRep,
      LastModificationDate,
      OriginalPrice,
      Price,
      BoatLocation,
      ModelYear,
      Model,
      BoatCategoryCode,
      MakeString,
      BuilderName,
      BeamMeasure,
      NominalLength,
      Engines,
      BoatClassCode,
      GeneralBoatDescription,
      AdditionalDetailDescription,
      Images,
    })
  );

  return filteredData;
};

const fetchBoatListings = async () => {
  const url = `https://www.fairhavenyachts.com/api`;
  const results = await fetchApi(url);
  return filterData(results);
};

const fetchBoatListingById = async (id) => {
  const url = `https://www.fairhavenyachts.com/api?&DocumentID=${id}`;
  const results = await fetchApi(url);
  const filteredResults = filterData(results);

  return filteredResults[0];
};

// useHooks
export const useBoatListings = () => {
  return useQuery({
    queryKey: ["boatListings"],
    queryFn: fetchBoatListings,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

export const useBoatListingsById = (id) => {
  return useQuery({
    queryKey: ["boatListingsById", id],
    queryFn: () => fetchBoatListingById(id),
    enabled: !!id,
  });
};
