import React, { Fragment, useState } from "react";
import Head from "next/head";
import { NextPage } from "next";

import { data, filterableRecommendationCategories } from "../data";

const Home: NextPage = () => {
  const [selectedHeaderItem, setSelectedHeaderItem] = useState<
    null | "about" | "filter"
  >(null);

  const [filter, setFilter] = useState<Record<string, string | null>>({});

  return (
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
        <div className="bg-white pt4 pb3 flex">
          <div className="mw-grid w-100 ml-auto flex flex-column">
            <span className="fw5 ph-gutter f5 lh-title fw8">Los Angeles</span>
            <span className="fw5 ph-gutter f6 lh-title fw6">March 8, 2020</span>
          </div>
        </div>

        <div className="pt4 pb3 ph-gutter flex measure items-start flex-column">
          <div className="flex">
            <button
              onClick={() => {
                setSelectedHeaderItem(
                  selectedHeaderItem === "about" ? null : "about"
                );
              }}
              className={
                (selectedHeaderItem === "about"
                  ? "bg-white cool-black"
                  : "bg-cool-black white") +
                " outline-none-focus input-reset b--white f6 ph2 pv1 br4 ba b--solid lh-title ttu touch-action-manipulation"
              }
            >
              About
            </button>

            <button
              onClick={() => {
                setSelectedHeaderItem(
                  selectedHeaderItem === "filter" ? null : "filter"
                );
              }}
              className={
                (selectedHeaderItem === "filter"
                  ? "bg-white cool-black"
                  : "bg-cool-black white") +
                " ml2 outline-none-focus input-reset b--white f6 ph2 pv1 br4 ba b--solid lh-title ttu touch-action-manipulation"
              }
            >
              Filter
            </button>
          </div>

          {selectedHeaderItem === "about" && (
            <>
              <span className="white lh-title mt3">
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

              <span className="white lh-title mt3">
                Want to get emailed a new voter guide every election?{" "}
                <a
                  href="https://tinyletter.com/retreat-left"
                  className="color-inherit fw6"
                >
                  Subscribe
                </a>
                .
              </span>

              <span className="white lh-title mt3">
                This site does not track you.
              </span>

              <span className="white lh-title mt3">
                Source on{" "}
                <a
                  className="color-inherit fw6"
                  href="https://github.com/tvler/retreat-left"
                >
                  GitHub
                </a>
                . Built by{" "}
                <a
                  href="https://www.tylerdeitz.com/"
                  className="color-inherit fw6"
                >
                  Tyler
                </a>
                .
              </span>
            </>
          )}

          {selectedHeaderItem === "filter" &&
            Array.from(data).map(([category, values]) => {
              if (!filterableRecommendationCategories.has(category)) {
                return null;
              }

              const allValue = "All";
              const filterValue = filter[category] || allValue;

              return (
                <div
                  key={category}
                  className="mt3 lh-copy relative f6 bg-white-15 br3 pv1 ph2"
                >
                  <select
                    value={filterValue}
                    className="absolute absolute--fill f5 w-100 h-100 o-0 input-reset"
                    onChange={(ev) => {
                      setFilter({
                        ...filter,
                        [category]:
                          ev.target.value === allValue ? null : ev.target.value,
                      });
                    }}
                  >
                    <option disabled={true}>{category}</option>

                    <option value={allValue}>All</option>

                    {values.map((value) => {
                      if (!value.subtitle) {
                        return null;
                      }

                      return (
                        <option
                          key={category + value.subtitle}
                          value={value.subtitle}
                        >
                          {value.subtitle}
                        </option>
                      );
                    })}
                  </select>

                  <span className="white">{category}: </span>
                  <span className="fw7 white">{filterValue}</span>
                </div>
              );
            })}
        </div>

        {Array.from(data).map(([key, value], i) => {
          const recommendationCategoryId = encodeURIComponent(
            key.replace(/\s+/g, "-").toLowerCase()
          );

          return (
            <Fragment key={key}>
              <div className="bg-white flex">
                {!!i && (
                  <div className="white mix-blend-mode-diff absolute left-dotted-line right-0 bt b--dash b--dashed bl-0 bb-0 br-0" />
                )}
                <div className="mw-grid ml-auto w-100 flex-grow-1">
                  <a
                    href={`#${recommendationCategoryId}`}
                    id={recommendationCategoryId}
                    className="cool-black no-underline sticky pv3 ph-gutter top-0 break-word lh-static f6 db outline-none-focus"
                  >
                    {key}
                  </a>
                </div>
              </div>

              <div className="white pv3 ph-gutter flex flex-column lh-static measure">
                {value.map(({ title, subtitle, desc, link }, i) => (
                  <details
                    key={title + subtitle}
                    className={"details-reset" + (i ? " mt4" : "")}
                  >
                    <summary className="flex flex-column">
                      <div className="flex flex-column items-start">
                        {subtitle && (
                          <span className="flex f6">{subtitle}</span>
                        )}
                        <span className="fw6">{title}</span>
                        {title === "Bernie Sanders" && (
                          <div className="mv1 w-100 aspect-ratio-bernie mw-bernie">
                            <img
                              alt=""
                              className="absolute absolute--fill"
                              src="/bernie.jpg"
                            />
                          </div>
                        )}
                        <span className="f7 ph2 mt1 br-pill ba b--solid lh-copy ttu open-bg-white open-cool-black open-b--white">
                          Info
                        </span>
                      </div>
                    </summary>

                    {desc ? (
                      desc.map((paragraph, j, { length }) => (
                        <span key={key + j} className="db f6 tj mt1 ti4">
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
                      <span className="db f6 tj mt1">
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
          );
        })}
      </div>
    </>
  );
};

export default Home;
