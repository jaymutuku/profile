(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    QeBL: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("q1tI"),
        a = n.n(r),
        i = n("Zttt"),
        o = n("wtQ5"),
        l = n("Wbzz"),
        c = n("OKcn"),
        m = n("vOnD"),
        d = n("ZMKu").b.custom(
          m.b.button.withConfig({
            displayName: "styles__Button",
            componentId: "sc-1hfngif-0",
          })(
            ["outline:none !important;", ";", ";", ";"],
            {
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              borderRadius: "9999px",
              borderWidth: "1px",
              borderColor: "#ed64a6",
              color: "#fff",
            },
            function (e) {
              return e.primary
                ? { backgroundColor: "#ed64a6" }
                : { color: "#ed64a6" };
            },
            function (e) {
              return e.block && { width: "100%" };
            }
          )
        ),
        u = function (e) {
          var t = e.primary,
            n = e.block,
            r = e.children;
          return a.a.createElement(
            d,
            {
              primary: t,
              block: n,
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
            },
            r
          );
        },
        s = n("q5BQ"),
        p = m.b.section.withConfig({
          displayName: "styles__Banner",
          componentId: "ny8etw-0",
        })(["", ";"], {
          backgroundColor: "#f7fafc",
          borderBottomWidth: "1px",
          borderColor: "#ebf4ff",
        }),
        f = m.b.p.withConfig({
          displayName: "styles__Content",
          componentId: "ny8etw-1",
        })(["", ";"], { marginBottom: "2rem" }),
        b = function (e) {
          var t = e.title,
            n = e.subtitle,
            r = e.content,
            i = e.linkTo,
            o = e.linkText;
          return a.a.createElement(
            p,
            null,
            a.a.createElement(
              c.a,
              { section: !0 },
              a.a.createElement(s.a, { title: t, subtitle: n }),
              a.a.createElement(f, null, r),
              a.a.createElement(
                l.Link,
                { to: i },
                a.a.createElement(u, { primary: !0 }, o)
              )
            )
          );
        },
        w = function () {
          var e = Object(l.useStaticQuery)("895077190").markdownRemark
            .frontmatter;
          return a.a.createElement(b, {
            title: e.title,
            subtitle: e.subtitle,
            content: e.content,
            linkTo: e.linkTo,
            linkText: e.linkText,
          });
        },
        y = n("9BYq"),
        k = m.b.div.withConfig({
          displayName: "styles__Services",
          componentId: "y7irvu-0",
        })(["", ";"], {
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "-0.75rem",
          marginRight: "-0.75rem",
        }),
        g = m.b.div.withConfig({
          displayName: "styles__ServiceItem",
          componentId: "y7irvu-1",
        })(["", ";"], {
          width: "100%",
          "@media (min-width: 640px)": { width: "50%" },
        }),
        h = function () {
          var e = Object(l.useStaticQuery)("1857913437"),
            t = e.markdownRemark,
            n = e.allMarkdownRemark,
            r = t.frontmatter,
            i = n.edges;
          return a.a.createElement(
            c.a,
            { section: !0 },
            a.a.createElement(s.a, {
              title: r.title,
              subtitle: r.subtitle,
              center: !0,
            }),
            a.a.createElement(
              k,
              null,
              i.map(function (e) {
                var t = e.node,
                  n = t.id,
                  r = t.frontmatter,
                  i = r.title,
                  o = r.icon,
                  l = r.description;
                return a.a.createElement(
                  g,
                  { key: n },
                  a.a.createElement(y.a, { icon: o, title: i, content: l })
                );
              })
            )
          );
        };
      t.default = function () {
        return a.a.createElement(
          i.a,
          null,
          a.a.createElement(o.a, { title: "About Me" }),
          a.a.createElement(w, null),
          a.a.createElement(h, null)
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-da55d9337158c2c2e6f5.js.map
