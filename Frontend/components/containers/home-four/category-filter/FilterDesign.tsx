"use client";
import { useState, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoryProductsData } from "@/public/data/category-product";
import { AnimatePresence, motion } from "framer-motion";

const FilterDesign = () => {
  const [active, setActive] = useState("all");
  const [displayData, setDisplayData] = useState(categoryProductsData);

  const handleCategoryClick = (category: SetStateAction<string>) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "all") {
      setDisplayData(categoryProductsData);
      return;
    }

    const filteredData = categoryProductsData.filter(
      (item) => item.category === category
    );

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 600);
  };

  return (
    <section className="section pb-30 category">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header text-center">
              <h2 className="title-animation fw-7 text-black">
                All the Category
              </h2>
            </div>
          </div>
        </div>
        
        <motion.div className="row category-masonry" layout>
          <AnimatePresence>
            {displayData.slice(0, 8).map((item) => {
              return (
                <motion.div
                  className="col-12  col-md-6 col-lg-4 col-xxl-3 category-item"
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="category__single">
                    <div className="thumb">
                      <a href="product-single" className="thumb-img">
                        <Image src={item.productImage} alt="Image" priority />
                      </a>
                      <a href="learn-digital" className="tag ">
                        
                        {item.category}
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="product-single">{item.title}</a>
                      </h5>
                    </div>
                    <hr />
                    <div className="meta">
                      <div className="meta-info">
                        <p className="tertiary-text">{item.authorName}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FilterDesign;
