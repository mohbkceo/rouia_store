import { ShieldCheck, Mail, Globe, Clock3 } from "lucide-react";

const policyData = {
  companyName: "HK.3.5",
  websiteName: "HK.3.5",
  effectiveDate: "1 janvier 2026",
  lastUpdated: "1 janvier 2026",
  contactEmail: "hk.3.5.@gmail.com",
  contactPhone: "+213553374615",
  websiteUrl: "https://rouia-store.vercel.app",
  sections: [
    {
      title: "1. Introduction",
      content: [
        `Chez ${"Nom de votre entreprise"}, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles.`,
        `Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons les informations lorsque vous visitez ${"Votre site web"} ou utilisez nos services.`,
      ],
    },
    {
      title: "2. Informations que nous collectons",
      content: [
        "Nous pouvons collecter les types d’informations suivants :",
        "• Les informations personnelles que vous fournissez directement, telles que votre nom, votre numéro de téléphone, votre adresse e-mail et votre adresse de livraison.",
        "• Les détails de commande et de transaction lorsque vous passez une commande.",
        "• Les données techniques telles que le type de navigateur, les informations sur l’appareil, l’adresse IP et le comportement d’utilisation.",
      ],
    },
    {
      title: "3. Comment nous utilisons vos informations",
      content: [
        "Nous utilisons vos informations pour :",
        "• Traiter et exécuter les commandes.",
        "• Vous contacter concernant votre commande ou vos demandes d’assistance.",
        "• Améliorer notre site web, nos services et l’expérience client.",
        "• Envoyer des mises à jour, offres ou notifications lorsque cela est autorisé.",
      ],
    },
    {
      title: "4. Partage de vos informations",
      content: [
        "Nous ne vendons pas vos informations personnelles.",
        "Nous pouvons partager des informations uniquement avec des tiers de confiance lorsque cela est nécessaire pour :",
        "• Traiter les paiements.",
        "• Livrer les produits.",
        "• Fournir une assistance technique ou un hébergement du site web.",
        "• Respecter les obligations légales.",
      ],
    },
    {
      title: "5. Sécurité des données",
      content: [
        "Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.",
        "Cependant, aucune méthode de transmission sur Internet n’est totalement sécurisée, et nous ne pouvons pas garantir une sécurité absolue.",
      ],
    },
    {
      title: "6. Cookies et suivi",
      content: [
        "Notre site web peut utiliser des cookies et des technologies similaires pour améliorer l’expérience utilisateur, analyser le trafic et optimiser les fonctionnalités.",
        "Vous pouvez contrôler ou désactiver les cookies via les paramètres de votre navigateur, mais certaines fonctionnalités du site peuvent ne pas fonctionner correctement.",
      ],
    },
    {
      title: "7. Vos droits",
      content: [
        "Selon votre lieu de résidence, vous pouvez avoir le droit de :",
        "• Accéder aux données personnelles que nous détenons à votre sujet.",
        "• Demander la correction ou la suppression de vos données.",
        "• Vous opposer à certaines opérations de traitement.",
        "• Retirer votre consentement lorsque le traitement est basé sur le consentement.",
      ],
    },
    {
      title: "8. Conservation des données",
      content: [
        "Nous conservons les informations personnelles uniquement pendant la durée nécessaire pour atteindre les objectifs décrits dans cette politique, sauf si une période de conservation plus longue est exigée par la loi.",
      ],
    },
    {
      title: "9. Liens externes",
      content: [
        "Notre site web peut contenir des liens vers des sites ou services tiers. Nous ne sommes pas responsables des pratiques de confidentialité ou du contenu de ces tiers.",
      ],
    },
    {
      title: "10. Modifications de cette politique",
      content: [
        "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre.",
        "Toute modification sera publiée sur cette page avec une date de révision mise à jour.",
      ],
    },
    {
      title: "11. Nous contacter",
      content: [
        `Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter par téléphone au ${"+213553374615"}.`,
      ],
    },
  ],
};

const quickFacts = [
  {
    icon: Mail,
    label: "E-mail",
    value: policyData.contactEmail,
  },
  {
    icon: Globe,
    label: "Site web",
    value: policyData.websiteUrl,
  },
  {
    icon: Clock3,
    label: "Dernière mise à jour",
    value: policyData.lastUpdated,
  },
  {
    icon: ShieldCheck,
    label: "Politique",
    value: "Confidentialité et protection des données",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="px-4 md:px-6 py-14 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand/[0.03] px-4 py-2 text-sm text-brand/70">
          <ShieldCheck className="w-4 h-4" />
          Politique de confidentialité
        </div>

        <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold text-brand">
          Politique de confidentialité
        </h1>

        <p className="mt-4 text-brand/60 leading-relaxed">
          Cette page explique comment {policyData.companyName} gère les informations personnelles collectées via {policyData.websiteName}.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-brand/50">
          <span>En vigueur : {policyData.effectiveDate}</span>
          <span className="hidden sm:inline">•</span>
          <span>Mise à jour : {policyData.lastUpdated}</span>
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