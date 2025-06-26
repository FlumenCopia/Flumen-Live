import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/blog-details/side-one.png";
import two from "@/public/images/blog-details/side-two.png";
import three from "@/public/images/blog-details/side-three.png";

const BlogDetailsSidebar = () => {
  return (
    <div className="b-details__sidebar sticky-item">
      <div className="b-details-sidebar-single b-search-bar">
        <form action="#" method="post">
          <div className="search-group">
            <input
              type="text"
              name="post-search"
              id="PostSearch"
              placeholder="Search.."
              required
            />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="b-details-sidebar-single b-category slide-top">
        <h3 className="title-animation fw-6 text-white mt-12">Post Category</h3>
        <ul>
          <li>
            <a href="blog">
              <span className="material-symbols-outlined">chevron_right</span>
              AI
            </a>
          </li>
          <li>
            <a href="blog">
              <span className="material-symbols-outlined">chevron_right</span>
              News
            </a>
          </li>
          <li>
            <a href="blog">
              <span className="material-symbols-outlined">chevron_right</span>
              Robo
            </a>
          </li>
          <li>
            <a href="blog">
              <span className="material-symbols-outlined">chevron_right</span>
              Gaming
            </a>
          </li>
        </ul>
      </div>
      <div className="b-details-sidebar-single b-latest-post slide-top">
        <h3 className="title-animation fw-6 text-white mt-12">Latest Post</h3>
        <div className="latest-post-wrapper">
          <div className="latest-post-single">
            <div className="thumb">
              <a href="blog-single">
                <Image src={one} alt="Image" priority />
              </a>
            </div>
            <div className="content">
              <p>
                <a href="blog-single">
                  How Artificial Intelligence is Shaping Our World
                </a>
              </p>
              <p className="tertiary-text">
                <span className="material-symbols-outlined">schedule</span>21
                JUN, 2022
              </p>
            </div>
          </div>
          <div className="latest-post-single">
            <div className="thumb">
              <a href="blog-single">
                <Image src={two} alt="Image" priority />
              </a>
            </div>
            <div className="content">
              <p>
                <a href="blog-single">
                  Navigating the Challenges of Artificial Intelligence
                </a>
              </p>
              <p className="tertiary-text">
                <span className="material-symbols-outlined">schedule</span>21
                JUN, 2022
              </p>
            </div>
          </div>
          <div className="latest-post-single">
            <div className="thumb">
              <a href="blog-single">
                <Image src={three} alt="Image" priority />
              </a>
            </div>
            <div className="content">
              <p>
                <a href="blog-single">
                  Balancing Innovation and Security
                </a>
              </p>
              <p className="tertiary-text">
                <span className="material-symbols-outlined">schedule</span>21
                JUN, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="b-details-sidebar-single b-tags">
        <h3 className="title-animation fw-6 text-white mt-12">Popular Tag</h3>
        <div className="b-tags-wrapper">
          <a href="blog">Health</a>
          <a href="blog">Fitness</a>
          <a href="blog">Surgery</a>
          <a href="blog">Covide19</a>
          <a href="blog">Medical</a>
          <a href="blog">Manipulation</a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSidebar;
