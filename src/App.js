import Form from "./components/Form";
import { FormProvider } from "./context/formContext"

function App() {
  return (
    <FormProvider>
      <Form/>
    </FormProvider>
  );
}

export default App;
