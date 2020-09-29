import { Fragment } from "react";
import { NextPage } from "next";

import { data } from "../data";

const Home: NextPage = () => {
  return (
    <>
      <div className="mw-app center pb6-ns pb5 pt5 ph-app">
        {/* Header */}
        <div className="flex flex-column">
          <div className="relative aspect-ratio--dsa-la-logo w--dsa-la-logo">
            <img
              alt="DSA logo"
              src="/dsa-la.png"
              className="absolute absolute--fill w-100"
            />
          </div>

          <span className="f1 fw7 pt3 pt4-ns">
            DSA
            <br />
            Voter
            <br />
            Guide
          </span>

          <span className="f4 fw7 lh-copy pt3">
            Nov ‘20 General Election
            <br />
            Los Angeles County
          </span>

          <span className="f6 pt3 pr4 lh-copy mw-header-copy">
            Endorsements (<span className="cool-red fw7">*</span>) and
            recommendations by the{" "}
            <a
              className="cool-red fw6 no-underline"
              href="https://www.dsausa.org/"
            >
              DSA
            </a>
            . Want a new Los Angeles County voter guide every election?{" "}
            <a
              className="cool-red fw6 no-underline"
              href="https://tinyletter.com/retreat-left"
            >
              Subscribe
            </a>
            .
          </span>
        </div>

        {/* Grid */}
        <div className="grid relative mt4 mt-grid-ns">
          {data.map(([category, options]) => (
            <Fragment key={category}>
              {/* Left */}
              <div>
                <div className="dotted-border" />

                <span className="db sticky pt3 ttu top-0 break-word lh-static f7 fw7">
                  {category}
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-column mb3">
                {options.map(({ title, subtitle, desc, link, endorsed }) => {
                  const sourceAnchorEl = (
                    <a className="cool-red fw6 no-underline" href={link}>
                      [source]
                    </a>
                  );

                  return (
                    <details
                      key={title + subtitle}
                      className="details-reset mt3"
                    >
                      <summary className="flex flex-column">
                        <span className="fw6 lh-static">
                          <span className="details-open--underline">
                            {title}
                          </span>
                          {endorsed && (
                            <>
                              &nbsp;<span className="cool-red fw7">*</span>
                            </>
                          )}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <svg
                            viewBox="0 0 15 15"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute translate-x--100 w1 h1"
                          >
                            <circle
                              fill="currentColor"
                              cx="7.5"
                              cy="7.5"
                              r="7.5"
                              className="details-open--cool-red light-gray"
                            />
                            <path
                              fill="currentColor"
                              d="M8.76 9.85l-.08.35-.6.22c-.16.05-.33.08-.53.08-.3 0-.54-.07-.7-.22a.72.72 0 01-.26-.57 2 2 0 01.08-.59l.31-1.1a5.3 5.3 0 00.1-.57c0-.14-.03-.24-.09-.3-.06-.05-.17-.08-.33-.08a.87.87 0 00-.25.04l-.22.07.08-.34c.2-.09.4-.16.6-.22.18-.06.36-.09.53-.09.3 0 .53.07.7.22.16.15.24.34.24.57a3.21 3.21 0 01-.08.59l-.31 1.1a3.08 3.08 0 00-.1.57c0 .15.03.25.1.3.06.06.18.08.34.08a1.44 1.44 0 00.47-.11zm.08-4.65c0 .2-.07.36-.22.5a.75.75 0 01-.53.2.75.75 0 01-.53-.2.65.65 0 01-.22-.5c0-.2.08-.36.22-.5.15-.13.33-.2.53-.2s.38.07.53.2c.15.14.22.3.22.5z"
                              className="details-open--white gray"
                            />
                          </svg>
                        </span>

                        {subtitle && (
                          <span className="f7 pt1 lh-solid gray">
                            {subtitle}
                          </span>
                        )}
                      </summary>

                      {desc ? (
                        desc.map((paragraph, j, { length }) => (
                          <span
                            key={category + j}
                            className="db f6 mt2 lh-copy"
                          >
                            {paragraph}
                            {j === length - 1 && <> {sourceAnchorEl}</>}
                          </span>
                        ))
                      ) : (
                        <span className="db f6 mt1">{sourceAnchorEl}</span>
                      )}
                    </details>
                  );
                })}
              </div>
            </Fragment>
          ))}
        </div>

        {/* Footer */}
        <span className="db f7 lh-copy gray bt b--light-gray pt3 pr0-ns pr4 mt4">
          This site does not track you. Built in LA by{" "}
          <a
            className="cool-red fw6 no-underline"
            href="https://www.tylerdeitz.com/"
          >
            Tyler
          </a>{" "}
          and friends. Source on{" "}
          <a
            className="cool-red fw6 no-underline"
            href="https://github.com/tvler/retreat-left"
          >
            GitHub
          </a>
          . Want to publish a voter guide for your county?{" "}
          <a
            className="cool-red fw6 no-underline"
            href="mailto:tylerdeitz@gmail.com"
          >
            Get in touch
          </a>
          .
        </span>
      </div>
    </>
  );
};

export default Home;
