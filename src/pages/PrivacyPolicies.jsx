import { ShieldCheck, Mail, Globe, Clock3 } from "lucide-react";

const policyData = {
  companyName: "HK.3.5",
  websiteName: "HK.3.5",
  effectiveDate: "January 1, 2026",
  lastUpdated: "January 1, 2026",
  contactEmail: "hk.3.5.@gmail.com",
  contactPhone: "+213553374615",
  websiteUrl: "https://rouia-store.vercel.app",
  sections: [
    {
      title: "1. Introduction",
      content: [
        `At ${"Your Company Name"}, we respect your privacy and are committed to protecting your personal data.`,
        `This Privacy Policy explains how we collect, use, store, and protect information when you visit ${"Your Website"} or use our services.`,
      ],
    },
    {
      title: "2. Information We Collect",
      content: [
        "We may collect the following types of information:",
        "• Personal information you provide directly, such as your name, phone number, email address, and delivery address.",
        "• Order and transaction details when you place an order.",
        "• Technical data such as browser type, device information, IP address, and usage behavior.",
      ],
    },
    {
      title: "3. How We Use Your Information",
      content: [
        "We use your information to:",
        "• Process and fulfill orders.",
        "• Contact you regarding your order or support requests.",
        "• Improve our website, services, and customer experience.",
        "• Send updates, offers, or notifications where permitted.",
      ],
    },
    {
      title: "4. Sharing Your Information",
      content: [
        "We do not sell your personal information.",
        "We may share information only with trusted third parties when necessary to:",
        "• Process payments.",
        "• Deliver products.",
        "• Provide technical support or website hosting.",
        "• Comply with legal obligations.",
      ],
    },
    {
      title: "5. Data Security",
      content: [
        "We take reasonable technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.",
        "However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      title: "6. Cookies and Tracking",
      content: [
        "Our website may use cookies and similar technologies to enhance user experience, analyze traffic, and improve functionality.",
        "You can control or disable cookies through your browser settings, but some features of the site may not work properly.",
      ],
    },
    {
      title: "7. Your Rights",
      content: [
        "Depending on your location, you may have the right to:",
        "• Access the personal data we hold about you.",
        "• Request correction or deletion of your data.",
        "• Object to certain processing activities.",
        "• Withdraw consent where processing is based on consent.",
      ],
    },
    {
      title: "8. Data Retention",
      content: [
        "We keep personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.",
      ],
    },
    {
      title: "9. External Links",
      content: [
        "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties.",
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time.",
        "Any changes will be posted on this page with an updated revision date.",
      ],
    },
    {
      title: "11. Contact Us",
      content: [
        `If you have any questions about this Privacy Policy, you can contact us via phone at ${"+213553374615"}.`,
      ],
    },
  ],
};

const quickFacts = [
  {
    icon: Mail,
    label: "Email",
    value: policyData.contactEmail,
  },
  {
    icon: Globe,
    label: "Website",
    value: policyData.websiteUrl,
  },
  {
    icon: Clock3,
    label: "Last Updated",
    value: policyData.lastUpdated,
  },
  {
    icon: ShieldCheck,
    label: "Policy",
    value: "Privacy & Data Protection",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="px-4 md:px-6 py-14 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand/[0.03] px-4 py-2 text-sm text-brand/70">
          <ShieldCheck className="w-4 h-4" />
          Privacy Policy
        </div>

        <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold text-brand">
          Privacy Policy
        </h1>

        <p className="mt-4 text-brand/60 leading-relaxed">
          This page explains how {policyData.companyName} handles personal
          information collected through {policyData.websiteName}.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-brand/50">
          <span>Effective: {policyData.effectiveDate}</span>
          <span className="hidden sm:inline">•</span>
          <span>Updated: {policyData.lastUpdated}</span>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickFacts.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-3xl border border-brand/10 bg-white p-5"
            >
              <div className="w-11 h-11 rounded-2xl bg-brand/5 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-brand/40">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-brand break-all">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-3xl border border-brand/10 bg-white p-6 md:p-8">
        <div className="space-y-8">
          {policyData.sections.map((section) => (
            <article key={section.title} className="space-y-3">
              <h2 className="font-semibold text-xl text-brand">
                {section.title}
              </h2>

              <div className="space-y-2 text-brand/65 leading-relaxed">
                {section.content.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}