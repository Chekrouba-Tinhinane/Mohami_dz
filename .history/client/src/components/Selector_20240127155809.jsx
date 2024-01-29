import React from "react";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextareaAutosize,
} from "@mui/material";

const Selector = ({
  location,
  list,
  selectCategory,
  icon,
  selectedOption,
  setSelectedOption,
}) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl fullWidth className="bg-white rounded-md min-w-max">
      <InputLabel id="select-label">
        <div className="flex items-center gap-4 tracking-wider">
          <img src={icon} className="cursor-pointer" alt="icon" />
          <span className="text-gray-400 font-normal">{selectCategory}</span>
        </div>
      </InputLabel>  
            { location ?  <TextareaAutosize
        value={selectedOption}
        onChange={handleChange}
        minRows={4} // Adjust the number of rows as needed
        className="border border-gray-300 rounded-md p-2 w-full resize-none"
      /> : <Select
        labelId="select-label"
        id="select"
        value={selectedOption}
        onChange={handleChange}
        label="Select Option"
      >
        <MenuItem value={null}>None</MenuItem> {/* Option to unselect */}
        {list.map((option) => (
          <MenuItem
            className=" text-red"
            key={option.id}
            value={option.value || option.name}
          >
            {option.value || option.name }
          </MenuItem>
        ))}
      </Select> }

      

     
    </FormControl>
  );
};

export default Selector;
