"use client";
import Loader from "@/components/Loader";
import StoryList from "@/components/StoryList";
import { Story } from "@/types/story";
import React, { useMemo } from "react";
import Skeleton from "react-loading-skeleton";

export default function Stories() {
  const [stories, setStories] = React.useState([]);
  const [sort, setSort] = React.useState("score");
  const [loading, setLoading] = React.useState(false);

  const sortedStory = useMemo(() => {
    return [...stories].sort((a: Story, b: Story) => {
      switch (sort) {
        case "karma":
          return a.author.karma - b.author.karma;
        default:
          return a.score - b.score;
      }
    });
  }, [stories, sort]);

  const getData = async () => {
    try {
      setLoading(true);
      await fetch("/api/story")
        .then((res) => res.json())
        .then(setStories);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card">
      <div className="flex items-center px-4">
        <h1>Top Stories</h1>
        <span className="ml-auto gap-1 flex items-center">
          Sort By:
          <select onChange={(e) => setSort(e.target.value)} value={sort}>
            <option value="score">Score</option>
            <option value="karma">Karma</option>
          </select>
        </span>
      </div>
      <StoryList items={sortedStory} />

      {loading && (
        <>
          <div className="story-list">
            <ul>
              {[...Array(10)].map((_, i) => (
                <li key={i} className="">
                  <div className="story-card">
                    <Skeleton height={80} width={80} />
                    <div className="story-content px-4">
                      <Skeleton height={24} width={`80%`} />
                      <Skeleton height={16} width={`30%`} />
                      <div className="story-bottom">
                        <div className="story-meta ml-auto">
                          <Skeleton height={24} width={200} />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Loader />
        </>
      )}
    </div>
  );
}
