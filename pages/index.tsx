import { Fragment } from "react";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="mw-app center pb6-ns pb5 pt5 ph-app">
        {/* Header */}
        <div className="flex flex-column pb4">
          <div className="relative">
            <img alt="DSA logo" src="/dsa@2x.png" className="h3 w-auto" />
          </div>

          <span className="f1 fw7 pt3 pt4-ns">
            Where are
            <br />
            you voting?
          </span>

          <span className="f4 fw7 lh-copy pt3">
            DSA Voter Guide
            <br />
            November 3, 2020
          </span>
        </div>

        {/* Geographies */}
        <div className="not-allowed ph3 mb3 w-100 f4 ba br1 b--dotted lh-solid h3 flex justify-between items-center">
          Denver
          <span className="fr ttu gray f7">Coming soon!</span>
        </div>
        <Link href="/la-nov-20">
          <a className="ph3 mb3 w-100 black no-underline underline-pointer-hover f4 ba br1 b--dotted lh-solid h3 flex justify-between items-center">
            Los Angeles County
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 9L1 17"
                className="cool-red"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </a>
        </Link>
        <div className="not-allowed ph3 mb3 w-100 f4 ba br1 b--dotted lh-solid h3 flex justify-between items-center">
          Miami
          <span className="fr ttu gray f7">Coming soon!</span>
        </div>
        <Link href="/slo-nov-20">
          <a className="ph3 mb3 w-100 black no-underline underline-pointer-hover f4 ba br1 b--dotted lh-solid h3 flex justify-between items-center">
            San Luis Obispo
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 9L1 17"
                className="cool-red"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </a>
        </Link>

        {/* Footer */}
        <span className="db f7 lh-copy gray pt3 pr0-ns pr4">
          This site does not track you. Built in LA by{" "}
          <a
            className="cool-red fw6 no-underline underline-pointer-hover"
            href="https://www.tylerdeitz.com/"
          >
            Tyler
          </a>{" "}
          and friends. Source on{" "}
          <a
            className="cool-red fw6 no-underline underline-pointer-hover"
            href="https://github.com/tvler/retreat-left"
          >
            GitHub
          </a>
          . Want to publish a voter guide for your county?{" "}
          <a
            className="cool-red fw6 no-underline underline-pointer-hover"
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
