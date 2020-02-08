import React from "react";
import MainCard from "../components/MainCard";
import leaders from "../data/leaders.json";

const LeadersPage: React.FC = () => {
  return (
    <div>
      <h2>Leaders reward</h2>
      {leaders.map(leader =>
        <MainCard
          key={leader.id}
          id={leader.id}
          title={leader.place}
          contents={leader.candidates}
        />
      )}
    </div>
  );
};


export default LeadersPage;
