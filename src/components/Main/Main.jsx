import React, { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import Card from "../Card/Card";
import Input from "../Input/Input";
import { motion } from "framer-motion";
import NoData from "../NoData/NoData";

function Main() {
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      setEmployee(response.data.data);
    } catch (error) {
      console.log("Errof", error);
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterEmployee = employee.filter((emp) =>
    emp.first_name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="search_box">
        <Input searchValue={search} handleSearch={handleSearch} />
      </div>

      <div className="card_container">
        <motion.div className="cardd">
          {filterEmployee.length > 0 ? (
            filterEmployee.map((employeeData) => (
              <Card
                keyy={employeeData.id}
                avatar={employeeData.avatar}
                firstName={employeeData.first_name}
                lastName={employeeData.last_name}
              />
            ))
          ) : (
            <div className="nodata">
              <NoData />
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default Main;
