import React, { useState } from "react";
import Layout from "../src/components/Layouts/Layout";
import Stepper from "../src/components/stepper/Stepper";
import Info from "./components/Info/Info";
import model from "./data/model";

export default function App() {
  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleContinue = () => {
    if (currentStep < model.length) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form Submitted");
    }
  };
  const [currentStep, setCurrentStep] = useState(1);

  const layoutTop = (
    <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
  );

  const layoutBottom = (
    <Info
      currentStep={currentStep}
      onBack={handleBack}
      onContinue={handleContinue}
    />
  );

  return <Layout layoutTop={layoutTop} layoutBottom={layoutBottom} />;
}
