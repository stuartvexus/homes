google.maps.__gjsload__('overlay', function(_) {
    var MD = function(a) {
            this.Fg = a
        },
        Fma = function() {},
        ND = function(a) {
            a.Sx = a.Sx || new Fma;
            return a.Sx
        },
        Gma = function(a) {
            this.Fh = new _.Wm(() => {
                const b = a.Sx;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.jw && a.onAdd) a.onAdd();
                        b.jw = !0;
                        a.draw()
                    }
                } else {
                    if (b.jw)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.jw = !1
                }
            }, 0)
        },
        Hma = function(a, b) {
            const c = ND(a);
            let d = c.sv;
            d || (d = c.sv = new Gma(a));
            _.Sb(c.Rh || [], _.sk);
            var e = c.ki = c.ki || new _.iia;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.IB = c.IB || new MD(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.Xm(d.Fh);
            c.Rh = [_.qk(a, "panes_changed", e), _.qk(f, "zoom_changed", e), _.qk(f, "offset_changed", e), _.qk(b, "projection_changed", e), _.qk(f, "projectioncenterq_changed", e)];
            _.Xm(d.Fh);
            b instanceof _.Nk ? (_.xl(b, "Ox"), _.vl(b, 148440)) : b instanceof _.Tl && (_.xl(b, "Oxs"),
                _.vl(b, 181451))
        },
        Mma = function(a) {
            if (a) {
                var b = a.getMap();
                if (Ima(a) !== b && b && b instanceof _.Nk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Jma(b, a, c.overlayLayer) : c.Gg.then(({
                        lh: d
                    }) => {
                        const e = new Kma(b, d);
                        d.Fi(e);
                        c.overlayLayer = e;
                        Lma(a);
                        Mma(a)
                    })
                }
            }
        },
        Lma = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Fg.unbindAll(), b.Fg.set("panes", null), b.Fg.set("projection", null), b.Hg.tl(b), b.Gg && (b.Gg = !1, b.Fg.onRemove ? b.Fg.onRemove() : b.Fg.remove()))
            }
        },
        Ima = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Nma = function(a,
            b) {
            a.Fg.get("projection") != b && (a.Fg.bindTo("panes", a.map.__gm), a.Fg.set("projection", b))
        };
    _.Ia(MD, _.Hk);
    MD.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.dj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Fg : null))
    };
    var OD = {};
    _.Ia(Gma, _.Hk);
    OD.Wk = function(a) {
        if (a) {
            var b = a.getMap();
            (ND(a).rB || null) !== b && (b && Hma(a, b), ND(a).rB = b)
        }
    };
    OD.tl = function(a) {
        const b = ND(a);
        var c = b.ki;
        c && c.unbindAll();
        (c = b.IB) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Rh && _.Sb(b.Rh, _.sk);
        b.Rh = null;
        b.sv && (b.sv.Fh.Gj(), b.sv = null);
        delete ND(a).rB
    };
    var PD = {},
        Jma = class {
            constructor(a, b, c) {
                this.map = a;
                this.Fg = b;
                this.Hg = c;
                this.Gg = !1;
                _.xl(this.map, "Ox");
                _.vl(this.map, 148440);
                c.Wk(this)
            }
            draw() {
                this.Gg || (this.Gg = !0, this.Fg.onAdd && this.Fg.onAdd());
                this.Fg.draw && this.Fg.draw()
            }
        },
        Kma = class {
            constructor(a, b) {
                this.Jg = a;
                this.Hg = b;
                this.Fg = null;
                this.Gg = []
            }
            dispose() {}
            Ri(a, b, c, d, e, f, g, h) {
                const l = this.Fg = this.Fg || new _.CB(this.Jg, this.Hg, () => {});
                l.Ri(a, b, c, d, e, f, g, h);
                for (const n of this.Gg) Nma(n, l), n.draw()
            }
            Wk(a) {
                this.Gg.push(a);
                this.Fg && Nma(a, this.Fg);
                this.Hg.refresh()
            }
            tl(a) {
                _.Wb(this.Gg,
                    a)
            }
        };
    PD.Wk = Mma;
    PD.tl = Lma;
    _.ik("overlay", {
        Kz: function(a) {
            if (a) {
                (0, OD.tl)(a);
                (0, PD.tl)(a);
                var b = a.getMap();
                b && (b instanceof _.Nk ? (0, PD.Wk)(a) : (0, OD.Wk)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.bw(a, {
                ml: ({
                    event: b
                }) => {
                    _.Jt(b.Jh)
                },
                bk: b => _.Lv(b),
                Ep: b => _.Mv(b),
                Pk: b => _.Mv(b),
                rk: b => _.Nv(b)
            }).Yq(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.ok);
            a.addEventListener("contextmenu", _.ok);
            a.addEventListener("dblclick", _.ok);
            a.addEventListener("mousedown", _.ok);
            a.addEventListener("mousemove", _.ok);
            a.addEventListener("MSPointerDown",
                _.ok);
            a.addEventListener("pointerdown", _.ok);
            a.addEventListener("touchstart", _.ok);
            a.addEventListener("wheel", _.ok)
        }
    });
});