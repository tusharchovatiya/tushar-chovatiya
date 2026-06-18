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
  {
    icon: Mail,
    label: "Email",
    value: "tusharchovatiyatc31@gmail.com",
    href: "mailto:tusharchovatiyatc31@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/tushar-chovatiya-53169b143",
    href: "https://www.linkedin.com/in/tushar-chovatiya-53169b143",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/tusharchovatiya",
    href: "https://github.com/tusharchovatiya",
  },
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(255, "Email too long"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be under 2000 characters"),
});

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    const { error } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        message,
      });

    setSubmitting(false);

    if (error) {
      toast.error("Could not send message. Please try again.");
      return;
    }

    toast.success("Message sent. I'll get back to you soon.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-4 sm:p-6 md:p-10 lg:p-14 max-w-5xl mx-auto relative overflow-hidden w-full">
          <div
            className="absolute inset-0 opacity-60 pointer-events-none"
            style={{
              background: "var(--gradient-hero)",
            }}
          />

          <div className="relative">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-3">
                Contact
              </p>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Let's build something{" "}
                <span className="gradient-text">
                  extraordinary
                </span>
              </h2>

              <p className="text-muted-foreground mt-4 max-w-xl mx-auto px-2">
                Open to Senior Engineering, Mobile Product, and AI-focused
                roles. Reach out for collaborations, interviews, or product
                consultations.
              </p>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                <MapPin className="h-4 w-4 shrink-0" />
                Gujarat, India
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
              {/* Contact Cards */}
              <div className="space-y-3">
                {channels.map(
                  ({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={
                        href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="glass p-4 rounded-2xl flex items-center gap-4 hover:border-primary/40 transition-all"
                    >
                      <div className="h-10 w-10 rounded-xl gradient-primary grid place-items-center shrink-0">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>

                      <div className="min-w-0 flex-1 overflow-hidden">
                        <div className="text-xs text-muted-foreground">
                          {label}
                        </div>

                        <div className="text-xs sm:text-sm font-medium break-all">
                          {value}
                        </div>
                      </div>
                    </a>
                  )
                )}
              </div>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="glass p-4 sm:p-5 rounded-2xl space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">
                      Name
                    </Label>

                    <Input
                      id="contact-name"
                      className="w-full"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      maxLength={100}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">
                      Email
                    </Label>

                    <Input
                      id="contact-email"
                      className="w-full"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      maxLength={255}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">
                    Message
                  </Label>

                  <Textarea
                    id="contact-message"
                    className="w-full resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    maxLength={2000}
                    rows={5}
                    placeholder="Tell me about the role, project, or idea..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={submitting}
                  className="w-full"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
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

// import { Link } from "react-router-dom";
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
// import { ArrowLeft } from "lucide-react";
// import StarfieldBackground from "@/components/story/StarfieldBackground";
// import ChapterNav from "@/components/story/ChapterNav";
// import HeroIntro from "@/components/story/HeroIntro";
// import Chapter01_Origins from "@/components/story/Chapter01_Origins";
// import Chapter02_Lockdown from "@/components/story/Chapter02_Lockdown";
// import Chapter03_FirstStep from "@/components/story/Chapter03_FirstStep";
// import Chapter04_FearMeetsReality from "@/components/story/Chapter04_FearMeetsReality";
// import Chapter05_Rajkot from "@/components/story/Chapter05_Rajkot";
// import Chapter06_Communication from "@/components/story/Chapter06_Communication";
// import Chapter07_Techvoot from "@/components/story/Chapter07_Techvoot";
// import Chapter08_International from "@/components/story/Chapter08_International";
// import Chapter09_NFC from "@/components/story/Chapter09_NFC";
// import Chapter10_Products from "@/components/story/Chapter10_Products";
// import Chapter11_AIStudio from "@/components/story/Chapter11_AIStudio";
// import Chapter12_Numbers from "@/components/story/Chapter12_Numbers";
// import Chapter13_Future from "@/components/story/Chapter13_Future";
// import Recruiter from "@/components/story/Recruiter";
// import Contact from "@/components/story/Contact";
// import Footer from "@/components/story/Footer";

// const Story = () => {
 
//  const navigate = useNavigate();
//  const handleBack = () => {
//    if (window.history.state?.idx > 0) {
//      navigate(-1);
//    } else {
//      navigate("/", { replace: true });
//    }
//  };
  
//   return (
//     <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
//       <StarfieldBackground />
//       <ChapterNav />
//       {/* <Link
//         to="/"
//         className="fixed top-6 left-6 z-50 glass-card px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:text-primary transition-colors"
//       >
//         <ArrowLeft className="h-4 w-4" />
//         Back to Portfolio
//       </Link> */}
//       <button 
//   onClick={handleBack} 
//   className="fixed top-6 left-6 z-50 glass-card px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:text-primary transition-colors"
// >
//   <ArrowLeft className="h-4 w-4" /> Back to Portfolio
// </button>
//       <main>
//         <HeroIntro />
//         <Chapter01_Origins />
//         <Chapter02_Lockdown />
//         <Chapter03_FirstStep />
//         <Chapter04_FearMeetsReality />
//         <Chapter05_Rajkot />
//         <Chapter06_Communication />
//         <Chapter07_Techvoot />
//         <Chapter08_International />
//         <Chapter09_NFC />
//         <Chapter10_Products />
//         <Chapter11_AIStudio />
//         <Chapter12_Numbers />
//         <Chapter13_Future />
//         <Recruiter />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Story;
