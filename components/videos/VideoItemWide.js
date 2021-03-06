import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { formatDateAgo, formatVideoDuration, truncateString } from "../../global/helpers";

const VideoItemWide = ({ video, idField, subscription }) => {
  return (
    <div className="flex mb-2 flex-wrap md:flex-nowrap">
      <Link href={`/videos/${video[idField]}`}>
        <a className="flex mb-2 relative">
          <Image
            placeholder="blur"
            blurDataURL={video.thumbnail}
            width={280}
            height={150}
            layout="fixed"
            src={video.thumbnail}
            className="mb-1 hover:opacity-75 transition-opacity"
            alt="thumbnail"
          />

          <div className="absolute bottom-2 right-1 p-1 text-xs font-semibold bg-lightBlack text-gray-200 rounded-sm">
            {formatVideoDuration(video.duration)}
          </div>
        </a>
      </Link>
      <div className="ml-2">
        <div className="w-48 2xl:w-64">
          <Link href={`/videos/${video[idField]}`}>
            <a className="flex mb-0 text-black  dark:text-white break-words font-semibold w-full">
              {video.title}
            </a>
          </Link>
        </div>
        <div className="text-sm">
          <Link href={`/channels/${subscription ? subscription.user.channelName : video.user.channelName}`}>
            <a className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:gray-200">
              {subscription ? subscription.user.channelName : video.user.channelName}
              <i className="fa fa-check-circle transition text-blue-500 ml-2 mr-1"></i>
              &middot; {video.viewsCount} views &middot; {formatDateAgo(video.createdAt)}
            </a>
          </Link>
        </div>
        <div className="text-sm dark:text-gray-400 mt-3">{truncateString(video.description)}</div>
      </div>
    </div>
  );
};

VideoItemWide.propTypes = {
  video: PropTypes.object.isRequired,
  idField: PropTypes.oneOf(["id", "_id"]),
  subscription: PropTypes.object,
};

export default VideoItemWide;
