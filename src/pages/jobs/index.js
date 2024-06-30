import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/atoms/Loader";
import JobListItem from "../../components/molecules/JobListItem";
import supabase from "../../config/supabaseClient";

export default function Jobs() {
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data, error } = await supabase.from("jobs").select("*");
      if (error) {
        setError("Error");
        setJobs(null);
      }
      if (data) {
        setJobs(data);
        setError(null);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(error);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <div className="min-h-screen px-5 mt-28 md:px-20 space-y-7 grow">
          <h1 className="-mb-5 font-mono text-3xl font-semibold tracking-tightx">
            Choose from a vast pool of jobs.
          </h1>
          <p className="text-lg text-slate-700">Find your dream job</p>
          {jobs &&
            jobs?.map((job, index) => (
              <Link key={job.id} to={`/jobs/${job.slug}`} className="block">
                <JobListItem job={job} />
              </Link>
            ))}
        </div>
      )}
    </>
  );
}
