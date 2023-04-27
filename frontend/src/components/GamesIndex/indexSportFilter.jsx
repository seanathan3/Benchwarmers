import React from "react";
import "../GamesIndex/gamesIndex.css"

const IndexSportFilter = ({parentCallback}) =>  {

  function changeSelectedSport (e) {
    parentCallback(e.target.value);
  }

  return (
    <div className="in-sport-filter">

      <select className="in-sport-drop" onChange={changeSelectedSport} name="cf-sport">
        <option selected disabled> Sport</option>
        <option value="Badminton">Badminton</option>
        <option value="Baseball">Baseball</option>
        <option value="Basketball">Basketball</option>
        <option value="Cycling">Cycling</option>
        <option value="Darts">Darts</option>
        <option value="Fencing">Fencing</option>
        <option value="Football">Football</option>
        <option value="Golf">Golf</option>
        <option value="Handball">Handball</option>
        <option value="Hockey">Hockey</option>
        <option value="Martial Arts">Martial Arts</option>
        <option value="Soccer">Soccer</option>
        <option value="Softball">Softball</option>
        <option value="Table Tennis">Table Tennis</option>
        <option value="Tennis">Tennis</option>
        <option value="Volleyball">Volleyball</option>
        <option value="All">All Sports</option>
      </select>
    </div>
  )
}

export default IndexSportFilter;