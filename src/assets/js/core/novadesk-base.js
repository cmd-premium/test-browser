/**
 * When NovaDesk serves Waves under /waves, `window.__NOVADESK_WAVES_BASE__` is set (e.g. "/waves").
 * Standalone Waves leaves this unset; all URLs stay root-relative.
 */
export function novadeskWavesBase() {
  if (typeof window === "undefined") return "";
  return window.__NOVADESK_WAVES_BASE__ || "";
}

export function wavesUrl(path) {
  const b = novadeskWavesBase();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${b}${p}`;
}
