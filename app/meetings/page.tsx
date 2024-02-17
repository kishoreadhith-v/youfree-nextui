'use client'
import React, { SetStateAction, Dispatch } from 'react';
import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter, Input} from "@nextui-org/react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Button} from "@nextui-org/react";

export default function DocsPage() {
	// put the teams in this list
	const items = [
		{ key: "edit", label: "Edit" },
		{ key: "delete", label: "Delete" },
		{ key: "copy", label: "Copy" },
		{ key: "cut", label: "Cut" },
	];
	const memberList = [
		{ key: "text", label: "Text" },
		{ key: "number", label: "Number" },
		{ key: "date", label: "Date" },
		{ key: "single_date", label: "Single Date" },
		{ key: "iteration", label: "Iteration" },
	];

	const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

	const selectedValue = React.useMemo(
	  () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
	  [selectedKeys]
	);
	type Selection = Set<string>;

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
																<Button 
																variant="bordered" 
																>
																Open Menu
																</Button>
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
								<Button 
								variant="bordered" 
								className="capitalize"
								>
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
								{/* <DropdownItem key="text">Text</DropdownItem>
								<DropdownItem key="number">Number</DropdownItem>
								<DropdownItem key="date">Date</DropdownItem>
								<DropdownItem key="single_date">Single Date</DropdownItem>
								<DropdownItem key="iteration">Iteration</DropdownItem> */}
																					{(memberList: { key: string, label: string }) => (
																						<DropdownItem
																							key={memberList.key}

																							className={memberList.key === "delete" ? "text-danger" : ""}
																						>
																							{memberList.label}
																						</DropdownItem>
																					)}
							</DropdownMenu>
							</Dropdown>

						</div>
					</div>
				</CardBody>
				<CardFooter>
					{/* <p>Make your day free and easy</p> */}
				</CardFooter>
			</Card>
		</div>
	);
}
