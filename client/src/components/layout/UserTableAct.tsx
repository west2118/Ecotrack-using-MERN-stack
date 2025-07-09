"use client";

import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/constants/formatDate";
import { formatTimeWithIntl } from "@/constants/formatTimeWithIntl";
import { Button } from "../ui/button";
import { getUnit } from "@/constants/getUnit";
import { useRouter } from "next/navigation";

type Activity = {
  _id: string;
  userUid: string;
  category: string;
  activity: string;
  details: string;
  CO2: number;
  note: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type UserTableActProps = {
  act: Activity;
};

const UserTableAct = ({ act }: UserTableActProps) => {
  const router = useRouter();

  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{formatDate(act.createdAt)}</div>
        <div className="text-sm text-gray-600">
          {formatTimeWithIntl(act.createdAt)}
        </div>
      </TableCell>
      <TableCell>
        <Badge
          variant={
            act.category.toLowerCase() === "transport"
              ? "default"
              : act.category.toLowerCase() === "foods"
              ? "secondary"
              : act.category.toLowerCase() === "energy use"
              ? "outline"
              : "default"
          }>
          {act.category}
        </Badge>
      </TableCell>
      <TableCell className="font-medium">{act.activity}</TableCell>
      <TableCell>
        {act.details} {getUnit(act.category)}
      </TableCell>
      <TableCell className="font-bold">{act.CO2}</TableCell>
      <TableCell className="text-sm text-gray-600">{act.note}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <Button
            onClick={() => router.push(`/activity/edit/${act._id}`)}
            variant="ghost"
            size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </Button>
          <Button variant="ghost" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default UserTableAct;
