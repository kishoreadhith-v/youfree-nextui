import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Input} from "@nextui-org/react";

interface Organization {
    _id: string;
    organisationName: string;
    organisationDescription: string;
    Members: string[]; // Assuming Members is an array of strings representing member IDs
    __v: number;
  }

  
const DahsboardOrgNames = (organization:Organization) => {
    const {organisationName, organisationDescription, Members, __v} = organization;
  return (
    <Card>
        <CardHeader>
            <h2>{organisationName}</h2>
        </CardHeader>
        <CardBody>
            <p>{organisationDescription} </p>
            <p>{Members} </p>
        </CardBody> 
    </Card>
  )
}

export default DahsboardOrgNames