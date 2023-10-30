import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FadeIn } from "../components/molecules/helperFunctions/FadeIn";
import BlogCard from "../components/atoms/blogCard/BlogCard";
import Loader from "../components/atoms/Loader";

function BlogPage() {
  const [data, setData] = useState(null);

  const fetchNews = async () => {
    const newsApiUrl = "https://newsapi.org/v2/everything";
    const apiKey = "a849dbc95c8747a58f36e4b3c8d7988c"; // Replace with your News API key
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 7); // Get news from the last 7 days
    const fromDateStr = fromDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    const params = {
      apiKey: apiKey,
      q: "tech", // Search for tech news
      from: fromDateStr,
      sortBy: "publishedAt",
      language: "en",
      pageSize: 25, // Adjust the number of articles as needed
    };

    const options = {
      method: "GET",
    };

    const queryString = new URLSearchParams(params).toString();
    const requestUrl = `${newsApiUrl}?${queryString}`;

    const response = await fetch(requestUrl, options);
    const responseData = await response.json();
    setData(responseData?.articles);

    console.log(data); // Replace this with your code to process and display the news data
  };

  useEffect(() => {
    fetchNews();
  }, [data === null]);

  return (
    <Container>
      <FadeIn>
        <div className="py-24 font-mono bg-white sm:py-32">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
                From the blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Stay updated with real-world happenings in the tech industry.
              </p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {data &&
                data
                  .filter((article) => article.title !== "[Removed]")
                  .map((article) => (
                    <BlogCard
                      key={article?.title}
                      title={article?.title}
                      imageUrl={article?.urlToImage}
                      description={article?.description}
                      date={new Date(article?.publishedAt).toLocaleDateString()}
                      source={article?.source}
                      author={article?.author}
                      href={article?.url}
                    />
                  ))}
            </div>
          </div>
          {!data && <Loader />}
        </div>
      </FadeIn>
    </Container>
  );
}

export default BlogPage;
