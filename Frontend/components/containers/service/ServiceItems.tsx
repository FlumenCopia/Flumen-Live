import Image from "next/image";
import Link from "next/link";
import { serviceItemsData } from "@/public/data/service";

const ServiceItems = () => {
  return (
    <div className="section pb-0 s-main fade-wrapper">
      <div className="container">
        <div className="row gaper">
          {serviceItemsData.map((item) => {
            return (
              <div className="col-6 col-md-6 col-xl-4" key={item.id}>
                <div className="s-main__single fade-top">
                  <div className="thumb">
                    <a href={item.page_link}>
                      <Image src={item.productImg} alt="Image" priority />
                    </a>
                  </div>
                  <div className="content">
                    <a
                      href={item.page_link} className="service-text px-2 btn btn--secondary">
                      {item.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
