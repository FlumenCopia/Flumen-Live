"use client";

import Image from "next/image";
import publisherData from "@/public/data/publisher";

const roles = [
  "Creative Leader",
  "Strategy Director",
  "Lead Developer",
  "Product Manager",
  "Brand Manager",
  "Growth Specialist",
];

const bios = [
  "Builds thoughtful campaigns and keeps the team aligned around bold creative direction.",
  "Shapes high-impact strategy with a strong focus on brand clarity and measurable growth.",
  "Turns ideas into polished digital experiences with clean builds and reliable delivery.",
  "Connects business goals with execution, keeping projects focused, practical, and scalable.",
  "Guides the client experience with clear communication and a strong eye for consistency.",
  "Drives momentum across channels through insight-led planning and performance refinement.",
];

const socialLinks = [
  { icon: "bi bi-facebook", href: "#" },
  { icon: "bi bi-twitter", href: "#" },
  { icon: "bi bi-instagram", href: "#" },
  { icon: "bi bi-linkedin", href: "#" },
];

const teamMembers = publisherData.slice(0, 6).map((member, index) => ({
  ...member,
  role: roles[index % roles.length],
  bio: bios[index % bios.length],
}));

const OurTeam = () => {
  return (
    <section className="section our-team-grid">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xxl-6">
            <div className="section__header text-center">
              <p className="mt-12">People Behind The Build</p>
              <h2 className="title title-animation">Meet The Team</h2>
            </div>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.id} className="team-card">
              <div className="team-card__image">
                <Image src={member.publisherImage} alt={member.publisherName} priority />
              </div>

              <div className="team-card__content">
                <h4>{member.publisherName}</h4>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__bio">{member.bio}</p>

                <div className="team-card__socials" aria-label={`${member.publisherName} social links`}>
                  {socialLinks.map((social) => (
                    <a key={social.icon} href={social.href} aria-label={social.icon}>
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .our-team-grid {
          background: linear-gradient(180deg, #ffffff 0%, #f7f8f4 100%);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 40px 36px;
        }

        .team-card {
          text-align: center;
          padding: 12px 18px 20px;
          border-bottom: 1px solid rgba(25, 27, 26, 0.12);
        }

        .team-card__image {
          width: min(210px, 100%);
          aspect-ratio: 1 / 1;
          margin: 0 auto 28px;
          border-radius: 50%;
          overflow: hidden;
          background: #e9e9e9;
        }

        .our-team-grid :global(.team-card__image img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .team-card h4 {
          margin-bottom: 10px;
          color: #191b1a;
          font-size: 30px;
          line-height: 1.1;
          font-weight: 700;
          text-transform: uppercase;
        }

        .team-card__role {
          margin-bottom: 18px;
          color: #8aa21c;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 600;
          text-transform: lowercase;
        }

        .team-card__bio {
          max-width: 300px;
          margin: 0 auto 22px;
          color: rgba(25, 27, 26, 0.72);
          font-size: 16px;
          line-height: 1.9;
        }

        .team-card__socials {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .team-card__socials a {
          color: #191b1a;
          font-size: 20px;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .team-card__socials a:hover {
          color: #116265;
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px 24px;
          }

          .team-card h4 {
            font-size: 24px;
          }
        }

        @media (max-width: 575px) {
          .team-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .team-card {
            padding: 8px 10px 18px;
          }

          .team-card__image {
            width: 180px;
            margin-bottom: 22px;
          }

          .team-card h4 {
            font-size: 22px;
          }

          .team-card__role {
            font-size: 16px;
          }

          .team-card__bio {
            font-size: 15px;
            line-height: 1.8;
          }
        }
      `}</style>
    </section>
  );
};

export default OurTeam;
