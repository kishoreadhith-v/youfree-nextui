"use client";

import React, { useState, useEffect } from "react";
import { title } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  getOrganisationMembers,
  getUserOrganisations,
} from "@/app/fetch-functions/apifetch"; // Importing the functions

type Organisation = {
  id: string;
  name: string;
  members: string[];
};

const userid = "65cfa787ac08f4b997cbb389";

type Member = { key: string; label: string };

const items = [
  { key: "edit", label: "ImagineerX team" },
  { key: "nope", label: "csea tech vertical" },
  { key: "copy", label: "Abinav gaming club" },
  { key: "cut", label: "Turf" },
];

const memberList: Member[] = [
  { key: "Abinav", label: "Abinav" },
  { key: "Dhakksin", label: "Dhakksin" },
  { key: "Leo", label: "Leo" },
  { key: "Mohan", label: "Mohan" },
  { key: "Kishore", label: "Kishore" },
];

export default function DocsPage() {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    new Set([])
  );
  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const selectedValue = Array.from(selectedKeys)
    .join(", ")
    .replaceAll("_", " ");

  const handleSelectionChange = (keys: Set<string>) => {
    setSelectedKeys(keys);
  };

  useEffect(() => {
    console.log("Fetching user organisations...");
    // Fetch user organisations when component mounts
    getUserOrganisations(userid)
      .then((orgs) => {
        setOrganisations(orgs);
        setLoading(false);
        console.log("User organisations from page:", orgs);
      })
      .catch((error) => {
        console.error("Error fetching user organisations:", error);
        setLoading(false);
      });
  }, []); // Update effect when userid changes

  return (
    <div>
      <Card>
        <CardHeader>
          <h1 className={title()}>Meetings</h1>
        </CardHeader>
        <CardBody>
          <div>
            <div>
              <p>Meeting Name</p>
              <Input placeholder="Enter Meeting Name" />
            </div>
            <div>
              <p>Meeting Description</p>
              <Input placeholder="Enter Meeting Description" />
            </div>
            <div>
              <p>Meeting link</p>
              <Input placeholder="Enter vc url" />
            </div>
            <div>
              <p>Meeting Team</p>
              <div className="">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">Select Team</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions">
                    {items.map((item) => (
                      <DropdownItem
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className={item.key === "delete" ? "text-danger" : ""}
                      >
                        {item.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div>
              <p>Meeting Members</p>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="capitalize">
                    {selectedValue} Select Members
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Multiple selection example"
                  variant="flat"
                  closeOnSelect={false}
                  disallowEmptySelection
                  selectionMode="multiple"
                  selectedKeys={selectedKeys}
                  onSelectionChange={handleSelectionChange}
                >
                  {/* Assuming memberList comes from somewhere */}
                  {memberList.map((member) => (
                    <DropdownItem
                      key={member.key}
                      className={member.key === "delete" ? "text-danger" : ""}
                    >
                      {member.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <p>User Organisations:</p>
              <ul>
                {organisations.map((org) => (
                  <li key={org.id}>{org.name}</li>
                ))}
              </ul>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
