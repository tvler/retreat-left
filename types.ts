import { ReactNode } from "react";

type VoterGuideEntry = Readonly<{
  subtitle?: string;
  title: string;
  desc?: ReadonlyArray<ReactNode>;
  link: string;
  endorsed: boolean;
}>;

type VoterGuideCategory = string;

export type VoterGuide = ReadonlyArray<
  [VoterGuideCategory, ReadonlyArray<VoterGuideEntry>]
>;
