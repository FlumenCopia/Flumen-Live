const Sageo = () => {
  return (
    <>
      <section className="section sageo-hero">
        <div className="container">
          <div className="row gaper align-items-center">
            <div className="col-12 col-lg-8">
              <div className="section__header text-start">
                <h1 className="title-animation">
                  SAG·EO: The Unified Framework for Modern Search Visibility
                </h1>
              </div>
              <p className="primary-text">
                Search doesn't work the way it used to. Google ranks. AI answers.
                LLMs decide. SAG·EO is the system that connects all three.
              </p>
              <div className="section__content-cta">
                <a className="btn btn--primary" href="/sageo-framework#download">
                  Download Framework
                </a>
                <a className="btn btn--secondary" href="/sageo-framework#video">
                  Watch Explainer Video
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="sageo-hero__meta">
                <p className="tertiary-text mb-1">
                  Developed by Anoop Krishna | FlumenX
                </p>
                <p className="tertiary-text mb-1">
                  First Published: February 6, 2025
                </p>
                <p className="tertiary-text mb-0">Version 1.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section sageo-problem">
        <div className="container">
          <div className="row gaper align-items-start">
            <div className="col-12 col-lg-7">
              <div className="section__header text-start">
                <h2 className="title title-animation">
                  Your Brand Might Be Invisible (And You Don't Even Know It)
                </h2>
              </div>
              <div className="section__content">
                <p className="primary-text mb-3">Try this right now:</p>
                <ul className="sageo-problem__steps mb-3">
                  <li>Open ChatGPT. Ask about your industry.</li>
                  <li>Open Gemini. Search for your service.</li>
                  <li>Open Perplexity. Look for solutions you provide.</li>
                </ul>
                <p className="primary-text mb-2">See that?</p>
                <p className="primary-text mb-2">You're not there.</p>
                <p className="primary-text mb-2">Not in the AI answer.</p>
                <p className="primary-text mb-2">Not in the overview.</p>
                <p className="primary-text mb-2">Not in the conversation.</p>
                <p className="primary-text mb-2">
                  While you've been optimizing for Google, your customers started
                  asking AI.
                </p>
                <p className="primary-text">And AI doesn't know you exist.</p>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="sageo-problem__stats">
                <h3 className="title title-animation">Statistics Panel</h3>
                <ul className="sageo-problem__stats-list">
                  <li>58% of Google searches end without a click (SparkToro, 2024)</li>
                  <li>100M+ weekly active ChatGPT users asking questions</li>
                  <li>15%+ of searches now show AI Overviews</li>
                  <li>0% of traditional SEO strategies address AI visibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sageo;
