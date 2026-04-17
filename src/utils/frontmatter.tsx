// Minimal YAML-ish frontmatter parser.
// Handles `key: value`, quoted strings, and `[foo, bar, "baz"]` list values.
// Not a full YAML parser — nested objects and multi-line strings aren't supported.

export type Frontmatter = Record<string, string | string[]>;

export const parseFrontmatter = (
  raw: string,
): { content: string; data: Frontmatter } => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { content: raw, data: {} };

  const data: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!kv) continue;
    const [, key, rest] = kv;
    const trimmed = rest.trim();

    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      data[key] = trimmed
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    } else if (
      (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'"))
    ) {
      data[key] = trimmed.slice(1, -1);
    } else {
      data[key] = trimmed;
    }
  }

  return { content: raw.slice(match[0].length), data };
};

export const slugFromPath = (path: string) =>
  path
    .split('/')
    .pop()!
    .replace(/\.[^.]+$/, '');
