import React from "react"
import Badge from "./badge"

const Software = props => {
  const badges = props.badges.map((item, index) => (
    <Badge 
      key={props.key + '_' + index}
      link={item.link}>
        {item.name}
    </Badge>
  ))
  return (
    <table className="item-table">
      <tbody>
        <tr>
          <td className="item-name">{props.name || ""}</td>
          <td className="item-when">{props.when || ""}</td>
        </tr>
        <tr>
          <td className="item-org">{props.description || ""}</td>
          <td className="item-links">{badges}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Software
