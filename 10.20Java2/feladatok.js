// 1.feladat
class Termek1 {
  constructor(nev, ar) {
    this.nev = nev;
    this.ar = ar;
  }
}
const eger1 = new Termek1("Egér", 6990);
const monitor1 = new Termek1("Monitor", 54990);
console.log(eger1);
console.log(monitor1.nev);

// 2.feladat
class Termek2 {
  constructor(nev, ar) {
    this.nev = nev;
    this.ar = ar;
  }
  leiras() {
    return `${this.nev} ${this.ar} Ft`;
  }
}
const eger2 = new Termek2("Egér", 6990);
const monitor2 = new Termek2("Monitor", 54990);
console.log(eger2.leiras());
console.log(monitor2.leiras());

// 3.feladat
class Termek3 {
  constructor(nev, ar) {
    this.nev = nev;
    this.ar = ar;
  }
  akciosAr(szazalek) {
    return Math.round(this.ar * (1 - szazalek / 100));
  }
}
const eger3 = new Termek3("Egér", 6990);
console.log(eger3.akciosAr(10));
console.log(eger3.akciosAr(25));
console.log(eger3.ar);

// 4.feladat
class Szamlalo {
  constructor() {
    this.ertek = 0;
  }
  novel() {
    this.ertek++;
  }
  csokkent() {
    if (this.ertek > 0) this.ertek--;
  }
  nullaz() {
    this.ertek = 0;
  }
}
const sz1 = new Szamlalo();
sz1.novel();
sz1.novel();
sz1.novel();
sz1.csokkent();
console.log(sz1.ertek);
sz1.nullaz();
sz1.csokkent();
console.log(sz1.ertek);

// 5.feladat
const a = new Szamlalo();
const b = new Szamlalo();
for (let i = 0; i < 5; i++) a.novel();
for (let i = 0; i < 2; i++) b.novel();
console.log(a.ertek);
console.log(b.ertek);
console.log(a instanceof Szamlalo);
console.log(typeof Szamlalo);

// 6.feladat
class Pont {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  tavolsag(masik) {
    return Math.sqrt((this.x - masik.x) ** 2 + (this.y - masik.y) ** 2);
  }
  eltol(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}
const p1 = new Pont(0, 0);
const p2 = new Pont(3, 4);
console.log(p1.tavolsag(p2));
p1.eltol(3, 0);
console.log(p1.tavolsag(p2));

// 7.feladat
class Termek7 {
  constructor(nev, ar) {
    this.nev = nev;
    this.ar = ar;
  }
  get brutto() {
    return Math.round(this.ar * 1.27);
  }
}
const eger7 = new Termek7("Egér", 6990);
console.log(eger7.brutto);
eger7.ar = 7990;
console.log(eger7.brutto);

// 8.feladat
class Homero {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * (9 / 5) + 32;
  }
  set fahrenheit(f) {
    this.celsius = (f - 32) * (5 / 9);
  }
}
const h = new Homero(25);
console.log(h.fahrenheit);
h.fahrenheit = 212;
console.log(h.celsius);

// 9.feladat
class Termek9 {
  static darab = 0;
  constructor(nev, ar) {
    this.nev = nev;
    this.ar = ar;
    Termek9.darab++;
  }
}
const t9_1 = new Termek9("Egér", 6990);
const t9_2 = new Termek9("Monitor", 54990);
const t9_3 = new Termek9("Billentyűzet", 12000);
console.log(Termek9.darab);
console.log(t9_1.darab);

// 10.feladat
class Teglalap {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  terulet() {
    return this.a * this.b;
  }
  kerulet() {
    return 2 * (this.a + this.b);
  }
  static negyzet(oldal) {
    return new Teglalap(oldal, oldal);
  }
}
const n = Teglalap.negyzet(5);
console.log(n.terulet());
console.log(n.kerulet());

// 11.feladat
class Allat {
  constructor(nev) {
    this.nev = nev;
  }
  hang() {
    return "...";
  }
  bemutatkozik() {
    return `${this.nev} vagyok, és azt mondom: ${this.hang()}`;
  }
}
class Kutya extends Allat {
  hang() {
    return "Vau!";
  }
}
class Macska extends Allat {
  hang() {
    return "Miau!";
  }
}
const k = new Kutya("Bodri");
const m = new Macska("Cica");
console.log(k.bemutatkozik());
console.log(m.bemutatkozik());

// 12.feladat
class Alkalmazott {
  constructor(nev, ber) {
    this.nev = nev;
    this.ber = ber;
  }
  evesBer() {
    return this.ber * 12;
  }
}
class Vezeto extends Alkalmazott {
  constructor(nev, ber, bonusz) {
    super(nev, ber);
    this.bonusz = bonusz;
  }
  evesBer() {
    return super.evesBer() + this.bonusz;
  }
}
const alk = new Alkalmazott("Péter", 400000);
const vez = new Vezeto("Kata", 600000, 1000000);
console.log(alk.evesBer());
console.log(vez.evesBer());

// 13.feladat
const vez13 = new Vezeto("Kata", 600000, 1000000);
console.log(vez13 instanceof Vezeto);
console.log(vez13 instanceof Alkalmazott);
console.log(vez13 instanceof Object);
const alk13 = new Alkalmazott("Péter", 400000);
console.log(alk13 instanceof Vezeto);

// 14.feladat
class Termek14 {
  constructor(nev, ar) {
    this.nev = nev;
    this.ar = ar;
  }
  toString() {
    return `${this.nev} (${this.ar} Ft)`;
  }
}
const eger14 = new Termek14("Egér", 6990);
console.log(`A kosárba került: ${eger14}`);

// 15.feladat
class BankSzamla {
  #egyenleg = 0;
  get egyenleg() {
    return this.#egyenleg;
  }
  befizet(osszeg) {
    if (osszeg > 0) {
      this.#egyenleg += osszeg;
    }
  }
  kivesz(osszeg) {
    if (osszeg > 0 && this.#egyenleg >= osszeg) {
      this.#egyenleg -= osszeg;
      return true;
    }
    return false;
  }
}
const szamla = new BankSzamla();
szamla.befizet(10000);
console.log(szamla.kivesz(3000));
console.log(szamla.kivesz(20000));
console.log(szamla.egyenleg);

// 16.feladat
class Termek16 {
  #ar;
  constructor(nev, ar) {
    this.nev = nev;
    this.ar = ar;
  }
  get ar() {
    return this.#ar;
  }
  set ar(ertek) {
    if (typeof ertek === "number" && ertek >= 0) {
      this.#ar = ertek;
    } else {
      console.log(`Érvénytelen ár: ${ertek}`);
    }
  }
}
const eger16 = new Termek16("Egér", 6990);
eger16.ar = -500;
console.log(eger16.ar);
eger16.ar = 5990;
console.log(eger16.ar);

// 17.feladat
class Kosar {
  constructor() {
    this.tetelek = [];
  }
  hozzaad(nev, ar, db) {
    const t = this.tetelek.find(item => item.nev === nev);
    if (t) {
      t.db += db;
    } else {
      this.tetelek.push({ nev, ar, db });
    }
  }
  torol(nev) {
    this.tetelek = this.tetelek.filter(item => item.nev !== nev);
  }
  osszeg() {
    return this.tetelek.reduce((sum, item) => sum + item.ar * item.db, 0);
  }
  darab() {
    return this.tetelek.reduce((sum, item) => sum + item.db, 0);
  }
}
const kosar = new Kosar();
kosar.hozzaad("Egér", 6990, 2);
kosar.hozzaad("Monitor", 54990, 1);
kosar.hozzaad("Egér", 6990, 1);
console.log(`${kosar.darab()} db, ${kosar.osszeg()} Ft`);
kosar.torol("Monitor");
console.log(`${kosar.darab()} db, ${kosar.osszeg()} Ft`);

// 18.feladat
class Raktar {
  constructor() {
    this.keszletMap = new Map();
  }
  bevesz(nev, db) {
    const jelenlegi = this.keszletMap.get(nev) || 0;
    this.keszletMap.set(nev, jelenlegi + db);
  }
  kiad(nev, db) {
    const jelenlegi = this.keszletMap.get(nev) || 0;
    if (jelenlegi >= db) {
      this.keszletMap.set(nev, jelenlegi - db);
      return true;
    }
    return false;
  }
  keszlet(nev) {
    return this.keszletMap.get(nev) || 0;
  }
  jelentes() {
    for (const [nev, db] of this.keszletMap.entries()) {
      console.log(`${nev}: ${db} db`);
    }
  }
}
const raktar = new Raktar();
raktar.bevesz("egér", 10);
raktar.bevesz("monitor", 4);
console.log(raktar.kiad("egér", 3));
console.log(raktar.kiad("monitor", 5));
console.log(raktar.keszlet("billentyűzet"));
raktar.jelentes();

// 19.feladat
class Alakzat {
  constructor(nev) {
    this.nev = nev;
  }
  terulet() {
    return 0;
  }
  leiras() {
    return `${this.nev}: ${this.terulet().toFixed(2)}`;
  }
}
class Kor extends Alakzat {
  constructor(sugar) {
    super("Kör");
    this.sugar = sugar;
  }
  terulet() {
    return Math.PI * this.sugar * this.sugar;
  }
}
class TeglalapAlakzat extends Alakzat {
  constructor(a, b) {
    super("Téglalap");
    this.a = a;
    this.b = b;
  }
  terulet() {
    return this.a * this.b;
  }
}
const alakzatok = [
  new Kor(3),
  new Kor(5),
  new TeglalapAlakzat(4, 6),
  new TeglalapAlakzat(2, 10)
];
let osszterulet = 0;
let legnagyobb = alakzatok[0];
for (const a of alakzatok) {
  console.log(a.leiras());
  const t = a.terulet();
  osszterulet += t;
  if (t > legnagyobb.terulet()) {
    legnagyobb = a;
  }
}
console.log(`Összesen: ${osszterulet.toFixed(2)}`);
console.log(`Legnagyobb: ${legnagyobb.nev}`);

// 20.feladat
class Diak {
  constructor(nev) {
    this.nev = nev;
    this.jegyek = [];
  }
  jegyetKap(jegy) {
    if (Number.isInteger(jegy) && jegy >= 1 && jegy <= 5) {
      this.jegyek.push(jegy);
    }
  }
  get atlag() {
    if (this.jegyek.length === 0) return 0;
    const sum = this.jegyek.reduce((a, b) => a + b, 0);
    return sum / this.jegyek.length;
  }
}
class Osztaly {
  constructor() {
    this.diakok = [];
  }
  felvesz(diak) {
    this.diakok.push(diak);
  }
  osztalyAtlag() {
    const vanJegy = this.diakok.filter(d => d.jegyek.length > 0);
    if (vanJegy.length === 0) return 0;
    const sum = vanJegy.reduce((s, d) => s + d.atlag, 0);
    return sum / vanJegy.length;
  }
  legjobb() {
    const vanJegy = this.diakok.filter(d => d.jegyek.length > 0);
    if (vanJegy.length === 0) return null;
    return vanJegy.reduce((max, d) => (d.atlag > max.atlag ? d : max), vanJegy[0]);
  }
}
const d1 = new Diak("Péter");
const d2 = new Diak("Anna");
const d3 = new Diak("Kati");
d1.jegyetKap(5);
d1.jegyetKap(4);
d2.jegyetKap(3);
d2.jegyetKap(6);
d2.jegyetKap(4);
d3.jegyetKap(5);
d3.jegyetKap(5);

const osztaly = new Osztaly();
osztaly.felvesz(d1);
osztaly.felvesz(d2);
osztaly.felvesz(d3);
console.log(osztaly.osztalyAtlag());
console.log(osztaly.legjobb().nev);