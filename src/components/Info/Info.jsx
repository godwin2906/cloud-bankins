import React from "react";
import { useStepper } from "../../context/StepperContext";
import model from "../../data/model";
import "../Info/info.css";
import { ChevronDown } from "lucide-react";
import info from "../../assets/info.svg"



function Info({ currentStep, onBack, onContinue, }) {
  const { fieldsData, updateField } = useStepper();
  const currentPage = model[currentStep - 1];
console.log(currentStep)
console.log(model.length)

  const handleChange = (fieldId, value) => {
    updateField(currentStep, fieldId, value);
  };

  return (
    <div className="info-container">
      <div className="info-content">
        <div className="fields-scrollable-box">
          <h2 className="mt-mb-40">{currentPage?.pageName || "Form"}</h2>
          <div className="field-box-flex mb-20">
            <div className="input-wrapper">
              <label>{currentPage?.fields[0]?.fieldName || "Field 1"} <img src={info} className="info-image"/></label>
              
              <input
                placeholder="Enter Property Name"
                type={currentPage?.fields[0]?.type || "text"}
                value={
                  fieldsData[currentStep]?.[currentPage?.fields[0]?.fieldId] ||
                  ""
                }
                onChange={(e) =>
                  handleChange(currentPage?.fields[0]?.fieldId, e.target.value)
                }
                className="input-text"
              />
            </div>

            <div className="input-wrapper">
              <label>{currentPage?.fields[1]?.fieldName || "Field 2"}</label>
              <div className="dropdown-container">
                <select
                  value={
                    fieldsData[currentStep]?.[
                      currentPage?.fields[1]?.fieldId
                    ] || ""
                  }
                  onChange={(e) =>
                    handleChange(
                      currentPage?.fields[1]?.fieldId,
                      e.target.value
                    )
                  }
                  className="input-dropdown"
                >
                  <option value="" disabled selected hidden className="color">
                    {currentPage?.fields[1]?.fieldName}
                  </option>
                  {currentPage?.fields[1]?.selectableValues?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="dropdown-icon" />
              </div>
            </div>

            <div className="input-wrapper">
              <label>
                {currentPage?.fields[2]?.fieldName || "Property Type"}
              </label>
              <div className="dropdown-container">
                <select
                  value={
                    fieldsData[currentStep]?.[
                      currentPage?.fields[2]?.fieldId
                    ] || ""
                  }
                  onChange={(e) =>
                    handleChange(
                      currentPage?.fields[2]?.fieldId,
                      e.target.value
                    )
                  }
                  className="input-dropdown"
                >
                  <option value="" disabled selected hidden>
                    {currentPage?.fields[2]?.fieldName}
                  </option>
                  {currentPage?.fields[2]?.selectableValues?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="dropdown-icon" />
              </div>
            </div>
          </div>

          <div className="input-wrapper mb-20">
            <label>{currentPage?.fields[3]?.fieldName || "Notes"}</label>
            <textarea
              value={
                fieldsData[currentStep]?.[currentPage?.fields[3]?.fieldId] || ""
              }
              onChange={(e) =>
                handleChange(currentPage?.fields[3]?.fieldId, e.target.value)
              }
              rows={5}
              className="input-text-area"
              placeholder="Enter Property Address"
            />
          </div>

          <div className="input-wrapper">
            <label>
              {currentPage?.fields[4]?.fieldName || "File Attachment"}
            </label>
            <label className="file-label">
              <span className="file-action">
                <span className="browse">Browse</span> or Drag & Drop to Attach a file
              </span>
              <input
                type={currentPage?.fields[4]?.type || "file"}
                className="file-input"
                onChange={(e) =>
                  handleChange(
                    currentPage?.fields[4]?.fieldId,
                    e.target.files[0]
                  )
                }
              />
            </label>
          </div>
        </div>

        <div className="action-buttons">
          {currentStep > 1 && (
            <button
              onClick={onBack}
              className="back-button"
            >
              Back
            </button>
          )}
          <button
            onClick={onContinue}
            className="continue-button"
          >
            {currentStep === model.length  ? "Submit" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
