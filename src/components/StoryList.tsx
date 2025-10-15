import { Story } from "@/types/story";
import Image from "next/image";
import Link from "next/link";
import TimeAgoClient from "./TimeAgoClient";
import { CircleUserRound, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StoryList({ items }: { items: Story[] }) {
  const router = useRouter();
  return (
    <div className="story-list">
      <ul>
        {items.map((story: Story) => (
          <li key={story.id}>
            <button
              onClick={() => router.push(`/stories/${story.id}`)}
              className="story-card"
            >
              <Image
                src="https://dummyimage.com/80x80/FFF/000"
                width={80}
                height={80}
                alt={story.title}
              />
              <div className="story-content">
                <Link href={story.url}>{story.title}</Link>

                <div className="story-meta">
                  <span className="flex item-center gap-1">
                    <CircleUserRound size={14} /> {story.by}
                  </span>
                  <span className="flex item-center gap-1">
                    <Clock size={14} />
                    <TimeAgoClient date={story.time} />
                  </span>
                </div>
                <div className="story-bottom">
                  <div className="story-meta ml-auto">
                    Karma: <span className="badge">{story.author.karma}</span>
                    Score: <span className="badge">{story.score}</span>
                  </div>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
