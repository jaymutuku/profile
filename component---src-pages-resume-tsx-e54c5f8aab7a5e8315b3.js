(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    UTyF: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        i = n.n(a),
        r = n("Zttt"),
        l = n("wtQ5"),
        d = n("Wbzz"),
        o = n("vOnD"),
        s = o.b.div.withConfig({
          displayName: "styles__Timeline",
          componentId: "sc-1df2e4x-0",
        })(
          ["", ";&:last-child{", ";}"],
          {
            display: "flex",
            flexDirection: "column",
            "@media (min-width: 640px)": { flexDirection: "row" },
            width: "100%",
            padding: "1rem",
            position: "relative",
            borderLeftWidth: "1px",
            borderColor: "#c3dafe",
          },
          { paddingBottom: "0" }
        ),
        m = o.b.div.withConfig({
          displayName: "styles__Details",
          componentId: "sc-1df2e4x-1",
        })(["", ";"], {
          width: "100%",
          "@media (min-width: 640px)": { width: "33.333333%" },
        }),
        c = o.b.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-1df2e4x-2",
        })(["", ";"], {
          width: "100%",
          "@media (min-width: 640px)": { width: "66.666667%", marginTop: "0" },
          marginTop: "1rem",
        }),
        p = o.b.div.withConfig({
          displayName: "styles__Title",
          componentId: "sc-1df2e4x-3",
        })(["", ";"], { fontWeight: "600", marginTop: "0.75rem" }),
        u = o.b.div.withConfig({
          displayName: "styles__Subtitle",
          componentId: "sc-1df2e4x-4",
        })(["", ";"], { fontSize: "0.75rem" }),
        f = o.b.div.withConfig({
          displayName: "styles__Date",
          componentId: "sc-1df2e4x-5",
        })(["", ";width:fit-content;"], {
          fontSize: "0.75rem",
          borderWidth: "1px",
          borderColor: "#ed64a6",
          borderRadius: "9999px",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }),
        h = o.b.span.withConfig({
          displayName: "styles__Point",
          componentId: "sc-1df2e4x-6",
        })(["", ";left:-6px;top:20px;"], {
          width: "0.75rem",
          height: "0.75rem",
          borderWidth: "1px",
          borderColor: "#c3dafe",
          backgroundColor: "#ebf4ff",
          borderRadius: "9999px",
          position: "absolute",
        }),
        w = function (e) {
          var t = e.title,
            n = e.subtitle,
            a = e.content,
            r = e.startDate,
            l = e.endDate;
          return i.a.createElement(
            s,
            null,
            i.a.createElement(h, null),
            i.a.createElement(
              m,
              null,
              i.a.createElement(f, null, r, " - ", l),
              i.a.createElement(p, null, t),
              i.a.createElement(u, null, n)
            ),
            i.a.createElement(c, null, a)
          );
        },
        g = n("OKcn"),
        b = n("q5BQ"),
        y = function (e) {
          var t = e.content;
          return i.a.createElement("span", {
            className: "format-html",
            dangerouslySetInnerHTML: { __html: t },
          });
        },
        E = function () {
          var e = Object(d.useStaticQuery)("4033427577"),
            t = e.markdownRemark,
            n = e.allMarkdownRemark,
            a = t.frontmatter,
            r = n.edges;
          return i.a.createElement(
            g.a,
            { section: !0 },
            i.a.createElement(b.a, { title: a.title, subtitle: a.subtitle }),
            r.map(function (e) {
              var t = e.node,
                n = t.id,
                a = t.html,
                r = t.frontmatter,
                l = r.company,
                d = r.position,
                o = r.startDate,
                s = r.endDate;
              return i.a.createElement(w, {
                key: n,
                title: l,
                subtitle: d,
                content: i.a.createElement(y, { content: a }),
                startDate: o,
                endDate: s,
              });
            })
          );
        },
        _ = function () {
          var e = Object(d.useStaticQuery)("2252611511"),
            t = e.markdownRemark,
            n = e.allMarkdownRemark,
            a = t.frontmatter,
            r = n.edges;
          return i.a.createElement(
            g.a,
            { section: !0 },
            i.a.createElement(b.a, { title: a.title, subtitle: a.subtitle }),
            r.map(function (e) {
              var t = e.node,
                n = t.id,
                a = t.html,
                r = t.frontmatter,
                l = r.university,
                d = r.degree,
                o = r.startDate,
                s = r.endDate;
              return i.a.createElement(w, {
                key: n,
                title: l,
                subtitle: d,
                content: i.a.createElement(y, { content: a }),
                startDate: o,
                endDate: s,
              });
            })
          );
        },
        v = o.b.div.withConfig({
          displayName: "styles__ProgressBar",
          componentId: "sc-1wdsda-0",
        })(["", ";"], { padding: "0.75rem" }),
        x = o.b.div.withConfig({
          displayName: "styles__BarWrapper",
          componentId: "sc-1wdsda-1",
        })(["", ";"], {
          width: "100%",
          height: "0.5rem",
          backgroundColor: "#e2e8f0",
          borderRadius: "0.25rem",
          overflow: "hidden",
          marginTop: "0.25rem",
        }),
        C = o.b.div.withConfig({
          displayName: "styles__Bar",
          componentId: "sc-1wdsda-2",
        })(
          ["", ";width:", ";"],
          { height: "0.5rem", backgroundColor: "#f687b3" },
          function (e) {
            return e.percentage + "%";
          }
        ),
        k = o.b.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-1wdsda-3",
        })(["", ";"], {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }),
        I = o.b.h3.withConfig({
          displayName: "styles__Title",
          componentId: "sc-1wdsda-4",
        })(["", ";"], { fontWeight: "600" }),
        N = o.b.h3.withConfig({
          displayName: "styles__Percentage",
          componentId: "sc-1wdsda-5",
        })(["", ";"], { fontWeight: "600" }),
        D = function (e) {
          var t = e.title,
            n = e.percentage;
          return i.a.createElement(
            v,
            null,
            i.a.createElement(
              k,
              null,
              i.a.createElement(I, null, t),
              i.a.createElement(N, null, n, "%")
            ),
            i.a.createElement(x, null, i.a.createElement(C, { percentage: n }))
          );
        },
        R = o.b.div.withConfig({
          displayName: "styles__Skills",
          componentId: "sc-1ligyfs-0",
        })(["", ";"], { display: "flex", flexWrap: "wrap", width: "100%" }),
        S = o.b.div.withConfig({
          displayName: "styles__Skill",
          componentId: "sc-1ligyfs-1",
        })(["", ";"], {
          width: "100%",
          "@media (min-width: 640px)": { width: "50%" },
        }),
        T = function () {
          var e = Object(d.useStaticQuery)("1174766746"),
            t = e.markdownRemark,
            n = e.allMarkdownRemark,
            a = t.frontmatter,
            r = n.edges;
          return i.a.createElement(
            g.a,
            { section: !0 },
            i.a.createElement(b.a, {
              title: a.title,
              subtitle: a.subtitle,
              center: !0,
            }),
            i.a.createElement(
              R,
              null,
              r.map(function (e) {
                var t = e.node,
                  n = t.id,
                  a = t.frontmatter,
                  r = a.title,
                  l = a.percentage;
                return i.a.createElement(
                  S,
                  { key: n },
                  i.a.createElement(D, { title: r, percentage: l })
                );
              })
            )
          );
        };
      t.default = function () {
        return i.a.createElement(
          r.a,
          null,
          i.a.createElement(l.a, { title: "Resume" }),
          i.a.createElement(E, null),
          i.a.createElement("hr", null),
          i.a.createElement(_, null),
          i.a.createElement("hr", null),
          i.a.createElement(T, null)
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-resume-tsx-e54c5f8aab7a5e8315b3.js.map
