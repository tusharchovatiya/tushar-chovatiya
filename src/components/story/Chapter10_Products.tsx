import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";

const products = [
  { name: "Monportail", impact: "NFC student identity · Université Laval", tag: "KMP" },
  { name: "Flutter Text Detect Area", impact: "Open-source OCR package on pub.dev", tag: "Package" },
  { name: "Voila Cabs", impact: "Ride-hailing for rider + driver", tag: "Android" },
  { name: "Edition Nordiques", impact: "Regional news platform · Quebec", tag: "Flutter" },
  { name: "Neobox", impact: "Multi-store unified commerce", tag: "Flutter" },
  { name: "Elog Kayaking", impact: "Outdoor activity tracking & social", tag: "Flutter" },
  { name: "SnapShop", impact: "Receipt OCR → retail flow", tag: "Flutter" },
  { name: "Weatcb", impact: "Enterprise productivity · W.E. Aubuchon", tag: "Android" },
  { name: "Ronna Momentum", impact: "Firebase-backed enterprise app", tag: "FlutterFlow" },
  { name: "Ronna Connexia", impact: "Role-based notifications & PDF kiosks", tag: "FlutterFlow" },
  { name: "Elna", impact: "Config-driven shared resources", tag: "KMP" },
  { name: "getBeauty", impact: "AR beauty filters · BytePlusEffect", tag: "Flutter" },
];

const Chapter10_Products = () => {
  return (
    <ChapterShell
      id="ch10"
      index="10"
      title="What Got Built"
      subtitle="Not features — outcomes. Real products used by real people."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
            className="glass-card p-5 group relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary px-2 py-0.5 rounded glass border border-primary/30">
                  {p.tag}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">#{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-semibold mb-1.5">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.impact}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center text-sm font-mono text-muted-foreground tracking-widest mt-10"
      >
        + WIYAK PLATFORM · CIAS · EQUA · NFS · AGENCE RBL · OZONE ORGILL
      </motion.p>
    </ChapterShell>
  );
};

export default Chapter10_Products;
