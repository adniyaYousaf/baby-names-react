import DisplayName from "./src/DisplayName";
import data from "./data/babyNamesData.json";
import { useState } from "react";

export function AppHeader() {
 
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    const handleInputChange = (event) => {
      const { value } = event.target;
      setSearchTerm(value);
      filterData(value);
    };

    const filterData = (searchTerm) => {
      const filteredData = data.filter((baby) =>
        baby.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredData);
    };

    return (
      <>
        <header>
          <label>
            Search Baby Name:
            <input type="text" onChange={handleInputChange}   value={searchTerm}/>
          </label>
        </header>

        <div>
          {filteredData.map(({ id, name, sex }, index) => (
            <DisplayName key={index} name={name} sex={sex} id={id} />
          ))}
        </div>
      </>
    );
  }

