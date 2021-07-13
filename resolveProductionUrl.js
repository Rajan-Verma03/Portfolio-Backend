export default function resolveProductionUrl(document) {
  return `http://localhost:3001/projects/${document.slug.current}`;
}
