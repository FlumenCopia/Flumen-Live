"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const teamMembers = [
  {
    id: 1,
    publisherName: "Gopika L",
    initials: "GL",
    role: "Junior Web Developer",
    bio: "Building clean, scalable, and user-friendly web solutions.",
    accent: "coral",
    icon: "bi bi-stars",
  },
  {
    id: 2,
    publisherName: "Nithin",
    initials: "N",
    role: "Full Stack Developer",
    bio: "Focused on performance, backend systems, and smooth user experiences.",
    accent: "mint",
    icon: "bi bi-code-slash",
    featured: true,
  },
  {
    id: 3,
    publisherName: "Aiswarya",
    initials: "A",
    role: "Project Coordinator",
    bio: "Managing client communication, planning, and project delivery.",
    accent: "green",
    icon: "bi bi-lightning-charge-fill",
  },
  {
    id: 4,
    publisherName: "Arjun Dev",
    initials: "AD",
    role: "UI/UX Designer",
    bio: "Creating intuitive, engaging, and visually impactful designs.",
    accent: "blue",
    icon: "bi bi-brush-fill",
  },
  {
    id: 5,
    publisherName: "Meera S",
    initials: "MS",
    role: "Brand Strategist",
    bio: "Shaping brand stories, campaign direction, and growth-focused messaging.",
    accent: "mint",
    icon: "bi bi-bullseye",
  },
  {
    id: 6,
    publisherName: "Rahul K",
    initials: "RK",
    role: "Digital Marketer",
    bio: "Planning performance campaigns and optimizing channels for stronger reach.",
    accent: "green",
    icon: "bi bi-graph-up-arrow",
  },
];

const OurTeam = () => {
  return (
    <section className="section flumen-team">
      <div className="container">
        <div className="team-heading text-center">
          <div className="team-eyebrow">
            <span></span>
            <p>Our Team</p>
            <span></span>
          </div>
          <h2 className="title title-animation">
            Meet the People Behind <span>Our Work</span>
          </h2>
          <p className="team-heading__text">
            A passionate team of designers, developers, strategists, and problem-solvers working
            together to build meaningful digital experiences.
          </p>
        </div>

        <div className="team-showcase">
          <button className="team-arrow team-arrow--left" aria-label="Previous team member">
            <i className="bi bi-arrow-left"></i>
          </button>

          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            slidesPerGroup={1}
            speed={900}
            loop={true}
            roundLengths={true}
            grabCursor={true}
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{
              prevEl: ".team-arrow--left",
              nextEl: ".team-arrow--right",
            }}
            pagination={{
              el: ".team-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            className="team-cards"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <article
                  className={`team-profile team-profile--${member.accent} ${
                    member.featured ? "team-profile--featured" : ""
                  }`}
                >
                  <div className="team-profile__image">
                    <div className="team-profile__placeholder" aria-label={`${member.publisherName} placeholder image`}>
                      <i className="bi bi-person"></i>
                      <span>{member.initials}</span>
                    </div>
                  </div>

                  <div className="team-profile__badge">
                    <i className={member.icon}></i>
                  </div>

                  <div className="team-profile__content">
                    <h3>{member.publisherName}</h3>
                    <p className="team-profile__role">{member.role}</p>
                    <span className="team-profile__line"></span>
                    <p className="team-profile__bio">{member.bio}</p>

                    <div className="team-profile__socials">
                      <a href="#" aria-label={`${member.publisherName} LinkedIn`}>
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#" aria-label={`Email ${member.publisherName}`}>
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="team-arrow team-arrow--right" aria-label="Next team member">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div className="team-pagination"></div>

        <div className="team-connect">
          <div className="team-connect__avatars" aria-hidden="true">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div className={`team-connect__avatar team-connect__avatar--${index + 1}`} key={member.id}>
                <span>{member.initials}</span>
              </div>
            ))}
            <div className="team-connect__icon">
              <i className="bi bi-people"></i>
            </div>
          </div>

          <div className="team-connect__content text-center">
            <span>Let&apos;s Connect</span>
            <h3>Want to work with us?</h3>
            <p>Let&apos;s build something amazing together.</p>
            <Link href="/contact-us" className="btn btn--primary">
              Contact Our Team
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="team-connect__paper" aria-hidden="true">
            <i className="bi bi-send-fill"></i>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flumen-team {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 0%, rgba(169, 217, 185, 0.18), transparent 26%),
            radial-gradient(circle at 86% 18%, rgba(125, 162, 152, 0.18), transparent 18%),
            linear-gradient(180deg, #061513 0%, #0c211e 52%, #112d28 100%);
        }

        .flumen-team::before {
          content: "";
          position: absolute;
          top: -180px;
          left: -120px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(125, 162, 152, 0.16);
        }

        .flumen-team::after {
          content: "";
          position: absolute;
          right: -80px;
          top: 0;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(169, 217, 185, 0.14);
          border-radius: 50%;
          box-shadow: inset 0 0 80px rgba(169, 217, 185, 0.08);
        }

        .flumen-team :global(.container) {
          position: relative;
          z-index: 2;
        }

        .team-heading {
          max-width: 980px;
          margin: 0 auto 58px;
        }

        .team-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .team-eyebrow span {
          width: 58px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--brand-accent-light), transparent);
          position: relative;
        }

        .team-eyebrow span::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--brand-accent-light);
          transform: translate(-50%, -50%);
        }

        .team-eyebrow p {
          color: var(--brand-accent-light);
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.14em;
          margin: 0;
          text-transform: uppercase;
        }

        .team-heading h2 {
          color: var(--white);
          max-width: 100%;
          margin-bottom: 22px;
        }

        .team-heading h2 span {
          color: var(--brand-accent-light);
        }

        .team-heading__text {
          max-width: 720px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.74);
          font-size: 18px;
          line-height: 1.75;
        }

        .team-showcase {
          position: relative;
          padding-top: 34px;
        }

        .team-cards {
          width: 100%;
          overflow: visible;
        }

        .flumen-team :global(.team-cards .swiper-wrapper) {
          align-items: stretch;
        }

        .flumen-team :global(.team-cards .swiper-slide) {
          height: auto;
        }

        .team-profile {
          --card-accent: var(--brand-accent);
          position: relative;
          min-height: 430px;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          background:
            radial-gradient(circle at 70% 16%, color-mix(in srgb, var(--card-accent) 34%, transparent), transparent 35%),
            linear-gradient(160deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.03));
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.32);
          height: 100%;
        }

        .team-profile--featured {
          transform: translateY(-30px);
          border-color: rgba(169, 217, 185, 0.55);
          box-shadow: 0 30px 90px rgba(125, 162, 152, 0.22);
        }

        .team-profile--coral {
          --card-accent: #dba88e;
        }

        .team-profile--mint {
          --card-accent: var(--brand-accent-light);
        }

        .team-profile--green {
          --card-accent: #73c69a;
        }

        .team-profile--blue {
          --card-accent: #6faedc;
        }

        .team-profile__image {
          height: 285px;
          padding: 28px 28px 0;
        }

        .team-profile__placeholder {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
          border-radius: 18px 18px 0 0;
          color: rgba(255, 255, 255, 0.88);
          background:
            radial-gradient(circle at 50% 18%, color-mix(in srgb, var(--card-accent) 32%, transparent), transparent 30%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .team-profile__placeholder::before {
          content: "";
          position: absolute;
          inset: 22px 26px 0;
          border-radius: 999px 999px 18px 18px;
          background:
            radial-gradient(circle at 50% 28%, rgba(255, 255, 255, 0.3) 0 19%, transparent 20%),
            linear-gradient(180deg, color-mix(in srgb, var(--card-accent) 45%, #102922), rgba(8, 24, 21, 0.72));
          opacity: 0.84;
        }

        .team-profile__placeholder i {
          position: relative;
          z-index: 2;
          width: 86px;
          height: 86px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #09211d;
          background: color-mix(in srgb, var(--card-accent) 70%, #ffffff);
          font-size: 52px;
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.18);
        }

        .team-profile__placeholder span {
          position: relative;
          z-index: 2;
          color: rgba(255, 255, 255, 0.84);
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .team-profile__badge {
          position: absolute;
          top: 28px;
          right: 28px;
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--white);
          background: color-mix(in srgb, var(--card-accent) 65%, #16362f);
          box-shadow: 0 12px 28px color-mix(in srgb, var(--card-accent) 40%, transparent);
        }

        .team-profile__content {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 12px;
          padding: 24px;
          border-radius: 18px;
          background: rgba(5, 15, 19, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(16px);
        }

        .team-profile h3 {
          margin-bottom: 7px;
          color: var(--white);
          font-size: 25px;
          line-height: 1.1;
          font-weight: 800;
        }

        .team-profile__role {
          margin: 0;
          color: var(--card-accent);
          font-size: 15px;
          font-weight: 800;
        }

        .team-profile__line {
          display: block;
          width: 28px;
          height: 2px;
          margin: 12px 0 12px;
          background: var(--card-accent);
        }

        .team-profile__bio {
          min-height: 76px;
          margin-bottom: 18px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 15px;
          line-height: 1.65;
        }

        .team-profile__socials {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .team-profile__socials a {
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--white);
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition);
        }

        .team-profile__socials a:hover {
          color: #061513;
          background: var(--card-accent);
          transform: translateY(-2px);
        }

        .team-arrow {
          position: absolute;
          z-index: 4;
          top: 50%;
          width: 52px;
          height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--white);
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transform: translateY(-50%);
          transition: var(--transition);
        }

        .team-arrow:hover {
          background: var(--brand-accent);
        }

        .team-arrow--left {
          left: -66px;
        }

        .team-arrow--right {
          right: -66px;
        }

        .team-pagination {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .flumen-team :global(.team-pagination .swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          margin: 0 !important;
          opacity: 1;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.24);
          transition: var(--transition);
        }

        .flumen-team :global(.team-pagination .swiper-pagination-bullet-active) {
          width: 28px;
          background: var(--brand-accent-light);
        }

        .team-connect {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1.4fr 1fr;
          align-items: center;
          gap: 24px;
          margin-top: 52px;
          padding: 34px 58px;
          overflow: hidden;
          border-radius: 28px;
          background:
            radial-gradient(circle at 20% 26%, rgba(169, 217, 185, 0.24), transparent 24%),
            linear-gradient(135deg, #f7fbfa 0%, #eaf4f1 100%);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.18);
        }

        .team-connect::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 180px;
          height: 110px;
          background-image: radial-gradient(rgba(40, 73, 65, 0.24) 1px, transparent 1px);
          background-size: 14px 14px;
        }

        .team-connect__avatars {
          position: relative;
          min-height: 170px;
        }

        .team-connect__icon,
        .team-connect__avatar {
          position: absolute;
          border-radius: 50%;
          box-shadow: 0 16px 34px rgba(40, 73, 65, 0.18);
        }

        .team-connect__icon {
          left: 72px;
          top: 50px;
          width: 78px;
          height: 78px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 34px;
          background: var(--brand-button-gradient);
          border-radius: 22px;
        }

        .team-connect__avatar {
          width: 58px;
          height: 58px;
          overflow: hidden;
          border: 4px solid var(--white);
          background: #dfe9e6;
        }

        .team-connect__avatar span {
          width: 100%;
          height: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #09211d;
          background: linear-gradient(145deg, #ffffff 0%, var(--brand-accent-light) 100%);
          font-size: 14px;
          font-weight: 900;
        }

        .team-connect__avatar--1 {
          left: 148px;
          top: 14px;
        }

        .team-connect__avatar--2 {
          left: 176px;
          bottom: 22px;
        }

        .team-connect__avatar--3 {
          left: 58px;
          bottom: 8px;
        }

        .team-connect__content {
          position: relative;
          z-index: 2;
        }

        .team-connect__content span {
          display: inline-flex;
          margin-bottom: 12px;
          padding: 8px 18px;
          border-radius: 999px;
          color: var(--primary-color);
          background: rgba(125, 162, 152, 0.14);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .team-connect__content h3 {
          color: #091916;
          font-size: 42px;
          line-height: 1.1;
          margin-bottom: 10px;
        }

        .team-connect__content p {
          color: rgba(9, 25, 22, 0.72);
          margin-bottom: 22px;
        }

        .team-connect__content :global(.btn) {
          gap: 12px;
          border: 0;
          background: var(--brand-button-gradient);
          color: var(--white);
          box-shadow: 0 14px 30px rgba(40, 73, 65, 0.24);
        }

        .team-connect__paper {
          justify-self: center;
          position: relative;
          width: 160px;
          height: 160px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--brand-accent);
          font-size: 68px;
          background: linear-gradient(145deg, #ffffff 0%, #d7ece5 100%);
          box-shadow: inset 0 -18px 30px rgba(125, 162, 152, 0.18), 0 22px 44px rgba(40, 73, 65, 0.18);
        }

        @media (max-width: 1399px) {
          .team-arrow--left {
            left: -20px;
          }

          .team-arrow--right {
            right: -20px;
          }
        }

        @media (max-width: 1199px) {
          .team-profile--featured {
            transform: none;
          }

          .team-arrow {
            width: 46px;
            height: 46px;
          }
        }

        @media (max-width: 991px) {
          .team-connect {
            grid-template-columns: 1fr;
            padding: 34px 28px;
          }

          .team-connect__avatars,
          .team-connect__paper {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .team-heading {
            margin-bottom: 36px;
          }

          .team-heading__text {
            font-size: 16px;
          }

          .team-profile {
            min-height: 410px;
          }

          .team-profile__image {
            height: 270px;
          }

          .team-connect__content h3 {
            font-size: 32px;
          }
        }

        @media (max-width: 480px) {
          .team-showcase {
            padding-top: 0;
          }

          .team-arrow {
            display: none;
          }

          .team-eyebrow span {
            width: 34px;
          }

          .team-profile__content {
            padding: 20px;
          }

          .team-profile h3 {
            font-size: 22px;
          }

          .team-connect {
            border-radius: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default OurTeam;
