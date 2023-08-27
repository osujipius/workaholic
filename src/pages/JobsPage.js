import React from "react";
import JobCard from "../components/molecules/JobCard";

export default function Jobs() {
  return (
    <div>
      <JobCard
        title={"Frontend Developer"}
        company={"Offscript"}
        location={"Remote"}
        easyApply
      />
    </div>
  );
}
