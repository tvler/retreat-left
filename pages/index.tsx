import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import { data, filterableRecommendationCategories } from "../data";

type Filter = Record<string, string | string[] | undefined>;

type SetFilter = (category: string, value: string | undefined) => void;

const useFilter = (
  initialFilter: Filter
): {
  filter: Readonly<Filter>;
  setFilter: SetFilter;
  resetFilter: () => void;
} => {
  const router = useRouter();
  const [filter, setFilterWithoutUrlEvent] = useState<Filter>(initialFilter);

  const setFilterWithUrlEvent = (filter: Filter) => {
    router.replace({ pathname: router.pathname, query: filter }, undefined, {
      shallow: true,
    });
    setFilterWithoutUrlEvent(filter);
  };

  const setFilter: SetFilter = (category, value) => {
    const newFilter: Filter = { ...filter };

    if (value) {
      newFilter[category] = value;
    } else {
      delete newFilter[category];
    }

    setFilterWithUrlEvent(newFilter);
  };

  const resetFilter = () => {
    setFilterWithUrlEvent({});
  };

  return { filter, setFilter, resetFilter };
};

export const getServerSideProps: GetServerSideProps<{
  initialFilter: Filter;
}> = async (context) => ({
  props: { initialFilter: context.query },
});

const Home: NextPage<InferGetServerSidePropsType<
  typeof getServerSideProps
>> = ({ initialFilter }) => {
  const router = useRouter();
  const { filter, setFilter, resetFilter } = useFilter(initialFilter);

  const hasFilters = !!Object.keys(filter).length;

  const [selectedHeaderItem, setSelectedHeaderItem] = useState<
    null | "about" | "filter"
  >("filter");

  const urlParts = router.asPath.split("?");
  const queryString = urlParts.length > 1 ? "?" + urlParts[1] : "";

  return (
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
            <span className="white lh-static f6 mt3">
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

            <span className="white lh-static f6 mt3">
              Want to get emailed a new voter guide every election?{" "}
              <a
                href="https://tinyletter.com/retreat-left"
                className="color-inherit fw6"
              >
                Subscribe
              </a>
              .
            </span>

            <span className="white lh-static f6 mt3">
              This site does not track you.
            </span>

            <span className="white lh-static f6 mt3">
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

        {selectedHeaderItem === "filter" && (
          <>
            {data.map(([category, values]) => {
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
                      setFilter(
                        category,
                        ev.target.value === allValue
                          ? undefined
                          : ev.target.value
                      );
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
                  <span className="fw6 white">{filterValue}</span>
                </div>
              );
            })}

            {hasFilters && (
              <button
                onClick={resetFilter}
                className="mt3 bg-cool-black white outline-none-focus input-reset b--white f6 ph2 pv1 br4 ba b--solid lh-title ttu touch-action-manipulation"
              >
                Reset filter
              </button>
            )}
          </>
        )}
      </div>

      {data.map(([category, options], i) => (
        <Fragment key={category}>
          <div className="bg-white flex">
            {!!i && (
              <div className="white mix-blend-mode-diff absolute left-dotted-line right-0 bt b--dash b--dashed bl-0 bb-0 br-0" />
            )}
            <div className="mw-grid ml-auto w-100 flex-grow-1">
              <span className="sticky pv3 ph-gutter top-0 break-word lh-static f6 flex flex-column">
                <span id={category.split(" ").join("-").toLowerCase()}>
                  {category}
                </span>
                {filter[category] && <span className="f7">(Filtered)</span>}
              </span>
            </div>
          </div>

          <div className="white pv3 ph-gutter flex flex-column lh-static measure">
            {options
              .filter((option) =>
                filter[category] ? filter[category] === option.subtitle : true
              )
              .map(({ title, subtitle, desc, link }, i) => {
                const infoId = [category, title, subtitle]
                  .join("-")
                  .split(" ")
                  .join("-")
                  .replace(/\./g, "")
                  .toLowerCase();
                const historyTitle = [
                  "Retreat Left |",
                  category,
                  title,
                  subtitle,
                ].join(" ");
                return (
                  <details
                    key={title + subtitle}
                    className={"details-reset" + (i ? " mt4" : "")}
                  >
                    <summary
                      id={infoId}
                      className="flex flex-column"
                      onClick={(e) =>
                        history.replaceState(
                          {},
                          historyTitle,
                          (e.currentTarget?.parentElement as HTMLDetailsElement)
                            .open
                            ? `/${queryString}`
                            : `/${queryString}#${infoId}`
                        )
                      }
                    >
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
                        <span className="f7 ph2 mt1 br-pill ba b--solid lh-solid pv1 ttu open-bg-white open-cool-black open-b--white">
                          Info
                        </span>
                      </div>
                    </summary>

                    {desc ? (
                      desc.map((paragraph, j, { length }) => (
                        <span key={category + j} className="db f6 tj mt1 ti4">
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
                );
              })}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Home;
