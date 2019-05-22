import React, { useState } from "react";
import ListOfTags from "./ListOfTags";
import { newData } from "../../../data/Data";
import AddNewTag from "./AddNewTag";

const RightNavBar = () => {
  const [tags, setTags] = useState(newData.getTags());
  const addNewTags = nameTag => setTags(newData.addNewTags(nameTag));

  return (
    <React.Fragment>
      <ListOfTags tags={tags} />
      <AddNewTag addNewTags={addNewTags} />
    </React.Fragment>
  );
};

export default RightNavBar;
