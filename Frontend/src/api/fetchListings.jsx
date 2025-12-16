import { useQuery, useQueryClient } from "@tanstack/react-query";

// const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const fetchApi = async (url) => {
  const response = await fetch(url);
 
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;

};

const filterData = async (results) => {
  if (!results || !Array.isArray(results)) {
    throw new Error("No results found");
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

  // console.log(`Filtered data: ${JSON.stringify(filteredData)}`);
  return filteredData;
};

const fetchBoatListings = async () => {
  // const url = `http://localhost:5000/api`
  // const url = `https://fairhaven-yachts-eeeb7fbec898.herokuapp.com/api`;
  // const url = `https://api.boats.com/inventory/search?key=${apiKey}&status=active,sale%20pending`;
  const url = `https://www.fairhavenyachts.com/api`; //Switch to this for production
  const results = await fetchApi(url);
  // console.log('Results', results)
  return filterData(results);
};

const fetchBoatListingById = async (id) => {
  // const url = `http://localhost:5000/api?&DocumentID=${id}`;
  // const url = `https://fairhaven-yachts-eeeb7fbec898.herokuapp.com/api?&DocumentID=${id}`;
  // const url = `https://api.boats.com/inventory/search?key=${apiKey}&DocumentID=${id}`;
  const url = `https://www.fairhavenyachts.com/api?&DocumentID=${id}`; //Switch to this for production
  const results = await fetchApi(url);
  const filteredResults = await filterData(results);

  return filteredResults[0];
};

// useHooks
export const useBoatListings = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["boatListings"],
    queryFn: fetchBoatListings,
    initialData: () => queryClient.getQueryData(["boatListings"]),
  });
};

export const useBoatListingsById = (id) => {
  return useQuery({
    queryKey: ["boatListingsById", id],
    queryFn: () => fetchBoatListingById(id),
    enabled: !!id,
  });
};
