(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "0Aie": function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("q1tI"),
        i = n.n(a),
        r = n("Zttt"),
        c = n("wtQ5"),
        o = n("Wbzz"),
        l = n("9BYq"),
        m = n("OKcn"),
        u = n("q5BQ"),
        d = n("vOnD").b.div.withConfig({
          displayName: "styles__ContactInfoItem",
          componentId: "uqk63y-0",
        })(["", ";"], {
          width: "100%",
          "@media (min-width: 640px)": { width: "33.333333%" },
        }),
        s = function () {
          var t = Object(o.useStaticQuery)("2326938895"),
            e = t.markdownRemark,
            n = t.allMarkdownRemark,
            a = e.frontmatter,
            r = n.edges;
          return i.a.createElement(
            m.a,
            { section: !0 },
            i.a.createElement(u.a, {
              title: a.title,
              subtitle: a.subtitle,
              center: !0,
            }),
            r.map(function (t) {
              var e = t.node,
                n = e.id,
                a = e.frontmatter,
                r = a.title,
                c = a.icon,
                o = a.content;
              return i.a.createElement(
                d,
                { key: n },
                i.a.createElement(l.a, {
                  icon: c,
                  title: r,
                  content: o,
                  center: !0,
                })
              );
            })
          );
        };
      e.default = function () {
        return i.a.createElement(
          r.a,
          null,
          i.a.createElement(c.a, { title: "Contact" }),
          i.a.createElement(s, null)
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-contact-tsx-51ce6657d6c4e00279fa.js.map
