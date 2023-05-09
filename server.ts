import express, { Express, Request, Response } from 'express';
import { getClinics } from './utilities/helperFunctions';

import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/api/clinic", async (req: Request, res: Response) => {
  try {
    // Destructure the request by name, state, from and to params
    const { name, state, from, to } = req.query as {
      name: string;
      state: string;
      from: string;
      to: string;
    };

    // Get the clinics ready to be filtered
    const clinics = await getClinics();

    // Filter the clinics based on request params
    const filteredClinics = clinics.filter((clinic) => {
      switch (true) {
        // Filter by name
        case name && name !== clinic.name:
          return false;
        // Filter by state code
        case state && state !== clinic.stateName:
          return false;
        // Filter by from hour
        case from &&
          new Date(`1970-01-01T${from}:00`) >
            new Date(`1970-01-01T${clinic.availability.from}:00`):
          return false;
        // Filter by to hour
        case to &&
          new Date(`2023-05-05T${clinic.availability.to}:00`) >
            new Date(`2023-05-05T${to.toString()}:00`):
          return false;
        default:
          return true;
      }
    });
    //response as JSON
    res.json(filteredClinics);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});