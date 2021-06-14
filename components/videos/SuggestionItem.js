import Link from "next/link";
import Image from "next/image";
import { formatDateAgo } from "../../global/helpers";
import PropTypes from "prop-types";

const SuggestionItem = ({ video }) => {
  return (
    <div className="flex mb-2" key={video.id}>
      <Link href={`/videos/${video.id}`}>
        <a className="flex mb-2">
          <Image width={180} height={90} src={video.thumbnail} className="mb-1 hover:opacity-75 transition-opacity" alt="thumbnail" />
        </a>
      </Link>
      <div className="ml-2">
        <Link href={`/videos/${video.id}`}>
          <a className="flex mb-2">
            <div className="mb-2 w-full text-black dark:text-gray-200 font-semibold">{video.title}</div>
          </a>
        </Link>
        <div className="text-sm">
          <Link href="#">
            <a className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:gray-200">
              {video.user.channelName}
              <i className="fa fa-check-circle transition text-blue-500"></i>
            </a>
          </Link>
        </div>
        <div className="text-sm dark:text-gray-400">
          {video.viewsCount} views &middot; {formatDateAgo(video.createdAt)}
        </div>
      </div>
    </div>
  );
};

SuggestionItem.prototype = {
  video: PropTypes.object.isRequired,
};

export default SuggestionItem;