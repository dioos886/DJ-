function DeCode() {
        this.OO0O00OO00OO = function (a, b) {
            return b > 0 ? a.substring(0, b) : null;
        }, this.OO00OO0O00O0 = function (a, b) {
            return a.length - b >= 0 && a.length >= 0 && a.length - b <= a.length ? a.substring(a.length - b, a.length) : null;
        }, this.O0000OO0OO00O0 = function (a, b) {
            var c, d, e, f, g, h, i, j, k = "";
            for (c = 0; c < b.length; c++) {
                k += b.charCodeAt(c).toString();
            }
            for (d = Math.floor(k.length / 5), e = parseInt(k.charAt(d) + k.charAt(2 * d) + k.charAt(3 * d) + k.charAt(4 * d) + k.charAt(5 * d)),
                     f = Math.round(b.length / 2), g = Math.pow(2, 31) - 1, h = parseInt(a.substring(a.length - 8, a.length), 16),
                     a = a.substring(0, a.length - 8), k += h; k.length > 10; ) {
                k = (parseInt(k.substring(0, 10)) + parseInt(k.substring(10, k.length))).toString();
            }
            for (k = (e * k + f) % g, i = "", j = "", c = 0; c < a.length; c += 2) {
                i = parseInt(parseInt(a.substring(c, c + 2), 16) ^ Math.floor(255 * (k / g))), j += String.fromCharCode(i),
                    k = (e * k + f) % g;
            }
            return j;
        }, this.O0000OO0OO00O = function (a, b, c) {
            return a.length >= 0 ? a.substr(b, c) : null;
        }, this.O0O000000O0O0 = function (a) {
            return a.length;
        }, this.O000O0OO0O0OO = function (a,b) {           
            var h, i, j, k, l, m, n, o, p, c = b, d = this.O0O000000O0O0(c), e = d, f = new Array(), g = new Array();
            for (l = 1; d >= l; l++) {
                f[l] = this.O0000OO0OO00O(c, l - 1, 1).charCodeAt(0), g[e] = f[l], e -= 1;
            }
            for (h = "", i = a, m = this.OO0O00OO00OO(i, 2), i = this.OO00OO0O00O0(i, this.O0O000000O0O0(i) - 2),
                     l = 0; l < this.O0O000000O0O0(i); l += 4) {
                j = this.O0000OO0OO00O(i, l, 4), "" != j && (b = this.OO0O00OO00OO(j, 1), k = (parseInt(this.OO00OO0O00O0(j, 3)) - 100) / 3,
                    m == this.O0000OO0OO00O0("a9ab044c634a", "O0000OO0OO00O") ? (n = 2 * parseInt(b.charCodeAt(0)),
                        o = parseInt(f[k]), p = n - o, h += String.fromCharCode(p)) : (n = 2 * parseInt(b.charCodeAt(0)),
                        o = parseInt(g[k]), p = n - o, h += String.fromCharCode(p)));
            }
            return h;
        };
    }
function GetDataUrl(K1,k2) {
       var x = new DeCode();
       playurl = x.O000O0OO0O0OO(K1,k2);
       return playurl;
   }
