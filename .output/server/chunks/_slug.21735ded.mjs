import { _ as _export_sfc, i as __nuxt_component_0$1, g as __nuxt_component_0$2, m as __nuxt_component_3 } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = {
  async asyncData({ $content, params }) {
    const compositor = await $content("compositors", params.slug).fetch();
    const books = await $content("albums").where({ compositorId: params.slug }).fetch();
    return { compositor, books };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderView = __nuxt_component_0$1;
  const _component_nuxt_content = resolveComponent("nuxt-content");
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-b76dfbf6>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<div class="row" data-v-b76dfbf6><div class="three columns" data-v-b76dfbf6><img class="u-max-full-width"${ssrRenderAttr("src", "/images/" + _ctx.compositor.image)} alt="Italian Trulli" data-v-b76dfbf6></div><div class="six columns" data-v-b76dfbf6><h1 data-v-b76dfbf6>hola</h1><h4 data-v-b76dfbf6>${ssrInterpolate(_ctx.compositor.name)}</h4> Nationality: ${ssrInterpolate(_ctx.compositor.nationality)}; Born: ${ssrInterpolate(_ctx.compositor.birth_year)} Fields: ${ssrInterpolate(_ctx.compositor.fields)} Biography `);
  _push(ssrRenderComponent(_component_nuxt_content, { document: _ctx.compositor }, null, _parent));
  _push(`</div></div><div class="three columns" data-v-b76dfbf6><h5 data-v-b76dfbf6>Books</h5><ul data-v-b76dfbf6><!--[-->`);
  ssrRenderList(_ctx.books, (book) => {
    _push(`<li data-v-b76dfbf6>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: { name: "compositors-slug", params: { slug: book.slug } }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(book.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(book.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compositors/_slug.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b76dfbf6"]]);

export { _slug as default };
//# sourceMappingURL=_slug.21735ded.mjs.map
