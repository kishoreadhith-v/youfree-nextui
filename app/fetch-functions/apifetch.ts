import { data } from "autoprefixer";
import axios from "axios";

interface Meeting {
  // Define the structure of your meeting object here
  // For example:
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
}

export async function getMeeting(meetingName: string): Promise<Meeting[]> {
  try {
    const response = await axios.get(
      `https://youfreebackend.onrender.com/meeting/getMeeting/${meetingName}`
    );
    return response.data as Meeting[];
  } catch (error) {
    console.error("Error fetching meeting:", error);
    throw error;
  }
}

// Example usage:
// const meetingName = "test";
// getMeeting(meetingName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

interface Organisation {
  // Define the structure of your organisation object here
  // For example:
  id: string;
  name: string;
  members: string[]; // Assuming members are identified by their IDs
}

export async function getOrganisationMembers(
  organisationName: string
): Promise<string[]> {
  try {
    const response = await axios.get(
      `https://youfreebackend.onrender.com/organisation/getOrganisationMembers/${organisationName}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching organisation members:", error);
    throw error;
  }
}

export async function getUserOrganisations(
  userId: string
): Promise<Organisation[]> {
  try {
    const response = await axios.get(
      `https://youfreebackend.onrender.com/organisation/getUserOrganisations/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user organisations:", error);
    throw error;
  }
}

const organisationName = "HackathonTeam";
getOrganisationMembers(organisationName)
  .then((members) => {
    console.log("Organisation members:", members);
  })
  .catch((error) => {
    console.error("Error fetching organisation members:", error);
  });

const userId = "65cfa787ac08f4b997cbb389";
getUserOrganisations(userId)
  .then((organisations) => {
    console.log("User organisations:", organisations);
  })
  .catch((error) => {
    console.error("Error fetching user organisations:", error);
  });
