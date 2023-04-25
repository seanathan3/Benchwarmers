import React, { useEffect } from "react";
import "../GamesIndex/gamesIndex.css"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { fetchGames } from "../../store/games";

const IndexCategoryFilter = () =>  {

  const dispatch = useDispatch();
  const sportFilteredGames = useSelector(state => state.games.values?.filter(game => game.sport === selectedSport))
  const [selectedSport, setSelectedSport] = useState("Basketball")
  const changeSelectedSport = (e) => {
    setSelectedSport(e.target.value)
    console.log(selectedSport)
  }
  console.log(sportFilteredGames)

  useEffect(() => {
    dispatch(fetchGames)
  }, [dispatch])

  return (
    <div className="in-sport-filter">
      <label for="cf-sport">Choose a Sport:</label>

      <select name="cf-sport">
        <option onChange={changeSelectedSport} value="Badminton">Badminton</option>
        <option onChange={changeSelectedSport} value="Baseball">Baseball</option>
        <option onChange={changeSelectedSport} value="Basketball">Basketball</option>
        <option onChange={changeSelectedSport} value="Cycling">Cycling</option>
        <option onChange={changeSelectedSport} value="Darts">Darts</option>
        <option onChange={changeSelectedSport} value="Fencing">Fencing</option>
        <option onChange={changeSelectedSport} value="Football">Football</option>
        <option onChange={changeSelectedSport} value="Golf">Golf</option>
        <option onChange={changeSelectedSport} value="Handball">Handball</option>
        <option onChange={changeSelectedSport} value="Hockey">Hockey</option>
        <option onChange={changeSelectedSport} value="Martial Arts">Martial Arts</option>
        <option onChange={changeSelectedSport} value="Soccer">Soccer</option>
        <option onChange={changeSelectedSport} value="Softball">Softball</option>
        <option onChange={changeSelectedSport} value="Table Tennis">Table Tennis</option>
        <option onChange={changeSelectedSport} value="Tennis">Tennis</option>
        <option onChange={changeSelectedSport} value="Volleyball">Volleyball</option>
        <option onChange={changeSelectedSport} value="Other">Other</option>
      </select>
    </div>
  )
}

export default IndexCategoryFilter;