"use client";
import React from "react";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import Data from "./data";

export default function TracingBeamWithData() {
  return (
    <TracingBeam className="px-6">
      <Data />
    </TracingBeam>
  );
}
