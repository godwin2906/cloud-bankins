import React, { createContext, useContext, useState } from "react";

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1); 
  const [fieldsData, setFieldsData] = useState({}); 

  const updateField = (step, field, value) => {
    setFieldsData((prev) => ({
      ...prev,
      [step]: { ...prev[step], [field]: value },
    }));
  };

  return (
    <StepperContext.Provider
      value={{ currentStep, setCurrentStep, fieldsData, updateField }}
    >
      {children}
    </StepperContext.Provider>
  );
};


export const useStepper = () => useContext(StepperContext);
