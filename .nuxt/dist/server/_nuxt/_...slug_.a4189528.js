import { _ as _export_sfc, i as __nuxt_component_0, k as _sfc_main$1, g as __nuxt_component_0$1, l as _sfc_main$2, m as __nuxt_component_3 } from "../server.mjs";
import { withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
import "scule";
import "property-information";
import "html-tags";
import "ohash";
import "cookie-es";
const ____slug__vue_vue_type_style_index_0_scoped_f4760b67_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderView = __nuxt_component_0;
  const _component_ContentDoc = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_ContentRenderer = _sfc_main$2;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f4760b67>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<div data-v-f4760b67>`);
  _push(ssrRenderComponent(_component_ContentDoc, null, {
    default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 data-v-f4760b67${_scopeId}>${ssrInterpolate(doc.title)}</h4><div class="content-section" data-v-f4760b67${_scopeId}><div class="image-and-title" data-v-f4760b67${_scopeId}><div class="image-column" data-v-f4760b67${_scopeId}><img${ssrRenderAttr("src", "/images/" + doc.image)} data-v-f4760b67${_scopeId}></div><div class="title-column" data-v-f4760b67${_scopeId}><div data-v-f4760b67${_scopeId}><p data-v-f4760b67${_scopeId}>Compositores: `);
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
        _push2(`</p><p data-v-f4760b67${_scopeId}> A\xF1o publicacion: ${ssrInterpolate(doc.year)};</p><p data-v-f4760b67${_scopeId}>Generos: ${ssrInterpolate(doc.fields)}</p><p data-v-f4760b67${_scopeId}>Pelicula: `);
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
        _push2(`</p></div><div class="info-section" data-v-f4760b67${_scopeId}><pre data-v-f4760b67${_scopeId}></pre>`);
        _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
        _push2(`</div></div></div></div><div data-v-f4760b67${_scopeId}></div>`);
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
                  createVNode("p", null, " A\xF1o publicacion: " + toDisplayString(doc.year) + ";", 1),
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
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f4760b67"]]);
export {
  ____slug_ as default
};
