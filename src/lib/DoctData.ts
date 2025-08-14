interface Doctor {
  name: string;
  year_of_experience: number;
  specialization: string;
  how_far_they_are: number;
  degree: string;
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Emily White",
    year_of_experience: 10,
    specialization: "Pediatrics",
    how_far_they_are: 2.5,
    degree: "MD",
  },
  {
    name: "Dr. John Doe",
    year_of_experience: 15,
    specialization: "Cardiology",
    how_far_they_are: 5.1,
    degree: "MBBS",
  },
  {
    name: "Dr. Sarah Lee",
    year_of_experience: 7,
    specialization: "Dermatology",
    how_far_they_are: 1.2,
    degree: "DO",
  },
  {
    name: "Dr. Michael Brown",
    year_of_experience: 22,
    specialization: "Neurology",
    how_far_they_are: 8.9,
    degree: "MD",
  },
];