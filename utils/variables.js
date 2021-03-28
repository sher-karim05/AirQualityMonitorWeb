const MAX_HISTORY_ITEMS = 50;

const AQI_STANDARDS = {
  good: {
    key: "good",
    label: "Good",
    bgColor: "green-700",
    color: "white",
  },
  satisfactory: {
    key: "satisfactory",
    label: "Satisfactory",
    bgColor: "green-500",
    color: "black",
  },
  moderate: {
    key: "moderate",
    label: "Moderate",
    bgColor: "yellow-400",
    color: "black",
  },
  poor: {
    key: "poor",
    label: "Poor",
    bgColor: "yellow-600",
    color: "white",
  },
  very_poor: {
    key: "very_poor",
    label: "Very Poor",
    bgColor: "red-600",
    color: "white",
  },
  severe: {
    key: "severe",
    label: "Severe",
    bgColor: "red-800",
    color: "white",
  },
};

export { MAX_HISTORY_ITEMS, AQI_STANDARDS };
