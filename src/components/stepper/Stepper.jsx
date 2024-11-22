import React from "react";
import "../stepper/stepper.css";
import useMedia from "use-media";

function Stepper({ currentStep, setCurrentStep }) {
  const isMobile = useMedia({ maxWidth: "520px" });
  const steps = [
    { number: 1, label: isMobile ? "Borrower Info" : "Borrower Company Info" },
    { number: 2, label: "Director Info" },
    { number: 3, label: "Financial Info" },
    { number: 4, label: isMobile ? "Past Performance" : "Past Performance Details" },
    { number: 5, label: "Document Upload" },
  ];

  return (
    <div className="stepper">
      <div className="step-number-dots-wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="step-number-dots-container">
              <button
                className={`step-number ${
                  step.number === currentStep ? "active" : ""
                } ${step.number < currentStep ? "completed" : ""}`}
                onClick={() => setCurrentStep(step.number)}
              >
                {step.number}
              </button>
              {index < steps.length - 1 && (
                <div className="step-dots">
                  {}
                  {(isMobile ? [...Array(6)] : [...Array(9)]).map(
                    (_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`dot ${
                          step.number < currentStep ||
                          (step.number === currentStep && dotIndex <= 1)
                            ? "completed"
                            : ""
                        }`}
                      ></span>
                    )
                  )}
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="step-labels-wrapper">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`step-label-container label_${step.number}`}
          >
            <h6
              className={`step-label ${
                step.number <= currentStep ? "highlight" : ""
              } `}
            >
              {step.label}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stepper;
