import React from "react";
import MainCard from "../components/MainCard";
import ChocoboForm from "../components/ChocoboForm";
import ChocoboList from "../components/ChocoboList";
import training from "../data/training.json";

const ChocobosPage: React.FC = () => {
  return (
    <div>
      <h2>Stable of chocobos</h2>
      <ChocoboForm/>
      <ChocoboList/>
      <h2>Chocobo of training</h2>
      {training.map(exercise =>
        <MainCard
          key={exercise.id}
          id={exercise.id}
          title={exercise.title}
          contents={exercise.result}
        />
      )}
    </div>
  );
};


export default ChocobosPage;
