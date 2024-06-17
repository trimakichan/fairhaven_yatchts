import { useQuery, useQueryClient } from "@tanstack/react-query";

// const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
// console.log(apiBaseUrl)

const fetchApi = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  const data = await response.json();
  // console.log(data);
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

  console.log(`Filtered data: ${JSON.stringify(filteredData)}`);
  return filteredData;
};

const fetchBoatListings = async () => {
  // const url = `http://localhost:5000/api`;
  const url = `https://fairhaven-yachts.vercel.app/api`;
  // const url = `https://api.boats.com/inventory/search?key=${apiKey}&status=active,sale%20pending`;
  const results = await fetchApi(url);
  return filterData(results);
};

const fetchBoatListingById = async (id) => {
  // const url = `http://localhost:5000/api?&DocumentID=${id}`;
  const url = `https://fairhaven-yachts.vercel.app/api?&DocumentID=${id}`;
  // const url = `https://api.boats.com/inventory/search?key=${apiKey}&DocumentID=${id}`;
  const results = await fetchApi(url);
  const filteredResults = await filterData(results); // Await the promise resolution
  // console.log(`Filtered result by ID: ${JSON.stringify(filteredResults[0])}`); // Log the filtered result by ID

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
