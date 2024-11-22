const model = [
  {
    pageName: "BorrowerInfo",
    fields: [
      { fieldId: "1", fieldName: "Property Name", type: "string" },
      {
        fieldId: "2",
        fieldName: "Property Type",
        type: "dropdown",
        selectableValues: ["Own House", "Rented"],
      },
      {
        fieldId: "3",
        fieldName: "Number of Units",
        type: "dropdown",
        selectableValues: ["1", "2"],
      },
      { fieldId: "4", fieldName: "Property Address", type: "textarea" },
      { fieldId: "5", fieldName: "File Attachment", type: "file" },
    ],
  },
  {
    pageName: "DirectorInfo",
    fields: [
      { fieldId: "1", fieldName: "Director Name", type: "string" },
      {
        fieldId: "2",
        fieldName: "Position",
        type: "dropdown",
        selectableValues: ["CEO", "CFO", "CTO"],
      },
      { fieldId: "3", fieldName: "Email", type: "string" },
      { fieldId: "4", fieldName: "Property Address", type: "textarea" },
      { fieldId: "5", fieldName: "File Attachment", type: "file" },
    ],
  },
  {
    pageName: "Financial Info",
    fields: [
      { fieldId: "1", fieldName: "Director Name", type: "string" },
      {
        fieldId: "2",
        fieldName: "Position",
        type: "dropdown",
        selectableValues: ["CEO", "CFO", "CTO"],
      },
      { fieldId: "3", fieldName: "Email", type: "string" },
      { fieldId: "4", fieldName: "Property Address", type: "textarea" },
      { fieldId: "5", fieldName: "File Attachment", type: "file" },
    ],
  },
  {
    pageName: "Past Performance Details",
    fields: [
      { fieldId: "1", fieldName: "Director Name", type: "string" },
      {
        fieldId: "2",
        fieldName: "Position",
        type: "dropdown",
        selectableValues: ["CEO", "CFO", "CTO"],
      },
      { fieldId: "3", fieldName: "Email", type: "string" },
      { fieldId: "4", fieldName: "Property Address", type: "textarea" },
      { fieldId: "5", fieldName: "File Attachment", type: "file" },
    ],
  },
  {
    pageName: "Document Upload",
    fields: [
      { fieldId: "1", fieldName: "Director Name", type: "string" },
      {
        fieldId: "2",
        fieldName: "Position",
        type: "dropdown",
        selectableValues: ["CEO", "CFO", "CTO"],
      },
      { fieldId: "3", fieldName: "Email", type: "string" },
      { fieldId: "4", fieldName: "Property Address", type: "textarea" },
      { fieldId: "5", fieldName: "File Attachment", type: "file" },
    ],
  },
];


export default model