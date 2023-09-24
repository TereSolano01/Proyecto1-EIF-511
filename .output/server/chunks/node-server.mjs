globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, useQuery, useCookie, getQuery, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import { promises } from 'fs';
import { dirname, resolve, extname } from 'pathe';
import { fileURLToPath } from 'url';
import defu from 'defu';
import { unified } from 'unified';
import { toString } from 'mdast-util-to-string';
import { preprocess } from 'micromark/lib/preprocess.js';
import { postprocess } from 'micromark/lib/postprocess.js';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import { position } from 'unist-util-position';
import htmlTags from 'html-tags';
import slugify from 'slugify';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{"content":{"base":"_content","tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":false,"wsUrl":"","documentDriven":false}},"content":{"cacheVersion":2,"cacheIntegrity":"cN8Gkpfl2c","transformers":[],"base":"_content","watch":{"ws":{"port":4000,"showURL":false}},"sources":{},"ignores":["\\.","-"],"locales":[],"highlight":false,"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"remarkPlugins":{},"rehypePlugins":{}},"yaml":{},"csv":{"delimeter":",","json":true},"navigation":{"fields":[]},"documentDriven":false}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject$1(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject$1(obj[key])) {
      if (isObject$1(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('./raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"717-8zCSKOXQKi1z/1F0dA9Z572S34o\"","mtime":"2023-09-24T01:31:33.976Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('./raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"7e8-OUlqO/HvQ4nsO0NL9cZAyQID5e8\"","mtime":"2023-09-24T01:31:33.976Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:aladdin_soundtrack.md"]: {
    import: () => import('./raw/aladdin_soundtrack.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"990-PIr1H8EtzDhShpGzuTikUl9rutI\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:cruella_soundtrack.md"]: {
    import: () => import('./raw/cruella_soundtrack.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"995-Biug9ru3vW7lRnuUV/p73R8c28s\"","mtime":"2023-09-24T01:31:34.004Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:dont_look_up.md"]: {
    import: () => import('./raw/dont_look_up.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"ac7-rWkU+jqQLJc/g6efYBDpyYivf3o\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:enredados_soundtrack.md"]: {
    import: () => import('./raw/enredados_soundtrack.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a6d-XSxb3pIu1Fm7aPE0QV7E+9Zu8SU\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:garra_soundtrack.md"]: {
    import: () => import('./raw/garra_soundtrack.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"abc-zClDAH1S4x5B1G8gEL5bDUSOYeI\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:grease_soundtrack.md"]: {
    import: () => import('./raw/grease_soundtrack.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"ae1-+FdYwEHYwqUHP2EaVaBRgLtCcCc\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:guardianes_galaxy.md"]: {
    import: () => import('./raw/guardianes_galaxy.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a8c-DF9U+Zrlv4XcN80xlArQQRvxT7Y\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:john_wick.md"]: {
    import: () => import('./raw/john_wick.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"9c5-bzhw0oPvGahSvyVNzPgaZYHhTlU\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:luz_de_luna_soundtrack.md"]: {
    import: () => import('./raw/luz_de_luna_soundtrack.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a01-I4XcJxDC3jole2tKyCXf38qpchA\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:star_is_born.md"]: {
    import: () => import('./raw/star_is_born.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"b46-17jrRMJpa3vq+kxGsEl4d6wxR68\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:the_dirt.md"]: {
    import: () => import('./raw/the_dirt.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"8a4-fPojYxIJaMW2n0dzWa0WyZtQ6Do\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:albums:wakanda_forever.md"]: {
    import: () => import('./raw/wakanda_forever.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"916-EalQ2ZMM5vOsBpJPkv4aAmbeLrY\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:aladdin.md"]: {
    import: () => import('./raw/aladdin.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a50-rx5xKvNYQ8ngOx2z6QKjdCQG4to\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:cruella.md"]: {
    import: () => import('./raw/cruella.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"9f0-tNkEMWs+4XxOAIgyxW9APMxDMZ0\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:dont_look_up.md"]: {
    import: () => import('./raw/dont_look_up2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"cc2-JB/DW/+exynlE30+WEnGu/l/zVs\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:enredados.md"]: {
    import: () => import('./raw/enredados.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"869-H2wry2IWnYHj/WbMP86+3vDnhLc\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:garra.md"]: {
    import: () => import('./raw/garra.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a6e-8lMt+/PnxkLZqo+B7PBiEAuIq3M\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:grease.md"]: {
    import: () => import('./raw/grease.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a77-Q+v2WRd29tq6QmeAQyAwemOxbyc\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:guardianes.md"]: {
    import: () => import('./raw/guardianes.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"ae2-7+E8+QKepaFgb/4bhJsc5cf/ZV4\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:john_wick.md"]: {
    import: () => import('./raw/john_wick2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"906-ijkxs1cAKMSzdAT/rBDaAjOFfN0\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:moonlight.md"]: {
    import: () => import('./raw/moonlight.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"9eb-ilHvdqI1Pn/vnPxijnWRgwyvwag\"","mtime":"2023-09-24T01:31:33.996Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:star_us_born.md"]: {
    import: () => import('./raw/star_us_born.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"9dd-exeOqKoESeF2ZQlZX1Zt48ad15U\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:the_dirt.md"]: {
    import: () => import('./raw/the_dirt2.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"b18-FJuxg/4oTGESsan2kvpdXNyi0dE\"","mtime":"2023-09-24T01:31:33.996Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:movies:wakanda.md"]: {
    import: () => import('./raw/wakanda.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"a31-uei7nZF1X8REI6CeR9q6XIJWxJM\"","mtime":"2023-09-24T01:31:33.996Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:compositors:alan_menken.md"]: {
    import: () => import('./raw/alan_menken.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"efd-16z3nuc5FJNdfswlC4Jr1V7DvQk\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:compositors:bradley_cooper.md"]: {
    import: () => import('./raw/bradley_cooper.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"ec6-eQWW8fK+wiraUAIeTfKDKi8pFo0\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:compositors:compositor_britell.md"]: {
    import: () => import('./raw/compositor_britell.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"cd5-9DAOveM+10FNAzXtCojwTa+3huM\"","mtime":"2023-09-24T01:31:34.005Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:compositors:compositor_garra.md"]: {
    import: () => import('./raw/compositor_garra.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1169-STIPfznWeXfPGttVu9GIPUrBN8c\"","mtime":"2023-09-24T01:31:33.977Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:compositors:john_farrar.md"]: {
    import: () => import('./raw/john_farrar.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"e82-yMmd10JyGX7MOW7NyKdFVBlGnPM\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:compositors:nikki_sixx.md"]: {
    import: () => import('./raw/nikki_sixx.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"dc8-s93ps5wfqjVP2VvGPZZHzyxnMXc\"","mtime":"2023-09-24T01:31:33.995Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:compositors:tyler_bates.md"]: {
    import: () => import('./raw/tyler_bates.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"bb2-w2OcZ20vcyG6Tj6uHpvWQO9xuW0\"","mtime":"2023-09-24T01:31:33.995Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const bundledStorage = ["/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('./error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/_nuxt/albums_index.46d2be30.js": {
    "type": "application/javascript",
    "etag": "\"516-1ijFSIfV6EC8OsZ6u8u9jzJpgSM\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 1302,
    "path": "../public/_nuxt/albums_index.46d2be30.js"
  },
  "/_nuxt/albums_index.5f138405.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"57f-MzqTCvwQLGO0Su80/gCtM8rNn4g\"",
    "mtime": "2023-09-24T01:31:30.972Z",
    "size": 1407,
    "path": "../public/_nuxt/albums_index.5f138405.css"
  },
  "/_nuxt/Black-Panther-Wakanda-Forever-Soundtrack.5f11e2de.jpg": {
    "type": "image/jpeg",
    "etag": "\"19c55-0Kw2f0aUFV0IPKgPif8V2TvxlD0\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 105557,
    "path": "../public/_nuxt/Black-Panther-Wakanda-Forever-Soundtrack.5f11e2de.jpg"
  },
  "/_nuxt/compositors_index.3ffa0a28.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"57e-U6ccZlVe31DjIQdDdRDxBGrZ6bY\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 1406,
    "path": "../public/_nuxt/compositors_index.3ffa0a28.css"
  },
  "/_nuxt/compositors_index.844e7fdd.js": {
    "type": "application/javascript",
    "etag": "\"4d7-QTHlhJ9UI/5Kst83n+tOZyxSrtI\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 1239,
    "path": "../public/_nuxt/compositors_index.844e7fdd.js"
  },
  "/_nuxt/ContentNavigation.3c4ebcd6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f5d-IUbnwWIn6QsALxMnWLcqWOVujSU\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 12125,
    "path": "../public/_nuxt/ContentNavigation.3c4ebcd6.css"
  },
  "/_nuxt/ContentNavigation.63b28d35.js": {
    "type": "application/javascript",
    "etag": "\"29e1-QX3M0wI9rlz+JYBYMh4yiM6iO4Q\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 10721,
    "path": "../public/_nuxt/ContentNavigation.63b28d35.js"
  },
  "/_nuxt/ContentSlot.2ed293fb.js": {
    "type": "application/javascript",
    "etag": "\"3c7-Q10SZp9bAQxhsmp/pujBDfg8q6c\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 967,
    "path": "../public/_nuxt/ContentSlot.2ed293fb.js"
  },
  "/_nuxt/cruella-soundtrack.5d52f0fe.jpg": {
    "type": "image/jpeg",
    "etag": "\"38e64-faf9uzZd0bsrUQzWsdAf7P76IBE\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 233060,
    "path": "../public/_nuxt/cruella-soundtrack.5d52f0fe.jpg"
  },
  "/_nuxt/DocumentDrivenEmpty.1d3827b4.js": {
    "type": "application/javascript",
    "etag": "\"120-xY71s+cs8uJfE4RCWc1NhTZisKI\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 288,
    "path": "../public/_nuxt/DocumentDrivenEmpty.1d3827b4.js"
  },
  "/_nuxt/DocumentDrivenNotFound.cd8e3b53.js": {
    "type": "application/javascript",
    "etag": "\"9f-BbLBsOZDtIqaV3XpOc2MbyCa2T4\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 159,
    "path": "../public/_nuxt/DocumentDrivenNotFound.cd8e3b53.js"
  },
  "/_nuxt/entry.a98774ca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a33-nZf82mBcsfpr4qT3gzW9TKL7eEU\"",
    "mtime": "2023-09-24T01:31:30.973Z",
    "size": 2611,
    "path": "../public/_nuxt/entry.a98774ca.css"
  },
  "/_nuxt/entry.f6a242f5.js": {
    "type": "application/javascript",
    "etag": "\"2ae84-UfB/aeoIb/K4JIlbWnSRFAQjfPA\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 175748,
    "path": "../public/_nuxt/entry.f6a242f5.js"
  },
  "/_nuxt/error-404.7ac8d696.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-hMaHvGSS567GOQu1fyihVNKt+g0\"",
    "mtime": "2023-09-24T01:31:30.973Z",
    "size": 3636,
    "path": "../public/_nuxt/error-404.7ac8d696.css"
  },
  "/_nuxt/error-404.b82dc2ba.js": {
    "type": "application/javascript",
    "etag": "\"8ad-Kda0hjx8V2IG8kuI4GbdeS3Hw90\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 2221,
    "path": "../public/_nuxt/error-404.b82dc2ba.js"
  },
  "/_nuxt/error-500.3d492b92.js": {
    "type": "application/javascript",
    "etag": "\"756-HZpYiHUtRULBJH7sF7IgyYh96+A\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.3d492b92.js"
  },
  "/_nuxt/error-500.df34e930.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-souUGRz1nN84Czc1X+mQFJyAKYM\"",
    "mtime": "2023-09-24T01:31:30.973Z",
    "size": 1956,
    "path": "../public/_nuxt/error-500.df34e930.css"
  },
  "/_nuxt/error-component.1b2117e2.js": {
    "type": "application/javascript",
    "etag": "\"439-kcawdmkkzbktduQ9apgkFP88k0g\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 1081,
    "path": "../public/_nuxt/error-component.1b2117e2.js"
  },
  "/_nuxt/FooterView.38174817.js": {
    "type": "application/javascript",
    "etag": "\"342-M0nske+f1CMEI4JhqkjZ0H0St8w\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 834,
    "path": "../public/_nuxt/FooterView.38174817.js"
  },
  "/_nuxt/HeaderView.295d028c.js": {
    "type": "application/javascript",
    "etag": "\"291-D0d1ktvPF1Tf/1cd+hAc76LG//o\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 657,
    "path": "../public/_nuxt/HeaderView.295d028c.js"
  },
  "/_nuxt/index.6d5bb83c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e10-QbyeHc4jF9T3rT58P8vKjAkowP0\"",
    "mtime": "2023-09-24T01:31:30.972Z",
    "size": 3600,
    "path": "../public/_nuxt/index.6d5bb83c.css"
  },
  "/_nuxt/index.ae3c6ac8.js": {
    "type": "application/javascript",
    "etag": "\"e0b-MN4vFzhi725xw7+WQdSZFqSHCtM\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 3595,
    "path": "../public/_nuxt/index.ae3c6ac8.js"
  },
  "/_nuxt/Markdown.acea5d4b.js": {
    "type": "application/javascript",
    "etag": "\"149-wKV/46aVCworWRsK8TArYq/lb0E\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 329,
    "path": "../public/_nuxt/Markdown.acea5d4b.js"
  },
  "/_nuxt/maxresdefault.d501ba7c.jpg": {
    "type": "image/jpeg",
    "etag": "\"27f22-ZK+bxHziJFBbA9rH8oFLpgbye80\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 163618,
    "path": "../public/_nuxt/maxresdefault.d501ba7c.jpg"
  },
  "/_nuxt/movies_index.c53a6b5d.js": {
    "type": "application/javascript",
    "etag": "\"4d4-suyDq1JVpQFKKivF8uwoSBmuQjQ\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 1236,
    "path": "../public/_nuxt/movies_index.c53a6b5d.js"
  },
  "/_nuxt/movies_index.d35a1653.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"57e-k44skXHZUjiIOcvtOrfboCR15FE\"",
    "mtime": "2023-09-24T01:31:30.972Z",
    "size": 1406,
    "path": "../public/_nuxt/movies_index.d35a1653.css"
  },
  "/_nuxt/ProseA.c6ef5047.js": {
    "type": "application/javascript",
    "etag": "\"13d-gqONHWoPSl6CqXjEjywiRkiDwB8\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 317,
    "path": "../public/_nuxt/ProseA.c6ef5047.js"
  },
  "/_nuxt/ProseBlockquote.c8cfa459.js": {
    "type": "application/javascript",
    "etag": "\"c2-UuwUVtQJ7F8S+p78a4b7J4DJZGY\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 194,
    "path": "../public/_nuxt/ProseBlockquote.c8cfa459.js"
  },
  "/_nuxt/ProseCode.181ab51e.js": {
    "type": "application/javascript",
    "etag": "\"13f-fqmy4aydLAdbl/w4CzRFPHuJ7Dc\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 319,
    "path": "../public/_nuxt/ProseCode.181ab51e.js"
  },
  "/_nuxt/ProseCode.e63e49c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 46,
    "path": "../public/_nuxt/ProseCode.e63e49c6.css"
  },
  "/_nuxt/ProseCodeInline.6cba0a03.js": {
    "type": "application/javascript",
    "etag": "\"bc-5XXP+he0Ss6voYduUkXm4ALskXc\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 188,
    "path": "../public/_nuxt/ProseCodeInline.6cba0a03.js"
  },
  "/_nuxt/ProseEm.ab0cb3fb.js": {
    "type": "application/javascript",
    "etag": "\"ba-zT3tl4sCrDac4s8mri2LAiBfiiA\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 186,
    "path": "../public/_nuxt/ProseEm.ab0cb3fb.js"
  },
  "/_nuxt/ProseH1.8e3a6a0f.js": {
    "type": "application/javascript",
    "etag": "\"ba-nwGiWpL9XNe4YIpu0xoP7Er95iY\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 186,
    "path": "../public/_nuxt/ProseH1.8e3a6a0f.js"
  },
  "/_nuxt/ProseH2.69b73800.js": {
    "type": "application/javascript",
    "etag": "\"104-A5ElWgBszyQoN76Zr2UH8szWbdw\"",
    "mtime": "2023-09-24T01:31:30.961Z",
    "size": 260,
    "path": "../public/_nuxt/ProseH2.69b73800.js"
  },
  "/_nuxt/ProseH3.4fd5962a.js": {
    "type": "application/javascript",
    "etag": "\"104-sjVORnwl3qBwfF0HTw6qzFY6WPk\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 260,
    "path": "../public/_nuxt/ProseH3.4fd5962a.js"
  },
  "/_nuxt/ProseH4.a199bee1.js": {
    "type": "application/javascript",
    "etag": "\"104-H+c+aDVaWLw0eSQzB2P4550t618\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 260,
    "path": "../public/_nuxt/ProseH4.a199bee1.js"
  },
  "/_nuxt/ProseH5.5826e6e5.js": {
    "type": "application/javascript",
    "etag": "\"ba-/XjS1cPbMHNQjfc3Wl8+oqnUDAs\"",
    "mtime": "2023-09-24T01:31:30.967Z",
    "size": 186,
    "path": "../public/_nuxt/ProseH5.5826e6e5.js"
  },
  "/_nuxt/ProseH6.b8a6bec2.js": {
    "type": "application/javascript",
    "etag": "\"ba-HVtRWhkwGSKR783yfzFFQ6AzsO0\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 186,
    "path": "../public/_nuxt/ProseH6.b8a6bec2.js"
  },
  "/_nuxt/ProseHr.4ffd37e9.js": {
    "type": "application/javascript",
    "etag": "\"96-YAVuviCDUoXnD+8r5Bo88nQaRxo\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 150,
    "path": "../public/_nuxt/ProseHr.4ffd37e9.js"
  },
  "/_nuxt/ProseImg.c0a27a7a.js": {
    "type": "application/javascript",
    "etag": "\"18a-13dAWeuufK/InaAebCU5JRltq+k\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 394,
    "path": "../public/_nuxt/ProseImg.c0a27a7a.js"
  },
  "/_nuxt/ProseLi.174eb123.js": {
    "type": "application/javascript",
    "etag": "\"ba-kwoVy5FOIG3prPj1GKTWnu7fNb4\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 186,
    "path": "../public/_nuxt/ProseLi.174eb123.js"
  },
  "/_nuxt/ProseOl.5a051611.js": {
    "type": "application/javascript",
    "etag": "\"ba-vx8VrwAafeuTGqAnTUevGc2lm9k\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 186,
    "path": "../public/_nuxt/ProseOl.5a051611.js"
  },
  "/_nuxt/ProseP.19b82ffe.js": {
    "type": "application/javascript",
    "etag": "\"b9-Ij9VdLo0R5FO6gTsKUoPy5/tF64\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 185,
    "path": "../public/_nuxt/ProseP.19b82ffe.js"
  },
  "/_nuxt/ProseStrong.9a9453d3.js": {
    "type": "application/javascript",
    "etag": "\"be-AcI+MPGxJSbaRzFehiQ9NvRruPs\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 190,
    "path": "../public/_nuxt/ProseStrong.9a9453d3.js"
  },
  "/_nuxt/ProseTable.138da3df.js": {
    "type": "application/javascript",
    "etag": "\"bd-tAdoOQ4nitqD55qkPIDIrSOuEkE\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTable.138da3df.js"
  },
  "/_nuxt/ProseTbody.e8c8f9dd.js": {
    "type": "application/javascript",
    "etag": "\"bd-0+KLNM+dYh2HAs0V11PWIFoEHpI\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTbody.e8c8f9dd.js"
  },
  "/_nuxt/ProseTd.dd0c71f3.js": {
    "type": "application/javascript",
    "etag": "\"ba-Kfv1OOdSHo4mXiSCyuWkTDnULs0\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 186,
    "path": "../public/_nuxt/ProseTd.dd0c71f3.js"
  },
  "/_nuxt/ProseTh.e71dac5a.js": {
    "type": "application/javascript",
    "etag": "\"ba-Q2SISD1QhTMAKlTgEXUHWOhmnkA\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 186,
    "path": "../public/_nuxt/ProseTh.e71dac5a.js"
  },
  "/_nuxt/ProseThead.60719ea3.js": {
    "type": "application/javascript",
    "etag": "\"bd-7vaVGBh+pggqnSxfoc5hiw14bLk\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 189,
    "path": "../public/_nuxt/ProseThead.60719ea3.js"
  },
  "/_nuxt/ProseTr.aa4551a0.js": {
    "type": "application/javascript",
    "etag": "\"b5-W4T18zanq15erCAOOBoxul/WCms\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 181,
    "path": "../public/_nuxt/ProseTr.aa4551a0.js"
  },
  "/_nuxt/ProseUl.f671b648.js": {
    "type": "application/javascript",
    "etag": "\"ba-tUcJDdSgMhaWVXUgaxF9aEfJCk8\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 186,
    "path": "../public/_nuxt/ProseUl.f671b648.js"
  },
  "/_nuxt/Screenshot2023-09-20143159.157360ab.png": {
    "type": "image/png",
    "etag": "\"b7c8-VKXE+IJ8S9d2M74JGQkZxB9VSCw\"",
    "mtime": "2023-09-24T01:31:30.964Z",
    "size": 47048,
    "path": "../public/_nuxt/Screenshot2023-09-20143159.157360ab.png"
  },
  "/_nuxt/web-socket.8a8531a7.js": {
    "type": "application/javascript",
    "etag": "\"329-eNEO2amIkGkp434kNXvWME4FMic\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 809,
    "path": "../public/_nuxt/web-socket.8a8531a7.js"
  },
  "/_nuxt/welcome.c59f772c.js": {
    "type": "application/javascript",
    "etag": "\"175ea-VsmMtV9e22/Y9/VolE4QQh+6c3g\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 95722,
    "path": "../public/_nuxt/welcome.c59f772c.js"
  },
  "/_nuxt/_...slug_.119eb9a9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b8-zSr2WL0UY8AsgfT0B0Py32sJP9s\"",
    "mtime": "2023-09-24T01:31:30.972Z",
    "size": 696,
    "path": "../public/_nuxt/_...slug_.119eb9a9.css"
  },
  "/_nuxt/_...slug_.715083a3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b8-l8JhppihKiI057hw1hjnp0rf5HM\"",
    "mtime": "2023-09-24T01:31:30.973Z",
    "size": 696,
    "path": "../public/_nuxt/_...slug_.715083a3.css"
  },
  "/_nuxt/_...slug_.7640b5b2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b8-ziOeF+zIwZQCeAQwTGZ4sH9KXpo\"",
    "mtime": "2023-09-24T01:31:30.973Z",
    "size": 696,
    "path": "../public/_nuxt/_...slug_.7640b5b2.css"
  },
  "/_nuxt/_...slug_.9a2089aa.js": {
    "type": "application/javascript",
    "etag": "\"4aa-JcEqB/sytzNT79dY5mFpdYANyxs\"",
    "mtime": "2023-09-24T01:31:30.968Z",
    "size": 1194,
    "path": "../public/_nuxt/_...slug_.9a2089aa.js"
  },
  "/_nuxt/_...slug_.a40b0ce8.js": {
    "type": "application/javascript",
    "etag": "\"4cc-IWdlkK84nNUaS8yJgHzDO+9e46U\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 1228,
    "path": "../public/_nuxt/_...slug_.a40b0ce8.js"
  },
  "/_nuxt/_...slug_.b448ce4d.js": {
    "type": "application/javascript",
    "etag": "\"4f0-DYF4GVJN036tMYh7/pVsH9oacO8\"",
    "mtime": "2023-09-24T01:31:30.971Z",
    "size": 1264,
    "path": "../public/_nuxt/_...slug_.b448ce4d.js"
  },
  "/api/_content/cache": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"30-h1BSU/hQw1qs3yHVb46Y7fRPA0A\"",
    "mtime": "2023-09-24T01:31:33.968Z",
    "size": 48,
    "path": "../public/api/_content/cache"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    $not: (item, condition) => !match(item, condition),
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    $type: (item, condition) => typeof item === String(condition),
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    $lt: (item, condition) => {
      return item < condition;
    },
    $lte: (item, condition) => {
      return item <= condition;
    },
    $gt: (item, condition) => {
      return item > condition;
    },
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    (data, params) => params.surround ? surround(data, params.surround) : data,
    (data, params) => params.skip ? data.slice(params.skip) : data,
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    (data, params) => apply(withoutKeys(params.without))(data),
    (data, params) => apply(withKeys(params.only))(data),
    (data, params) => params.first ? data[0] : data
  ];
  return async (query) => {
    const data = await getContentsList();
    return pipelines.reduce(($data, pipe) => pipe($data, query.params()) || $data, data);
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? handleListOfConstructs(constructs) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      code
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = parts.join("/");
    return {
      _path: generatePath(filePath),
      _draft: isDraft(filePath),
      _partial: isPartial(filePath),
      _locale,
      ...content,
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path) => withLeadingSlash(withoutTrailingSlash(path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/")));
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)] || {};
    return cur.transform(next, transformOptions);
  }, Promise.resolve(parsed));
  return result;
}

const isPreview = (event) => {
  const previewToken = useQuery(event).previewToken || useCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = useQuery(event).previewToken || useCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await serverQueryContent(event).find();
    contentIndex = data.reduce((acc, item) => {
      if (!acc[item._path]) {
        acc[item._path] = item._id;
      } else if (item._id.startsWith("content:")) {
        acc[item._path] = item._id;
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).map((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map(
  (p) => typeof p === "string" ? new RegExp(`^${p}|:${p}`) : p
);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || contentIgnores.some((prefix) => prefix.test(key))) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event, path) => (query) => {
  if (path) {
    if (query.params().first) {
      query.where({ _path: withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!query.params().sort?.length) {
    query.sort({ _file: 1, $numeric: true });
  }
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, path, ...pathParts) {
  if (typeof path === "string") {
    path = withLeadingSlash(joinURL(path, ...pathParts));
    return createQuery(createServerQueryFetch(event, path));
  }
  return createQuery(createServerQueryFetch(event), path || {});
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const memory = {};
const getContentQuery = (event) => {
  const qid = event.context.params.qid?.replace(/.json$/, "");
  const query = getQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseQueryParams(query._params);
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseQueryParams(query._params);
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  if (query.sort) {
    query.sort = query.sort.split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  return query;
};

const _pnQJrd = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).find();
  if (query.first && Array.isArray(contents) && contents.length === 0) {
    throw createError({
      statusMessage: "Document not found!",
      statusCode: 404,
      data: {
        description: "Could not find document for the given query.",
        query
      }
    });
  }
  return contents;
});

const _7y3Spb = defineEventHandler(async (event) => {
  const now = Date.now();
  await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch("/api/_content/navigation");
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _F2f7nT = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    _partial: false,
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _lazy_6h4sw7 = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_6h4sw7, lazy: true, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid', handler: _pnQJrd, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _pnQJrd, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache', handler: _7y3Spb, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _F2f7nT, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _F2f7nT, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_6h4sw7, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
