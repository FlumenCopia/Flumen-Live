import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/blog/blogpage-poster.jpg";

const BlogPoster = () => {
  return (
    <section className="mt-5 pt-5 pb-0 h-s-poster fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="news-alter__single fade-top">
              <div className="thumb text-overlay-img ">
                <a href="blog-single">
                  <Image src={poster} alt="Image" priority />
                </a>
                {/* <a href="blog-single" className="tags">
                  AI
                </a> */}
              </div>
              <div className="content ">
                <h2>
                  <span className="title-animation text-white">
                  Our blog is your go-to resource for the latest trends and expert advice in digital marketing.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPoster;
