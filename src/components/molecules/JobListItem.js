import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import { relativeDate } from "../../lib/utils";
import placeholder from "../../assets/Job.jpg";

export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogourl,
    created_at,
  },
}) {
  return (
    <article className="flex flex-col gap-5 p-5 border rounded-lg cursor-pointer sm:flex-row hover:bg-muted/60">
      <img
        src={companyLogourl || placeholder}
        alt={`${companyName} logo`}
        className="self-center w-24 h-24 rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="font-mono text-base font-medium tracking-tight sm:text-lg">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {companyName}
          </p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden text-sm sm:text-base">
            <Briefcase size={16} className="shrink-0" />
            {type}
          </p>
          <p className="flex items-center gap-1.5 text-sm sm:text-base">
            <MapPin size={16} className="shrink-0" />
            {locationType}
          </p>
          <p className="flex items-center gap-1.5 text-sm sm:text-base">
            <Globe2 size={16} className="shrink-0" />
            {location || "Worldwide"}
          </p>
          <p className="items-center gap-1.5 flex text-sm sm:text-base">
            <Banknote size={16} className="shrink-0" />
            {salary}
          </p>
          <p className="flex items-center gap-1.5 sm:hidden text-sm sm:text-base">
            <Clock size={16} className="shrink-0" />
            {relativeDate(created_at)}
          </p>
        </div>
      </div>
      <div className="flex-col items-end justify-between hidden shrink-0 sm:flex">
        <span className="rounded border bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
          {type}
        </span>
        <span className="flex items-center gap-1.5 text-muted-foreground text-sm sm:text-base">
          <Clock size={16} />
          {relativeDate(created_at)}
        </span>
      </div>
    </article>
  );
}
