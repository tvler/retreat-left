import React, { Fragment, ReactNode } from "react";
import Head from "next/head";
import { NextPage } from "next";

import { data } from "../data";

const Home: NextPage = () => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta
        name="Description"
        content="A mobile-friendly version of the DSA-LA 2020 voter guide. Great for bringing to the polls and using as a reference while voting."
      />
      <title>Retreat Left</title>
    </Head>

    <div className="grid">
      <div className="bg-white pt4 pb3 flex flex-column">
        <div className="mw-grid w-100 ml-auto flex flex-column">
          <span className="fw9 ph-gutter f2 i lh-solid">CA</span>
          <span className="fw6 ph-gutter f6 tracked-tight">March 3, 2020</span>
        </div>
      </div>
      <div className="pt4 pb3 ph-gutter flex flex-column mw-grid">
        <span className="f6 tracked-tight white lh-static">
          A mobile-friendly version of the{" "}
          <a
            href="https://www.dsa-la.org/2020_primary_voter_guide"
            className="color-inherit fw6"
          >
            DSA-LA 2020 voter guide
          </a>
          . Great for bringing to the polls and using as a reference while
          voting.
        </span>
        <span className="f6 tracked-tight white lh-static mt3">
          Want to get emailed a new voter guide every election?{" "}
          <a
            href="https://tinyletter.com/retreat-left"
            className="color-inherit fw6"
          >
            Subscribe
          </a>
          .
        </span>

        <span className="f6 tracked-tight white lh-static mt3">
          Source on{" "}
          <a
            className="color-inherit fw6"
            href="https://github.com/tvler/retreat-left"
          >
            GitHub
          </a>
          . Built by{" "}
          <a href="https://www.tylerdeitz.com/" className="color-inherit fw6">
            Tyler
          </a>
          .
        </span>
      </div>

      {data.map(([key, value], i) => (
        <Fragment key={key}>
          <div className="bg-white flex flex-column">
            {!!i && (
              <div className="white mix-blend-mode-diff absolute left-dotted-line right-0 bt b--dash b--dashed bl-0 bb-0 br-0" />
            )}
            <div className="mw-grid ml-auto w-100 flex-grow-1">
              <span className="sticky pv3 ph-gutter tracked-tight top-0 break-word lh-static f6 db">
                {key}
              </span>
            </div>
          </div>

          <div className="white pv3 ph-gutter flex flex-column lh-static mw-grid">
            {value.map(({ title, subtitle, desc, link }, i) => (
              <details
                key={title + subtitle}
                className={"details-reset" + (i ? " mt4" : "")}
              >
                <summary className="flex flex-column">
                  <div className="flex flex-column items-start">
                    {subtitle && <span className="flex f6">{subtitle}</span>}
                    <span className="tracked-tight fw6">{title}</span>
                    {title === "Bernie Sanders" && (
                      <div className="mv1 w-100 aspect-ratio-bernie">
                        <img
                          alt=""
                          className="absolute absolute--fill"
                          src="/bernie.jpg"
                        />
                      </div>
                    )}
                    <span className="f7 ph2 mt1 br-pill ba b--solid lh-copy ttu tracked-tight open-bg-white open-cool-black open-b--white">
                      Info
                    </span>
                  </div>
                </summary>

                {desc ? (
                  desc.map((paragraph, j, { length }) => (
                    <span
                      key={key + j}
                      className="db f6 tj tracked-tight mt1 ti4"
                    >
                      {paragraph}
                      {j === length - 1 && (
                        <>
                          {" ["}
                          <a className="color-inherit fw6" href={link}>
                            Source
                          </a>
                          {"]"}
                        </>
                      )}
                    </span>
                  ))
                ) : (
                  <span className="db f6 tj tracked-tight mt1">
                    [
                    <a className="color-inherit fw6" href={link}>
                      Source
                    </a>
                    ]
                  </span>
                )}
              </details>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  </>
);

export default Home;
