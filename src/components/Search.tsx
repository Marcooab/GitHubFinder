type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
}

import css from "./Search.module.css"


import React, { useState, KeyboardEvent } from 'react'
import { BsSearch } from "react-icons/bs"

const Search = ({loadUser} : SearchProps) => {

  const [userName, setUserName] = useState("")

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      loadUser(userName)
    }
  }

  return (
    <div className={css.search}>
      <h2>Find a user: </h2>
      <p>Get into its best repositories</p>
      <div className={css.search_container}>
        <input type="text" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} />
        <button onClick={() => loadUser(userName)}><BsSearch /></button>
      </div>
    </div>
  )
}

export default Search