import { Banknote, Briefcase, Globe2, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/atoms/Loader";
import Markdown from "../../components/molecules/Markdown";
import supabase from "../../config/supabaseClient";
import { formatMoney } from "../../lib/utils";
import placeholder from "../../assets/Job.jpg";

export default function JobPage() {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select()
        .eq("slug", slug);
      if (error) {
        setError("Error");
        setJob(null);
      }
      if (data) {
        setJob(data);
        setError(null);
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  console.log(error);

  const applicationLink =
    job && job[0]?.applicationEmail
      ? `mailto:${job && job[0]?.applicationEmail}`
      : job && job[0]?.applicationUrl;

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <section className="w-full px-5 space-y-5 grow md:px-20">
          {job && (
            <div>
              <div className="flex justify-between">
                <div className="flex items-center gap-5">
                  <img
                    src={job[0]?.companyLogourl || placeholder}
                    alt="Company logo"
                    className="w-12 h-12 rounded-xl"
                  />
                  <div>
                    <div>
                      <h1 className="text-xl font-bold">{job[0]?.title}</h1>
                      <p className="font-semibold">
                        {job[0]?.applicationUrl ? (
                          <Link
                            to={new URL(job[0]?.applicationUrl).origin}
                            className="text-[#317773] hover:underline"
                          >
                            {job[0]?.companyName}
                          </Link>
                        ) : (
                          <span>{job[0]?.companyName}</span>
                        )}
                      </p>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="flex items-center gap-1.5">
                        <Briefcase size={16} className="shrink-0" />
                        {job[0]?.type}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <MapPin size={16} className="shrink-0" />
                        {job[0]?.locationType}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Globe2 size={16} className="shrink-0" />
                        {job[0]?.location || "Worldwide"}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Banknote size={16} className="shrink-0" />
                        {formatMoney(job[0]?.salary)}
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href={applicationLink}
                  rel="noreferrer"
                  target="_blank"
                  className="bg-[#317773] hidden md:block h-fit text-white text-base font-semibold px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-mono hover:text-white"
                >
                  Apply now
                </a>
              </div>
              <div className="mt-5">
                <Markdown>{job[0]?.description}</Markdown>
              </div>
              <a
                href={applicationLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#317773] block md:hidden h-fit w-fit mx-auto mt-5 text-white text-base md:text-lg font-semibold px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-mono hover:text-white"
              >
                Apply now
              </a>
            </div>
          )}
        </section>
      )}
    </>
  );
}
