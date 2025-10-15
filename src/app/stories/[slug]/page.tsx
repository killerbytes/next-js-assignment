import Card, { CardContent, CardFooter, CardHeader } from "@/components/Card";
import TimeAgoClient from "@/components/TimeAgoClient";
import { ROUTES } from "@/definitions";
import services from "@/services";
import { Story } from "@/types/story";
import { ChevronLeft, CircleUserRound, Clock } from "lucide-react";
import { ApiError } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function StoriesDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let story: Story = {} as Story;
  try {
    story = await services.item.get(slug);
  } catch (error) {
    const apiError = error as ApiError;
    switch (apiError.statusCode) {
      case 404:
        notFound();
      default:
        console.log(apiError.message);
    }
  }

  return (
    <Card>
      <CardHeader>
        <Link href={ROUTES.STORIES} className="flex items-center">
          <ChevronLeft /> Back
        </Link>
      </CardHeader>

      <CardContent>
        <div className="img-responsive">
          <Image
            src="https://dummyimage.com/800x800/000/fff"
            fill
            alt={story?.title}
          />
        </div>

        <h2>{story.title}</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="flex item-center gap-1">
              <CircleUserRound size={14} /> {story.by}
            </span>
            <span className="flex item-center gap-1">
              <Clock size={14} />
              <TimeAgoClient date={story.time} />
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-1">
          Karma: <span className="badge">{story.author?.karma}</span>
          Score: <span className="badge">{story.score}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
