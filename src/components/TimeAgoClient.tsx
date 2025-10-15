"use client";
import TimeAgo from "react-timeago";

export default function TimeAgoClient({ date }: { date: number }) {
  return <TimeAgo date={date * 1000} />;
}
