let cache = null;
let lastFetch = 0;

const CACHE_TTL = 1000 * 60 * 15;

export async function getGithubData() {
  const now = Date.now();
  const forbiddenTopics = process.env.FORBIDDEN_TOPICS ?? []

  if (cache && now - lastFetch < CACHE_TTL) {
    return cache;
  }

  const token = process.env.GITHUB_TOKEN;

  const [reposRes, profileRes] = await Promise.all([
    fetch('https://api.github.com/users/LeonyLeal/repos', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }),
    fetch('https://api.github.com/users/LeonyLeal', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }),
  ]);

  const reposJson = await reposRes.json();
  const profile = await profileRes.json();

  const data = {
    repos: Array.isArray(reposJson) ? reposJson : [],
    profile,
    forbiddenTopics
  };

  cache = data;
  lastFetch = now;

  return data;
}
