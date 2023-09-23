import { _ as _export_sfc, i as __nuxt_component_0, g as __nuxt_component_0$1, m as __nuxt_component_3 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + globalThis.__publicAssetsURL("images/movies/cruella-soundtrack.jpg");
const _imports_1 = "" + globalThis.__buildAssetsURL("maxresdefault.d501ba7c.jpg");
const _imports_2 = "" + globalThis.__buildAssetsURL("Black-Panther-Wakanda-Forever-Soundtrack.5f11e2de.jpg");
const index_vue_vue_type_style_index_0_scoped_da41cacc_lang = "";
const _sfc_main = {
  head() {
    return {
      script: [{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderView = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "blog",
    class: "text-typography_primary, container"
  }, _attrs))} data-v-da41cacc>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<h2 class="titulo-principal" data-v-da41cacc>Soundtracks Populares</h2><div class="carousel" data-v-da41cacc><div class="carousel-inner" data-v-da41cacc><input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" data-v-da41cacc><div class="carousel-item" data-v-da41cacc><img${ssrRenderAttr("src", _imports_0)} alt="Imagen de la noticia" data-v-da41cacc></div><input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" data-v-da41cacc><div class="carousel-item" data-v-da41cacc><img${ssrRenderAttr("src", _imports_1)} alt="Imagen de la noticia" data-v-da41cacc></div><input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" data-v-da41cacc><div class="carousel-item" data-v-da41cacc><img${ssrRenderAttr("src", _imports_2)} alt="Imagen de la noticia" data-v-da41cacc></div><label for="carousel-3" class="carousel-control" data-v-da41cacc>\u2039</label><label for="carousel-2" class="carousel-control" data-v-da41cacc>\u203A</label><label for="carousel-1" class="carousel-control" data-v-da41cacc>\u2039</label><label for="carousel-3" class="carousel-control" data-v-da41cacc>\u203A</label><label for="carousel-2" class="carousel-control" data-v-da41cacc>\u2039</label><label for="carousel-1" class="carousel-control" data-v-da41cacc>\u203A</label><ol class="carousel-indicators" data-v-da41cacc><li data-v-da41cacc><label for="carousel-1" class="carousel-bullet" data-v-da41cacc>\u2022</label></li><li data-v-da41cacc><label for="carousel-2" class="carousel-bullet" data-v-da41cacc>\u2022</label></li><li data-v-da41cacc><label for="carousel-3" class="carousel-bullet" data-v-da41cacc>\u2022</label></li></ol></div></div><div data-v-da41cacc><div class="list" data-v-da41cacc><div data-v-da41cacc>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    style: { "flex": "1" },
    to: "/albums_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\xC1lbumes`);
      } else {
        return [
          createTextVNode("\xC1lbumes")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p data-v-da41cacc>Descubre una variedad de soundtracks de pel\xEDculas que dan vida a tus escenas favoritas. Sum\xE9rgete en emocionantes mundos cinematogr\xE1ficos y emb\xE1rcate en un viaje musical inolvidable.</p></div><div data-v-da41cacc>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    style: { "flex": "1" },
    to: "/compositors_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Compositores`);
      } else {
        return [
          createTextVNode("Compositores")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p data-v-da41cacc>Descubre los genios tras las bandas sonoras de tus pel\xEDculas favoritas. Conoce compositores que han enriquecido la experiencia cinematogr\xE1fica, desde cl\xE1sicos hasta contempor\xE1neos. Explora su impacto en el cine a trav\xE9s de la m\xFAsica.</p></div><div data-v-da41cacc>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    style: { "flex": "1" },
    to: "/movies_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pel\xEDculas`);
      } else {
        return [
          createTextVNode("Pel\xEDculas")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p data-v-da41cacc>Descubre pel\xEDculas que te cautivar\xE1n. Nuestra selecci\xF3n abarca g\xE9neros y \xE9pocas, ofreciendo experiencias \xFAnicas. Desde cl\xE1sicos hasta joyas contempor\xE1neas, explora un mundo de emociones y aventuras.</p></div></div></div>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-da41cacc"]]);
export {
  index as default
};
