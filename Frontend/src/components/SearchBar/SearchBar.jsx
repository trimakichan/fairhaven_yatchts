import { useContext, useEffect, useState } from "react";
import "./searchBar.scss";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import { Contexts } from "../../contexts/contexts";

const SearchBar = ({ allBoats }) => {
  const { filteredResults, setFilteredResults } = useContext(Contexts);
  const [buildersType, setBuildersType] = useState(null);
  const [searchParams, setSearchParams] = useState({
    builder: "",
    class: "",
    minYear: "",
    maxYear: new Date().getFullYear(),
    minPrice: "",
    maxPrice: 50000000,
    minLength: "",
    maxLength: 300,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: parseFloat(value) || value,
    }));
  };


useEffect(() => {
  if (allBoats && allBoats.length > 0) {
    setFilteredResults(allBoats);
    const builders = new Set(
      allBoats.map((boat) => boat.BuilderName || boat.MakeString)
    );
    setBuildersType([...builders]);
  }
}, [allBoats, setFilteredResults, setBuildersType]);


  useEffect(() => {
    const {
      builder,
      class: boatClass,
      minYear,
      maxYear,
      minPrice,
      maxPrice,
      minLength,
      maxLength,
    } = searchParams;
    // console.log(searchParams)

    if (
      [minYear, maxYear, minPrice, maxPrice, minLength, maxLength].some(
        (value) => value < 0
      )
    )
      alert("Values cannot be negative");

    const results = allBoats.filter(
      (boat) =>
        (builder === "" ||
          boat.BuilderName === builder ||
          boat.MakeString === builder) &&
        (boatClass === "" || boat.BoatCategoryCode === boatClass) &&
        boat.ModelYear >= minYear &&
        boat.ModelYear <= maxYear &&
        parseFloat(boat.Price) <= maxPrice &&
        parseFloat(boat.Price) >= minPrice &&
        parseFloat(boat.NominalLength) >= minLength &&
        parseFloat(boat.NominalLength) <= maxLength
    );

    setFilteredResults(results);
  }, [searchParams, setFilteredResults, allBoats]);

  const resetFilter = () => {
     setFilteredResults(allBoats);

    setSearchParams({
      builder: "",
      class: "",
      minYear: "",
      maxYear: new Date().getFullYear(),
      minPrice: "",
      maxPrice: '50000000',
      minLength: "",
      maxLength: 300,
    });
   
  };

  return (
    <div className="search-bar">
      <div className="filter-title">
        <div className="textLLora ">Filter your results </div>
        <div className="textMRoboto reset" onClick={resetFilter}>
          <IoCloseOutline />
          Reset Filter
        </div>
      </div>
      <form action="submit" className="textMLora">
        <div className="filter-box ">
          <label htmlFor="builder">Builder</label>
          <select
            name="builder"
            id="builder"
            value={searchParams.builder}
            onChange={handleInputChange}
          >
            <option value="">Any</option>
            {buildersType &&
              buildersType.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="filter-box">
          <label htmlFor="class">Class</label>
          <select
            name="class"
            id="class"
            value={searchParams.class}
            onChange={handleInputChange}
          >
            <option value="">Any</option>
            <option value="Power">Power Boats</option>
            <option value="Sail">Sail Boats</option>
          </select>
        </div>

        <div className="filter-box">
          <label htmlFor="minYear">Year</label>
          <div className="input-box">
            <input
              type="number"
              id="minYear"
              name="minYear"
              min={1920}
              max={new Date().getFullYear()}
              placeholder="Min"
              value={searchParams.minYear}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="maxYear"
              min={1920}
              max={new Date().getFullYear()}
              placeholder="Max"
              value={searchParams.maxYear}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="filter-box">
          <label htmlFor="minPrice">Price</label>
          <div className="input-box">
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              min={0}
              placeholder="Min"
              value={searchParams.minPrice}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="maxPrice"
              min={0}
              max={50000000}
              placeholder="Max"
              value={searchParams.maxPrice}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="filter-box">
          <label htmlFor="minLength">Length &#x28;ft&#x29;</label>
          <div className="input-box">
            <input
              type="number"
              id="minLength"
              name="minLength"
              min={0}
              //   max={50000000}
              placeholder="Min"
              value={searchParams.minLength}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="maxLength"
              min={0}
              //   max={300}
              placeholder="Max"
              value={searchParams.maxLength}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* <button type="submit">
          <CiSearch />
          Search
        </button> */}
      </form>

      <div className="textLLora">
        <span className="results-count">{filteredResults.length}</span> results
      </div>
    </div>
  );
};

export default SearchBar;
