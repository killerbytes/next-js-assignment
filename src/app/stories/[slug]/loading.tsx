import Loader from "@/components/Loader";
import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <div className="card">
      <div className="card-header py-4">
        <Skeleton height={24} width={`10%`} />
      </div>

      <div>
        <div className="img-responsive">
          <Skeleton height={400} width="100%" />
        </div>

        <h1>
          <Skeleton height={24} width={`100%`} />
          <Skeleton height={24} width={`20%`} />
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="flex item-center gap-1">
              <Skeleton height={24} width={`80%`} />
            </span>
            <span className="flex item-center gap-1">
              <Skeleton height={24} width={`80%`} />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Skeleton height={24} width={`80%`} />
          </div>
        </div>
      </div>
      <Loader />
    </div>
  );
}
