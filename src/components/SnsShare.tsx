import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

const iconsize = 32;
const round = true;

const SnsShare = () => {
  return (
    <>
      <div className="gap-5 flex m-auto justify-center mb-5">
        <div>
          <FacebookShareButton url={"https://www.suzukazine.com/"}>
            <FacebookIcon size={iconsize} round={round} />
          </FacebookShareButton>
        </div>
        <div>
          <TwitterShareButton url={"https://www.suzukazine.com/"}>
            <TwitterIcon size={iconsize} round={round} />
          </TwitterShareButton>
        </div>
      </div>
    </>
  );
};

export default SnsShare;
