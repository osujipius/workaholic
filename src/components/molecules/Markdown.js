import { lazy } from "react";

const ReactMarkdown = lazy(() => import("react-markdown"));

export default function Markdown({ children }) {
  return (
    <ReactMarkdown
      className="space-y-3"
      components={{
        ul: (props) => <ul className="list-disc list-inside" {...props} />,
        a: (props) => (
          <a className="text-green-500 underline" target="_blank" {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
