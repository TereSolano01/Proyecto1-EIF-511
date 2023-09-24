import { _ as _export_sfc, i as __nuxt_component_0$1, g as __nuxt_component_0$2, m as __nuxt_component_3 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
    const authors = await $content("compositors").fetch();
    return {
      authors
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderView = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-3893407b>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<h3 style="${ssrRenderStyle({ "margin-top": "15px" })}" data-v-3893407b>Authors Information</h3><p data-v-3893407b>This section presents information about authors</p><ul data-v-3893407b><!--[-->`);
  ssrRenderList(_ctx.authors, (author) => {
    _push(`<li data-v-3893407b>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: { name: "authors-slug", params: { slug: author.slug } }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(author.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(author.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compositors_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const compositors_index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3893407b"]]);

export { compositors_index as default };
//# sourceMappingURL=compositors_index.eb9477c8.mjs.map
