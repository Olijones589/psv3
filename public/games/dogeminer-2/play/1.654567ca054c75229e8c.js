(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    352: function (e, t, o) {
        (function (o) {
            var n, i, a;
            i = [], void 0 === (a = "function" == typeof (n = function () {
                "use strict";
                function t(e, t, o) {
                    var n = new XMLHttpRequest;
                    n.open("GET", e), n.responseType = "blob", n.onload = function () { r(n.response, t, o) }, n.onerror = function () { console.error("could not download file") }, n.send()
                } function n(e) {
                    var t = new XMLHttpRequest;
                    t.open("HEAD", e, !1);
                    try { t.send() } catch (e) { } return 200 <= t.status && 299 >= t.status
                } function i(e) {
                    try { e.dispatchEvent(new MouseEvent("click")) } catch (o) {
                        var t = document.createEvent("MouseEvents");
                        t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
                    }
                } var a = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof o && o.global === o ? o : void 0, r = a.saveAs || ("object" != typeof window || window !== a ? function () { } : "download" in HTMLAnchorElement.prototype ? function (e, o, r) {
                    var s = a.URL || a.webkitURL, c = document.createElement("a");
                    o = o || e.name || "download", c.download = o, c.rel = "noopener", "string" == typeof e ? (c.href = e, c.origin === location.origin ? i(c) : n(c.href) ? t(e, o, r) : i(c, c.target = "_blank")) : (c.href = s.createObjectURL(e), setTimeout((function () { s.revokeObjectURL(c.href) }), 4e4), setTimeout((function () { i(c) }), 0))
                } : "msSaveOrOpenBlob" in navigator ? function (e, o, a) {
                    if (o = o || e.name || "download", "string" != typeof e) navigator.msSaveOrOpenBlob(function (e, t) { return void 0 === t ? t = { autoBom: !1 } : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"), t = { autoBom: !t }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e], { type: e.type }) : e }(e, a), o);
                    else if (n(e)) t(e, o, a);
                    else {
                        var r = document.createElement("a");
                        r.href = e, r.target = "_blank", setTimeout((function () { i(r) }))
                    }
                } : function (e, o, n, i) {
                    if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."), "string" == typeof e) return t(e, o, n);
                    var r = "application/octet-stream" === e.type, s = /constructor/i.test(a.HTMLElement) || a.safari, c = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((c || r && s) && "object" == typeof FileReader) {
                        var l = new FileReader;
                        l.onloadend = function () {
                            var e = l.result;
                            e = c ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = e : location = e, i = null
                        }, l.readAsDataURL(e)
                    } else {
                        var f = a.URL || a.webkitURL, u = f.createObjectURL(e);
                        i ? i.location = u : location.href = u, i = null, setTimeout((function () { f.revokeObjectURL(u) }), 4e4)
                    }
                });
                a.saveAs = r.saveAs = r, e.exports = r
            }) ? n.apply(t, i) : n) || (e.exports = a)
        }).call(this, o(29))
    }, 354: function (e, t, o) {
        "use strict";
        o.r(t), o.d(t, "downloadSave", (function () { return l })), o.d(t, "initDownloads", (function () { return f }));
        var n, i, a = o(352), r = !1;
        function s() { swal({ title: "There was a problem...", text: "Possible reasons:\n- There is no save yet\n- Your browser is in incognito mode\n- Your browser does not allow this page to download files (user setting?)\n- An extension is blocking something\n\nIf none of the above reasons apply... think happy thoughts.", type: "info", showCancelButton: !1, confirmButtonColor: "#FB8D02FF", confirmButtonText: "OH WELL", closeOnConfirm: !0 }) } function c() { return !(window.location.hostname.toLowerCase().indexOf("test.dogeminer2.com") > -1) } var l = function () {
            if (c()) {
                try { new Blob } catch (e) { console.log("File saving is not supported on this browser"), alert("File saving is not supported on this browser :("), !1 } if ("undefined" != typeof Storage) {
                    var e;
                    if (window.location.hostname.toLowerCase().indexOf("test.dogeminer2.com") > -1 ? e = localStorage.getItem("dogeTEST1NG") : (e = localStorage.getItem(n), null == n && (e = localStorage.getItem(i))), null == e) return s(), !1;
                    var t = new Blob([e], { type: "text/plain;charset=UTF-8" }), o = Date.now(), r = new Intl.DateTimeFormat("en", { year: "numeric" }).format(o), l = new Intl.DateTimeFormat("en", { month: "short" }).format(o), f = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(o), u = "".concat(f, "-").concat(l, "-").concat(r), d = (o += "").slice(o.length - 4), w = window.location.hostname.toLowerCase();
                    (-1 === w.indexOf("test.dogeminer2.com") || w.indexOf("127.0.0.1:9001") > -1) && Object(a.saveAs)(t, "dogeminer2-SAVE".concat(d, "-").concat(u, ".DOGE"))
                } else s()
            } else swal({ title: "No", text: "The testing zone does not allow downloading saves, it is rather rude.", type: "info", showCancelButton: !1, confirmButtonColor: "#FB8D02FF", confirmButtonText: "OH WELL", closeOnConfirm: !0 })
        }, f = function () { r || (r = !0, c(), n = dogeminer.saves.CURRENT_SAVE_TITLE, i = dogeminer.saves.PREV_SAVE_TITLE) }
    }
}]);
