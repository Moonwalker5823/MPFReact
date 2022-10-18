import { useContext  } from "react";
import FormContext from "../context/formContext";

const useFormContext = () => {
  return useContext(FormContext)
}

export default useFormContext
