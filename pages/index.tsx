import { Fragment } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import { data } from "../data";

const Home: NextPage = () => {
  const router = useRouter();

  const urlParts = router.asPath.split("?");
  const queryString = urlParts.length > 1 ? "?" + urlParts[1] : "";

  return (
    <>
      <div className="page-container center pb6-ns pb5">
        {/* Header */}
        <div className="mw-grid w-100 flex flex-column ph-gutter pb0 pb3-ns">
          <img
            alt="DSA logo"
            src="/logo@2x.png"
            className="pt5 pb3 pb4-ns"
            width="64"
            height="64"
          />
          <span className="f1 fw7">
            DSA
            <br />
            Voter
            <br />
            Guide
          </span>
          <span className="f4 fw7  lh-copy pt3">
            Nov ‘20 General Election
            <br />
            Los Angeles County
          </span>
          <span className="f6 pv3 pr4 pr0-ns lh-copy">
            Endorsements (<span className="red fw7">*</span>) and
            recommendations by the <a href="https://www.dsausa.org/">DSA</a>.
            Want a new Los Angeles County voter guide every election?{" "}
            <a href="https://tinyletter.com/retreat-left">Subscribe</a>.
          </span>
        </div>

        {/* Grid */}
        <div className="grid relative">
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
              <div className="pv3 pr3 flex flex-column lh-static">
                {options.map(({ title, subtitle, desc, link }, i) => {
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
                      className={"details-reset" + (i ? " mt3" : "")}
                    >
                      <summary
                        id={infoId}
                        className="flex flex-column"
                        onClick={(e) =>
                          history.replaceState(
                            {},
                            historyTitle,
                            (e.currentTarget
                              ?.parentElement as HTMLDetailsElement).open
                              ? `/${queryString}`
                              : `/${queryString}#${infoId}`
                          )
                        }
                      >
                        <div className="flex flex-column items-start pointer">
                          <span className="fw6 title underline-pointer-hover">
                            {title}
                            <span className="info dib br-100">
                              <img
                                className="relative"
                                alt="Info"
                                src="/i.svg"
                              />
                            </span>
                          </span>

                          {subtitle && (
                            <span className="flex f7 pt1 lh-solid gray">
                              {subtitle}
                            </span>
                          )}
                        </div>
                      </summary>

                      {desc ? (
                        desc.map((paragraph, j, { length }) => (
                          <span
                            key={category + j}
                            className="db f6 mt2 lh-copy"
                          >
                            {paragraph}
                            {j === length - 1 && <a href={link}> [source]</a>}
                          </span>
                        ))
                      ) : (
                        <span className="db f6 mt1">
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

        {/* Footer */}
        <div className="w-100 flex flex-column ph-gutter pt4">
          <span className="f7 lh-copy gray bt b--light-gray pt3 pr0-ns pr4">
            This site does not track you. Built in LA by{" "}
            <a href="https://www.tylerdeitz.com/">Tyler</a> and friends. Source
            on <a href="https://github.com/tvler/retreat-left">GitHub</a>. Want
            to publish a voter guide for your county?{" "}
            <a href="mailto:tylerdeitz@gmail.com">Get in touch</a>.
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
