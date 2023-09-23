import { _ as _export_sfc, i as __nuxt_component_0, k as _sfc_main$1, l as _sfc_main$2, o as _sfc_main$3, g as __nuxt_component_0$1, m as __nuxt_component_3 } from "../server.mjs";
import { withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
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
const ____slug__vue_vue_type_style_index_0_scoped_ddec69c2_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderView = __nuxt_component_0;
  const _component_ContentDoc = _sfc_main$1;
  const _component_ContentRenderer = _sfc_main$2;
  const _component_ContentQuery = _sfc_main$3;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-ddec69c2>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<div data-v-ddec69c2>`);
  _push(ssrRenderComponent(_component_ContentDoc, null, {
    default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 data-v-ddec69c2${_scopeId}>${ssrInterpolate(doc.name)}</h4><div class="content-section" data-v-ddec69c2${_scopeId}><div class="image-and-title" data-v-ddec69c2${_scopeId}><div class="image-column" data-v-ddec69c2${_scopeId}><img${ssrRenderAttr("src", "/images/" + doc.image)} data-v-ddec69c2${_scopeId}></div><div class="title-column" data-v-ddec69c2${_scopeId}><div data-v-ddec69c2${_scopeId}><p data-v-ddec69c2${_scopeId}> Nacionalidad: ${ssrInterpolate(doc.nationality)}</p><p data-v-ddec69c2${_scopeId}>A\xF1o de nacimiento: ${ssrInterpolate(doc.birth_year)}</p><p data-v-ddec69c2${_scopeId}>Fields: ${ssrInterpolate(doc.fields)}</p></div><div class="info-section" data-v-ddec69c2${_scopeId}><pre data-v-ddec69c2${_scopeId}></pre>`);
        _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
        _push2(`<ul data-v-ddec69c2${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ContentQuery, {
          path: "/albums",
          where: { compositorId: doc.id }
        }, {
          default: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(data, (album) => {
                _push3(`<li data-v-ddec69c2${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: album._path
                }, {
                  default: withCtx((_, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(album.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(album.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</li>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(data, (album) => {
                  return openBlock(), createBlock("li", {
                    key: album._path
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: album._path
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(album.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</ul></div></div></div></div><div data-v-ddec69c2${_scopeId}></div>`);
      } else {
        return [
          createVNode("h4", null, toDisplayString(doc.name), 1),
          createVNode("div", { class: "content-section" }, [
            createVNode("div", { class: "image-and-title" }, [
              createVNode("div", { class: "image-column" }, [
                createVNode("img", {
                  src: "/images/" + doc.image
                }, null, 8, ["src"])
              ]),
              createVNode("div", { class: "title-column" }, [
                createVNode("div", null, [
                  createVNode("p", null, " Nacionalidad: " + toDisplayString(doc.nationality), 1),
                  createVNode("p", null, "A\xF1o de nacimiento: " + toDisplayString(doc.birth_year), 1),
                  createVNode("p", null, "Fields: " + toDisplayString(doc.fields), 1)
                ]),
                createVNode("div", { class: "info-section" }, [
                  createVNode("pre"),
                  createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"]),
                  createVNode("ul", null, [
                    createVNode(_component_ContentQuery, {
                      path: "/albums",
                      where: { compositorId: doc.id }
                    }, {
                      default: withCtx(({ data }) => [
                        (openBlock(true), createBlock(Fragment, null, renderList(data, (album) => {
                          return openBlock(), createBlock("li", {
                            key: album._path
                          }, [
                            createVNode(_component_NuxtLink, {
                              to: album._path
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(album.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["where"])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compositors/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ddec69c2"]]);
export {
  ____slug_ as default
};
