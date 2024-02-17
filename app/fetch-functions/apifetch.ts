import axios from "axios";

interface Meeting {
  // Define the structure of your meeting object here
  // For example:
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
}

const getMeeting = async (meetingName: string): Promise<Meeting[]> => {
  try {
    const response = await axios.get(
      `https://youfreebackend.onrender.com/meeting/getMeeting/${meetingName}`
    );
    return response.data as Meeting[];
  } catch (error) {
    console.error("Error fetching meeting:", error);
    throw error;
  }
};

// Example usage:
const meetingName = "test";
getMeeting(meetingName)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
