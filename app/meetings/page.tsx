'use client';

const userid = "65cfae0087c4097b7997817b";

import React, { useState } from "react";
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

type Member = { key: string; label: string };

const items = [
  { key: "edit", label: "Edit" },
  { key: "delete", label: "Delete" },
  { key: "copy", label: "Copy" },
  { key: "cut", label: "Cut" },
];

const memberList: Member[] = [
  { key: "text", label: "Text" },
  { key: "number", label: "Number" },
  { key: "date", label: "Date" },
  { key: "single_date", label: "Single Date" },
  { key: "iteration", label: "Iteration" },
];

export default function DocsPage() {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    new Set(["text"])
  );

  const selectedValue = Array.from(selectedKeys)
    .join(", ")
    .replaceAll("_", " ");

  const handleSelectionChange = (keys: Set<string>) => {
    setSelectedKeys(keys);
  };

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
              <p>Meeting Team</p>
              <div className="">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">Open Menu</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Dynamic Actions" items={items}>
                    {(item) => (
                      <DropdownItem
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className={item.key === "delete" ? "text-danger" : ""}
                      >
                        {item.label}
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div>
              <p>Meeting Members</p>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="capitalize">
                    {selectedValue}
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
        <CardFooter>{/* <p>Make your day free and easy</p> */}</CardFooter>
      </Card>
    </div>
  );
}
