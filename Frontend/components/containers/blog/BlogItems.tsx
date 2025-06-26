import Image from "next/image";
import Link from "next/link";
import { blogItemsData } from "@/public/data/blog-items";

const BlogItems = () => {
  return (
    <section className="news-alter m-news-alter my-5 fade-wrapper">
      <div className="container">
        <div className="row gaper">
          {blogItemsData.map((item) => {
            return (
              <div className="col-12 col-md-6 col-xl-4 fade-top" key={item.id}>
                <div className="news-alter__single topy-tilt">
                  <div className="thumb">
                    <a href="">
                      <Image src={item.image} alt="Image" priority />
                    </a>
                    <a href="" className="tags">
                      {item.tag}
                    </a>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <span className="author">{item.author}</span>
                      <span className="time">{item.date}</span>
                    </div>
                    <h4>
                      <a href="">{item.title}</a>
                    </h4>
                    <div className="cta">
                      <a href="">
                        Learn More
                        <span className="material-symbols-outlined">
                          trending_flat
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta">
              <ul className="pagination">
                <li>
                  <button>
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                </li>
                <li>
                  <a href="">1</a>
                </li>
                <li>
                  <a href="" className="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="">3</a>
                </li>
                <li>
                  <button>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogItems;
