"use client";

import { Phone, Printer, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Interested in <span className="text-lime">Working With Us?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-charcoal border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:ring-1 focus:ring-lime outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-charcoal border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:ring-1 focus:ring-lime outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-charcoal border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-lime focus:ring-1 focus:ring-lime outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-lime text-charcoal-dark px-8 py-3 rounded-xl font-bold hover:bg-lime-light transition-colors"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-charcoal rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-lime/10 rounded-xl shrink-0">
                  <Phone className="h-5 w-5 text-lime" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a
                    href="tel:5596736444"
                    className="text-white/60 hover:text-lime transition-colors"
                  >
                    (559) 673-6444
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-charcoal rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-lime/10 rounded-xl shrink-0">
                  <Printer className="h-5 w-5 text-lime" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Fax</h3>
                  <p className="text-white/60">(559) 674-0377</p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-lime/10 rounded-xl shrink-0">
                  <MapPin className="h-5 w-5 text-lime" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Mailing Address</h3>
                  <p className="text-white/60">
                    2370 W Cleveland Ave Ste. 108 #141
                    <br />
                    Madera, CA 93637, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
