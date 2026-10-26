import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { FaGithub, FaViber } from "react-icons/fa";
import FadeIn from "../animations/FadeIn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_8tz6rzp", // Your Service ID
        "template_axdbtoy", // Replace with your Template ID from EmailJS
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "4TpBelKBngJ8WrAYR", // Replace with your Public Key from EmailJS Account settings
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0}>
            <h2 className="text-4xl sm:text-5xl font-medium text-white mb-4 tracking-tight">
              Let's Work Together
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life.
            </p>
          </FadeIn>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={200}>
              <form
                onSubmit={handleSubmit}
                className="bg-[#0b0d10]/90 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 backdrop-blur-sm"
              >
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white/80"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white/80"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm resize-none focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="text-sm text-emerald-400 font-medium">
                    ✓ Message sent successfully! I will get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400 font-medium">
                    ✕ Failed to send message. Please reach out directly at
                    devathlon25@gmail.com
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-primary/70 via-primary to-[#4ade80] text-black font-semibold text-base flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_0_25px_rgba(34,197,94,0.25)] hover:shadow-[0_0_35px_rgba(34,197,94,0.35)] disabled:opacity-60 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </FadeIn>
          </div>

          {/* Right Column: Contact Details & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn delay={300}>
              <div className="mb-2">
                <h3 className="text-2xl font-medium text-white mb-3">
                  Let's Connect
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out!
                </p>
              </div>
            </FadeIn>

            {/* Email Card */}
            <FadeIn delay={400}>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0b0d10]/90 border border-white/10 hover:border-primary/30 transition-colors backdrop-blur-sm">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-0.5">Email</div>
                  <a
                    href="mailto:devathlon25@gmail.com"
                    className="text-sm sm:text-base text-white/90 font-medium hover:text-primary transition-colors"
                  >
                    devathlon25@gmail.com
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Location Card */}
            <FadeIn delay={500}>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0b0d10]/90 border border-white/10 hover:border-primary/30 transition-colors backdrop-blur-sm">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-0.5">Location</div>
                  <span className="text-sm sm:text-base text-white/90 font-medium">
                    Hlaing TharYar, Yangon
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={600}>
              <div className="pt-2">
                <div className="text-xs text-white/50 mb-3">
                  Connect with me
                </div>
                <div className="flex items-start gap-4">
                  {/* GitHub */}
                  <div className="flex flex-col items-center gap-1.5">
                    <a
                      href="https://github.com/DEVRO99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#0b0d10]/90 border border-white/10 hover:border-primary/40 text-white/70 hover:text-primary flex items-center justify-center transition-all backdrop-blur-sm"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <span className="text-[11px] text-white/40">GitHub</span>
                  </div>

                  {/* Viber */}
                  <div className="flex flex-col items-center gap-1.5">
                    <a
                      href="viber://chat?number=%2B959443412110"
                      className="w-12 h-12 rounded-xl bg-[#0b0d10]/90 border border-white/10 hover:border-[#7360f2]/50 text-white/70 hover:text-[#7360f2] flex items-center justify-center transition-all backdrop-blur-sm"
                      aria-label="Viber Contact"
                    >
                      <FaViber className="w-5 h-5" />
                    </a>
                    <a
                      href="tel:+959443412110"
                      className="text-[11px] text-white/50 hover:text-primary transition-colors tracking-tight"
                    >
                      +959443412110
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
