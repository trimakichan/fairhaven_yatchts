import { useContext, useEffect, useState } from "react";
import "./searchBar.scss";
import { IoCloseOutline } from "react-icons/io5";
import { Contexts } from "../../contexts/contexts";

const SearchBar = ({ allBoats }) => {
  const { boatResults, setBoatResults } = useContext(Contexts);
  const [buildersType, setBuildersType] = useState(null);
  const [builder, setBuilder] = useState("");
  const [boatClass, setBoatClass] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [formattedMinPrice, setFormattedMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [formattedMaxPrice, setFormattedMaxPrice] = useState("");
  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");

  const formatPrice = (price) => {
    if (price !== "") {
      const num = parseFloat(price);
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(parseFloat(num));
    } else {
      return "";
    }
  };

  const handlePriceChange = (e, type) => {
    const value = e.target.value.replace(/[$,]/g, "");
    const numValue = parseFloat(value);

    if (!isNaN(numValue)) {
      type === "min" ? setMinPrice(numValue) : setMaxPrice(numValue);
    } else {
      type === "min" ? setMinPrice("") : setMaxPrice("");
    }
  };

    useEffect(() => {
      setFormattedMinPrice(formatPrice(minPrice));
    }, [minPrice]);

    useEffect(() => {
      setFormattedMaxPrice(formatPrice(maxPrice));
    }, [maxPrice]);

  useEffect(() => {
    if (allBoats && allBoats.length > 0) {
      setBoatResults(allBoats);
      const builders = new Set(
        allBoats.map((boat) => boat.BuilderName || boat.MakeString)
      );
      setBuildersType([...builders]);
    }
  }, [allBoats, setBoatResults]);

  useEffect(() => {
    if (
      [minYear, maxYear, minPrice, maxPrice, minLength, maxLength].some(
        (value) => value < 0
      )
    )
      alert("Values cannot be negative");

    if (allBoats) {
      const filterData = allBoats.filter(
        (boat) =>
          (builder === "" ||
            boat.BuilderName === builder ||
            boat.MakeString === builder) &&
          (boatClass === "" || boat.BoatCategoryCode === boatClass) &&
          (minYear === "" || boat.ModelYear >= minYear) &&
          (maxYear === "" || boat.ModelYear <= maxYear) &&
          (maxPrice === "" || parseFloat(boat.Price) <= maxPrice) &&
          (minPrice === "" || parseFloat(boat.Price) >= minPrice) &&
          (minLength === "" || parseFloat(boat.NominalLength) >= minLength) &&
          (maxLength === "" || parseFloat(boat.NominalLength) <= maxLength)
      );
      setBoatResults(filterData);
    }
  }, [
    builder,
    minYear,
    maxYear,
    boatClass,
    minPrice,
    maxPrice,
    minLength,
    maxLength,
    allBoats,
    setBoatResults,
  ]);

  const resetFilters = () => {
    setBuilder("");
    setBoatClass("");
    setMinYear("");
    setMaxYear("");
    setMinPrice("");
    setFormattedMinPrice("");
    setMaxPrice("");
    setMinLength("");
    setMaxLength("");
    setBoatResults(allBoats);
  };



  return (
    <div className="search-bar">
      <div className="filter-title">
        <div className="textLLora ">Filter your results </div>
        <div className="textMRoboto reset" onClick={resetFilters}>
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
            value={builder}
            onChange={(e) => setBuilder(e.target.value)}
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
            value={boatClass}
            onChange={(e) => setBoatClass(e.target.value)}
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
              // min={1920}
              max={new Date().getFullYear()}
              placeholder="Min"
              value={minYear}
              onChange={(e) => {
                const numYear = isNaN(parseFloat(e.target.value))
                  ? ""
                  : parseFloat(e.target.value);
                setMinYear(numYear);
              }}
            />
            <input
              type="number"
              name="maxYear"
              min={1920}
              max={new Date().getFullYear()}
              placeholder="Max"
              value={maxYear}
              onChange={(e) => {
                const numYear = isNaN(parseFloat(e.target.value))
                  ? ""
                  : parseFloat(e.target.value);
                setMaxYear(numYear);
              }}
            />
          </div>
        </div>

        <div className="filter-box">
          <label htmlFor="minPrice">Price &#x28;USD&#x29;</label>
          <div className="input-box">
            <input
              // type needs to be 'text' in order to show formatted currency.
              type="text"
              id="minPrice"
              name="minPrice"
              min={0}
              placeholder="Min"
              value={formattedMinPrice}
              onChange={(e) => handlePriceChange(e, "min")}
            />
            <input
              // type needs to be 'text' in order to show formatted currency.
              type="text"
              name="maxPrice"
              min={0}
              max={50000000}
              placeholder="Max"
              value={formattedMaxPrice}
              onChange={(e) => handlePriceChange(e, "max")}
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
              value={minLength}
              onChange={(e) => {
                const numLength = isNaN(parseFloat(e.target.value))
                  ? ""
                  : parseFloat(e.target.value);
                setMinLength(numLength);
              }}
            />
            <input
              type="number"
              name="maxLength"
              min={0}
              //   max={300}
              placeholder="Max"
              value={maxLength}
              onChange={(e) => {
                const numLength = isNaN(parseFloat(e.target.value))
                  ? ""
                  : parseFloat(e.target.value);
                setMaxLength(numLength);
              }}
            />
          </div>
        </div>
      </form>

      <div className="textLLora">
        <span className="results-count">{boatResults.length}</span> results
      </div>
    </div>
  );
};

export default SearchBar;
