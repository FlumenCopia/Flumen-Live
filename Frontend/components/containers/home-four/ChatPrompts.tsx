import Image from "next/image";
import Link from "next/link";
import { chatPromptsData } from "@/public/data/chat-prompts";

const ChatPrompts = () => {
  return (
    <section className="section pb-0 chat-prompts fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-start">
              <h2 className="title title-animation mt-12">Chat GPT Prompts</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          {chatPromptsData.map((item) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 col-xxl-3 fade-top"
                key={item.id}
              >
                <div className="category__single topy-tilt">
                  <div className="thumb">
                    <a href="product-single" className="thumb-img">
                      <Image src={item.productImage} alt="Image" priority />
                    </a>
                    <a href="shop" className="tag">
                      <Image src={item.categoryLogo} alt="Image" priority />
                      {item.category}
                    </a>
                  </div>
                  <div className="content">
                    <h5>
                      <a href="product-single">{item.title}</a>
                    </h5>
                    <p className="tertiary-text">${item.price}</p>
                  </div>
                  <hr />
                  <div className="meta">
                    <div className="meta-info">
                      <div className="meta-thumb">
                        <Image src={item.author} alt="Image" priority />
                      </div>
                      <p className="tertiary-text">{item.authorName}</p>
                    </div>
                    <div className="meta-review">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="cta">
                    <a href="product-single" className="btn btn--quaternary">
                      Get Prompts
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChatPrompts;
