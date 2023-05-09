import axios from "axios";
import { states } from "./states";

export const getClinics = async () => {
  const dentalClinicsUrl = process.env.DENTAL_CLINIC_URL!; // This variable should never be null
  const vetClinicsUrl = process.env.VET_CLINIC_URL!; // This variable should never be null

  const [dentalClinics, vetClinics] = await Promise.all([
    axios(dentalClinicsUrl),
    axios(vetClinicsUrl),
  ]);

  const parsedVet = parseNames(vetClinics.data);
  const parseDental = parseStatesNames(dentalClinics.data);

  return [...parseDental, ...parsedVet];
};

// Helper function to replace the key names of the objects
const parseNames = (array: any) => {
  return array.map((clinic: any) => {
    return {
      name: clinic["clinicName"],
      stateName: clinic["stateCode"],
      availability: clinic["opening"],
    };
  });
};
// Helper function to replace state full name for state Codes in dental clinics
const parseStatesNames = (clinics: any[]) => {
  return clinics.map(({ stateName, ...clinic }) => ({
    ...clinic,
    stateName: getStateCode(stateName),
  }));
};
// Get the state code based on states array file
const getStateCode = (stateName: string) => {
  const state = states.find(
    (s) => s.label.toLowerCase() === stateName.toLowerCase()
  );
  return state ? state.value : null;
};
