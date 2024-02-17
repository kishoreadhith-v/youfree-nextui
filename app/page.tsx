import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import DashboardOrgNames from "../components/DahsboardOrgNames";
import DashboardMeetingCard from "@/components/DashboardMeetingCard";

// The Home component will be the user's dashboard
type Meeting =  {
    _id: string;
    meetingName: string;
    MeetingDescription: string;
    MeetingStartTime: string;
    MeetingEndTime: string;
    MeetingTimeZone: string;
    MeetingLink: string;
    MeetingMembers: string[]; // Assuming MeetingMembers is an array of strings
    MeetingTimeResponses: any[]; // You can define a more specific type for MeetingTimeResponses if needed
    MeetingCreator: string;
    MeetingStatus: string;
    OraganisationName: string; // Typo in the original data, it should be "OrganizationName"
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  type Organization ={
	_id: string;
	organisationName: string;
	organisationDescription: string;
	Members: string[]; // Assuming Members is an array of strings representing member IDs
	__v: number;
  }
  

export default function Home() {
	//fetch the user's meetings
	const user='';
	//fetch the user's meetings
	const meetings :Meeting [] = [];
	//fetch the user's teams
	const teams : Organization [] = [];

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({color:"yellow"})}>youFree&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					Schedule meetings and events with ease
				</h2>
			</div>

			<div className="flex gap-3">
			<h1 className={title({color:"foreground"})}>Dashboard</h1>
			<h1 className={subtitle()}>{user}</h1>
			
			{
				(meetings).map((meeting) => {
					return <DashboardMeetingCard key={meeting._id} {...meeting} />
				}
			)}
						{
				(teams).map((meeting) => {
					return <DashboardOrgNames key={meeting._id} {...meeting} />
				}
			)}


			

			</div>
		</section>
	);
}
