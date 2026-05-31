'use client';

import Image from 'next/image';
import { Navbar } from '@/components/layout/navbar';
import { FloatingWidgets } from '@/components/layout/floating-widgets';
import { AnimatedSection, ParallaxImage } from '@/components/ui/animations';
import { Droplets, Flower2, Heart, Gem, ShieldCheck, Scroll as Feathers, MapPin, Star, Phone, Mail, Send, ZoomIn, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden pt-20">
      <Navbar />
      <FloatingWidgets />

      {/* Hero Section */}
      <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden -mt-20">
        <ParallaxImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSyXedDESI9DA5FR8-wqVgh53MB3LFSyiqDtkBfEW4Gcay1TsHPq56SZW7yFSPk9hl6eDVmFYHrMzKiEMwgvQRlr_8ezuScpsz8r1ezD_4uu5n8gdx2zXif73pOTlunTbWhfHfFnVq2JhZF_9uqZOmuMWohaWU0aUE-p88i5pTI2SwW0q4k5kykUusxL8UttAKnsQ4GPytnqsI4pIbJKEs3p63gfuzQ2hO9YySVs9_z_vaWm517mwR2oZ2-1SWycqjGdxi0fmqie4" alt="Luxury Hammam Marrakech" />
        <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
          <AnimatedSection delay={0}>
            <span className="shimmer-text text-[12px] font-bold tracking-[0.3em] uppercase mb-6 block">{t('hero.subtitle')}</span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-on-primary font-display-lg text-[40px] md:text-[64px] leading-tight mb-8">
              {t('hero.title')}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4} className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#book" className="w-full md:w-auto bg-primary-container text-on-primary-fixed px-10 py-5 rounded-full text-[12px] font-bold tracking-widest uppercase hover:bg-primary transition-all animate-glow shadow-xl">
              {t('hero.book')}
            </a>
            <a href="https://wa.me/212777553714" className="w-full md:w-auto border border-white/40 backdrop-blur-sm text-white px-10 py-5 rounded-full text-[12px] font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2 group">
              <Phone size={18} className="group-hover:rotate-12 transition-transform"/> WhatsApp
            </a>
          </AnimatedSection>
        </div>
        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors animate-bounce">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{t('hero.scroll')}</span>
          <ChevronDown size={32} />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-[120px] md:py-[160px] px-6 md:px-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection className="relative">
            <div className="relative z-10 overflow-hidden rounded-[100px_100px_0_0]">
              <div className="aspect-[4/5] relative hover:scale-105 transition-transform duration-1000 shadow-2xl">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm1vBbQDT3q0zM1f6WTd4KOCuuz632GhDvVGMQ1ti0m4X_NQrJG9Ceoam9MaU-iNTfe3LV131lHA8FJR5gsI5EybEBztvGuZU9QXJuT5y18cKJpRyHhNxYYh0XCoFDjAhL8WHL2PsYKRrnzTJGDotGOSvL23nk9uhU4M-2vpm-e-fGKQ9MggMw4nB-OaRQe2U0F7FAuJ4GfPCt5hC09bnIrjAE6XYE4qul75L6ZrYGtiOeO-7E59hR7OI6WcZcyUTcRjxOixNcrp0" alt="Authentic Moroccan Rituals" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full border border-primary/20 rounded-[100px_100px_0_0] z-0 translate-x-4 translate-y-4"></div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <span className="text-primary text-[12px] font-bold tracking-widest uppercase mb-4 block">{t('about.subtitle')}</span>
            <h2 className="font-display-lg text-[32px] md:text-[48px] text-primary mb-8 leading-tight">{t('about.title')}</h2>
            <div className="space-y-6 text-on-surface-variant font-body text-base lg:text-lg">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="h-px bg-outline-variant flex-grow"></div>
              <span className="font-display-lg text-[2rem] md:text-3xl text-primary italic shimmer-text">Rafaele</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-[120px] md:py-[160px] bg-surface-container-low px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-display-lg text-[32px] md:text-[48px] text-primary mb-4 leading-tight">{t('services.title')}</h2>
            <p className="text-on-surface-variant font-body text-base lg:text-lg max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('service1.title'),
                icon: <Droplets className="text-primary-container" />,
                desc: t('service1.desc'),
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOlmwe6xxyH_gg-lTfp-Q8kbUyd4S0cslCRZwDBWbZCXujmfSYiSSD2ww6xOFhk7mayGsRahYOmR0TLj-24ugxGOaC9Sq8r7DchnJsngu6WsfEDHNuxSWdVKLNLczuK_y4b7uGc-FSrBViSjpIjOSAu3FlIbayEhQP0RxUSMXwQR8SXXEsnXoTmPlMp3pXqTuvnCz_JXrm-3WSR--Leul2jX_HyeRoLHNhl0t67Ww4RZvRVm62B9_FbO9K_eHIPXGNB0xl-mpZcFU"
              },
              {
                title: t('service2.title'),
                icon: <Flower2 className="text-primary-container" />,
                desc: t('service2.desc'),
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAasqTGe3uUCgfKmyP82szrn2_0jcMK_ZWobi3dhBrvpbnolagNJ0dXwxk6BewIX9cCkF4XD9agWqO58GEJbs2L31yqOzApNkAyXuBkYPvYeNWngdv55QQYMlQb8zVh7bzG7imDXgnYWhQo3lvq4UiceVj5jkTNBMslK5BCZMhS4-nRYILeKU1p9pak5casHQAOKyWG_KwAh4dUtO2POAXQeF0o6P4MA3IPzcxfOaPY4Gcg--5-iek3dXXhC5fW690sPm6TMgrh8us"
              },
              {
                title: t('service3.title'),
                icon: <Heart className="text-primary-container" />,
                desc: t('service3.desc'),
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpDgMpkpOYKFbV835kijjYbC2EJRjnuToIJn9ty5VbgybCugYgwwpe6fgW8wONEsfjwf4D4OsKgpigPYYTGKkSOBHRl1uq6-fMHhi-LkICcAQ4uATMhhTGWXrPbZn1XEd4kZDpfEGoK94CPijFzZGuYXNxFtcSAVac8qjD7zWPn3O7Q94ncsPFV-qXu9tF6vs6cXw5VIiIYRNP17CcF1UIxdiAyFzt86s95d-eaE0NlaYZHNX2Vfqp_eHspGkoLcO8o7pQesK4iwo"
              }
            ].map((service, i) => (
              <AnimatedSection key={service.title} delay={0.1 * (i + 1)} className="group relative bg-surface-bright dark:bg-surface border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-xl">
                <div className="h-[300px] overflow-hidden relative">
                  <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display-lg text-[24px] text-primary">{service.title}</h3>
                    {service.icon}
                  </div>
                  <p className="text-on-surface-variant font-body text-base mb-6">{service.desc}</p>
                  <a href="#" className="text-primary text-[12px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                    {t('services.explore')} <ChevronDown size={14} className="-rotate-90" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-[120px] md:py-[160px] px-6 md:px-20 bg-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-primary text-[12px] font-bold tracking-widest uppercase mb-4 block">{t('gallery.subtitle')}</span>
              <h2 className="font-display-lg text-[32px] md:text-[48px] text-primary leading-tight">{t('gallery.title')}</h2>
            </div>
            <div className="text-on-surface-variant font-body text-base max-w-sm hidden md:block">
               {t('gallery.desc')}
            </div>
          </AnimatedSection>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD8HZHtC_DspQWIOaM3VagVE9ZVrSvm8sthyE1-Ir5diYNSuiyNSXLP3NvvE4uhJ9CTHbFIo730D3shNVjR-QGZQO5bG3k90F3gYitt2NW4e92Z7IsXrAtns_nzddxf75ICbaC0rIGhwarC_6_0iHWNdrXLuBjdYyHmNxpcGIYpGniin6e7O9PDvvvKex4g-DsGNX_tuPFT7hFw55FHRFDSpQzTlwtojcC5C5tdlBQAvZ1kNn710Z9DWTm2nhsHbRXfkviu7Iir3Io",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCSO0VfrpJis5hn5VVE9I1kRZCNddZqq6QYY57aMzJAFFPnKb206QIjmB_-qz3p8HgKztCSNCG7TrQ-6Wszolm5opx16QHOnElhIZXGVaQ64PVnJMhSlij0fZvnTITn_Z07-XLgCgyZWsv53pFaei0atfCnR_amAZvuk43zFe7KzpMXDqeSjpLMqupliHBsFxTVXLJtqglYss2-x0ecCz_0Gc48TfX0wp9akfaZYFLAP7-T5AAKpc767uTN-AAUVv5_EtpQRfh5Uko",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAEzl20LmI_zEpdPzJFBYoeP8TUcasUO8ccQS5KNOHdrCCMtIpW7osUGCBPB6z1XZlYXS-CnTIXM-tUEeANn8Fc3sM6cjuVfLnPcOsx7d8qHi6pkmlSQUbyKR9IrOg4yLP7uogwUEnuZqw0vmQnS78JFsWSBQgt6h2a2ZPpqwFZD8zohSbjpfWELw3Czuiy9LdfkOLngkK_HxeIZTCFXpNjOhWiSkkF8gOv8KN1qUICZewGUFV9_qicHc3E8R3OG6IpIFiSX8uPgdA",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuALw26oy-LSLww9M4gVWwuaO8hz3Woq0LnwGMla6z2x1LOy8KkC_FQAnytTN8dTL0mk58-iHHPNQQNTTuxLkJNhuqZeDskL81f-pdmSyp3ELlJfwa8xD77FRyWCaOKFCx7um91shRfDWyTXvceeJwAIFas2PPaw2Rxj92B38hwGjldC0mLlssg7En7Ea6Dzq8RTzWINgP0Ktq8suiRnRUJJ18SrfOOqGru7N8jeIQFyoguCuTMjJNqx0oIa5eZLnsrOSNPu_IigU5k"
            ].map((img, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="break-inside-avoid relative group overflow-hidden rounded-lg block">
                <Image src={img} alt="Gallery image" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-[2s]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex items-center justify-center">
                  <ZoomIn className="text-white transform scale-50 group-hover:scale-100 transition-transform duration-500" size={40} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-[120px] bg-inverse-surface dark:bg-surface-container-lowest text-white px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Gem size={48} className="text-primary-fixed-dim mb-6" />, title: t('feat1.title'), desc: t('feat1.desc') },
            { icon: <ShieldCheck size={48} className="text-primary-fixed-dim mb-6" />, title: t('feat2.title'), desc: t('feat2.desc') },
            { icon: <Feathers size={48} className="text-primary-fixed-dim mb-6" />, title: t('feat3.title'), desc: t('feat3.desc') },
            { icon: <MapPin size={48} className="text-primary-fixed-dim mb-6" />, title: t('feat4.title'), desc: t('feat4.desc') }
          ].map((feat, idx) => (
            <AnimatedSection key={feat.title} delay={0.1 * idx} className="flex flex-col items-center text-center">
              {feat.icon}
              <h4 className="font-display-lg text-[24px] mb-4 text-white dark:text-on-surface">{feat.title}</h4>
              <p className="text-white/70 dark:text-on-surface-variant font-body text-base">{feat.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-[120px] md:py-[160px] bg-surface-container px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-primary text-[12px] font-bold tracking-widest uppercase mb-4 block">{t('test.subtitle')}</span>
            <div className="max-w-3xl mx-auto pt-8">
              <div className="flex justify-center text-primary-container mb-8 gap-1">
                {[1,2,3,4,5].map(star => <Star key={star} size={24} fill="currentColor" />)}
              </div>
              <p className="font-display-lg text-[24px] md:text-[40px] text-on-surface mb-8 italic">
                {t('test.quote')}
              </p>
              <p className="text-[12px] font-bold text-primary uppercase tracking-widest">{t('test.author')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-[120px] md:py-[160px] px-6 md:px-20 bg-surface-bright relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <AnimatedSection>
            <h2 className="font-display-lg text-[32px] md:text-[48px] text-primary mb-6 leading-tight">{t('book.title')}</h2>
            <p className="text-on-surface-variant font-body text-lg mb-10">
              {t('book.desc')}
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-on-surface group">
                <Phone className="text-primary group-hover:scale-110 transition-transform" />
                <span className="font-body text-base">+212 5 24 38 47 08</span>
              </div>
              <div className="flex items-center gap-4 text-on-surface group">
                <Mail className="text-primary group-hover:scale-110 transition-transform" />
                <span className="font-body text-base">contact@riadrafaele.com</span>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="bg-surface dark:bg-surface-container-high border border-outline-variant/30 p-8 md:p-12 shadow-2xl rounded-2xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder={t('book.form.name')} className="w-full border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors bg-transparent font-body" />
                <input type="email" placeholder={t('book.form.email')} className="w-full border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors bg-transparent font-body" />
              </div>
              <select className="w-full border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors bg-transparent font-body appearance-none">
                <option value="">{t('book.form.treatment')}</option>
                <option value="hammam">{t('book.form.t1')}</option>
                <option value="argan">{t('book.form.t2')}</option>
                <option value="couple">{t('book.form.t3')}</option>
                <option value="pass">{t('book.form.t4')}</option>
              </select>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="date" className="w-full border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors bg-transparent font-body opacity-50 focus:opacity-100" />
                <input type="time" className="w-full border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors bg-transparent font-body opacity-50 focus:opacity-100" />
              </div>
              <button type="submit" className="w-full bg-primary text-on-primary py-5 rounded-lg text-[12px] font-bold tracking-widest uppercase hover:bg-primary-container transition-all shadow-lg active:scale-95 animate-glow">
                {t('book.form.submit')}
              </button>
              <p className="text-center text-on-surface-variant font-body text-[12px] opacity-70">
                {t('book.form.or')} <a href="https://wa.me/212777553714" className="text-primary font-bold underline" target="_blank" rel="noreferrer">WhatsApp</a>
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-inverse-surface dark:bg-surface-container-low w-full py-16 px-6 md:px-20 text-white dark:text-on-surface border-t border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display-lg text-[32px] text-primary-fixed-dim mb-6 shimmer-text">Riad Rafaele</h3>
            <p className="text-white/70 dark:text-on-surface-variant font-body text-base pr-10">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="text-primary-fixed font-bold mb-6 text-[12px] uppercase tracking-widest">{t('footer.nav')}</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/70 dark:text-on-surface-variant hover:text-primary-fixed transition-colors font-body text-base">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-white/70 dark:text-on-surface-variant hover:text-primary-fixed transition-colors font-body text-base">{t('nav.services')}</a></li>
              <li><a href="#gallery" className="text-white/70 dark:text-on-surface-variant hover:text-primary-fixed transition-colors font-body text-base">{t('nav.gallery')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-fixed font-bold mb-6 text-[12px] uppercase tracking-widest">{t('footer.info')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 dark:text-on-surface-variant hover:text-primary-fixed transition-colors font-body text-base">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-white/70 dark:text-on-surface-variant hover:text-primary-fixed transition-colors font-body text-base">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-white/70 dark:text-on-surface-variant hover:text-primary-fixed transition-colors font-body text-base">{t('footer.guide')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-fixed font-bold mb-6 text-[12px] uppercase tracking-widest">{t('footer.newsletter')}</h4>
            <p className="text-white/70 dark:text-on-surface-variant font-body text-base mb-4">{t('footer.newsletter.desc')}</p>
            <div className="flex gap-2">
              <input type="email" placeholder={t('book.form.email')} className="bg-white/10 dark:bg-on-surface/5 border-none rounded-lg px-4 py-2 text-white dark:text-on-surface w-full focus:ring-1 focus:ring-primary-fixed outline-none font-body" />
              <button className="bg-primary-fixed text-on-primary-fixed p-3 rounded-lg hover:bg-white transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 dark:text-on-surface-variant font-body text-sm">{t('footer.rights')}</p>
        </div>
      </footer>
    </main>
  );
}
