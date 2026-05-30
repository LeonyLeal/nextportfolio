import type { StaticImageData } from "next/image";

import LightFacebookSVG from "../public/img/socials/light/facebook.svg";
import LightFigmaSVG from "../public/img/socials/light/figma.svg";
import LightGithubSVG from "../public/img/socials/light/github.svg";
import LightGithubFillSVG from "../public/img/socials/light/githubFill.svg";
import LightInstagramSVG from "../public/img/socials/light/instagram.svg";
import LightLinkedinSVG from "../public/img/socials/light/linkedin.svg";
import LightTwitterSVG from "../public/img/socials/light/twitter.svg";
import LightBtnThemeSVG from "../public/img/btnTheme/light/themeSvg.svg";
import LightBtnThemeFillSVG from "../public/img/btnTheme/light/themeSvgFill.svg";
import LightMenuSVG from "../public/img/menu/light/menuLight.svg";
import LightBurgerSVG from "../public/img/menu/light/burger.svg";

import DarkFacebookSVG from "../public/img/socials/dark/facebook.svg";
import DarkFigmaSVG from "../public/img/socials/dark/figma.svg";
import DarkGithubSVG from "../public/img/socials/dark/github.svg";
import DarkGithubFillSVG from "../public/img/socials/dark/githubFill.svg";
import DarkInstagramSVG from "../public/img/socials/dark/instagram.svg";
import DarkLinkedinSVG from "../public/img/socials/dark/linkedin.svg";
import DarkTwitterSVG from "../public/img/socials/dark/twitter.svg";
import DarkBtnThemeSVG from "../public/img/btnTheme/dark/themeSvg.svg";
import DarkBtnThemeFillSVG from "../public/img/btnTheme/dark/themeSvgFill.svg";
import DarkMenuSVG from "../public/img/menu/dark/menuDark.svg";
import DarkBurgerSVG from "../public/img/menu/dark/burger.svg";

import FacebookFillSVG from "../public/img/socials/facebookFill.svg";
import FigmaFillSVG from "../public/img/socials/figmaFill.svg";
import InstagramFillSVG from "../public/img/socials/instagramFill.svg";
import LinkedinFillSVG from "../public/img/socials/linkedinFill.svg";
import TwitterFillSVG from "../public/img/socials/twitterFill.svg";

export type ThemeName = "dark" | "light";

type ThemeAsset = StaticImageData;

export type AppTheme = {
  name: ThemeName;
  social: {
    facebook: ThemeAsset;
    facebookFill: ThemeAsset;
    figma: ThemeAsset;
    figmaFill: ThemeAsset;
    github: ThemeAsset;
    githubFill: ThemeAsset;
    instagram: ThemeAsset;
    instagramFill: ThemeAsset;
    linkedin: ThemeAsset;
    linkedinFill: ThemeAsset;
    twitter: ThemeAsset;
    twitterFill: ThemeAsset;
  };
  buttonTheme: ThemeAsset;
  buttonThemeFill: ThemeAsset;
  menuBackground: ThemeAsset;
  burger: ThemeAsset;
};

export const themes: Record<ThemeName, AppTheme> = {
  light: {
    name: "light",
    social: {
      facebook: LightFacebookSVG,
      facebookFill: FacebookFillSVG,
      figma: LightFigmaSVG,
      figmaFill: FigmaFillSVG,
      github: LightGithubSVG,
      githubFill: LightGithubFillSVG,
      instagram: LightInstagramSVG,
      instagramFill: InstagramFillSVG,
      linkedin: LightLinkedinSVG,
      linkedinFill: LinkedinFillSVG,
      twitter: LightTwitterSVG,
      twitterFill: TwitterFillSVG,
    },
    buttonTheme: LightBtnThemeSVG,
    buttonThemeFill: LightBtnThemeFillSVG,
    menuBackground: LightMenuSVG,
    burger: LightBurgerSVG,
  },
  dark: {
    name: "dark",
    social: {
      facebook: DarkFacebookSVG,
      facebookFill: FacebookFillSVG,
      figma: DarkFigmaSVG,
      figmaFill: FigmaFillSVG,
      github: DarkGithubSVG,
      githubFill: DarkGithubFillSVG,
      instagram: DarkInstagramSVG,
      instagramFill: InstagramFillSVG,
      linkedin: DarkLinkedinSVG,
      linkedinFill: LinkedinFillSVG,
      twitter: DarkTwitterSVG,
      twitterFill: TwitterFillSVG,
    },
    buttonTheme: DarkBtnThemeSVG,
    buttonThemeFill: DarkBtnThemeFillSVG,
    menuBackground: DarkMenuSVG,
    burger: DarkBurgerSVG,
  },
};

export const cardPalette = {
  background: {
    red: "linear-gradient(180deg, #EA3A46 0%, #BF323C 100%)",
    green: "linear-gradient(180deg, #55BAA3 0%, #44A891 100%)",
    blue: "linear-gradient(180deg, #27ABEE 0%, #228EC5 100%)",
    purple: "linear-gradient(180deg, #8765DE 0%, #694CB3 100%)",
  },
  border: {
    red: "#EA3A46",
    green: "#55BAA3",
    blue: "#27ABEE",
    purple: "#8765DE",
    selectedRed: "#9A1F27",
    selectedGreen: "#137D66",
    selectedBlue: "#166C98",
    selectedPurple: "#5B409C",
  },
} as const;
