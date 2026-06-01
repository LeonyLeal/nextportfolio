export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  topics: string[];
};

export type GithubProfile = {
  avatar_url: string;
};

export type GithubData = {
  repos: GithubRepo[];
  profile: GithubProfile;
  forbiddenTopics: string[];
};

let cache: GithubData | null = null;
let lastFetch = 0;

const CACHE_TTL: number = 1000 * 60 * 15;
const GITHUB_API_URL: string = process.env.GITHUB_API_URL ?? "";

const parseForbiddenTopics = () => {
  const value = process.env.FORBIDDEN_TOPICS;

  if (!value) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed.filter(
        (topic): topic is string => typeof topic === "string" && Boolean(topic),
      );
    }
  } catch {
    // Fallback to CSV below.
  }

  return value
    .split(",")
    .map((topic) => topic.trim())
    .filter(Boolean);
};

export async function getGithubData(): Promise<GithubData> {
  const now = Date.now();
  const forbiddenTopics = parseForbiddenTopics();

  if (cache && now - lastFetch < CACHE_TTL) {
    return {
      ...cache,
      forbiddenTopics,
    };
  }

  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const [reposRes, profileRes] = await Promise.all([
    fetch(GITHUB_API_URL + "/repos", { headers }),
    fetch(GITHUB_API_URL, { headers }),
  ]);

  const reposJson: unknown = await reposRes.json();
  const profileJson: Partial<GithubProfile> = await profileRes.json();

  const data: GithubData = {
    repos: Array.isArray(reposJson) ? (reposJson as GithubRepo[]) : [],
    profile: {
      avatar_url: profileJson.avatar_url ?? "/logo512.png",
    },
    forbiddenTopics,
  };

  cache = data;
  lastFetch = now;

  return data;
}
