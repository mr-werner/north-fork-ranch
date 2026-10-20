import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Car, Clock, Mail, MapPin, Menu, Phone, Star, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/nfr-logo.png";
import orvis2023 from "./assets/orvis-2023-lodge-of-the-year.jpg";
import orvis2021 from "./assets/orvis-2021-finalist.png";

// ---------------------------------------------------------------- Content (from northforkranch.com, checked 2026-10-20)
const COMPANY = "North Fork Ranch";
const ABBR = "nfr";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "719-838-0321";
const PHONE_HREF = "tel:+17198380321";
const EMAIL = "info@northforkranch.com";
const ADDRESS = "55395 Highway 285, Shawnee, CO 80475";
const MAILING = "P.O. Box B, Shawnee, CO 80475";
const MAP = "https://www.google.com/maps/place/North+Fork+Ranch/@39.4307035,-105.5665458,15z";
const ORIGINAL = "https://www.northforkranch.com/";
const FACEBOOK = "https://www.facebook.com/NorthForkRanch";
const INSTAGRAM = "https://instagram.com/northforkranchcolorado/";
const ORVIS_REVIEWS = "https://www.orvis.com/product/north-fork-ranch-co/8C63.html#PDPReviewsSection";
const GOOGLE_REVIEWS = "https://www.google.com/search?q=north+fork+ranch+shawnee#lrd=0x876b0fc3a011a7ed:0x266f1de70c3c8627,1,,,,";
const INSURANCE = "https://partner.globalrescue.com/northforkranch/index.html";
// The fishing guide service is independently owned and booked directly (per the ranch's own site).
const GUIDES = { name: "North Fork Ranch Guide Service", phone: "303-478-1349", href: "tel:+13034781349", email: "info@nfrgs.com", url: "https://northforkranchguideservice.com" };

const CDN = "https://irp.cdn-website.com/2aee220d/dms3rep/multi/opt";
const PHOTO = {
  hero: `${CDN}/North+Fork+Ranch.2026.Scenic-4-2880w.jpg`,
  aerial: `${CDN}/IMG_4838-56b3662a-207b612c-1920w.jpg`,
  river: `${CDN}/471f5b08-08bb-4fb9-8456-d444d9197e4a_North-Creek-Ranch-River.v2.0000000-1920w.jpg`,
  drone: `${CDN}/OX9ofsCuRvSY0zrOPvV5_dji_fly_20230818_073856_37_1692367606325_video+%282%29.v2.0000000-1920w.jpg`,
  hosts: `${CDN}/NorthForkRanch.2026.HayleyNick-3-629h.png`,
  wildhorse: `${CDN}/NorthForkRanch.2026.WildhorseExterior-2-1920w.jpg`,
  homestead: `${CDN}/NFR.2026.HomesteadExterior-3-1920w.jpg`,
  klondike: `${CDN}/NorthForkRanch.2026.KlondikeExterior-3-1920w.jpg`,
  stonehenge: `${CDN}/NFR.2026.StonehengeExteriors-10-1920w.jpg`,
  dining: `${CDN}/NorthForkRanch.2026.WildhorseDining-8-1920w.jpg`,
  dinner: `${CDN}/NorthForkRanch.2026.WildhorseFood-14-800h.jpg`,
  pool: `${CDN}/NorthForkRanch.2026.Pool-2-1920w.jpg`,
  angler: `${CDN}/North-Fork-Ranch-Fly-Fishing-1920w.png`,
  anglers: `${CDN}/CFR-1920w.jpeg`,
  trap: `${CDN}/North-Fork-Ranch-Trap-Shooting-60989d8c-1920w.png`,
  hike: `${CDN}/IMG_5035-1920w.jpg`,
  peak: `${CDN}/IMG_5468-1920w.jpg`,
  groups: `${CDN}/North-Fork-Ranch-Corporate-Retreats-fc2b7db8-43f36c80-363h.png`,
};

const FACTS = [
  ["1985", "Family owned since"],
  ["8,100 ft", "Elevation"],
  ["520", "Private acres"],
  ["1 hr", "West of Denver"],
];

const STAYS = [
  {
    name: "Wildhorse Lodge", img: PHOTO.wildhorse, sleeps: "Sleeps 9 or 5 singles", double: "$285", single: "$440", buyout: "$2,500",
    text: "Five suite-style rooms with country-Western character, right beside the dining room. Queen or king beds, a private bath in every suite, and fresh-ground coffee ready at 6am.",
    tags: ["5 suites", "Private baths", "Next to dining"],
  },
  {
    name: "Homestead Cabin", img: PHOTO.homestead, sleeps: "Sleeps 8 or 5 singles", double: "$350", single: "$545", buyout: "$2,600",
    text: "Built in the early 1900s at the edge of the meadow by the pond. A big fireplace in the shared living room, porches, and the Trapper, Pioneer and Miner suites.",
    tags: ["Early 1900s", "3 full baths", "Fireplace & porches"],
  },
  {
    name: "Klondike Cabin", img: PHOTO.klondike, sleeps: "Sleeps 8 or 6 singles", double: "$350", single: "$545", buyout: null,
    text: "Near the pool and the river, with horses grazing in the meadow off the porch. Two suites with a stone fireplace and cathedral ceiling, plus two twin rooms.",
    tags: ["Stone fireplace", "3 full baths", "King or twins"],
  },
  {
    name: "Stonehenge", img: PHOTO.stonehenge, sleeps: "Sleeps 11 or 8 singles", double: "$350", single: "$545", buyout: "$3,700",
    text: "A 1930s private mansion built into the hillside, full of Southwestern character. Santa Fe, Taos and Mesa suites, three common rooms with wood-burning fireplaces, two porches.",
    tags: ["6 bedrooms", "3 common rooms", "Largest on the ranch"],
  },
];

// A day at the ranch, from the dining page and FAQ.
const DAY = [
  ["6:00", "Coffee's on", "Fresh-ground coffee is ready in Wildhorse Lodge."],
  ["8:00", "Breakfast", "Plated, 8–8:30: sweet bread, fruit, yogurt and a hot main course. To-go breakfast with notice the night before."],
  ["8:30", "On the water", "Anglers meet their guides after breakfast (fishing is booked separately with the guide service)."],
  ["9:30", "Morning activity", "Trap shooting or archery, about an hour. Or a hike, the porch, a book."],
  ["12:30", "Lunch", "Buffet: soups, salads and sandwiches, or burgers and brats, fried chicken, a taco bar. Sack lunches on request."],
  ["1:30", "Afternoon", "Second round of trap or archery, the pool and hot tub in summer, or a nap."],
  ["6:30", "Dinner", "Three courses, family style, always with homemade bread, salad and dessert."],
];

const ACTIVITIES = [
  { name: "Instructor-led trap shooting", img: PHOTO.trap, meta: "$190 / person · May 15 – Aug 31", text: "Starts with firearm safety, then technique and accuracy. Beginners welcome; a favorite for corporate groups. Reservations required." },
  { name: "Alpine hikes", img: PHOTO.hike, meta: "On your own, or ask about a guide", text: "Ranch trails out the door, Staunton State Park about 11 miles away, Square Top Mountain (13,794') and Mount Bierstadt (14,065')." },
  { name: "Pool & hot tub", img: PHOTO.pool, meta: "Seasonal, summer only", text: "A heated pool and hot tub between the cabins, open around the clock in season. A simple way to end a day outdoors." },
];

// Verbatim from the "What our guests say" section of northforkranch.com (2026-10-20). Not edited.
const REVIEWS = [
  { name: "Greg Platt", text: "My friend and I have done a lot of fishing over the decades, but never fast water fly fishing and I didn't really know what to expect. As it turned out, we simply could not have come to a better place to learn. Our field guides, Kaleb and Shannah, were just spectacular in being able to instruct and sharing their incredible knowledge of the sport. All while attending to my friend and I to net fish and keep us fishing (Kaleb chased the huge rainbow in the pictures below over two rapids before netting it). Ralph gave us a class on the basics that covered everything and he continued to give tips and encouragement for the whole weekend. Meanwhile, the NFR lodge provides comfortable accommodations with good food and top notch hospitality. The back porch is just a few steps from the river. In short, we had a wonderful time and will be back next year!" },
  { name: "Dave from Pittsburgh", title: "An almost indescribable experience", text: "I just spent 4 nights and 3 days fishing at the North Fork Ranch in Shawnee, CO. Everything was perfect. The facilities and scenery are beautiful. The food is out of this world. The ranch owners and staff were friendly, helpful and just plain outstanding. Additionally, I used the North Fork Ranch Guide Service guides and also found the guides outstanding professionals who really know their waters and fish." },
  { name: "Tony & Maria", text: "My wife and I had the privilege to visit North Fork Ranch and also utilize North Fork Ranch guide service during our a brief visit to Denver. We can not say enough about the ranch! Great folks, great food, awesome accommodations and of course great fishing. A special shout out to Olivia, Malinda, Theresa and Jake who were not only great hosts but also great people. We will definitely return! Close to Denver, fantastic water, awesome hikes and great scenery" },
  { name: "42yearsandcounting", text: "Great anniversary trip! I was a novice and not particularly athletic but their guides and private river access made it easy for this 63 year old grandma to try something new like fly fishing. Loved my first experience and you will too!" },
  { name: "David in NC", text: "This was my second trip this year to the North Fork Ranch. The lodge staff go out of their way to make you feel welcome and to accommodate any requests. The guides are fantastic. And the fishing was fun, challenging and rewarding." },
  { name: "Max D7", text: "Can’t recommend enough! Third trip fly fishing at North Fork Ranch with North Fork Ranch Guide Service this weekend. Absolutely a top notch experience again. Guides are super friendly and skilled. We had a blast despite chilly temps in the water. Scenery is beautiful, a wonderful escape into nature." },
  { name: "Anonymous", text: "Had a great experience on my fishing guided tour. Was my first experience fly fishing and was able to catch multiple fish, shocking myself! The guide was friendly, knowledgeable and patient while I caught trees and rocks, we had a fun day of fishing. I have visited the ranch multiple times and the staff is all incredible as well as the food and accommodations. Had recently broke my ankle and staff made it possible for me to still participate. I didn’t know fishing could be so fun." },
  { name: "Mino23", text: "I fished here 12 years ago and yesterday I had a chance to bring my son and North Fork delivered more than I expected. Our guide Tim made it fun, easy and was a patient teacher! Thanks for an unforgettable trip!!" },
];

const DRIVES = [["Denver", "1 hr"], ["Buena Vista", "1 hr"], ["Fairplay", "40 min"], ["Denver Airport", "1 hr 30"], ["Breckenridge", "1 hr 30"], ["Colorado Springs", "2 hr"], ["Fort Collins", "2 hr"], ["Estes Park", "2 hr 30"]];

const GOOD_TO_KNOW = [
  ["Check-in / out", "Check in 3–6pm. Check out by 10am; we'll hold bags at the lodge if you're fishing that morning."],
  ["Book early", "Peak dates (Memorial Day to Labor Day) often fill months, sometimes years, ahead."],
  ["Deposit", "50% non-refundable deposit at booking. Rates exclude 3.9% tax and a service charge."],
  ["Dietary needs", "Tell us when you book and the cooks will plan every meal around it."],
  ["No pets", "Horses and guests are on the ranch every day. Service animals: please call."],
  ["Getting here", "No shuttle from DIA. A rental car is best, since some fishing water is off the ranch."],
];

// ---------------------------------------------------------------- Motif: a cast fly line (from the gold flourishes in their logo)
function FlyLine({ className = "" }) {
  return (
    <svg className={`flyline ${className}`} viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-10 120 C 180 120, 260 30, 420 40 S 600 150, 760 110 S 930 10, 1040 50 C 1110 75, 1150 70, 1210 52" />
      <circle cx="1040" cy="50" r="4" />
    </svg>
  );
}

function Spur() {
  // The spur rowel from the logo, used as a bullet and divider ornament.
  return (
    <svg className="spur" viewBox="0 0 24 24" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="12" y1="12" x2={12 + 10 * Math.cos((i * Math.PI) / 6)} y2={12 + 10 * Math.sin((i * Math.PI) / 6)} />
      ))}
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

// ---------------------------------------------------------------- Components
function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["#stay", "Lodging"], ["#day", "A Day Here"], ["#river", "The River"], ["#ranch", "Activities"], ["#groups", "Groups"], ["#visit", "Plan a Trip"]];
  return (
    <header className={`site-header${solid || open ? " is-solid" : ""}`}>
      <div className="awardbar">
        <Spur /> Orvis Endorsed Fly-Fishing Lodge of the Year, 2023 <Spur />
      </div>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}>
          <img src={logo} alt="North Fork Ranch, Colorado" className="logo" />
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-phone" href={PHONE_HREF}><Phone size={15} /> {PHONE}</a>
        </nav>
        <div className="header-cta">
          <a className="header-phone" href={PHONE_HREF}><Phone size={15} /> {PHONE}</a>
          <a className="btn btn-gold btn-sm" href="#request">Request Dates</a>
        </div>
        <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-img" src={PHOTO.hero} alt="Sunset over the North Fork of the South Platte River at North Fork Ranch" />
      <div className="hero-shade" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow light">Shawnee, Colorado · Since 1985</p>
          <h1>Come to the mountains. <em>Stay for a while.</em></h1>
          <p className="hero-lede">A family-owned, all-inclusive mountain lodge on the North Fork of the South Platte. Four historic lodges and cabins, three homemade meals a day, and 520 private acres, an hour west of Denver.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#request">Request Your Dates <ArrowRight size={18} /></a>
            <a className="btn btn-ghost" href={PHONE_HREF}><Phone size={17} /> {PHONE}</a>
          </div>
        </div>
        <aside className="hero-badge">
          <img src={orvis2023} alt="Orvis 2023 Endorsed Fly-Fishing Lodge of the Year" />
          <span>Orvis Endorsed <br />Fly-Fishing Lodge <br />of the Year 2023</span>
        </aside>
      </div>
      <FlyLine className="hero-line" />
      <div className="facts">
        <div className="wrap facts-row">
          {FACTS.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function Planner() {
  return (
    <section className="planner" aria-label="Plan your stay">
      <div className="wrap planner-row">
        <a href={PHONE_HREF} className="plan-cell plan-call">
          <Phone size={22} />
          <div><span>Lodge reservations</span><strong>{PHONE}</strong></div>
        </a>
        <a href={`mailto:${EMAIL}`} className="plan-cell">
          <Mail size={22} />
          <div><span>Email the ranch</span><strong>{EMAIL}</strong></div>
        </a>
        <div className="plan-cell">
          <Clock size={22} />
          <div><span>Check in / check out</span><strong>3–6pm · by 10am</strong></div>
        </div>
        <a href="#request" className="plan-cell plan-book">
          <div><span>Peak dates fill early</span><strong>Request dates <ArrowRight size={16} /></strong></div>
        </a>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="welcome">
      <div className="wrap welcome-grid">
        <div className="welcome-copy">
          <p className="eyebrow">Genuine Colorado hospitality</p>
          <h2>Mornings start with mountain air. <em>Days run without a schedule.</em></h2>
          <p>North Fork Ranch sits at 8,100 feet along the North Fork of the South Platte, bordering the Pike National Forest, the Lost Creek Wilderness and the Mt. Evans Wilderness. It feels a long way from everything, and it's only about an hour from Denver.</p>
          <p>Nick and Hayley Horner and their daughters carry on a tradition of welcoming guests that started in 1985: help planning your stay, homemade meals at a shared table, and the freedom to fill a day or leave it empty.</p>
          <div className="hosts-sign"><Spur /> Nick & Hayley Horner, your hosts</div>
        </div>
        <div className="welcome-photos">
          <img className="wp-main" src={PHOTO.aerial} alt="The ranch buildings and meadow from above, with the mountains beyond" loading="lazy" />
          <figure className="wp-hosts">
            <img src={PHOTO.hosts} alt="Hosts Nick and Hayley Horner on a ranch porch" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  );
}

function Stays() {
  return (
    <section className="stays" id="stay">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Lodging & cabins</p>
          <h2>Four places to stay, <em>each with a story.</em></h2>
          <p>Book a single room, a suite, or the whole building for your group. Rates are per person, per night, and include homemade breakfast, lunch and dinner, Wi-Fi and the ranch facilities.</p>
        </div>
        <div className="stay-list">
          {STAYS.map((s, i) => (
            <article className="stay" key={s.name}>
              <div className="stay-img"><img src={s.img} alt={`${s.name} at North Fork Ranch`} loading="lazy" /><span className="stay-no">0{i + 1}</span></div>
              <div className="stay-body">
                <p className="stay-sleeps">{s.sleeps}</p>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
                <ul className="stay-tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <dl className="stay-rates">
                  <div><dt>Double</dt><dd>{s.double}</dd></div>
                  <div><dt>Single</dt><dd>{s.single}</dd></div>
                  <div><dt>Full buyout</dt><dd>{s.buyout ? <>{s.buyout}<small>/night</small></> : <small>Ask us</small>}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
        <p className="fine">Per person per night, excluding 3.9% tax and service charge. Whole-building buyouts have a two-night minimum. Rates subject to change; no pets. <a href="#request">Ask about availability <ArrowRight size={14} /></a></p>
      </div>
    </section>
  );
}

function Day() {
  return (
    <section className="day" id="day">
      <div className="wrap day-grid">
        <div className="day-intro">
          <p className="eyebrow light">All-inclusive, all day</p>
          <h2>A day on the <em>North Fork.</em></h2>
          <p>No menus to plan, no restaurant to find after a long day outside. Meals are made from scratch and served together in the Wildhorse dining room.</p>
          <div className="day-photos">
            <img src={PHOTO.dining} alt="The Wildhorse dining room with its log walls and mounted antlers" loading="lazy" />
            <img src={PHOTO.dinner} alt="A plated dinner at North Fork Ranch" loading="lazy" />
          </div>
        </div>
        <ol className="timeline">
          {DAY.map(([t, h, p]) => (
            <li key={t}>
              <time>{t}</time>
              <div><h3>{h}</h3><p>{p}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function River() {
  return (
    <section className="river" id="river">
      <div className="river-photo"><img src={PHOTO.river} alt="The North Fork of the South Platte flowing past a ranch cabin" loading="lazy" /></div>
      <div className="wrap river-grid">
        <div className="river-copy">
          <p className="eyebrow">The river & the fishing</p>
          <h2>Fifty feet from the lodge porch.</h2>
          <p>The North Fork of the South Platte runs about 50 miles to meet the South Platte, mostly through private land. At the ranch it passes within roughly 50 feet of the lodge, holding brown and rainbow trout. A stocked pond by the meadow is good for family spin fishing.</p>
          <p>Guided fly fishing, the Orvis fly-fishing clinic and the private water at Boxwood Gulch, Long Meadow and Rowdy Trout Ranch are booked directly with <strong>{GUIDES.name}</strong>, an independently owned outfitter. Book (and cancel) with both the guides and the ranch.</p>
          <div className="guide-card">
            <span>Fishing reservations</span>
            <strong>{GUIDES.name}</strong>
            <div className="guide-links">
              <a href={GUIDES.href}><Phone size={15} /> {GUIDES.phone}</a>
              <a href={`mailto:${GUIDES.email}`}><Mail size={15} /> {GUIDES.email}</a>
              <a href={GUIDES.url} target="_blank" rel="noopener noreferrer">Website <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
        <div className="awards">
          <p className="eyebrow">Recognized by Orvis</p>
          <figure><img src={orvis2023} alt="Orvis 2023 Endorsed Fly-Fishing Lodge of the Year badge" loading="lazy" /><figcaption>Endorsed Fly-Fishing Lodge of the Year, 2023</figcaption></figure>
          <figure><img src={orvis2021} alt="Orvis 2021 Finalist, Endorsed Fly-Fishing Lodge of the Year badge" loading="lazy" /><figcaption>Lodge of the Year Finalist, 2021</figcaption></figure>
          <a className="text-link" href={ORVIS_REVIEWS} target="_blank" rel="noopener noreferrer">Read our Orvis reviews <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

function Ranch() {
  return (
    <section className="ranch" id="ranch">
      <div className="wrap">
        <div className="section-head row">
          <div>
            <p className="eyebrow">Ranch activities</p>
            <h2>As busy, or as quiet, <em>as you like.</em></h2>
          </div>
          <p>Archery, sporting clays, a walk through the trees, coffee on the porch watching horses in the meadow. Activity reservations are required; a 48-hour cancellation fee applies.</p>
        </div>
        <div className="act-grid">
          {ACTIVITIES.map((a) => (
            <article className="act" key={a.name}>
              <img src={a.img} alt={a.name} loading="lazy" />
              <div>
                <span className="act-meta">{a.meta}</span>
                <h3>{a.name}</h3>
                <p>{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Groups() {
  return (
    <section className="groups" id="groups">
      <div className="wrap groups-grid">
        <img src={PHOTO.groups} alt="A homemade buffet laid out for a group at North Fork Ranch" loading="lazy" />
        <div>
          <p className="eyebrow light">Retreats & reunions</p>
          <h2>Trade the conference room <em>for the Colorado mountains.</em></h2>
          <p>Leadership retreats, team gatherings, family reunions and multi-generational trips. Meet with fewer distractions, share every meal at the same table, and take over the ranch with a full buyout.</p>
          <ul className="group-list">
            {["Corporate & leadership retreats", "Family vacations & reunions", "Small group retreats", "Celebrations & friends' getaways"].map((g) => <li key={g}><Spur /> {g}</li>)}
          </ul>
          <p className="groups-note">Buyouts are the usual choice for groups (two-night minimum). The ranch doesn't host weddings.</p>
          <a className="btn btn-gold" href="#request">Plan a group stay <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="section-head row">
          <div>
            <p className="eyebrow">What our guests say</p>
            <h2>Back for the <em>second, and third, trip.</em></h2>
          </div>
          <p>Quoted word for word from the guest reviews on northforkranch.com. More on <a href={ORVIS_REVIEWS} target="_blank" rel="noopener noreferrer">Orvis</a> and <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">Google</a>.</p>
        </div>
      </div>
      <div className="review-track" tabIndex={0} aria-label="Guest reviews, scroll sideways">
        {REVIEWS.map((r) => (
          <blockquote className="review" key={r.name}>
            <div className="stars" aria-hidden="true">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
            {r.title && <p className="review-title">{r.title}</p>}
            <p>{r.text}</p>
            <footer>{r.name}<span>Guest review via northforkranch.com</span></footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Plan your trip</p>
          <h2>Good to know <em>before you come.</em></h2>
        </div>
        <div className="know-grid">
          {GOOD_TO_KNOW.map(([h, p]) => <div className="know" key={h}><h3>{h}</h3><p>{p}</p></div>)}
        </div>
        <div className="drive">
          <div className="drive-where">
            <MapPin size={22} />
            <div>
              <strong>{ADDRESS}</strong>
              <p>Highway 285 south through Bailey, about 6 miles past the high school to Shawnee, then half a mile on. The gate is on the north side of the highway.</p>
              <a className="text-link" href={MAP} target="_blank" rel="noopener noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <ul className="drive-times" aria-label="Driving times">
            {DRIVES.map(([p, t]) => <li key={p}><Car size={15} /><span>{p}</span><b>{t}</b></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Request() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", dates: "", guests: "", stay: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Something went wrong.");
      setStatus("sent");
      setMsg(data.demo ? "This is a concept preview, so nothing was sent. On the live site your request goes straight to the ranch." : "Thanks! The ranch will be in touch about your dates.");
    } catch (err) {
      setStatus("error");
      setMsg(`${err.message} You can also call ${PHONE}.`);
    }
  }
  return (
    <section className="request" id="request">
      <FlyLine className="request-line" />
      <div className="wrap request-grid">
        <div className="request-copy">
          <p className="eyebrow light">Book your trip</p>
          <h2>Tell us when, <em>we'll handle the rest.</em></h2>
          <p>Share your dates, group size and the kind of trip you're planning, and the ranch will reply with availability and pricing. Or simply call.</p>
          <a className="request-phone" href={PHONE_HREF}><Phone size={22} /> {PHONE}</a>
          <a className="request-mail" href={`mailto:${EMAIL}`}><Mail size={18} /> {EMAIL}</a>
          <p className="request-small">Fishing trips are reserved separately with {GUIDES.name}, {GUIDES.phone}. Travel insurance is available through <a href={INSURANCE} target="_blank" rel="noopener noreferrer">Global Rescue</a>.</p>
        </div>
        <form className="request-form" onSubmit={submit}>
          {status === "sent" ? (
            <div className="form-done"><h3>Request received</h3><p>{msg}</p></div>
          ) : (
            <>
              <div className="f2">
                <label>Name *<input required value={form.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" /></label>
                <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" /></label>
              </div>
              <label>Email<input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" /></label>
              <div className="f2">
                <label>Preferred dates<input value={form.dates} onChange={(e) => set("dates", e.target.value)} placeholder="e.g. June 12–15" /></label>
                <label>Guests<input value={form.guests} onChange={(e) => set("guests", e.target.value)} placeholder="Adults / children" /></label>
              </div>
              <label>Type of visit
                <select value={form.stay} onChange={(e) => set("stay", e.target.value)}>
                  <option value="">Choose one...</option>
                  <option>Family vacation</option>
                  <option>Corporate retreat</option>
                  <option>Group or reunion</option>
                  <option>Couples / quiet getaway</option>
                  <option>Fishing trip</option>
                </select>
              </label>
              <label>Anything else?<textarea rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Lodging preference, dietary needs, activities..." /></label>
              <div className="hp" aria-hidden="true"><input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set("website", e.target.value)} /></div>
              {status === "error" && <p className="form-err" role="alert">{msg}</p>}
              <button className="btn btn-gold full" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send my request"}</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <img src={logo} alt="North Fork Ranch, Colorado" className="footer-logo" loading="lazy" />
        <div>
          <h4>North Fork Ranch</h4>
          <p>{ADDRESS}<br />Mail: {MAILING}</p>
          <p><a href={PHONE_HREF}>{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
        <div>
          <h4>Fishing guides</h4>
          <p>{GUIDES.name}<br /><a href={GUIDES.href}>{GUIDES.phone}</a><br /><a href={`mailto:${GUIDES.email}`}>{GUIDES.email}</a></p>
        </div>
        <div>
          <h4>More</h4>
          <p className="footer-links">
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">Google reviews</a>
            <a href={ORVIS_REVIEWS} target="_blank" rel="noopener noreferrer">Orvis reviews</a>
            <a href={`${ORIGINAL}employment-opportunities`} target="_blank" rel="noopener noreferrer">Employment</a>
          </p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} North Fork Ranch. Independent concept · not for official use. Current site: <a href={ORIGINAL}>northforkranch.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Planner />
        <Welcome />
        <Stays />
        <Day />
        <River />
        <Ranch />
        <Groups />
        <Reviews />
        <Visit />
        <Request />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
