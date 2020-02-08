import React from "react";
import MainCard from "../components/MainCard";
import birthplaces from "../data/birthplaces.json";

const BirthplacesPage: React.FC = () => {
  return (
    <div>
      <h2>Birthplaces stats</h2>
      {birthplaces.map(birthplace =>
        <MainCard
          key={birthplace.id}
          id={birthplace.id}
          title={birthplace.name}
          contents={birthplace.stats}
        />
      )}
    </div>
  );
};


export default BirthplacesPage;
