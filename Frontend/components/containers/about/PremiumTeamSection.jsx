"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const premiumTeam = [
  {
    id: 1,
    name: "Nithin",
    initials: "N",
    role: "Full Stack Developer",
    focus: "Product Engineering",
    metric: "98%",
    accent: "mint",
    orbitClass: "node-one",
    bio: "Builds reliable digital systems with clean architecture, fast interfaces, and steady delivery.",
    skills: ["Next.js", "APIs", "Performance"],
    images: ["Profile", "Workspace"],
  },
  {
    id: 2,
    name: "Gopika L",
    initials: "GL",
    role: "Junior Web Developer",
    focus: "Frontend Craft",
    metric: "42+",
    accent: "coral",
    orbitClass: "node-two",
    bio: "Creates responsive pages, polished interactions, and practical web experiences.",
    skills: ["React", "Responsive UI", "CMS"],
    images: ["Profile", "Interface"],
  },
  {
    id: 3,
    name: "Aiswarya",
    initials: "A",
    role: "Project Coordinator",
    focus: "Delivery Flow",
    metric: "24h",
    accent: "green",
    orbitClass: "node-three",
    bio: "Keeps projects moving with clear communication, aligned timelines, and practical coordination.",
    skills: ["Planning", "Client Care", "QA"],
    images: ["Profile", "Planning"],
  },
  {
    id: 4,
    name: "Arjun Dev",
    initials: "AD",
    role: "UI/UX Designer",
    focus: "Experience Design",
    metric: "4.9",
    accent: "blue",
    orbitClass: "node-four",
    bio: "Designs intuitive journeys, modern interfaces, and memorable visual systems.",
    skills: ["Figma", "Brand UI", "Prototypes"],
    images: ["Profile", "Design"],
  },
  {
    id: 5,
    name: "Meera S",
    initials: "MS",
    role: "Brand Strategist",
    focus: "Brand Direction",
    metric: "360",
    accent: "mint",
    orbitClass: "node-five",
    bio: "Shapes campaign direction, message clarity, and brand experiences that scale.",
    skills: ["Strategy", "Story", "Growth"],
    images: ["Profile", "Strategy"],
  },
];

const PremiumTeamSection = () => {
  const [activeId, setActiveId] = useState(premiumTeam[0].id);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const activeMember = useMemo(
    () => premiumTeam.find((member) => member.id === activeId) || premiumTeam[0],
    [activeId]
  );

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18;
    setTilt({ x, y });
  };

  return (
    <section className="premium-team">
      <div className="container">
        <div className="premium-team__header">
          <span>Connected Team Network</span>
          <h2 className="title title-animation">
            One team moving inside a <em>continuous innovation loop</em>
          </h2>
          <p>
            A futuristic collaboration ecosystem where every role is visible, connected, and moving
            together through a shared delivery flow.
          </p>
        </div>

        <div
          className={`premium-team__ecosystem premium-team__ecosystem--${activeMember.accent}`}
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{
            "--tilt-x": `${tilt.x}deg`,
            "--tilt-y": `${tilt.y}deg`,
          }}
        >
          <div className="network-bg" aria-hidden="true">
            <span className="network-glow network-glow--one"></span>
            <span className="network-glow network-glow--two"></span>
            <span className="network-grid"></span>
          </div>

          <div className="network-stage">
            <div className="network-rings" aria-hidden="true">
              <span className="network-ring network-ring--outer"></span>
              <span className="network-ring network-ring--middle"></span>
              <span className="network-ring network-ring--inner"></span>
              <span className="network-pulse"></span>
            </div>

            <svg className="network-lines" viewBox="0 0 1000 720" aria-hidden="true">
              <defs>
                <linearGradient id="teamLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(169,217,185,0)" />
                  <stop offset="45%" stopColor="rgba(169,217,185,0.95)" />
                  <stop offset="100%" stopColor="rgba(169,217,185,0)" />
                </linearGradient>
              </defs>
              <path className="network-path network-path--one" d="M500 106 C760 116 896 290 788 492 C674 706 336 700 218 492 C104 290 240 116 500 106Z" />
              <path className="network-path network-path--two" d="M500 106 L788 492 L218 492 Z" />
              <path className="network-path network-path--three" d="M224 254 C388 170 612 170 776 254 C694 382 610 456 500 564 C390 456 306 382 224 254Z" />
            </svg>

            <div className="network-core">
              <span className="network-core__halo"></span>
              <span className="network-core__icon">
                <i className="bi bi-diagram-3"></i>
              </span>
              <strong>FlumenX</strong>
              <small>Unified Team Engine</small>
            </div>

            {premiumTeam.map((member) => (
              <button
                className={`team-node team-node--${member.accent} ${member.orbitClass} ${
                  member.id === activeId ? "active" : ""
                }`}
                key={member.id}
                type="button"
                onClick={() => setActiveId(member.id)}
                onMouseEnter={() => setActiveId(member.id)}
                aria-pressed={member.id === activeId}
              >
                <span className="team-node__beam"></span>
                <span className="team-node__images">
                  {member.images.map((label, index) => (
                    <span className={`team-node__image team-node__image--${index + 1}`} key={label}>
                      <span className="team-node__avatar-shape"></span>
                      <strong>{index === 0 ? member.initials : label.slice(0, 2)}</strong>
                    </span>
                  ))}
                </span>
                <span className="team-node__content">
                  <strong>{member.name}</strong>
                  <small>{member.role}</small>
                </span>
                <span className="team-node__metric">{member.metric}</span>
              </button>
            ))}
          </div>

          <aside className="network-panel">
            <div className="network-panel__photos" aria-label={`${activeMember.name} placeholder images`}>
              {activeMember.images.map((label, index) => (
                <div className={`network-panel__photo network-panel__photo--${index + 1}`} key={label}>
                  <span className="network-panel__photo-glow"></span>
                  <span className="network-panel__photo-shape"></span>
                  <strong>{index === 0 ? activeMember.initials : label.slice(0, 2)}</strong>
                  <small>{label}</small>
                </div>
              ))}
            </div>
            <span className="network-panel__label">{activeMember.focus}</span>
            <h3>{activeMember.name}</h3>
            <p>{activeMember.bio}</p>
            <div className="network-panel__skills">
              {activeMember.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <Link href="/contact-us" className="network-panel__cta">
              Build with this team
              <i className="bi bi-arrow-right"></i>
            </Link>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .premium-team {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: clamp(76px, 8vh, 118px) 0;
          background:
            radial-gradient(circle at 12% 16%, rgba(169, 217, 185, 0.18), transparent 24%),
            radial-gradient(circle at 88% 12%, rgba(125, 162, 152, 0.22), transparent 22%),
            radial-gradient(circle at 50% 72%, rgba(63, 106, 96, 0.42), transparent 30%),
            linear-gradient(180deg, #061513 0%, #0a1d1a 48%, #102d28 100%);
        }

        .premium-team::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(169, 217, 185, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 217, 185, 0.055) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(180deg, #000 0%, #000 58%, transparent 92%);
        }

        .premium-team::after {
          content: "";
          position: absolute;
          inset: 22px;
          pointer-events: none;
          border: 1px solid rgba(169, 217, 185, 0.1);
          border-radius: 34px;
          box-shadow:
            inset 0 0 80px rgba(169, 217, 185, 0.05),
            inset 0 0 0 1px rgba(255, 255, 255, 0.03);
        }

        .premium-team :global(.container) {
          position: relative;
          z-index: 2;
          max-width: 100%;
          width: 100%;
          padding-left: clamp(16px, 3vw, 48px);
          padding-right: clamp(16px, 3vw, 48px);
        }

        .premium-team__header {
          max-width: 980px;
          margin: 0 auto clamp(46px, 6vh, 78px);
          padding: 0 clamp(18px, 4vw, 56px);
          text-align: center;
        }

        .premium-team__header > span {
          display: inline-flex;
          padding: 9px 18px;
          border-radius: 999px;
          color: var(--brand-accent-light);
          background: rgba(169, 217, 185, 0.1);
          border: 1px solid rgba(169, 217, 185, 0.22);
          box-shadow: 0 12px 32px rgba(169, 217, 185, 0.08);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .premium-team__header h2 {
          color: var(--white);
          margin: 18px auto;
          max-width: 900px;
          padding: 0 clamp(0px, 2vw, 28px);
          text-wrap: balance;
        }

        .premium-team__header h2 em {
          color: var(--brand-accent-light);
          text-shadow: 0 0 28px rgba(169, 217, 185, 0.22);
          font-style: normal;
        }

        .premium-team__header p {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 clamp(6px, 2vw, 26px);
          color: rgba(255, 255, 255, 0.72);
          font-size: 18px;
          line-height: 1.75;
        }

        .premium-team__ecosystem {
          --active-accent: var(--brand-accent-light);
          --tilt-x: 0deg;
          --tilt-y: 0deg;
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          gap: 28px;
          min-height: calc(100vh - 270px);
          padding: clamp(56px, 8vh, 96px) 0 clamp(54px, 7vh, 88px);
          overflow: visible;
          border-radius: 0;
          background:
            radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--active-accent) 14%, transparent), transparent 34%),
            radial-gradient(ellipse at center, rgba(13, 67, 69, 0.24), transparent 58%);
          border: 0;
          box-shadow: none;
        }

        .premium-team__ecosystem--coral {
          --active-accent: #dba88e;
        }

        .premium-team__ecosystem--mint {
          --active-accent: var(--brand-accent-light);
        }

        .premium-team__ecosystem--green {
          --active-accent: #73c69a;
        }

        .premium-team__ecosystem--blue {
          --active-accent: #d7eadf;
        }

        .network-bg,
        .network-grid,
        .network-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .network-grid {
          background-image: radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px);
          background-size: 22px 22px;
          opacity: 0.18;
        }

        .network-glow {
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0.22;
        }

        .network-glow--one {
          width: 520px;
          height: 520px;
          left: 8%;
          top: 8%;
          background: var(--brand-accent-light);
        }

        .network-glow--two {
          width: 440px;
          height: 440px;
          right: 10%;
          bottom: 8%;
          background: #ffffff;
        }

        .network-stage {
          position: relative;
          min-height: max(650px, calc(100vh - 270px));
          margin-top: clamp(10px, 2vh, 24px);
          perspective: 1400px;
          transform-style: preserve-3d;
          transform: rotateX(var(--tilt-y)) rotateY(var(--tilt-x));
          transition: transform 0.18s ease-out;
        }

        .network-rings,
        .network-lines,
        .network-core,
        .team-node {
          position: absolute;
          left: 50%;
          top: 60%;
        }

        .network-rings {
          width: min(720px, 86%);
          aspect-ratio: 1;
          transform: translate(-50%, -50%) rotateX(64deg) translateZ(-80px);
          transform-style: preserve-3d;
        }

        .network-ring,
        .network-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(169, 217, 185, 0.26);
          box-shadow: inset 0 0 44px rgba(169, 217, 185, 0.08), 0 0 44px rgba(169, 217, 185, 0.12);
        }

        .network-ring--outer {
          animation: ringSpin 18s linear infinite;
        }

        .network-ring--middle {
          inset: 13%;
          border-style: dashed;
          animation: ringSpinReverse 24s linear infinite;
        }

        .network-ring--inner {
          inset: 28%;
          animation: ringSpin 14s linear infinite;
        }

        .network-pulse {
          inset: 38%;
          border-color: color-mix(in srgb, var(--active-accent) 70%, transparent);
          animation: networkPulse 2.6s ease-in-out infinite;
        }

        .network-lines {
          width: min(880px, 94%);
          height: min(640px, 86%);
          transform: translate(-50%, -50%) translateZ(10px);
          overflow: visible;
          filter: drop-shadow(0 0 16px color-mix(in srgb, var(--active-accent) 46%, transparent));
        }

        .network-path {
          fill: none;
          stroke: url(#teamLineGradient);
          stroke-width: 2.4;
          stroke-dasharray: 16 18;
          animation: networkDash 6s linear infinite;
        }

        .network-path--two {
          animation-duration: 8s;
          opacity: 0.72;
        }

        .network-path--three {
          animation-duration: 10s;
          opacity: 0.48;
        }

        .network-core {
          z-index: 5;
          width: 178px;
          height: 178px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
          border-radius: 50%;
          color: var(--white);
          background:
            radial-gradient(circle at 35% 20%, rgba(255, 255, 255, 0.26), transparent 28%),
            linear-gradient(145deg, rgba(169, 217, 185, 0.2), rgba(6, 21, 19, 0.96));
          border: 1px solid rgba(169, 217, 185, 0.24);
          box-shadow: 0 0 0 12px rgba(169, 217, 185, 0.05), 0 24px 60px rgba(0, 0, 0, 0.32), 0 0 46px rgba(169, 217, 185, 0.14);
          transform: translate(-50%, -50%) translateZ(140px);
        }

        .network-core__halo {
          position: absolute;
          inset: -26px;
          border-radius: 50%;
          border: 1px solid color-mix(in srgb, var(--active-accent) 42%, transparent);
          animation: coreHalo 3.2s ease-in-out infinite;
        }

        .network-core__icon {
          width: 54px;
          height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          color: #061513;
          background: linear-gradient(145deg, var(--brand-accent-light), #e8f5ee);
          font-size: 26px;
        }

        .network-core strong {
          font-size: 22px;
        }

        .network-core small {
          color: rgba(255, 255, 255, 0.64);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .team-node {
          --member-accent: var(--brand-accent-light);
          z-index: 6;
          width: 244px;
          min-height: 188px;
          padding: 18px 18px 20px;
          border-radius: 28px;
          color: var(--white);
          text-align: left;
          background:
            radial-gradient(circle at 20% 0%, color-mix(in srgb, var(--member-accent) 24%, transparent), transparent 38%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.055));
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(18px);
          transform-style: preserve-3d;
          transition: transform 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease, background 0.45s ease;
          animation: nodeFloat 5.6s ease-in-out infinite;
        }

        .team-node--coral {
          --member-accent: #dba88e;
        }

        .team-node--mint {
          --member-accent: var(--brand-accent-light);
        }

        .team-node--green {
          --member-accent: #73c69a;
        }

        .team-node--blue {
          --member-accent: #d7eadf;
        }

        .team-node.active,
        .team-node:hover {
          border-color: color-mix(in srgb, var(--member-accent) 74%, transparent);
          background:
            radial-gradient(circle at 20% 0%, color-mix(in srgb, var(--member-accent) 38%, transparent), transparent 42%),
            rgba(255, 255, 255, 0.12);
          box-shadow:
            0 0 0 8px color-mix(in srgb, var(--member-accent) 13%, transparent),
            0 36px 88px rgba(0, 0, 0, 0.38),
            0 0 38px color-mix(in srgb, var(--member-accent) 22%, transparent);
        }

        .node-one {
          transform: translate(-50%, -50%) translate3d(-330px, -174px, 130px) rotateY(16deg);
          animation-delay: 0s;
        }

        .node-two {
          transform: translate(-50%, -50%) translate3d(274px, -186px, 86px) rotateY(-14deg);
          animation-delay: -1.1s;
        }

        .node-three {
          transform: translate(-50%, -50%) translate3d(346px, 150px, 118px) rotateY(-16deg);
          animation-delay: -2.2s;
        }

        .node-four {
          transform: translate(-50%, -50%) translate3d(-292px, 184px, 92px) rotateY(15deg);
          animation-delay: -3.3s;
        }

        .node-five {
          transform: translate(-50%, -50%) translate3d(0, -254px, 156px) rotateX(4deg);
          animation-delay: -4.4s;
        }

        .node-one:hover,
        .node-one.active {
          transform: translate(-50%, -50%) translate3d(-330px, -190px, 190px) rotateY(8deg) scale(1.04);
        }

        .node-two:hover,
        .node-two.active {
          transform: translate(-50%, -50%) translate3d(274px, -202px, 146px) rotateY(-8deg) scale(1.04);
        }

        .node-three:hover,
        .node-three.active {
          transform: translate(-50%, -50%) translate3d(346px, 134px, 178px) rotateY(-8deg) scale(1.04);
        }

        .node-four:hover,
        .node-four.active {
          transform: translate(-50%, -50%) translate3d(-292px, 168px, 152px) rotateY(8deg) scale(1.04);
        }

        .node-five:hover,
        .node-five.active {
          transform: translate(-50%, -50%) translate3d(0, -270px, 216px) rotateX(2deg) scale(1.04);
        }

        .team-node__beam {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(120deg, transparent, color-mix(in srgb, var(--member-accent) 52%, transparent), transparent);
          opacity: 0;
          transition: opacity 0.45s ease;
        }

        .team-node:hover .team-node__beam,
        .team-node.active .team-node__beam {
          opacity: 1;
        }

        .team-node__images {
          position: relative;
          display: block;
          width: 132px;
          height: 84px;
          margin-bottom: 16px;
        }

        .team-node__image {
          position: absolute;
          width: 74px;
          height: 82px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border-radius: 18px;
          color: #061513;
          overflow: hidden;
          background:
            radial-gradient(circle at 52% 24%, rgba(255, 255, 255, 0.82), transparent 18%),
            linear-gradient(145deg, color-mix(in srgb, var(--member-accent) 72%, #ffffff), #ffffff);
          border: 2px solid rgba(255, 255, 255, 0.66);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);
        }

        .team-node__avatar-shape {
          position: absolute;
          left: 50%;
          bottom: -8px;
          width: 48px;
          height: 58px;
          border-radius: 999px 999px 16px 16px;
          background:
            radial-gradient(circle at 50% 18%, rgba(6, 21, 19, 0.88) 0 22%, transparent 24%),
            linear-gradient(180deg, rgba(6, 21, 19, 0.88), rgba(6, 21, 19, 0.46));
          transform: translateX(-50%);
          opacity: 0.72;
        }

        .team-node__image strong {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          color: var(--white);
          background: rgba(6, 21, 19, 0.74);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }

        .team-node__image--1 {
          left: 0;
          top: 0;
          transform: rotate(-9deg) translateZ(20px);
        }

        .team-node__image--2 {
          right: 0;
          bottom: 0;
          transform: rotate(10deg) translateZ(42px);
        }

        .team-node__content,
        .team-node__metric {
          position: relative;
          z-index: 2;
        }

        .team-node__content strong,
        .team-node__content small {
          display: block;
        }

        .team-node__content strong {
          font-size: 20px;
          margin-bottom: 6px;
        }

        .team-node__content small {
          color: rgba(255, 255, 255, 0.68);
          font-weight: 800;
          line-height: 1.35;
        }

        .team-node__metric {
          position: absolute;
          right: 14px;
          top: 14px;
          padding: 7px 10px;
          border-radius: 999px;
          color: #061513;
          background: var(--member-accent);
          font-size: 12px;
          font-weight: 900;
        }

        .network-panel__photos {
          position: relative;
          min-height: 210px;
          margin-bottom: 24px;
          perspective: 900px;
        }

        .network-panel__photo {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
          overflow: hidden;
          border-radius: 26px;
          color: #061513;
          background:
            radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.9), transparent 18%),
            linear-gradient(145deg, color-mix(in srgb, var(--active-accent) 68%, #ffffff), #ffffff);
          border: 1px solid rgba(255, 255, 255, 0.68);
          box-shadow: 0 22px 52px rgba(0, 0, 0, 0.24);
        }

        .network-panel__photo--1 {
          left: 0;
          top: 0;
          width: 58%;
          height: 192px;
          transform: rotateY(-12deg) rotateZ(-4deg);
        }

        .network-panel__photo--2 {
          right: 0;
          bottom: 0;
          width: 52%;
          height: 150px;
          transform: rotateY(14deg) rotateZ(5deg) translateZ(34px);
        }

        .network-panel__photo-glow {
          position: absolute;
          inset: -20%;
          background:
            linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.68) 42%, transparent 60%),
            radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.58), transparent 20%);
          opacity: 0.62;
        }

        .network-panel__photo-shape {
          position: absolute;
          left: 50%;
          bottom: -12px;
          width: 74px;
          height: 94px;
          border-radius: 999px 999px 22px 22px;
          background:
            radial-gradient(circle at 50% 18%, rgba(6, 21, 19, 0.9) 0 20%, transparent 22%),
            linear-gradient(180deg, rgba(6, 21, 19, 0.88), rgba(6, 21, 19, 0.42));
          transform: translateX(-50%);
          opacity: 0.76;
        }

        .network-panel__photo strong,
        .network-panel__photo small {
          position: relative;
          z-index: 2;
        }

        .network-panel__photo strong {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          color: var(--white);
          background: rgba(6, 21, 19, 0.74);
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 0.04em;
        }

        .network-panel__photo small {
          padding: 6px 10px;
          border-radius: 999px;
          color: rgba(6, 21, 19, 0.74);
          background: rgba(255, 255, 255, 0.64);
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .network-panel {
          position: relative;
          z-index: 8;
          align-self: center;
          padding: 28px;
          border-radius: 28px;
          background:
            radial-gradient(circle at 28% 0%, color-mix(in srgb, var(--active-accent) 20%, transparent), transparent 34%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.07));
          border: 1px solid rgba(169, 217, 185, 0.18);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.32), 0 0 46px rgba(169, 217, 185, 0.08);
          backdrop-filter: blur(20px);
          overflow: hidden;
        }

        .network-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent 42%);
          opacity: 0.5;
        }

        .network-panel__label {
          display: inline-flex;
          margin-bottom: 14px;
          padding: 8px 14px;
          border-radius: 999px;
          color: #061513;
          background: linear-gradient(145deg, var(--active-accent), #e8f5ee);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .network-panel h3 {
          color: var(--white);
          font-size: 40px;
          line-height: 1;
          margin-bottom: 14px;
        }

        .network-panel p {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.75;
          margin-bottom: 18px;
        }

        .network-panel__skills {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 22px;
        }

        .network-panel__skills span {
          padding: 8px 12px;
          border-radius: 999px;
          color: var(--white);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 12px;
          font-weight: 800;
        }

        .network-panel__cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: 999px;
          color: #061513;
          background: linear-gradient(145deg, var(--active-accent), #e8f5ee);
          font-weight: 900;
        }

        @keyframes networkDash {
          to {
            stroke-dashoffset: -220;
          }
        }

        @keyframes ringSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ringSpinReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes networkPulse {
          0%,
          100% {
            transform: scale(0.88);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.16);
            opacity: 0.7;
          }
        }

        @keyframes coreHalo {
          0%,
          100% {
            transform: scale(0.94);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.9;
          }
        }

        @keyframes nodeFloat {
          0%,
          100% {
            margin-top: 0;
          }
          50% {
            margin-top: -10px;
          }
        }

        @media (max-width: 1399px) {
          .premium-team__ecosystem {
            grid-template-columns: 1fr;
            min-height: auto;
            gap: 34px;
          }

          .network-stage {
            min-height: 760px;
          }

          .network-rings {
            width: min(650px, 76%);
          }

          .team-node {
            width: 224px;
            min-height: 180px;
          }

          .node-one {
            transform: translate(-50%, -50%) translate3d(-290px, -144px, 122px) rotateY(14deg);
          }

          .node-two {
            transform: translate(-50%, -50%) translate3d(244px, -156px, 84px) rotateY(-13deg);
          }

          .node-three {
            transform: translate(-50%, -50%) translate3d(288px, 144px, 112px) rotateY(-14deg);
          }

          .node-four {
            transform: translate(-50%, -50%) translate3d(-260px, 160px, 88px) rotateY(14deg);
          }

          .node-five {
            transform: translate(-50%, -50%) translate3d(0, -232px, 146px) rotateX(4deg);
          }

          .node-one:hover,
          .node-one.active {
            transform: translate(-50%, -50%) translate3d(-290px, -160px, 172px) rotateY(8deg) scale(1.035);
          }

          .node-two:hover,
          .node-two.active {
            transform: translate(-50%, -50%) translate3d(244px, -172px, 134px) rotateY(-8deg) scale(1.035);
          }

          .node-three:hover,
          .node-three.active {
            transform: translate(-50%, -50%) translate3d(288px, 128px, 162px) rotateY(-8deg) scale(1.035);
          }

          .node-four:hover,
          .node-four.active {
            transform: translate(-50%, -50%) translate3d(-260px, 144px, 138px) rotateY(8deg) scale(1.035);
          }

          .node-five:hover,
          .node-five.active {
            transform: translate(-50%, -50%) translate3d(0, -248px, 196px) rotateX(2deg) scale(1.035);
          }

          .network-panel {
            max-width: 680px;
            justify-self: center;
          }
        }

        @media (max-width: 991px) {
          .premium-team {
            min-height: auto;
            padding: 90px 0;
          }

          .premium-team__ecosystem {
            min-height: auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 0 0 58px;
          }

          .network-stage {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
            gap: 18px;
            min-height: auto;
            margin-top: 28px;
            place-items: stretch;
            transform: none !important;
          }

          .network-rings,
          .network-lines {
            display: none;
          }

          .network-core {
            position: relative;
            left: auto;
            top: auto;
            grid-column: 1 / -1;
            margin: 0 auto 10px;
            transform: none;
          }

          .team-node,
          .node-one,
          .node-two,
          .node-three,
          .node-four,
          .node-five,
          .node-one:hover,
          .node-two:hover,
          .node-three:hover,
          .node-four:hover,
          .node-five:hover,
          .node-one.active,
          .node-two.active,
          .node-three.active,
          .node-four.active,
          .node-five.active {
            position: relative;
            left: auto;
            top: auto;
            width: 100%;
            max-width: none;
            min-height: 176px;
            transform: none !important;
          }

          .node-one,
          .node-two,
          .node-three,
          .node-four,
          .node-five {
            top: auto !important;
          }

          .network-panel {
            width: min(100%, 680px);
            margin-top: 26px;
            justify-self: center;
          }
        }

        @media (max-width: 575px) {
          .premium-team {
            padding: 74px 0;
          }

          .premium-team::after {
            inset: 10px;
            border-radius: 22px;
          }

          .premium-team__header {
            margin-bottom: 42px;
            padding: 0 8px;
          }

          .premium-team__header h2 {
            font-size: clamp(34px, 10vw, 48px);
            line-height: 1.08;
          }

          .premium-team__header > span {
            font-size: 11px;
            letter-spacing: 0.08em;
          }

          .premium-team__header p {
            font-size: 15px;
            line-height: 1.65;
            padding: 0;
          }

          .premium-team__ecosystem {
            padding: 0;
            border-radius: 0;
            padding-bottom: 48px;
          }

          .network-stage {
            grid-template-columns: 1fr;
            gap: 16px;
            min-height: auto;
          }

          .network-core {
            width: 150px;
            height: 150px;
          }

          .team-node {
            width: 100%;
            min-height: 158px;
            padding: 16px;
            border-radius: 22px;
          }

          .team-node__images {
            width: 118px;
            height: 76px;
            margin-bottom: 12px;
          }

          .team-node__image {
            width: 66px;
            height: 74px;
            border-radius: 16px;
          }

          .team-node__content strong {
            font-size: 18px;
          }

          .team-node__content small {
            font-size: 13px;
          }

          .network-panel__photos {
            min-height: 190px;
          }

          .network-panel__photo--1 {
            height: 170px;
          }

          .network-panel__photo--2 {
            height: 132px;
          }

          .network-panel {
            padding: 22px;
            border-radius: 22px;
          }

          .network-panel h3 {
            font-size: 32px;
          }

          .network-panel__cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumTeamSection;
