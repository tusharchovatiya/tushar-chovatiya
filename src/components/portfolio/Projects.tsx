import { ExternalLink, Github, Package } from "lucide-react";

type Project = {
  title: string;
  tag: string;
  platform: string;
  desc: string;
  highlights?: string[];
  tech: string[];
  link?: { href: string; label: string; icon: "external" | "github" | "package" };
};

const projects: Project[] = [
  {
    title: "Flutter Text Detect Area",
    tag: "Flutter Package",
    platform: "Open Source",
    desc:
      "Published Flutter package that delivers a complete OCR area-detection solution — letting developers drop area-based text recognition into any Flutter app.",
    highlights: ["Published on pub.dev", "Plug-and-play OCR", "Cross-platform"],
    tech: ["Flutter", "Dart", "OCR", "ML Kit"],
    link: { href: "https://pub.dev/packages/flutter_text_detect_area", label: "View on pub.dev", icon: "external" },
  },
  {
    title: "Monportail",
    tag: "Kotlin Multiplatform",
    platform: "Android • iOS",
    desc:
      "NFC-based student identity app for an education provider. Built shared NFC chip/sticker tag read/write byte-level logic in KMP, consumed from both Android & iOS.",
    highlights: ["Shared KMP business logic", "NFC read/write byte data", "Cross-platform identity"],
    tech: ["Kotlin Multiplatform", "NFC", "Compose"],
    link: { href: "https://play.google.com/store/apps/details?id=ca.ulaval.monportail", label: "Play Store", icon: "external" },
  },
  {
    title: "Elna",
    tag: "Kotlin Multiplatform",
    platform: "Android • iOS",
    desc:
      "KMP product driven by a shared app-config pipeline — Kotlin serialization plus ComposeResource keeps Android and iOS in lockstep from one source of truth.",
    highlights: ["Config-driven architecture", "Mirego Trikot stack", "Shared Compose resources"],
    tech: ["KMP", "Kotlin", "Compose"],
  },
  {
    title: "Elog Kayaking",
    tag: "Outdoor Activity",
    platform: "Flutter",
    desc:
      "The ultimate paddling app for outdoor enthusiasts — realtime tracking, route logging and a social activity feed for the kayaking community.",
    tech: ["Flutter", "Maps", "Firebase"],
    // link: { href: "https://play.google.com/store/search?q=elog%20kayaking&c=apps", label: "Play Store", icon: "external" },
  },
  {
    title: "Edition Nordiques",
    tag: "News Platform",
    platform: "Flutter",
    desc:
      "Regional e-news platform aggregating multiple Eastern Quebec news channels into one premium reading experience.",
    tech: ["Flutter", "REST", "CMS"],
    link: { href: "https://apps.apple.com/in/app/éditions-nordiques/id6472655591", label: "App Store", icon: "external" },
  },
  {
    title: "Neobox",
    tag: "Ecommerce",
    platform: "Flutter",
    desc:
      "Multi-store ecommerce platform allowing users to discover and order across all supported stores from a single unified shopping experience.",
    tech: ["Flutter", "Payments", "Firebase"],
    // link: { href: "https://play.google.com/store/search?q=neobox&c=apps", label: "Play Store", icon: "external" },
  },
  {
    title: "SnapShop",
    tag: "Retail • OCR",
    platform: "Flutter",
    desc:
      "Snap-and-shop experience that scans bill receipts and lets merchants sell products through receipt scanning — combining OCR with retail flows.",
    tech: ["Flutter", "OCR", "REST"],
    // link: { href: "https://play.google.com/store/search?q=snapshop&c=apps", label: "Play Store", icon: "external" },
  },
  {
    title: "CIAS",
    tag: "Fintech / Subscriptions",
    platform: "Flutter",
    desc:
      "Integrated multi-currency price listing with PayPal payments end-to-end, including admin-driven client config, dev/staging/prod environment switching and sandbox testing.",
    tech: ["Flutter", "PayPal", "Multi-currency"],
    link: { href: "https://play.google.com/store/apps/details?id=com.main.cias.app", label: "Play Store", icon: "external" },
  },
  {
    title: "Equa",
    tag: "Education / Subscriptions",
    platform: "Flutter",
    desc:
      "Modernized the app across Flutter & Android stack — Play Console 16KB page support, Edge-to-Edge SDK 35, Riverpod state-management refactors and go_router redirection fixes.",
    tech: ["Flutter", "Riverpod", "go_router"],
    link: { href: "https://play.google.com/store/apps/details?id=odu.app.equa", label: "Play Store", icon: "external" },
  },
  {
    title: "NFS",
    tag: "In-App Purchases",
    platform: "Flutter",
    desc:
      "Fixed IAP product SKU configuration and in-app purchase SDK flow, debugged server-side event listeners for successful purchase and lifecycle events.",
    tech: ["Flutter", "IAP", "Billing"],
  },
  {
    title: "getBeauty",
    tag: "AR / Beauty Filters",
    platform: "Flutter",
    desc:
      "Integrated the BytePlusEffect AR SDK on Android & iOS — wiring up ComposeMakeup, FilterResource, LicenseBag and ModelResource bundles end-to-end.",
    tech: ["Flutter", "BytePlus SDK", "AR"],
    link: { href: "https://play.google.com/store/apps/details?id=com.getbeautyai.app.android", label: "Play Store", icon: "external" },
  },
  {
    title: "Agence RBL",
    tag: "Calendar Integration",
    platform: "Flutter",
    desc:
      "Built a custom Android plugin extension over manage_calendar_events with native-side method overrides to handle bespoke calendar event flows.",
    tech: ["Flutter", "Android Plugin", "Java"],
    link: { href: "https://apps.apple.com/in/app/magestion-art/id1589442923", label: "App Store", icon: "external" },
  },
  {
    title: "Ronna Momentum & Connexia",
    tag: "FlutterFlow",
    platform: "FlutterFlow • Firebase",
    desc:
      "Role-based notifications via Firebase Functions, custom widgets for PDF kiosk dynamic-link interactions, and SQLite local-state custom actions for instant UI refresh.",
    tech: ["FlutterFlow", "Firebase Functions", "SQLite"],
    link: { href: "https://play.google.com/store/apps/details?id=rona.connexia.staging.com", label: "Play Store", icon: "external" },
  },
  {
    title: "Weatcb",
    tag: "Enterprise Productivity",
    platform: "Android Native",
    desc:
      "Productivity app for employees of W.E. Aubuchon Co., compatible with Janam and Koamtac scanner devices. Native webview wrapper bound to a React web build.",
    tech: ["Android", "Kotlin", "WebView"],
    // link: { href: "", label: "GitHub", icon: "github" },
  },
  {
    title: "Ozone Orgill",
    tag: "Enterprise WebView",
    platform: "Android • iOS",
    desc:
      "Portable native apps wrapping an Angular web build into a webview server, shipping a single web codebase across Android and iOS.",
    tech: ["Android", "iOS", "Angular"],
    link: { href: "https://play.google.com/store/apps/details?id=com.orgill.ionic", label: "Play Store", icon: "external" },
  },
  {
    title: "Voila Cabs (Rider + Partner)",
    tag: "Transportation",
    platform: "Android",
    desc:
      "Full ride-hailing stack — rider app with realtime in-app Google Maps tracking, plus driver partner app with in-app wallet, document upload and slide-to-action trip flow.",
    tech: ["Android", "Google Maps", "Firebase"],
    link: { href: "https://play.google.com/store/apps/details?id=com.voilacabs.rider", label: "Play Store", icon: "external" },
  },
];

const linkIcon = (icon: Project["link"] extends infer L ? L extends { icon: infer I } ? I : never : never) => {
  if (icon === "github") return Github;
  if (icon === "package") return Package;
  return ExternalLink;
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Selected <span className="gradient-text">projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            16+ shipped products across Flutter, Kotlin Multiplatform, Android native and FlutterFlow —
            spanning OCR, NFC identity, ecommerce, fintech, media, AR and enterprise productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => {
            const Icon = p.link ? linkIcon(p.link.icon) : ExternalLink;
            const CardTag = p.link ? "a" : "article";
            const cardProps = p.link
              ? { href: p.link.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <CardTag
                key={p.title}
                {...(cardProps as Record<string, string>)}
                className="glass-card p-6 group relative overflow-hidden block"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full gradient-primary text-primary-foreground">
                        {p.tag}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary/60 border border-border text-foreground/70">
                        {p.platform}
                      </span>
                    </div>
                    {p.link && (
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary-glow transition-colors shrink-0" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  {p.highlights && (
                    <ul className="space-y-1 mb-4">
                      {p.highlights.map((h) => (
                        <li key={h} className="text-xs text-foreground/80 flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full gradient-primary shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/60 border border-border text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <div className="mt-4 text-xs text-primary-glow font-medium inline-flex items-center gap-1">
                      {p.link.label} <Icon className="h-3 w-3" />
                    </div>
                  )}
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
