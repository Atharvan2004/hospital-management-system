import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "@material-tailwind/react";
import { changeData } from "@/store/slices/searchResult";
import baseURL from "port";

export default function InputWithButton() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const onChange = ({ target }) => setName(target.value);
  async function handleSearch() {
    try {
      console.log(name)
      const result = await axios
        .post(`${baseURL}/search`, {body:{ query: name }})
        .catch((err) => {
          console.log(err);
        });
      console.log(result.data); // Check the response data
      dispatch(changeData(result.data)); // Dispatch the data to Redux store
    } catch (error) {
      console.error("Error occurred while searching:", error);
      // Handle error (e.g., show error message to the user)
    }
  }

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="name"
        label="Name"
        value={name}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={name ? "gray" : "blue-gray"}
        disabled={!name}
        className="!absolute right-1 top-1 rounded"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}
