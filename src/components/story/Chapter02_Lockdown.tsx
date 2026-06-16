import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";

const codeSnippets = [
  "class MainActivity : AppCompatActivity()",
  "fun onCreate(savedInstanceState: Bundle?)",
  "import androidx.compose.runtime.*",
  "setContent { MyApp() }",
  "Retrofit.Builder().baseUrl(...)",
  "viewModelScope.launch { ... }",
  "// learning by doing",
  "ViewModel().observe(this)",
  "RecyclerView.Adapter<VH>()",
  "@Composable fun Screen()",
];

const Chapter02_Lockdown = () => {
  return (
    <ChapterShell
      id="ch2"
      index="02"
      title="When The World Paused"
      subtitle="2020 — A global lockdown, a personal awakening."
    >
      <div className="grid md:grid-cols-5 gap-10 items-center">
        {/* Floating code field */}
        <div className="md:col-span-3 relative h-80 md:h-96 rounded-3xl glass gradient-border overflow-hidden scanlines">
          <div className="absolute inset-0 grid-bg opacity-40" />
          {codeSnippets.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: [0, 0.85, 0.6], y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 4,
                delay: i * 0.25,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
              className="absolute font-mono text-xs md:text-sm text-primary/80 whitespace-nowrap"
              style={{
                top: `${(i * 9 + 8) % 85}%`,
                left: `${(i * 17) % 75}%`,
              }}
            >
              {s}
            </motion.div>
          ))}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-muted-foreground tracking-widest">
            SELF_LEARNING.PROCESS
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 text-lg text-foreground/85 font-light">
          <p>COVID lockdown. College final year.</p>
          <p className="text-muted-foreground">No roadmap. No mentor.</p>
          <p className="text-primary">YouTube tutorials. Stack Overflow nights. Relentless experimentation.</p>
          <p>This is where Android development became a craft.</p>
        </div>
      </div>
    </ChapterShell>
  );
};

export default Chapter02_Lockdown;
