import { _ as _export_sfc, i as __nuxt_component_0, n as _sfc_main$1, g as __nuxt_component_0$1, m as __nuxt_component_3 } from "../server.mjs";
import { withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
const movies_index_vue_vue_type_style_index_0_scoped_36171fe1_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderView = __nuxt_component_0;
  const _component_ContentList = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-36171fe1>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<h2 style="${ssrRenderStyle({ "margin-top": "15px" })}" data-v-36171fe1>Pel\xEDculas</h2><p data-v-36171fe1>Esta secci\xF3n presenta informaci\xF3n sobre pel\xEDculas.</p><div class="container centered-content" data-v-36171fe1><ul data-v-36171fe1>`);
  _push(ssrRenderComponent(_component_ContentList, { path: "/movies" }, {
    default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid-container" data-v-36171fe1${_scopeId}><!--[-->`);
        ssrRenderList(list, (movie) => {
          _push2(`<span class="grid-item" data-v-36171fe1${_scopeId}>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: movie._path
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img class="u-max-full-width"${ssrRenderAttr("src", "/images/" + movie.image)} alt="Descripci\xF3n de la imagen" data-v-36171fe1${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: movie._path
                }, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(movie.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(movie.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`<p class="goto" data-v-36171fe1${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: movie._path
                }, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Ver pel\xEDcula<i class="fa-solid fa-chevron-right" style="${ssrRenderStyle({ "color": "#000000" })}" data-v-36171fe1${_scopeId3}></i>`);
                    } else {
                      return [
                        createTextVNode("Ver pel\xEDcula"),
                        createVNode("i", {
                          class: "fa-solid fa-chevron-right",
                          style: { "color": "#000000" }
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</p>`);
              } else {
                return [
                  createVNode("img", {
                    class: "u-max-full-width",
                    src: "/images/" + movie.image,
                    alt: "Descripci\xF3n de la imagen"
                  }, null, 8, ["src"]),
                  createVNode(_component_NuxtLink, {
                    to: movie._path
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(movie.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]),
                  createVNode("p", { class: "goto" }, [
                    createVNode(_component_NuxtLink, {
                      to: movie._path
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Ver pel\xEDcula"),
                        createVNode("i", {
                          class: "fa-solid fa-chevron-right",
                          style: { "color": "#000000" }
                        })
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</span>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "grid-container" }, [
            (openBlock(true), createBlock(Fragment, null, renderList(list, (movie) => {
              return openBlock(), createBlock("span", {
                key: movie._path,
                class: "grid-item"
              }, [
                createVNode(_component_NuxtLink, {
                  to: movie._path
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "u-max-full-width",
                      src: "/images/" + movie.image,
                      alt: "Descripci\xF3n de la imagen"
                    }, null, 8, ["src"]),
                    createVNode(_component_NuxtLink, {
                      to: movie._path
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(movie.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode("p", { class: "goto" }, [
                      createVNode(_component_NuxtLink, {
                        to: movie._path
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Ver pel\xEDcula"),
                          createVNode("i", {
                            class: "fa-solid fa-chevron-right",
                            style: { "color": "#000000" }
                          })
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]);
            }), 128))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></div>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movies_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const movies_index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-36171fe1"]]);
export {
  movies_index as default
};
