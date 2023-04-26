import React from "react";
import "../GamesIndex/gamesIndex.css"

const IndexSkillLevelFilter = ({parentCallback}) => {

  function changeSelectedSkillLevel(e) {
    parentCallback(e.target.value)
  }

  return (
    <div className="in-filter">
      <select className="in-drop"  onChange={changeSelectedSkillLevel} id="skill-drop">
        <option disabled selected>Skill Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
      </select>
    </div>
  )
}

export default IndexSkillLevelFilter;