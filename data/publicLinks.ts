export type PublicLinks = {
  github: string;
  linkedin: string;
  instagram: string;
};

export function getPublicLinks(): PublicLinks {
  return {
    github: process.env.GITHUB_URL ?? "",
    linkedin: process.env.LINKEDIN_URL ?? "",
    instagram: process.env.INSTAGRAM_URL ?? "",
  };
}
