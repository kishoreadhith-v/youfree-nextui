import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Input} from "@nextui-org/react";

interface Meeting {
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

  
const DashboardMeetingCard = (meeting:Meeting) => {
    const {meetingName, MeetingDescription, MeetingStartTime, MeetingEndTime, MeetingTimeZone, MeetingLink, MeetingMembers, MeetingTimeResponses, MeetingCreator, MeetingStatus, OraganisationName, createdAt, updatedAt, __v} = meeting;  
  return (
    <Card>
        <CardHeader>
            <h2>{meetingName}</h2>
        </CardHeader>
        <CardBody>
            <p>Description: {MeetingDescription}</p>
            <p>Start: {MeetingStartTime}</p>
            <p>End: {MeetingEndTime}</p>
            <p>TimeZone:{MeetingTimeZone}</p>
            <p>Link: <a href={MeetingLink}>{MeetingLink}</a></p>
            <p>Members: {MeetingMembers}</p>
            <p>Response: {MeetingTimeResponses}</p>
            <p>Host: {MeetingCreator}</p>
            <p>Status: {MeetingStatus}</p>
            <p>Org Name:{OraganisationName}</p>
        </CardBody>
    </Card>
  )
}

export default DashboardMeetingCard