import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Pickaxe, HeartHandshake, Ship } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import type { Lang } from "@/i18n/translations";
import heroImg from "@/assets/mining-hero.jpg";
import reImg from "@/assets/trade-export.jpg";
import mineralsImg from "@/assets/minerals.jpg";
import charityImg from "@/assets/association-charity.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Synaps Group" },
      { name: "description", content: "Flagship Synaps Group projects across mining, real estate, international trade and humanitarian impact in Madagascar." },
      { property: "og:title", content: "Synaps Group — Projects" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ProjectsPage,
});

interface Copy {
  eyebrow: string;
  title: string;
  subtitle: string;
  pillars: { title: string; text: string; cta: string; to: "/real-estate" | "/mining" | "/association" }[];
}

const COPY: Record<Lang, Copy> = {
  en: {
    eyebrow: "Projects",
    title: "Flagship Projects across Madagascar",
    subtitle: "A unified portfolio of mining operations, real construction & investment land, international trade and humanitarian initiatives — all under one Madagascar-rooted group.",
    pillars: [
      { title: "Real Construction & Investment Land", text: "SAHAZA I & II, Ambohimarina – Ilo Manana, Andohagara — titled residential plots, beachfront tourism land and turnkey hospitality assets.", cta: "Explore Real Estate", to: "/real-estate" },
      { title: "Mining Operations & Greenfield Standards", text: "Exploration, on-site processing and operations management — chrome ore, sea sands, river sands and red soils.", cta: "Discover Mining", to: "/mining" },
      { title: "International Trade & Export", text: "FOB Toamasina / CIF ASWP. Reliable supply chain to Chinese, European and Gulf buyers, secured by escrow and SGS inspection.", cta: "View Mining & Export", to: "/mining" },
      { title: "Humanitarian & Social Impact", text: "Funding the Neurones Madagascar association: 5,000+ students supported across rural Madagascar.", cta: "Visit the Association", to: "/association" },
    ],
  },
  fr: {
    eyebrow: "Projets",
    title: "Nos Projets phares à Madagascar",
    subtitle: "Un portefeuille unifié d'opérations minières, de construction réelle, de fonciers d'investissement, de commerce international et d'actions humanitaires — sous une seule bannière ancrée à Madagascar.",
    pillars: [
      { title: "Construction Réelle & Fonciers d'Investissement", text: "SAHAZA I & II, Ambohimarina – Ilo Manana, Andohagara — terrains résidentiels titrés, fonciers touristiques en bord de mer et actifs hôteliers clé en main.", cta: "Voir l'Immobilier", to: "/real-estate" },
      { title: "Opérations Minières & Normes Greenfield", text: "Exploration, traitement sur site et gestion opérationnelle — chrome, sables de mer, sables de rivière et terres rouges.", cta: "Découvrir les Mines", to: "/mining" },
      { title: "Commerce International & Export", text: "FOB Toamasina / CIF ASWP. Chaîne d'approvisionnement fiable vers la Chine, l'Europe et le Golfe, sécurisée par escrow et inspection SGS.", cta: "Voir Mines & Export", to: "/mining" },
      { title: "Impact Humanitaire & Social", text: "Financement de l'association Neurones Madagascar : plus de 5 000 élèves soutenus dans le Madagascar rural.", cta: "Voir l'Association", to: "/association" },
    ],
  },
  ar: {
    eyebrow: "المشاريع",
    title: "مشاريعنا الرائدة في مدغشقر",
    subtitle: "محفظة موحّدة للعمليات التعدينية والبناء الحقيقي والأراضي الاستثمارية والتجارة الدولية والمبادرات الإنسانية — كلها تحت راية واحدة متجذرة في مدغشقر.",
    pillars: [
      { title: "البناء الحقيقي والأراضي الاستثمارية", text: "ساهازا I و II، أمبوهيمارينا – إيلو مانانا، أندوهاغارا — قطع سكنية موثّقة وأراضٍ سياحية على الواجهة البحرية وأصول فندقية جاهزة.", cta: "استكشاف العقارات", to: "/real-estate" },
      { title: "العمليات التعدينية ومعايير Greenfield", text: "استكشاف ومعالجة في الموقع وإدارة العمليات — خام الكروم ورمال البحر والنهر والتربة الحمراء.", cta: "اكتشاف التعدين", to: "/mining" },
      { title: "التجارة الدولية والتصدير", text: "FOB توماسينا / CIF ASWP. سلسلة إمداد موثوقة للمشترين الصينيين والأوروبيين والخليجيين، مؤمَّنة بضمان وتفتيش SGS.", cta: "عرض التعدين والتصدير", to: "/mining" },
      { title: "الأثر الإنساني والاجتماعي", text: "تمويل جمعية نيرونز مدغشقر: أكثر من ٥٬٠٠٠ تلميذ مدعوم في الأرياف.", cta: "زيارة الجمعية", to: "/association" },
    ],
  },
  it: {
    eyebrow: "Progetti",
    title: "I nostri Progetti di punta in Madagascar",
    subtitle: "Un portafoglio unificato di operazioni minerarie, costruzione reale, terreni di investimento, commercio internazionale e iniziative umanitarie — tutto sotto un unico gruppo radicato in Madagascar.",
    pillars: [
      { title: "Costruzione Reale & Terreni di Investimento", text: "SAHAZA I & II, Ambohimarina – Ilo Manana, Andohagara — lotti residenziali titolati, terreni turistici fronte mare e asset alberghieri chiavi in mano.", cta: "Esplora l'Immobiliare", to: "/real-estate" },
      { title: "Operazioni Minerarie & Standard Greenfield", text: "Esplorazione, lavorazione in sito e gestione operativa — cromo, sabbie di mare, sabbie di fiume e terre rosse.", cta: "Scopri le Miniere", to: "/mining" },
      { title: "Commercio Internazionale & Export", text: "FOB Toamasina / CIF ASWP. Catena di fornitura affidabile verso Cina, Europa e Golfo, garantita da escrow e ispezione SGS.", cta: "Vedi Miniere & Export", to: "/mining" },
      { title: "Impatto Umanitario & Sociale", text: "Finanziamento dell'associazione Neurones Madagascar: oltre 5.000 studenti sostenuti nel Madagascar rurale.", cta: "Visita l'Associazione", to: "/association" },
    ],
  },
  zh: {
    eyebrow: "项目",
    title: "我们在马达加斯加的旗舰项目",
    subtitle: "一个统一的项目组合,涵盖采矿运营、真实建筑、投资地产、国际贸易与人道主义行动 —— 全部隶属于扎根马达加斯加的同一集团。",
    pillars: [
      { title: "真实建筑与投资地产", text: "SAHAZA 一号与二号、安博希马里纳 – 伊洛玛纳纳、安多哈加拉 —— 已确权住宅地块、海滨旅游用地与交钥匙酒店资产。", cta: "查看房地产", to: "/real-estate" },
      { title: "采矿运营与 Greenfield 标准", text: "勘探、现场加工与运营管理 —— 铬矿、海砂、河砂与红土。", cta: "了解采矿", to: "/mining" },
      { title: "国际贸易与出口", text: "FOB 图阿马西纳 / CIF ASWP。面向中国、欧洲与海湾买家的可靠供应链,由托管与 SGS 检验保障。", cta: "查看采矿与出口", to: "/mining" },
      { title: "人道与社会影响", text: "资助马达加斯加神经元协会:在马达加斯加农村支持超过五千名学生。", cta: "访问协会", to: "/association" },
    ],
  },
};

const ICONS = [Building2, Pickaxe, Ship, HeartHandshake];
const IMAGES = [reImg, mineralsImg, heroImg, charityImg];

function ProjectsPage() {
  const { lang } = useI18n();
  const c = COPY[lang];

  return (
    <div className="relative pt-32 pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-40" style={{ background: "var(--gradient-radial-gold)" }} />
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-luxury text-gold">{c.eyebrow}</span>
              <h1 className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">{c.title}</h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg text-ivory/80">{c.subtitle}</p>
              <div className="mx-auto mt-8 h-px w-32 bg-gradient-gold" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {c.pillars.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={p.title} delay={i * 100}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-[color-mix(in_oklab,var(--gold)_22%,transparent)] bg-[oklch(0.11_0.008_60)/0.6] backdrop-blur-xl shadow-elegant">
                    <div className="relative h-56 overflow-hidden">
                      <img src={IMAGES[i]} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute left-6 top-6 grid h-12 w-12 place-items-center rounded-2xl shadow-gold" style={{ background: "var(--gradient-gold)" }}>
                        <Icon className="h-5 w-5" style={{ color: "var(--charcoal)" }} strokeWidth={1.6} />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="font-serif text-2xl text-ivory sm:text-3xl">{p.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-ivory/75">{p.text}</p>
                      <Link to={p.to} className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-gold transition-colors hover:text-ivory">
                        {p.cta} <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
