import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import FormGrp from "./components/FormGrp";
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "multi-step-form-data";

function App() {
  const [form, setForm] = useState(() => {
    const savedForm = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedForm
      ? JSON.parse(savedForm)
      : { name: "", email: "", message: "" };
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev: { name: string; email: string; message: string }) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleComplete = () => {
    console.log("Form completed!", form);
    setForm({ name: "", email: "", message: "" });
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const tabChanged = ({
    prevIndex,
    nextIndex,
  }: {
    prevIndex: number;
    nextIndex: number;
  }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };

  return (
    <>
      <FormWizard
        shape='circle'
        color='#e74c3c'
        onComplete={handleComplete}
        onTabChange={tabChanged}>
        <FormWizard.TabContent title='Personal details' icon='ti-user'>
          <FormGrp
            label='Full Name'
            name='name'
            type='text'
            value={form.name}
            placeholder='Full Name'
            inputType={true}
            changeHandler={changeHandler}
          />
        </FormWizard.TabContent>
        <FormWizard.TabContent title='Additional Info' icon='ti-settings'>
          <FormGrp
            label='Email'
            name='email'
            type='email'
            value={form.email}
            placeholder='Email'
            inputType={true}
            changeHandler={changeHandler}
          />
        </FormWizard.TabContent>
        <FormWizard.TabContent title='Last step' icon='ti-check'>
          <FormGrp
            label='Message'
            name='message'
            value={form.message}
            placeholder='Message'
            inputType={false}
            changeHandler={changeHandler}
          />
        </FormWizard.TabContent>
      </FormWizard>

      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}

export default App;
