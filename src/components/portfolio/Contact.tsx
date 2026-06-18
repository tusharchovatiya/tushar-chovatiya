import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const channels = [
  { icon: Mail, label: "Email", value: "tusharchovatiyatc31@gmail.com", href: "mailto:tusharchovatiyatc31@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/tushar-chovatiya-53169b143", href: "https://www.linkedin.com/in/tushar-chovatiya-53169b143" },
  { icon: Github, label: "GitHub", value: "github.com/tusharchovatiya", href: "https://github.com/tusharchovatiya" },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Enter a valid email").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    const { name, email, message } = parsed.data;
    const { error } = await supabase.from("contact_messages").insert({ name, email, message });
    setSubmitting(false);
    if (error) {
      toast.error("Could not send message. Please try again.");
      return;
    }
    toast.success("Message sent. I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-8 md:p-14 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 opacity-60 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-3">Contact</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Let's build something <span className="gradient-text">extraordinary</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Open to Senior Engineering, Mobile Product, and AI-focused roles.
                Reach out for collaborations, interviews, or product consultations.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                <MapPin className="h-4 w-4" /> Gujarat, India
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-10">
              <div className="space-y-3">
                {channels.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass p-4 rounded-2xl flex items-center gap-4 hover:border-primary/40 transition-all"
                  >
                    <div className="h-10 w-10 rounded-xl gradient-primary grid place-items-center shrink-0">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{label}</div>
                      <div className="text-sm font-medium truncate">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="glass p-5 rounded-2xl space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={2000}
                    rows={5}
                    placeholder="Tell me about the role, project, or idea…"
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full">
                  {submitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Message</>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
