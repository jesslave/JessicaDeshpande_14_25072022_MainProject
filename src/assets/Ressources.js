export const statesUSA = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AR", label: "Arkansas" },
  { value: "AS", label: "American Samoa" },
  { value: "AZ", label: "Arizona" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DC", label: "District of Columbia" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "GU", label: "Guam" },
  { value: "HI", label: "Hawaii" },
  { value: "IA", label: "Iowa" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "MA", label: "Massachusetts" },
  { value: "MD", label: "Maryland" },
  { value: "ME", label: "Maine" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MO", label: "Missouri" },
  { value: "MS", label: "Mississippi" },
  { value: "MT", label: "Montana" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "NE", label: "Nebraska" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NV", label: "Nevada" },
  { value: "NY", label: "New York" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "PR", label: "Puerto Rico" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VA", label: "Virginia" },
  { value: "VI", label: "Virgin Islands" },
  { value: "VT", label: "Vermont" },
  { value: "WA", label: "Washington" },
  { value: "WI", label: "Wisconsin" },
  { value: "WV", label: "West Virginia" },
  { value: "WY", label: "Wyoming" },
];

export const departments = [
  { value: "sales", label: "Sales" },
  { value: "engineering", label: "Engineering" },
  { value: "hr", label: "Human Resources" },
  { value: "legal", label: "Legal" },
];

export const columns = [
  {
    name: "First Name",
    selector: row => row.firstname,
    sortable: true,
    width: "7rem"
  },
  {
    name: "Last Name",
    selector: row => row.lastname,
    sortable: true,
    width: "7rem"
  },
  {
    name: "Start Date",
    selector: row => row.start,
    sortable: true,
  },
  {
    name: "Department",
    selector: row => row.department,
    sortable: true,
    width: "7rem"
  },
  {
    name: "Date of Birth",
    selector: row => row.birth,
    sortable: true,
    width: "7rem"
  },
  {
    name: "Street",
    selector: row => row.street,
    sortable: true,
    width: "15rem"
  },
  {
    name: "City",
    selector: row => row.city,
    sortable: true,
    width: "10rem"
  },
  {
    name: "State",
    selector: row => row.state,
    sortable: true,
    width: "5rem"
  },
  {
    name: "Zip Code",
    selector: row => row.zipcode,
    sortable: true,
    width: "6rem"
  }
];

export const customStylesForTable = {
  rows: {
      style: {
          minHeight: '72px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center'
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
      },
  },
};
