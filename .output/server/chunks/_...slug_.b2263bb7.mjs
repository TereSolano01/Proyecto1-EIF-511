import { _ as _export_sfc, i as __nuxt_component_0$1, k as _sfc_main$4, g as __nuxt_component_0$2, l as _sfc_main$6, m as __nuxt_component_3 } from './server.mjs';
import { withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import 'defu';
import '@vue/shared';
import 'scule';
import 'property-information';
import 'html-tags';
import 'ohash';
import 'cookie-es';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'fs';
import 'pathe';
import 'url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'slugify';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderView = __nuxt_component_0$1;
  const _component_ContentDoc = _sfc_main$4;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_ContentRenderer = _sfc_main$6;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-039c87e2>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<div data-v-039c87e2>`);
  _push(ssrRenderComponent(_component_ContentDoc, null, {
    default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 data-v-039c87e2${_scopeId}>${ssrInterpolate(doc.title)}</h4><div class="content-section" data-v-039c87e2${_scopeId}><div class="image-and-title" data-v-039c87e2${_scopeId}><div class="image-column" data-v-039c87e2${_scopeId}><img${ssrRenderAttr("src", "/images/" + doc.image)} data-v-039c87e2${_scopeId}></div><div class="title-column" data-v-039c87e2${_scopeId}><div data-v-039c87e2${_scopeId}><p data-v-039c87e2${_scopeId}>Compositores: `);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/compositors/" + doc.compositorId
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(doc.compositor)}`);
            } else {
              return [
                createTextVNode(toDisplayString(doc.compositor), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</p><p data-v-039c87e2${_scopeId}> A\xF1o staticacion: ${ssrInterpolate(doc.year)};</p><p data-v-039c87e2${_scopeId}>Generos: ${ssrInterpolate(doc.fields)}</p><p data-v-039c87e2${_scopeId}>Pelicula: `);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/movies/" + doc.movieId
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(doc.movie)}`);
            } else {
              return [
                createTextVNode(toDisplayString(doc.movie), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</p></div><div class="info-section" data-v-039c87e2${_scopeId}><pre data-v-039c87e2${_scopeId}></pre>`);
        _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
        _push2(`</div></div></div></div><div data-v-039c87e2${_scopeId}></div>`);
      } else {
        return [
          createVNode("h4", null, toDisplayString(doc.title), 1),
          createVNode("div", { class: "content-section" }, [
            createVNode("div", { class: "image-and-title" }, [
              createVNode("div", { class: "image-column" }, [
                createVNode("img", {
                  src: "/images/" + doc.image
                }, null, 8, ["src"])
              ]),
              createVNode("div", { class: "title-column" }, [
                createVNode("div", null, [
                  createVNode("p", null, [
                    createTextVNode("Compositores: "),
                    createVNode(_component_NuxtLink, {
                      to: "/compositors/" + doc.compositorId
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(doc.compositor), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  createVNode("p", null, " A\xF1o staticacion: " + toDisplayString(doc.year) + ";", 1),
                  createVNode("p", null, "Generos: " + toDisplayString(doc.fields), 1),
                  createVNode("p", null, [
                    createTextVNode("Pelicula: "),
                    createVNode(_component_NuxtLink, {
                      to: "/movies/" + doc.movieId
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(doc.movie), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ]),
                createVNode("div", { class: "info-section" }, [
                  createVNode("pre"),
                  createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                ])
              ])
            ])
          ]),
          createVNode("div")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-039c87e2"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_.b2263bb7.mjs.map
