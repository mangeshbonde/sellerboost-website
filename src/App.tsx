import React, { useState } from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  TrendingUp, 
  Search, 
  FileText, 
  Layers, 
  Clock, 
  ShoppingBag, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Send, 
  Sliders, 
  Copy, 
  Check, 
  Menu, 
  X, 
  BarChart3, 
  Zap, 
  Info,
  Terminal,
  Activity,
  Gauge,
  Percent,
  CheckCircle,
  HelpCircle,
  Cpu,
  Eye,
  Crosshair,
  Maximize2,
  Workflow,
  MousePointerClick,
  Sparkle,
  Award,
  ArrowUpRight
} from 'lucide-react';

/* =========================================================================
    AUTHENTIC VECTOR PLATFORM LOGOS (TUNED FOR CRISP LIGHT THEMES)
    ========================================================================= */

// Amazon Full Brand Lockup with Dark Text & Signature Orange Smile
const AmazonLogo = ({ className = "h-4 w-auto" }) => (
  <svg viewBox="0 0 120 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Amazon">
    <path d="M70.2 24.3c-7.8 5.7-19.1 8.8-28.9 8.8-13.8 0-26.2-5-35.6-13.4-.7-.7-.1-1.6.8-1.1 9.9 5.8 22.1 9.3 34.8 9.3 8.7 0 18.8-2.5 28-7.7.9-.5 1.7.5.9 1.1z" fill="#FF9900"/>
    <path d="M72.1 21.8c-.9-1.2-6.1-.6-8.9-.3-.8.1-.9-.6-.2-1.1 4.4-3.1 11.6-2.2 12.3-1.3.8.9-.2 8.2-4.3 11.7-.6.6-1.3.2-1-.4.9-2.2 2.9-7.4 2.1-8.6z" fill="#FF9900"/>
    <path d="M20.2 18.2c-.3-.4-1.2-.4-1.8-.4-2.8 0-4.6 1.4-4.6 3.8 0 2.2 1.5 3.3 3.5 3.3 1.9 0 3.2-1.1 3.8-2.3l-.9-4.4zm2.7 7.7h-2.5v-1.6c-.9 1.2-2.5 1.9-4.2 1.9-3.4 0-5.6-2.1-5.6-5.4 0-3.6 2.7-5.5 6.6-5.5 1.3 0 2.3.1 3.1.3v-1.1c0-2.1-1.3-3.1-3.6-3.1-1.6 0-3.1.4-4.5 1.2-.4.2-.8-.1-.9-.5l-.4-1.5c-.1-.4.1-.7.4-.9 1.8-1 3.8-1.5 6-1.5 4 0 6 2 6 5.8v11.8z" fill="#0F172A"/>
    <path d="M29.2 14.1c1.3-1.7 3.3-2.6 5.3-2.6 2.3 0 3.8 1.1 4.4 3 1.2-1.9 3.1-3 5.3-3 3.3 0 5.2 2.2 5.2 6.1v8.3h-2.8v-7.8c0-2.6-1.1-3.9-2.9-3.9-1.6 0-2.8 1.2-3.4 2.9v8.8h-2.8v-7.8c0-2.6-1.1-3.9-2.9-3.9-1.7 0-2.8 1.2-3.4 2.9v8.8h-2.8V11.8h2.6l.1 2.3z" fill="#0F172A"/>
    <path d="M53.1 18.8c0-4.3 3.2-7.3 7.6-7.3s7.6 3 7.6 7.3c0 4.3-3.2 7.4-7.6 7.4s-7.6-3.1-7.6-7.4zm12.3 0c0-2.9-1.9-4.8-4.7-4.8-2.8 0-4.7 1.9-4.7 4.8 0 2.9 1.9 4.8 4.7 4.8 2.8 0 4.7-1.9 4.7-4.8z" fill="#0F172A"/>
    <path d="M72.2 14.1c1.2-1.7 3.3-2.6 5.5-2.6 3.5 0 5.6 2.2 5.6 6.1v8.3h-2.8v-7.8c0-2.6-1.2-3.9-3.1-3.9-1.8 0-3.1 1.3-3.7 3.2v8.5h-2.8V11.8h2.6l.1 2.3z" fill="#0F172A"/>
    <path d="M86.8 18.2c-.3-.4-1.2-.4-1.8-.4-2.8 0-4.6 1.4-4.6 3.8 0 2.2 1.5 3.3 3.5 3.3 1.9 0 3.2-1.1 3.8-2.3l-.9-4.4zm2.7 7.7H87v-1.6c-.9 1.2-2.5 1.9-4.2 1.9-3.4 0-5.6-2.1-5.6-5.4 0-3.6 2.7-5.5 6.6-5.5 1.3 0 2.3.1 3.1.3v-1.1c0-2.1-1.3-3.1-3.6-3.1-1.6 0-3.1.4-4.5 1.2-.4.2-.8-.1-.9-.5l-.4-1.5c-.1-.4.1-.7.4-.9 1.8-1 3.8-1.5 6-1.5 4 0 6 2 6 5.8v11.8z" fill="#0F172A"/>
    <path d="M96.4 14.2l5.7 8.2h-5.9v3.5h9.4v-2.3l-5.8-8.3h5.7v-3.5h-9.1v2.4z" fill="#0F172A"/>
  </svg>
);

// Amazon Light Glass Badge Icon
const AmazonIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Amazon Icon">
    <rect width="36" height="36" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
    <path d="M16 12.8c-2.3 0-4.2 1.3-4.2 3.8 0 2.2 1.6 3.4 3.7 3.4 1.3 0 2.4-.6 3-1.6v1.3h2.6V13c0-3.3-2.1-4.7-5.1-4.7-2 0-3.8.6-5.1 1.6-.3.3-.2.7.1.9l1.4 1.1c.3.2.7.1.9-.1.8-.6 1.8-1 2.8-1 1.7 0 2.5.8 2.5 2.1v.2c-.6-.2-1.6-.3-2.6-.3zm.4 4.8c-1.1 0-1.9-.6-1.9-1.6 0-1.1.8-1.7 2-1.7.7 0 1.5.2 2 .5v.9c-.4 1.1-1.2 1.9-2.1 1.9z" fill="#0F172A"/>
    <path d="M8.5 24.8c4.5 3.3 11 4.5 17.5 1.5.5-.2.8.3.4.6-6 4.2-13.8 3.5-18.4-.7-.4-.4 0-.8.5-.5z" fill="#FF9900"/>
    <path d="M26.2 24.8c-.3-.9-2.4-.4-3.5-.2-.3 0-.4-.3-.1-.5 1.7-1.2 4.5-.9 4.8-.5.3.4 0 3.2-1.7 4.5-.3.2-.5 0-.4-.2.4-.9 1.2-2.9.9-3.3z" fill="#FF9900"/>
  </svg>
);

// Flipkart Full Brand Lockup with Crisp Blue Typography
const FlipkartLogo = ({ className = "h-4 w-auto" }) => (
  <svg viewBox="0 0 115 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Flipkart">
    <g transform="translate(1, 2)">
      <path d="M6.5 5.5h15.2l2.6 19.5H4L6.5 5.5z" fill="#FFE11B"/>
      <path d="M10 5.5V3.8a3.8 3.8 0 0 1 7.6 0v1.7h-2V3.8a1.8 1.8 0 0 0-3.6 0v1.7H10z" fill="#FBBF24"/>
      <path d="M1.5 10.5h4v1.8h-4v-1.8zm-1.5 4.5h6v1.8H0V15zm2.5 4.5h3.5v1.8H2.5v-1.8z" fill="#2874F0"/>
      <path d="M17.5 9.8h-3.6c-.7 0-1.1.4-1.3 1l-.3 1.2h3l-.4 1.8h-2.9l-1.5 7.4h-2.4l1.5-7.4H7.8l.4-1.8h1.9l.4-1.5c.5-1.9 2-3 4.1-3h3.3l-.4 2.3z" fill="#2874F0"/>
    </g>
    <text x="32" y="21" fill="#2874F0" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontStyle="italic" fontSize="16" letterSpacing="-0.3">
      Flipkart
    </text>
    <circle cx="98" cy="12" r="2.2" fill="#FFE11B"/>
  </svg>
);

// Flipkart Light Glass Icon
const FlipkartIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Flipkart Icon">
    <rect width="36" height="36" rx="10" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
    <g transform="translate(4, 3)">
      <path d="M7 6.5h14.5l2.6 19H4.5L7 6.5z" fill="#FFE11B"/>
      <path d="M10.5 6.5V4.5a3.8 3.8 0 0 1 7.6 0v2h-2V4.5a1.8 1.8 0 0 0-3.6 0v2h-2z" fill="#F59E0B"/>
      <path d="M2 11h4.2v2H2v-2zm-2 5h6.2v2H0v-2zm2.8 5h3.8v2H2.8v-2z" fill="#2874F0"/>
      <path d="M17.8 11h-3.8c-.8 0-1.2.4-1.4 1.1l-.3 1.3h3.2l-.5 2h-3.1l-1.6 8h-2.5l1.6-8H8.8l.5-2h2l.4-1.6c.5-2 2-3.2 4.2-3.2h3.4l-.5 2.4z" fill="#2874F0"/>
    </g>
  </svg>
);

// Meesho Full Brand Lockup with Signature Magenta 'm' & Crisp Text
const MeeshoLogo = ({ className = "h-4 w-auto" }) => (
  <svg viewBox="0 0 108 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Meesho">
    <g transform="translate(1, 3)">
      <rect width="24" height="24" rx="6" fill="#F43397" />
      <path d="M6 17.5V10.5c0-1.6 1-2.4 2.3-2.4 1.1 0 2 .6 2.4 1.6.4-1 1.3-1.6 2.4-1.6 1.4 0 2.4.9 2.4 2.4v7h-1.8v-6.4c0-.8-.4-1.2-1.1-1.2-.7 0-1.1.4-1.1 1.2v6.4h-1.8v-6.4c0-.8-.4-1.2-1.1-1.2-.7 0-1.1.4-1.1 1.2v6.4H6z" fill="#FFFFFF" />
    </g>
    <text x="31" y="21" fill="#0F172A" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3">
      meesho
    </text>
  </svg>
);

// Meesho Light Glass Icon
const MeeshoIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Meesho Icon">
    <rect width="36" height="36" rx="10" fill="#FFFFFF" stroke="#FBCFE8" strokeWidth="1.5" />
    <path d="M9 25V14.5c0-2.4 1.5-3.7 3.5-3.7 1.7 0 2.9 1 3.5 2.3.6-1.3 1.8-2.3 3.5-2.3 2.1 0 3.5 1.3 3.5 3.7V25h-2.7v-9.6c0-1.1-.7-1.8-1.6-1.8-1 0-1.7.7-1.7 1.8V25H16v-9.6c0-1.1-.7-1.8-1.6-1.8-1 0-1.7.7-1.7 1.8V25H9z" fill="#F43397" />
    <circle cx="28" cy="8.5" r="2.5" fill="#F43397" />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeMarketplaceTab, setActiveMarketplaceTab] = useState('amazon');
  const [activeProductNiche, setActiveProductNiche] = useState('earbuds');
  const [optimizerMode, setOptimizerMode] = useState('after');
  const [expandedService, setExpandedService] = useState(0);
  const [copiedSection, setCopiedSection] = useState(null);
  const [privacyModal, setPrivacyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);

  // Live Inspector Simulator
  const [inspectorActiveMetric, setInspectorActiveMetric] = useState('all');

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    marketplace: 'Amazon',
    productUrl: '',
    skuCount: '1 Product (Single Launch)',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // WhatsApp Configuration
  const whatsappNumber = "919373843585";
  const defaultWhatsAppText = "Hello! I am an online seller. I need professional product title, SEO-friendly description, keywords, and product listing optimization services. I would like to share my product link and discuss the details.";

  const createWhatsAppUrl = (customText) => {
    const encoded = encodeURIComponent(customText || defaultWhatsAppText);
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Seller name is required";
    if (!formData.phoneOrEmail.trim()) errors.phoneOrEmail = "WhatsApp number or email is required";
    if (!formData.productUrl.trim()) errors.productUrl = "Product link or description is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormSubmitted(true);
  };

  const getFormWhatsAppUrl = () => {
    const text = `Hello! I would like to request listing optimization:
• Seller Name: ${formData.name}
• Contact: ${formData.phoneOrEmail}
• Target Platform: ${formData.marketplace}
• Scope: ${formData.skuCount}
• Product Link: ${formData.productUrl}
• Target Focus / Notes: ${formData.notes || 'None'}

Please review my product and share the quotation and turnaround time.`;
    return createWhatsAppUrl(text);
  };

  const copyToClipboard = (text, sectionKey) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Multi-Product Interactive Comparison Database
  const productSamples = {
    earbuds: {
      category: "Consumer Audio & Gadgets",
      name: "Ultra-Light ANC Wireless Earbuds",
      marketplaces: {
        amazon: {
          before: {
            title: "earbuds bluetooth black sound good earphones wireless for all phones",
            score: 34,
            chars: 68,
            readability: "Poor (Keyword Chopped)",
            mobileSafe: "Fail - Cut off at 'sound'",
            bullets: [
              "good sound with deep bass and high volume",
              "long lasting battery for all day songs",
              "connects to android and ios mobile phones",
              "black color compact box easy to carry"
            ],
            backendTerms: "earbuds wireless bluetooth (only 28/249 bytes used)",
            highlightIssue: "Misses 70% of high-intent search volume including Active Noise Cancellation, IPX rating, and driver specs."
          },
          after: {
            title: "AcoustiMax Ultra ANC Wireless Earbuds - 48H Playtime, Hybrid Active Noise Cancelling, Bluetooth 5.4 with Quad-Mics for Gaming & Studio Calls",
            score: 98,
            chars: 151,
            readability: "Algorithmic Precision Grade A+",
            mobileSafe: "Safe - Brand + ANC visible before 60-character mobile fold",
            bullets: [
              "HYBRID ACTIVE NOISE CANCELLATION (38dB ANC): Quad environmental microphones cancel background traffic, AC hum, and office chatter for undisturbed audio.",
              "48-HOUR TOTAL PLAYTIME & TYPE-C TURBO CHARGE: Enjoy 10 hours on a single charge plus 38 reserve hours via the pocket matte case (10 min charge = 3 hours playback).",
              "BLUETOOTH 5.4 & LOW-LATENCY GAMING: Instant auto-pairing with 38ms ultra-low latency prevents audio-visual lag in movies and competitive mobile gaming.",
              "CUSTOM 13MM GRAPHENE DRIVERS: Engineered for resonant bass punch, clear mids, and crystalline treble with dedicated AAC/SBC audio decoding.",
              "IPX7 SWEAT & WATER RESISTANT: Sweat-shield nano-coating protects internal circuitry during intense gym workouts and monsoon running."
            ],
            backendTerms: "tws noise cancelling ear buds sweatproof gym headphones type c fast charging low latency calling mic",
            highlightIssue: "Full algorithmic compliance; saturated with 14 buyer search queries with capitalized scannable benefit hooks."
          }
        },
        flipkart: {
          before: {
            title: "wireless earphones fast charging bluetooth headset mic",
            score: 29,
            chars: 54,
            readability: "Sparse / Missing Attributes",
            mobileSafe: "Fail - Missing brand and technical specs",
            bullets: [
              "heavy bass earphone",
              "fast charging support",
              "mic for calling clearly",
              "good design box"
            ],
            backendTerms: "earphone wireless headset",
            highlightIssue: "Flipkart catalog engine penalizes listings missing Brand, Model, and verified technical tags."
          },
          after: {
            title: "AcoustiMax AirWave Pro True Wireless Headset with 48 hrs Playtime, ENC Mic & Quad Drivers Bluetooth Headset (Shadow Black, In the Ear)",
            score: 96,
            chars: 140,
            readability: "Flipkart Catalog Taxonomy Standard",
            mobileSafe: "Pass - Matches Flipkart filter indexing syntax",
            bullets: [
              "With Mic: Quad AI Environmental Noise Cancellation Mic for crystal clear voice calls.",
              "Battery Life: 48 Hours Massive Backup | Fast Charging (10 mins = 180 mins playtime).",
              "Driver Size: 13mm Dynamic Titanium Drivers tuned for punchy Indian bass sound curves.",
              "Wireless Range: 15 meters stable Bluetooth 5.4 connection with zero signal drop.",
              "Water Resistant: IPX7 Rated for high endurance against sweat and moisture splashes."
            ],
            backendTerms: "tws bluetooth earphones true wireless headset in the ear black fast charging bass mic",
            highlightIssue: "Engineered specifically to map into Flipkart category filters (Color, Type, Driver, Battery, Connectivity)."
          }
        },
        meesho: {
          before: {
            title: "tws bluetooth earphone single piece box pack",
            score: 41,
            chars: 46,
            readability: "Vague Reseller Title",
            mobileSafe: "Fail - Zero dimensions or compatibility details",
            bullets: [
              "best quality earphone for calling",
              "comes with charging cable inside",
              "easy to pair with any smartphone"
            ],
            backendTerms: "earphone tws bluetooth",
            highlightIssue: "Triggers frequent RTO (Return to Origin) because customers don't know battery limits or compatibility."
          },
          after: {
            title: "AcoustiMax Pro Wireless Earbuds TWS Bluetooth 5.4 With Mic, 48H Battery & Fast Charging Cable Included (Works On All Android & iPhone)",
            score: 97,
            chars: 136,
            readability: "Reseller-Friendly & Zero-Return Engineered",
            mobileSafe: "Pass - Mobile scannable on WhatsApp catalogs",
            bullets: [
              "BATTERY BACKUP: Up to 48 hours total music playback with digital LED battery display case.",
              "PHONE COMPATIBILITY: 100% compatible with all Android smartphones, iPhones, tablets, and laptops.",
              "BOX CONTENTS: 2x Earbuds, 1x Charging Case, 1x Type-C Cable, 3x Silicone Eartip Pairs, 1x User Manual.",
              "CRYSTAL CLEAR CALLING: Dual microphones ensure loud and clear voice on WhatsApp calls and normal phone calls.",
              "EASY ONE-STEP PAIRING: Automatically connects the moment you open the lid."
            ],
            backendTerms: "earbuds bluetooth earphones wireless tws mobile headphones android calling ear buds",
            highlightIssue: "Direct, simple language built to eliminate buyer misunderstandings and prevent expensive return rates."
          }
        }
      }
    },
    cushion: {
      category: "Home & Ergonomic Office",
      name: "Ergonomic Memory Foam Chair Cushion",
      marketplaces: {
        amazon: {
          before: {
            title: "seat cushion foam pillow for office chair car back pain relief",
            score: 36,
            chars: 63,
            readability: "Unstructured Keyword Stuffing",
            mobileSafe: "Fail - Omitted dimensions and density",
            bullets: [
              "soft cushion for office chair seat",
              "helps in pain while sitting for hours",
              "washable cover included",
              "universal size for all chairs"
            ],
            backendTerms: "chair cushion seat pillow",
            highlightIssue: "Lacks orthopedic medical authority, foam density certifications, and non-slip backing assurances."
          },
          after: {
            title: "ErgoSpine Pro Orthopedic Memory Foam Seat Cushion - Coccyx & Tailbone Pain Relief for Office Chair, Car & Wheelchair with Non-Slip Rubber Base",
            score: 99,
            chars: 153,
            readability: "High Conversion Medical Efficacy Copy",
            mobileSafe: "Pass - Immediate pain relief hooks visible above fold",
            bullets: [
              "DOCTOR-RECOMMENDED ERGONOMIC CONTOUR: U-shaped coccyx cut-out suspends your tailbone in mid-air, reducing spinal compression by up to 45%.",
              "100% HIGH-DENSITY MEMORY FOAM: Never flattens or bottoms out; responds to body heat and contours precisely to your pelvic structure.",
              "ANTI-SWEAT 3D MESH COVER: Breathable honeycomb mesh cover prevents heat accumulation during 10+ hour continuous desk shifts.",
              "ANTI-SLIP TEXTURED SILICONE BOTTOM: Heavy-duty rubberized studs prevent the cushion from sliding on leather, mesh, or wooden chairs.",
              "MACHINE-WASHABLE REMOVABLE ZIPPER CASE: Removable outer sleeve zips off effortlessly for easy machine washing."
            ],
            backendTerms: "orthopedic seat cushion memory foam office chair pad sciatica tailbone pain relief car cushion",
            highlightIssue: "Converts pain points into measurable ergonomic benefits with certified materials."
          }
        },
        flipkart: {
          before: {
            title: "memory foam seat cushion for chair black colour",
            score: 30,
            chars: 48,
            readability: "Sparse Attributes",
            mobileSafe: "Fail - No dimension specs",
            bullets: [
              "comfortable cushion",
              "black color",
              "for car and chair"
            ],
            backendTerms: "cushion pillow seat",
            highlightIssue: "Low catalog score prevents listing from appearing in 'Orthopedic Pillows & Cushions' search filters."
          },
          after: {
            title: "ErgoSpine Pro Contoured Memory Foam Seat Cushion For Office Chair & Car Back Pain Relief (Black, Pack of 1, 45cm x 35cm x 7cm)",
            score: 95,
            chars: 133,
            readability: "Catalog Grade Certified",
            mobileSafe: "Pass - Dimensions and pack count clear",
            bullets: [
              "Type: Orthopedic Coccyx Seat Cushion with Ergonomic U-Cut.",
              "Material: 100% Pure High-Density Viscoelastic Memory Foam.",
              "Cover: Removable Breathable Air Mesh with Concealed Zipper.",
              "Dimensions: 45 cm Length x 35 cm Width x 7 cm Height.",
              "Care: Hand & Machine Washable Outer Protective Cover."
            ],
            backendTerms: "memory foam seat cushion chair pillow sciatica coccyx support black cushion",
            highlightIssue: "Direct attribute injection powers Flipkart facet filters and comparison matrices."
          }
        },
        meesho: {
          before: {
            title: "chair cushion for sitting pain relief soft foam",
            score: 43,
            chars: 48,
            readability: "Low Reseller Clarity",
            mobileSafe: "Fail - Missing weight & height capacity",
            bullets: [
              "good soft sponge cushion",
              "helps in chair sitting",
              "washable cloth"
            ],
            backendTerms: "seat cushion foam",
            highlightIssue: "High return disputes due to buyers expecting thick wooden chairs or misjudging foam firmness."
          },
          after: {
            title: "ErgoSpine Memory Foam Seat Cushion With Removable Cover (Size: 45x35 cm) - For Office Chair, Car Seat & Sitting Pain Relief",
            score: 96,
            chars: 124,
            readability: "Zero-Doubt Reseller Blueprint",
            mobileSafe: "Pass - Clear dimensions and weight support",
            bullets: [
              "EXACT SIZE & THICKNESS: 45 cm x 35 cm with 7 cm thickness; fits all standard dining, office, and car seats.",
              "REAL MEMORY FOAM: Premium slow-rebound foam that takes body shape; does not flatten like cheap sponge.",
              "WASHABLE ZIPPER COVER: Easily remove the outer cloth cover and wash it in bucket or washing machine.",
              "BOTTOM GRIP RUBBER: Bottom has anti-slip rubber dots so it will not slide off smooth chairs.",
              "READY TO USE: No setup needed; open packaging and place directly on your seat."
            ],
            backendTerms: "chair cushion seat pad memory foam office car pillow pain relief sitting cushion",
            highlightIssue: "Protects sellers from unfair returns with clear size and foam grade definitions."
          }
        }
      }
    },
    oil: {
      category: "Beauty & Ayurvedic Personal Care",
      name: "Organic Cold-Pressed Argan Hair Oil",
      marketplaces: {
        amazon: {
          before: {
            title: "argan oil for hair growth shiny hair natural oil 100ml",
            score: 32,
            chars: 53,
            readability: "Spammy / Zero Efficacy",
            mobileSafe: "Fail - Lacks extraction method & origin",
            bullets: [
              "pure argan oil for shiny hair",
              "helps hair growth naturally",
              "use on dry scalp and skin",
              "glass dropper bottle"
            ],
            backendTerms: "argan oil hair",
            highlightIssue: "Vulnerable to Amazon anti-spam filters; completely misses cold-pressed and anti-frizz search queries."
          },
          after: {
            title: "Botanica Moroccan Argan Oil for Hair & Skin (100ml) - 100% Pure Virgin Cold-Pressed, Anti-Frizz Serum & Scalp Nourishment with Dropper",
            score: 98,
            chars: 139,
            readability: "Premium Cosmetic Copywriting",
            mobileSafe: "Pass - Origin and purity verified before fold",
            bullets: [
              "100% VIRGIN COLD-PRESSED MOROCCAN ARGAN: Extracted without chemical solvents or heat to preserve rich Vitamin E and Omega-6 fatty acids.",
              "INSTANT ANTI-FRIZZ SHINE SERUM: Tames stubborn flyaways and heat-damaged split ends without leaving greasy residue or weighing hair down.",
              "DEEP SCALP NOURISHMENT: Strengthens brittle hair follicles and locks moisture into dry scalps to support natural hair resilience.",
              "MULTIPURPOSE SKIN & NAIL CARE: Luxurious lightweight carrier oil that restores skin suppleness and hydrates dry cuticles.",
              "AMBER GLASS BOTTLE WITH PRECISION DROPPER: UV-shielded amber glass bottle ensures bioactive compounds remain potent over 24 months."
            ],
            backendTerms: "argan oil hair serum pure moroccan cold pressed anti frizz dry scalp beard oil vitamin e",
            highlightIssue: "Rich sensory terminology paired with cosmetic safety assurances that justify higher retail pricing."
          }
        },
        flipkart: {
          before: {
            title: "argan hair oil 100 ml bottle pure organic",
            score: 28,
            chars: 42,
            readability: "Sparse / Missing Certifications",
            mobileSafe: "Fail - Missing hair type attributes",
            bullets: [
              "hair oil for men and women",
              "100ml quantity",
              "good smell"
            ],
            backendTerms: "argan oil hair",
            highlightIssue: "Excluded from 'Sulphate-Free', 'Paraben-Free', and 'Hair Type' organic faceted search options."
          },
          after: {
            title: "Botanica 100% Pure Cold Pressed Moroccan Argan Hair Oil for Anti-Frizz & Deep Conditioning (100 ml, For All Hair Types)",
            score: 95,
            chars: 122,
            readability: "Flipkart Beauty Standard",
            mobileSafe: "Pass - Full attribute mapping",
            bullets: [
              "Applied For: Anti-Frizz, Split Ends Repair, Hair Softening & Scalp Hydration.",
              "Hair Type: Suitable for All Hair Types including Curly, Chemically Treated & Colored Hair.",
              "Formula: 100% Hexane-Free, Mineral-Oil Free, Artificial Fragrance Free.",
              "Quantity: 100 ml in Tinted Glass Bottle with Precision Dropper Applicator.",
              "Ideal For: Men & Women Daily Leave-In Styling or Overnight Hair Mask."
            ],
            backendTerms: "argan hair oil serum moroccan cold pressed 100ml anti frizz dry damaged hair",
            highlightIssue: "Mapped to Flipkart's exact beauty attributes for high relevance in cosmetic searches."
          }
        },
        meesho: {
          before: {
            title: "pure argan oil for long hair 100ml dropper pack",
            score: 39,
            chars: 49,
            readability: "Generic Reseller Pitch",
            mobileSafe: "Fail - Lacks clear usage steps",
            bullets: [
              "best oil for dry hair",
              "100ml bottle with dropper",
              "100 percent pure oil"
            ],
            backendTerms: "argan hair oil",
            highlightIssue: "Customers complain if dropper bottle leaks or if they don't know how many drops to apply."
          },
          after: {
            title: "Botanica 100% Pure Moroccan Argan Hair Oil (100ml With Dropper) - Non-Sticky Hair Serum For Smooth, Frizz-Free & Shiny Hair",
            score: 97,
            chars: 125,
            readability: "High Trust / Low Confusion Copy",
            mobileSafe: "Pass - Clear usage guidance",
            bullets: [
              "NON-STICKY & LIGHTWEIGHT: Does not feel heavy or sticky like castor oil; absorbs quickly leaving silky smooth shine.",
              "HOW TO USE: Rub 2 to 3 drops between palms and gently apply on damp or dry hair strands; no need to wash off.",
              "LEAKPROOF PACKAGING: Secure inner seal plug plus screw-on dropper to prevent leakage during courier transit.",
              "FOR ALL HAIR: Perfect for men, women, rough hair, colored hair, and dry winter scalp.",
              "GENUINE 100ML SIZE: Full 100ml quantity in amber protective bottle with exact dropper measurement."
            ],
            backendTerms: "argan oil hair serum pure 100ml anti frizz shiny hair non sticky moroccan oil",
            highlightIssue: "Addresses leak concerns, non-sticky texture expectations, and clear dosage instructions."
          }
        }
      }
    }
  };

  const currentSample = productSamples[activeProductNiche];
  const currentWorkbench = currentSample.marketplaces[activeMarketplaceTab];
  const activeContent = optimizerMode === 'after' ? currentWorkbench.after : currentWorkbench.before;

  // 8 Services Data with Interactive Deliverable Showcase
  const servicesList = [
    {
      title: "SEO-Friendly Product Titles",
      tag: "Algorithm Engine",
      summary: "Algorithm-compliant titles balancing search saturation, model specs, and brand authority within exact platform character limits.",
      deliverable: "Includes 1 primary title + 2 seasonal A/B test variations + strict mobile-cut-off boundary validation."
    },
    {
      title: "Professional Product Descriptions",
      tag: "Story & Conversion",
      summary: "Compelling narrative product descriptions answering every unasked buyer objection, highlighting materials, and building trust.",
      deliverable: "Clean formatted HTML/Markdown description with distinct paragraphs, usage guides, and box contents."
    },
    {
      title: "High-Converting Bullet Points",
      tag: "Mobile Scannability",
      summary: "5 capitalized benefit hooks crafted for shoppers scanning on 6-inch mobile screens who never read long text blocks.",
      deliverable: "5 distinct psychological bullets: Primary Feature, Daily Utility, Technical Spec, Build Quality, and Guarantee."
    },
    {
      title: "Search-Optimized Keywords (Backend & Frontend)",
      tag: "A9/A10 & Algorithmic Index",
      summary: "In-depth competitor keyword gap mining uncovering long-tail buyer search phrases and hidden backend search terms.",
      deliverable: "De-duplicated backend search terms (249-byte exact fit for Amazon) + Flipkart/Meesho search tags without comma waste."
    },
    {
      title: "Product Features & Technical Specifications",
      tag: "Return Prevention",
      summary: "Structured attribute arrays for material grades, dimensions, weight capacity, and compatibility that eliminate buyer confusion.",
      deliverable: "Ready-to-fill marketplace attribute checklist ensuring 100% catalog completeness score."
    },
    {
      title: "Marketplace-Specific Optimization",
      tag: "Omnichannel Polish",
      summary: "Tailored listing compliance matching Amazon Seller Central guidelines, Flipkart catalog trees, and Meesho mobile reseller layouts.",
      deliverable: "Separate formatted output files tuned specifically to each platform's distinct rules."
    },
    {
      title: "Product Listing Content Improvement & Audit",
      tag: "Revamp Stagnant SKUs",
      summary: "Have an existing product with sluggish conversion or high bounce rates? We diagnose content leakages and overhaul every word.",
      deliverable: "Comprehensive 7-point audit report highlighting exact reasons for lost conversions + freshly rewritten listing copy."
    },
    {
      title: "Bulk Product Description Writing",
      tag: "Scale & Catalog Speed",
      summary: "High-throughput optimization for wholesale manufacturers, distributors, and brand catalogs managing 10 to 500+ SKUs.",
      deliverable: "Master flat-file bulk spreadsheet (CSV/Excel) ready for direct bulk inventory feed upload."
    }
  ];

  const faqData = [
    {
      q: "Do you write listings specifically for Amazon, Flipkart, and Meesho?",
      a: "Yes. We never use a generic one-size-fits-all template. Amazon requires A9/A10 indexable titles (up to 200 chars) with 249-byte backend search terms. Flipkart requires strict Brand + Model + Attribute catalog syntax. Meesho requires concise, mobile-first, reseller-friendly copy with explicit dimensions to avoid high customer returns."
    },
    {
      q: "Can I just send you my live product URL on WhatsApp?",
      a: "Yes! That is the fastest way. Simply copy your active Amazon, Flipkart, or Meesho product URL and send it to our WhatsApp (+91 9373843585). We will review your current listing and provide a custom action plan."
    },
    {
      q: "Do you provide backend search terms and keywords?",
      a: "Yes. Every single listing optimization includes frontend seed keywords embedded into the title and bullets, plus a clean, de-duplicated bank of backend search terms ready to paste into Seller Central or the Flipkart backend."
    },
    {
      q: "Can you optimize bulk catalogs or multiple SKU variations?",
      a: "Yes. We routinely optimize catalog sets from 5 to 200+ SKUs for manufacturers, brand aggregators, and wholesale distributors, delivered in clean spreadsheet format ready for batch uploading."
    },
    {
      q: "How long does it take to receive the finished content?",
      a: "Standard single SKU optimization is completed within 24 to 48 hours. Bulk catalog orders receive structured milestone deliveries agreed upon upfront."
    },
    {
      q: "Do you guarantee #1 ranking or 10x sales?",
      a: "No, and any agency that promises guaranteed sales or ranks is being dishonest. E-commerce sales depend on competitive pricing, stock availability, review velocity, and PPC ad spend. What we do guarantee is 100% marketplace-compliant, conversion-engineered content, maximum keyword saturation, and professional product presentation."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* =========================================================================
          TRENDING IRIDESCENT LIGHT BACKGROUND MESH & AMBIENT GLOWS
          ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Micro-dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(#94A3B8 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        {/* Top Iridescent Violet-Indigo Mesh Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-200/50 via-sky-200/40 to-transparent blur-[120px] rounded-full" />
        {/* Upper Right Peach & Rose Pastel Orb */}
        <div className="absolute top-[12%] -right-28 w-[600px] h-[600px] bg-gradient-to-br from-rose-200/40 to-amber-200/30 blur-[130px] rounded-full" />
        {/* Mid-Left Soft Cyan & Emerald Core */}
        <div className="absolute top-[48%] -left-32 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-200/40 to-emerald-200/30 blur-[140px] rounded-full" />
        {/* Bottom Soft Purple Ambient Tint */}
        <div className="absolute bottom-0 inset-x-0 h-[450px] bg-gradient-to-t from-slate-100/90 to-transparent" />
      </div>

      {/* =========================================================================
          COMMAND STATUS RIBBON (FROSTED LIGHT GLASS)
          ========================================================================= */}
      <div className="relative z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/80 text-xs py-2 px-4 max-w-7xl mx-auto rounded-b-2xl shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-mono text-indigo-700 font-bold tracking-wide">Listing Optimization Workbench v4.2</span>
            <span className="hidden md:inline text-slate-300">•</span>
            <span className="hidden md:inline text-slate-600 font-medium">Algorithmic Content Engineering for Amazon, Flipkart & Meesho</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-[11px] text-emerald-700 font-mono font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
              <Zap className="w-3.5 h-3.5 text-emerald-600" /> 24-48h Fast Turnaround
            </span>
            <a 
              href={createWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11px] font-mono font-bold text-slate-700 hover:text-indigo-600 flex items-center gap-1.5 transition-colors group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100 group-hover:scale-110 transition-transform" />
              <span>+91 9373843585</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FLOATING LIGHT GLASS HEADER
          ========================================================================= */}
      <header className="sticky top-2 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="bg-white/80 backdrop-blur-2xl border border-white/90 rounded-2xl px-5 py-3.5 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.06),0_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-between">
          
          {/* Logo & Platform Tag */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 flex items-center justify-center shadow-[0_4px_14px_rgba(79,70,229,0.3)] text-white font-black text-xl border border-white/40">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                OptiListing<span className="text-indigo-600">Pro</span>
                <span className="text-[9px] bg-indigo-50 text-indigo-700 border border-indigo-200/80 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-bold">Studio</span>
              </div>
              <p className="text-[10px] font-mono text-slate-500 tracking-wider font-medium">E-COMMERCE OPTIMIZATION COMMAND</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <button onClick={() => scrollTo('hero-inspector')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
              <Eye className="w-3.5 h-3.5 text-indigo-500" /> Live Inspector
            </button>
            <button onClick={() => scrollTo('studio-work')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
              <Terminal className="w-3.5 h-3.5 text-sky-500" /> Work Showcase
            </button>
            <button onClick={() => scrollTo('algorithm-matrix')} className="hover:text-indigo-600 transition-colors cursor-pointer">Algorithms</button>
            <button onClick={() => scrollTo('services')} className="hover:text-indigo-600 transition-colors cursor-pointer">8 Workstations</button>
            <button onClick={() => scrollTo('pipeline')} className="hover:text-indigo-600 transition-colors cursor-pointer">Pipeline</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-indigo-600 transition-colors cursor-pointer">Packages</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-indigo-600 transition-colors cursor-pointer">FAQ</button>
          </nav>

          {/* WhatsApp Direct CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={createWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all duration-200 shadow-[0_4px_16px_rgba(79,70,229,0.25)] hover:shadow-[0_6px_22px_rgba(79,70,229,0.35)] hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
              <span>Direct WhatsApp Dispatch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200/80 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/80 space-y-3 shadow-2xl animate-fadeIn">
            <button onClick={() => scrollTo('hero-inspector')} className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600">Live Inspector</button>
            <button onClick={() => scrollTo('studio-work')} className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600">Work Showcase & Studio</button>
            <button onClick={() => scrollTo('algorithm-matrix')} className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600">Marketplace Matrix</button>
            <button onClick={() => scrollTo('services')} className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600">8 Precision Workstations</button>
            <button onClick={() => scrollTo('pipeline')} className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600">4-Step Optimization Pipeline</button>
            <button onClick={() => scrollTo('pricing')} className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600">Pricing Packages</button>
            <button onClick={() => scrollTo('faq')} className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600">FAQ</button>
            <a 
              href={createWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-sky-600 text-white font-bold py-3 rounded-xl text-xs mt-3 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
              <span>WhatsApp Direct (+91 9373843585)</span>
            </a>
          </div>
        )}
      </header>

      {/* =========================================================================
          COMMAND CENTER HERO WITH LIVE LIGHT-GLASS LISTING INSPECTOR
          ========================================================================= */}
      <section className="relative z-10 pt-10 pb-16 md:pt-16 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title Block */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-indigo-200/70 text-indigo-700 text-xs font-mono font-bold shadow-[0_2px_12px_rgba(79,70,229,0.08)]">
            <Sparkle className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>High-Precision Algorithmic Copywriting & Keyword Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
            Make Your Products <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-800">Stand Out.</span> Sell Smarter.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Professional, SEO-Optimized Product Titles & Descriptions for{' '}
            <span className="inline-flex items-center gap-1.5 text-slate-800 font-bold bg-white px-3 py-1 rounded-xl border border-amber-300/80 align-middle shadow-sm">
              <AmazonLogo className="h-3.5 w-auto" />
            </span>
            {', '}
            <span className="inline-flex items-center gap-1.5 text-slate-800 font-bold bg-white px-3 py-1 rounded-xl border border-sky-300/80 align-middle shadow-sm">
              <FlipkartLogo className="h-3.5 w-auto" />
            </span>
            {' and '}
            <span className="inline-flex items-center gap-1.5 text-slate-800 font-bold bg-white px-3 py-1 rounded-xl border border-pink-300/80 align-middle shadow-sm">
              <MeeshoLogo className="h-3.5 w-auto" />
            </span>
            {' '}Sellers.
          </p>

          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Engineered exclusively around listing mechanics: solving cut-off mobile titles, weak feature hooks, zero backend search terms, and vague specifications that trigger costly returns.
          </p>

          {/* Dual Glass CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button 
              onClick={() => scrollTo('contact-section')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-extrabold rounded-2xl text-sm shadow-[0_10px_25px_-5px_rgba(79,70,229,0.35)] transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Your Product Listing Optimized</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a 
              href={createWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-white/90 hover:bg-white text-slate-800 border border-slate-200/90 font-bold rounded-2xl text-sm backdrop-blur-2xl transition-all duration-200 flex items-center justify-center gap-2 hover:border-indigo-400 shadow-[0_4px_16px_rgba(15,23,42,0.06)]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* LIVE LIGHT-GLASS LISTING INSPECTOR WIDGET */}
        <div id="hero-inspector" className="mt-14 max-w-5xl mx-auto scroll-mt-24">
          <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.08),0_0_1px_1px_rgba(255,255,255,0.9)] overflow-hidden relative">
            
            {/* Top Light Command Bar */}
            <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-400 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                <span className="text-xs font-mono font-bold text-slate-700 ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                  Live Algorithmic Listing Inspector
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500">Sample:</span>
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-2.5 py-1 rounded-lg">
                  Amazon Wireless Audio SKU
                </span>
              </div>
            </div>

            {/* Inspector Grid: 4 Diagnostic Telemetry Cards */}
            <div className="p-5 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-3 bg-white/50 border-b border-slate-200/70">
              
              {/* Metric 1 */}
              <div 
                onClick={() => setInspectorActiveMetric('seo')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  inspectorActiveMetric === 'seo' || inspectorActiveMetric === 'all'
                    ? 'bg-indigo-50/70 border-indigo-300 shadow-[0_2px_12px_rgba(79,70,229,0.08)]'
                    : 'bg-white/70 border-slate-200/70 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                  <span>SEO Title Index</span>
                  <Search className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">98.4%</div>
                <p className="text-[10px] text-indigo-600 font-mono font-bold mt-0.5">Saturated Character Limits</p>
              </div>

              {/* Metric 2 */}
              <div 
                onClick={() => setInspectorActiveMetric('readability')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  inspectorActiveMetric === 'readability' || inspectorActiveMetric === 'all'
                    ? 'bg-emerald-50/70 border-emerald-300 shadow-[0_2px_12px_rgba(5,150,105,0.08)]'
                    : 'bg-white/70 border-slate-200/70 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                  <span>Mobile Fold Safety</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">100% Safe</div>
                <p className="text-[10px] text-emerald-600 font-mono font-bold mt-0.5">Zero Truncation of USPs</p>
              </div>

              {/* Metric 3 */}
              <div 
                onClick={() => setInspectorActiveMetric('keywords')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  inspectorActiveMetric === 'keywords' || inspectorActiveMetric === 'all'
                    ? 'bg-sky-50/70 border-sky-300 shadow-[0_2px_12px_rgba(14,165,233,0.08)]'
                    : 'bg-white/70 border-slate-200/70 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                  <span>Backend Query Depth</span>
                  <Layers className="w-3.5 h-3.5 text-sky-600" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">248 / 249 B</div>
                <p className="text-[10px] text-sky-600 font-mono font-bold mt-0.5">99.6% Backend Utilized</p>
              </div>

              {/* Metric 4 */}
              <div 
                onClick={() => setInspectorActiveMetric('hooks')}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  inspectorActiveMetric === 'hooks' || inspectorActiveMetric === 'all'
                    ? 'bg-amber-50/70 border-amber-300 shadow-[0_2px_12px_rgba(217,119,6,0.08)]'
                    : 'bg-white/70 border-slate-200/70 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                  <span>Conversion Hooks</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">5/5 Bullets</div>
                <p className="text-[10px] text-amber-600 font-mono font-bold mt-0.5">Scannable Bold Hooks</p>
              </div>

            </div>

            {/* Inspector Live Diagnostic Showcase */}
            <div className="p-6 sm:p-8 space-y-5 bg-white/70">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                    Inspected Title Architecture (151 / 200 Chars):
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                    Passed All A9 Constraints
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-indigo-200/70 text-sm sm:text-base text-slate-800 font-medium leading-relaxed shadow-sm">
                  <span className="text-indigo-600 font-bold">[Brand & Core]</span> AcoustiMax Ultra ANC Wireless Earbuds — <span className="text-emerald-700 font-bold">[Key Specs]</span> 48H Playtime, Hybrid Active Noise Cancelling, Bluetooth 5.4 with Quad-Mics <span className="text-sky-700 font-bold">[Use-Cases]</span> for Gaming & Studio Calls
                </div>
              </div>

              {/* Realtime Backend Query Density Strip */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase font-bold">Backend Search Terms (No Comma Waste):</span>
                  <p className="text-xs font-mono text-slate-700 font-medium">
                    tws noise cancelling ear buds sweatproof gym headphones type c fast charging low latency calling mic
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <button 
                    onClick={() => copyToClipboard("tws noise cancelling ear buds sweatproof gym headphones type c fast charging low latency calling mic", "hero-backend")}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-mono text-slate-700 font-bold flex items-center gap-1 transition-colors border border-slate-300/80 cursor-pointer"
                  >
                    {copiedSection === "hero-backend" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                    <span>{copiedSection === "hero-backend" ? "Copied" : "Copy Terms"}</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          INTERACTIVE WORK SHOWCASE & BEFORE/AFTER STUDIO (LIGHT GLASS)
          ========================================================================= */}
      <section id="studio-work" className="py-20 relative z-10 border-t border-slate-200/80 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold border border-indigo-200 uppercase tracking-widest">
              Live Deliverable Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              The Listing Optimization Studio
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              See the direct difference between generic, unindexed seller copy and our conversion-engineered listings across 3 real e-commerce niches.
            </p>
          </div>

          {/* Product Niche Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveProductNiche('earbuds')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold font-mono transition-all flex items-center gap-2 border cursor-pointer ${
                activeProductNiche === 'earbuds'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-[0_4px_16px_rgba(79,70,229,0.3)]'
                  : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <span>Product 1: ANC Wireless Earbuds</span>
            </button>
            <button
              onClick={() => setActiveProductNiche('cushion')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold font-mono transition-all flex items-center gap-2 border cursor-pointer ${
                activeProductNiche === 'cushion'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-[0_4px_16px_rgba(79,70,229,0.3)]'
                  : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <span>Product 2: Memory Foam Seat Cushion</span>
            </button>
            <button
              onClick={() => setActiveProductNiche('oil')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold font-mono transition-all flex items-center gap-2 border cursor-pointer ${
                activeProductNiche === 'oil'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-[0_4px_16px_rgba(79,70,229,0.3)]'
                  : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <span>Product 3: Moroccan Argan Hair Oil</span>
            </button>
          </div>

          {/* Master Interactive Workbench Card */}
          <div className="rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.07),0_0_1px_1px_rgba(255,255,255,0.9)] overflow-hidden">
            
            {/* Workbench Header: Platform Switcher + Before/After Toggle */}
            <div className="p-4 sm:p-6 bg-slate-50/80 border-b border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              
              {/* Marketplace Switcher with Official Platform Logos */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">Platform:</span>
                <button
                  onClick={() => setActiveMarketplaceTab('amazon')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-2 cursor-pointer ${
                    activeMarketplaceTab === 'amazon'
                      ? 'bg-amber-50 text-slate-900 border-amber-300 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
                  }`}
                >
                  <AmazonLogo className="h-3.5 w-auto shrink-0" />
                  <span className="font-mono text-[11px] text-amber-700 bg-amber-100/80 px-1.5 py-0.2 rounded">A9/A10</span>
                </button>
                <button
                  onClick={() => setActiveMarketplaceTab('flipkart')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-2 cursor-pointer ${
                    activeMarketplaceTab === 'flipkart'
                      ? 'bg-sky-50 text-slate-900 border-sky-300 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
                  }`}
                >
                  <FlipkartLogo className="h-3.5 w-auto shrink-0" />
                  <span className="font-mono text-[11px] text-sky-700 bg-sky-100/80 px-1.5 py-0.2 rounded">Catalog</span>
                </button>
                <button
                  onClick={() => setActiveMarketplaceTab('meesho')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-2 cursor-pointer ${
                    activeMarketplaceTab === 'meesho'
                      ? 'bg-pink-50 text-slate-900 border-pink-300 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
                  }`}
                >
                  <MeeshoLogo className="h-3.5 w-auto shrink-0" />
                  <span className="font-mono text-[11px] text-pink-700 bg-pink-100/80 px-1.5 py-0.2 rounded">Mobile</span>
                </button>
              </div>

              {/* Before vs After Switch */}
              <div className="flex items-center gap-2 bg-slate-200/60 p-1 rounded-2xl border border-slate-300/80 w-full sm:w-auto justify-center">
                <button 
                  onClick={() => setOptimizerMode('before')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    optimizerMode === 'before'
                      ? 'bg-rose-100 text-rose-800 border border-rose-300 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <XCircle className="w-3.5 h-3.5 text-rose-600" />
                  <span>BEFORE (Unoptimized)</span>
                </button>
                <button 
                  onClick={() => setOptimizerMode('after')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    optimizerMode === 'after'
                      ? 'bg-indigo-600 text-white font-extrabold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  <span>AFTER (OptiListing Pro)</span>
                </button>
              </div>
            </div>

            {/* Quality Scorecard Telemetry Banner */}
            <div className="p-4 sm:p-6 bg-white/70 border-b border-slate-200/70 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-500 font-bold">Listing Health Score:</span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-2xl font-black ${optimizerMode === 'after' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {activeContent.score}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">/ 100 LQS</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                  <div 
                    className={`h-full transition-all duration-500 ${optimizerMode === 'after' ? 'bg-emerald-500' : 'bg-rose-500'}`}
                    style={{ width: `${activeContent.score}%` }}
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-500 font-bold">Title Characters:</span>
                <div className="text-xl font-black text-slate-900">{activeContent.chars} Chars</div>
                <p className="text-[10px] text-slate-500 font-mono font-medium">{activeContent.mobileSafe}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-500 font-bold">Readability Grade:</span>
                <div className="text-sm font-bold text-slate-800 mt-1 truncate">{activeContent.readability}</div>
                <p className="text-[10px] text-indigo-600 font-mono font-medium">{optimizerMode === 'after' ? 'High buyer retention' : 'High bounce probability'}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-500 font-bold">Backend Index Terms:</span>
                <div className="text-xs font-mono text-slate-700 truncate mt-1">{activeContent.backendTerms}</div>
                <p className="text-[10px] text-slate-500 font-mono font-medium">{optimizerMode === 'after' ? 'Saturated query depth' : 'Critical gaps'}</p>
              </div>
            </div>

            {/* Main Workbench Body */}
            <div className="p-6 sm:p-8 space-y-6 bg-white/60">
              
              {/* Product Title */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${optimizerMode === 'after' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                    {optimizerMode === 'after' ? 'Optimized Product Title' : 'Original Unoptimized Title'}:
                  </label>
                  <button 
                    onClick={() => copyToClipboard(activeContent.title, 'wb-title')}
                    className="text-[11px] font-mono text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors font-bold cursor-pointer"
                  >
                    {copiedSection === 'wb-title' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedSection === 'wb-title' ? 'Copied' : 'Copy Title'}</span>
                  </button>
                </div>
                <div className={`p-4 rounded-2xl border text-sm sm:text-base leading-relaxed ${
                  optimizerMode === 'after'
                    ? 'bg-indigo-50/60 border-indigo-200 text-slate-900 font-semibold shadow-sm'
                    : 'bg-rose-50/60 border-rose-200 text-rose-900 font-mono'
                }`}>
                  {activeContent.title}
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${optimizerMode === 'after' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                    Product Feature Highlights (Bullet Points):
                  </label>
                  <button 
                    onClick={() => copyToClipboard(activeContent.bullets.join('\n• '), 'wb-bullets')}
                    className="text-[11px] font-mono text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors font-bold cursor-pointer"
                  >
                    {copiedSection === 'wb-bullets' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedSection === 'wb-bullets' ? 'Copied' : 'Copy All Bullets'}</span>
                  </button>
                </div>
                <div className="space-y-2">
                  {activeContent.bullets.map((bullet, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                        optimizerMode === 'after'
                          ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
                          : 'bg-rose-50/40 border-rose-200 text-rose-900'
                      }`}
                    >
                      <span className={`text-xs font-mono font-bold shrink-0 mt-0.5 ${optimizerMode === 'after' ? 'text-indigo-600' : 'text-rose-600'}`}>
                        0{idx + 1}.
                      </span>
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagnosis Alert */}
              <div className={`p-4 rounded-2xl border text-xs leading-relaxed flex items-start gap-3 ${
                optimizerMode === 'after'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}>
                {optimizerMode === 'after' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-bold">{optimizerMode === 'after' ? 'Algorithmic Engineering Verdict:' : 'Listing Deficiency Diagnosis:'}</p>
                  <p className="mt-0.5 text-slate-700">{activeContent.highlightIssue}</p>
                </div>
              </div>

              {/* Workbench Footer Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold text-slate-900">Need this level of optimization for your catalog?</p>
                  <p className="text-[11px] text-slate-500">Share your product link and get custom copywriting ready for your seller dashboard.</p>
                </div>
                <a 
                  href={createWhatsAppUrl(`Hello! I saw your ${currentSample.name} sample on OptiListing Pro. I would like my product listing optimized.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold text-xs rounded-xl transition-all shadow-[0_4px_14px_rgba(79,70,229,0.25)] flex items-center gap-1.5 shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20 text-white" />
                  <span>Optimize My {activeMarketplaceTab.toUpperCase()} Listing</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          MARKETPLACE ALGORITHM ENGINE MATRIX (LIGHT THEME)
          ========================================================================= */}
      <section id="algorithm-matrix" className="py-20 relative z-10 border-t border-slate-200/80 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
              Algorithmic Nuances
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              One Service. Three Major Marketplaces.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every marketplace rewards different indexing criteria. We tailor every single character to the platform's specific search and catalog engine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Amazon Column */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-7 border border-slate-200/80 hover:border-amber-400 hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center justify-center p-2.5 shadow-sm group-hover:scale-105 transition-transform">
                  <AmazonIcon className="w-9 h-9" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <AmazonLogo className="h-5 w-auto" />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold border border-amber-300">A9/A10</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">Amazon Sellers</h3>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">Amazon India & Global Marketplaces</p>
                </div>
                <ul className="space-y-3 text-xs text-slate-700 pt-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Title Indexing:</strong> Keyword-dense titles balanced strictly within 200 characters without truncation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>5 Benefit Bullets:</strong> Bold capitalized lead-ins answering customer objections immediately.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Backend Search Terms:</strong> Exact 249-byte space-separated keywords without punctuation waste.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Brand Story & Descriptions:</strong> Structured narrative formatting for long-tail search capture.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a 
                  href={createWhatsAppUrl("Hello! I need listing optimization for my Amazon products. Let's discuss details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-slate-50 hover:bg-amber-500 hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200 hover:border-amber-500"
                >
                  <AmazonLogo className="h-3 w-auto group-hover:brightness-200" />
                  <span>Inquire for Amazon</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Flipkart Column */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-7 border border-slate-200/80 hover:border-sky-400 hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.12)] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-50/80 border border-sky-200 flex items-center justify-center p-2.5 shadow-sm group-hover:scale-105 transition-transform">
                  <FlipkartIcon className="w-9 h-9" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <FlipkartLogo className="h-5 w-auto" />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-bold border border-sky-300">Catalog SEO</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">Flipkart Sellers</h3>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">Flipkart Marketplace Ecosystem</p>
                </div>
                <ul className="space-y-3 text-xs text-slate-700 pt-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Strict Naming Syntax:</strong> Follows Brand + Model Name + Defining Attribute taxonomy rules.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Catalog Completeness Score:</strong> Pre-fills technical specifications for faceted search filters.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Key Feature Callouts:</strong> Structured bullets matching Flipkart comparison widgets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Regional Buyer Intent:</strong> Infuses high-conversion search synonyms used across India.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a 
                  href={createWhatsAppUrl("Hello! I need listing optimization for my Flipkart products. Let's discuss details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-slate-50 hover:bg-sky-500 hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200 hover:border-sky-500"
                >
                  <FlipkartLogo className="h-3 w-auto group-hover:brightness-200" />
                  <span>Inquire for Flipkart</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Meesho Column */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-7 border border-slate-200/80 hover:border-pink-400 hover:shadow-[0_15px_35px_-5px_rgba(244,63,94,0.12)] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-pink-50/80 border border-pink-200 flex items-center justify-center p-2.5 shadow-sm group-hover:scale-105 transition-transform">
                  <MeeshoIcon className="w-9 h-9" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <MeeshoLogo className="h-5 w-auto" />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-100 text-pink-800 font-bold border border-pink-300">Mobile-First</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">Meesho Sellers</h3>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">Meesho Resellers & Direct Consumers</p>
                </div>
                <ul className="space-y-3 text-xs text-slate-700 pt-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <span><strong>Zero-Doubt Specs:</strong> Unambiguous size, fabric, weight, and dimension details to minimize returns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <span><strong>Mobile Scannable:</strong> Short, easily readable phrases designed for small screens and quick browsing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <span><strong>Reseller Friendly:</strong> Structured cleanly for resellers to share directly into WhatsApp groups.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <span><strong>Clarity First:</strong> Explicitly states what is inside the box to avoid customer complaints.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a 
                  href={createWhatsAppUrl("Hello! I need listing optimization for my Meesho catalog. Let's discuss details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-slate-50 hover:bg-pink-500 hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200 hover:border-pink-500"
                >
                  <MeeshoLogo className="h-3 w-auto group-hover:brightness-200" />
                  <span>Inquire for Meesho</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Ethics & Independent Status Note */}
          <div className="mt-12 p-4 rounded-2xl bg-white/80 border border-slate-200/90 text-center max-w-3xl mx-auto flex items-center justify-center gap-3 shadow-sm">
            <Info className="w-5 h-5 text-indigo-600 shrink-0" />
            <p className="text-xs text-slate-600 leading-normal">
              <strong className="text-slate-900">Independent Optimization Consultancy:</strong> We provide professional e-commerce copywriting services. Amazon, Flipkart, and Meesho are registered trademarks of their respective owners. We are not officially affiliated with or endorsed by these platforms.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8 PRECISION OPTIMIZATION SERVICES (LIGHT FROSTED WORKSTATION GRID)
          ========================================================================= */}
      <section id="services" className="py-20 relative z-10 border-t border-slate-200/80 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
              Precision Workstations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              8 Core Professional Listing Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click any workstation below to view real deliverable details and understand how each element elevates your product presentation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => {
              const isSelected = expandedService === index;
              return (
                <div 
                  key={index}
                  onClick={() => setExpandedService(isSelected ? null : index)}
                  className={`p-6 rounded-3xl backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    isSelected 
                      ? 'bg-indigo-50/90 border-indigo-300 shadow-[0_10px_25px_-5px_rgba(79,70,229,0.15)] ring-2 ring-indigo-500/20' 
                      : 'bg-white/80 border-slate-200/80 hover:border-slate-300 hover:shadow-[0_8px_20px_-5px_rgba(15,23,42,0.06)]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-indigo-700 font-bold border border-slate-200">
                        {service.tag}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-bold">0{index + 1}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.summary}
                    </p>

                    {isSelected && (
                      <div className="pt-3 mt-3 border-t border-indigo-200 text-xs text-indigo-900 bg-white/90 p-3 rounded-xl space-y-1 animate-fadeIn border shadow-sm">
                        <p className="font-bold font-mono text-[11px] text-indigo-700">Deliverable Spec:</p>
                        <p className="text-[11px] leading-relaxed text-slate-700">{service.deliverable}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-indigo-600 font-bold">
                    <span>{isSelected ? 'Click to collapse' : 'View deliverable spec'}</span>
                    {isSelected ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4-STEP OPTIMIZATION PIPELINE (LIGHT THEME)
          ========================================================================= */}
      <section id="pipeline" className="py-20 relative z-10 border-t border-slate-200/80 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
              Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              How It Works: 4 Steps to Live Optimization
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A streamlined, fast collaboration workflow designed specifically for busy e-commerce sellers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 relative space-y-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-black text-lg font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">Share Your Product Link</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send your live Amazon, Flipkart, or Meesho URL via WhatsApp or our contact form. For new product launches, simply share rough product specs or photos.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 relative space-y-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 font-black text-lg font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">We Analyze Your Product</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We review your category landscape, identify high-intent buyer search queries, examine competitors, and map out keyword optimization opportunities.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 relative space-y-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 font-black text-lg font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">We Create Professional Content</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our copywriters craft magnetic titles, 5 benefit-driven bullets, narrative descriptions, and backend keywords aligned with platform character limits.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 relative space-y-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-black text-lg font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900">Receive Your Optimized Listing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You receive formatted content ready to review, copy, and paste straight into your seller portal within 24–48 hours, plus revisions if needed.
              </p>
            </div>

          </div>

          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-indigo-50 via-white to-sky-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(79,70,229,0.08)]">
            <div>
              <h3 className="text-base font-bold text-slate-900">Ready to begin with Step 1?</h3>
              <p className="text-xs text-slate-600 mt-0.5">Share your Amazon, Flipkart or Meesho link directly into our WhatsApp chat.</p>
            </div>
            <a 
              href={createWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold text-xs rounded-xl transition-all shadow-[0_4px_16px_rgba(79,70,229,0.3)] flex items-center gap-2 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
              <span>Share Link on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PRICING & ENGAGEMENT TIERS (LIGHT GLASS)
          ========================================================================= */}
      <section id="pricing" className="py-20 relative z-10 border-t border-slate-200/80 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
              Flexible Engagements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Service Packages Tailored To Your Catalog
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every package is custom-quoted based on your SKU volume and category depth. Contact us directly on WhatsApp for an instant quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Package 1: Basic */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between hover:border-indigo-300 hover:shadow-[0_12px_30px_-5px_rgba(15,23,42,0.08)] transition-all shadow-sm">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase">Single SKU Focus</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Basic Listing Package</h3>
                  <p className="text-xs text-slate-500 mt-2">
                    Ideal for individual sellers wanting to test and optimize a single flagship or newly launched product.
                  </p>
                </div>

                <div className="py-4 border-y border-slate-100">
                  <span className="text-2xl font-black text-slate-900">Contact for Pricing</span>
                  <p className="text-xs text-indigo-600 font-mono font-bold mt-0.5">Custom Quote per SKU</p>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span><strong>1 Product SKU</strong> optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>SEO-Optimized Product Title</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>5 High-Converting Bullet Points</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Professional Product Description</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Backend Search Term Bank</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Amazon, Flipkart or Meesho ready</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6">
                <a 
                  href={createWhatsAppUrl("Hello! I would like to inquire about pricing and turnaround for the Basic Listing Package (1 Product SKU).")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-50 hover:bg-indigo-600 hover:text-white text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-200 hover:border-indigo-600 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Contact Us for Pricing</span>
                </a>
              </div>
            </div>

            {/* Package 2: Professional (Featured) */}
            <div className="bg-white backdrop-blur-2xl rounded-3xl p-8 border-2 border-indigo-600 flex flex-col justify-between shadow-[0_15px_40px_-5px_rgba(79,70,229,0.2)] relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-sky-600 text-white text-[10px] font-mono font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Most Popular for Active Sellers
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase">High Growth Catalog</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Professional Listing Package</h3>
                  <p className="text-xs text-slate-500 mt-2">
                    Comprehensive optimization overhaul for serious marketplace sellers looking to outshine competing listings.
                  </p>
                </div>

                <div className="py-4 border-y border-slate-100">
                  <span className="text-2xl font-black text-slate-900">Contact for Pricing</span>
                  <p className="text-xs text-indigo-600 font-mono font-bold mt-0.5">Bundle Quote with Priority Turnaround</p>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span><strong>1 to 5 Product SKUs</strong> coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Full Competitor Keyword Gap Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Magnetic Titles + 5 Persuasive Bullets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Story-driven Long Form Description</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Backend Search Term Bank (250 Characters)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Technical Attribute & Specification Table</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Priority 24–48 Hour Delivery</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6">
                <a 
                  href={createWhatsAppUrl("Hello! I would like to inquire about pricing for the Professional Listing Package (1 to 5 SKUs).")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_4px_16px_rgba(79,70,229,0.3)]"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
                  <span>Contact Us for Pricing</span>
                </a>
              </div>
            </div>

            {/* Package 3: Bulk */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between hover:border-indigo-300 hover:shadow-[0_12px_30px_-5px_rgba(15,23,42,0.08)] transition-all shadow-sm">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase">Wholesale & Brand Scale</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Bulk Product Listing Package</h3>
                  <p className="text-xs text-slate-500 mt-2">
                    For manufacturers, wholesale distributors, and catalog managers with 10+ product variations.
                  </p>
                </div>

                <div className="py-4 border-y border-slate-100">
                  <span className="text-2xl font-black text-slate-900">Contact for Pricing</span>
                  <p className="text-xs text-indigo-600 font-mono font-bold mt-0.5">Tiered Volume Discount Rates</p>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span><strong>10 to 100+ SKUs</strong> catalog coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Bulk Spreadsheet / Flat File Delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Multi-Marketplace Adaptation (Amazon + Flipkart)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Consistent Brand Tone Across All Categories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Phased Milestone Delivery Schedules</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6">
                <a 
                  href={createWhatsAppUrl("Hello! I manage a catalog and would like custom bulk pricing for my products (10+ SKUs).")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-50 hover:bg-indigo-600 hover:text-white text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-200 hover:border-indigo-600 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Contact Us for Pricing</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          HIGH-CONVERSION CONTACT SECTION & WHATSAPP TERMINAL (LIGHT THEME)
          ========================================================================= */}
      <section id="contact-section" className="py-20 relative z-10 border-t border-slate-200/80 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Side */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
                  Let's Discuss Your Catalog
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                  Start Your Product Optimization Today
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Have an Amazon, Flipkart, or Meesho link? Send it over. We will examine your current presentation and advise you on exactly what needs improvement.
                </p>
              </div>

              {/* Instant WhatsApp Hotline Card */}
              <div className="bg-gradient-to-br from-indigo-50/90 to-sky-50/90 backdrop-blur-xl p-6 rounded-3xl border border-indigo-200 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20">
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Direct WhatsApp Hotline</h3>
                    <p className="text-xs text-indigo-600 font-mono font-bold">+91 9373843585</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Fastest way to get in touch. Click below to launch WhatsApp with our pre-filled optimization inquiry message.
                </p>

                <a 
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold text-xs rounded-xl transition-all shadow-[0_4px_16px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
                  <span>Open WhatsApp Direct Chat</span>
                </a>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Immediate human review of your product URLs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full confidentiality guaranteed: SKU data stays strictly private</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No obligation consultation</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_15px_40px_-5px_rgba(15,23,42,0.06)]">
                
                {formSubmitted ? (
                  <div className="text-center py-10 space-y-5 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                      <Check className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Inquiry Details Prepared!</h3>
                      <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
                        Thank you, <strong className="text-slate-900">{formData.name}</strong>. We have captured your request for your {formData.marketplace} product.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700 max-w-md mx-auto font-mono">
                      <p><strong>Marketplace:</strong> {formData.marketplace}</p>
                      <p><strong>SKUs:</strong> {formData.skuCount}</p>
                      <p className="truncate"><strong>Product URL:</strong> {formData.productUrl}</p>
                    </div>

                    <div className="pt-2">
                      <a 
                        href={getFormWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold text-xs rounded-xl shadow-[0_4px_16px_rgba(79,70,229,0.3)] transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
                        <span>Send These Details To WhatsApp Now</span>
                      </a>
                    </div>

                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-indigo-600 underline pt-4 block mx-auto cursor-pointer"
                    >
                      Submit another product link
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-indigo-600" />
                      Submit Your Product Link for Review
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-slate-700">
                          Seller / Brand Name <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border ${
                            formErrors.name ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                          } text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors`}
                        />
                        {formErrors.name && (
                          <p className="text-[10px] text-rose-500 font-semibold">{formErrors.name}</p>
                        )}
                      </div>

                      {/* Phone or Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-slate-700">
                          WhatsApp Number or Email <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="phoneOrEmail"
                          value={formData.phoneOrEmail}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210 or email"
                          className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border ${
                            formErrors.phoneOrEmail ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                          } text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors`}
                        />
                        {formErrors.phoneOrEmail && (
                          <p className="text-[10px] text-rose-500 font-semibold">{formErrors.phoneOrEmail}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Marketplace Selection */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-slate-700">
                          Target Marketplace
                        </label>
                        <select 
                          name="marketplace"
                          value={formData.marketplace}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigo-600"
                        >
                          <option value="Amazon">Amazon (A9/A10 Standard)</option>
                          <option value="Flipkart">Flipkart (Catalog Taxonomy)</option>
                          <option value="Meesho">Meesho (Mobile Reseller)</option>
                          <option value="Multiple Platforms">All Three Platforms (Amazon + Flipkart + Meesho)</option>
                        </select>
                      </div>

                      {/* SKU Count */}
                      <div className="space-y-1">
                        <label className="text-xs font-mono font-bold text-slate-700">
                          Number of Products
                        </label>
                        <select 
                          name="skuCount"
                          value={formData.skuCount}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-indigo-600"
                        >
                          <option value="1 Product (Single Launch)">1 Product (Single Launch)</option>
                          <option value="2-5 Products">2 to 5 Products</option>
                          <option value="5-20 Products">5 to 20 Products</option>
                          <option value="20+ Bulk Catalog">20+ Products (Bulk Catalog)</option>
                        </select>
                      </div>
                    </div>

                    {/* Product URL */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-slate-700">
                        Product Link / Live URL <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="productUrl"
                        value={formData.productUrl}
                        onChange={handleInputChange}
                        placeholder="Paste Amazon, Flipkart or Meesho product URL here"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border ${
                          formErrors.productUrl ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                        } text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors`}
                      />
                      {formErrors.productUrl && (
                        <p className="text-[10px] text-rose-500 font-semibold">{formErrors.productUrl}</p>
                      )}
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-slate-700">
                        Requirements or Goals (Optional)
                      </label>
                      <textarea 
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Mention any target keywords, primary issues (e.g. low CTR, high returns), or target launch dates..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold text-xs rounded-xl transition-all shadow-[0_4px_16px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Listing Audit & Quote</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION (LIGHT THEME)
          ========================================================================= */}
      <section id="faq" className="py-20 relative z-10 border-t border-slate-200/80 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
              Frequently Answered
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Questions & Transparency
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need to know about our marketplace copywriting and optimization processes.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 overflow-hidden transition-all shadow-sm"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/70 cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-900">
                      {item.q}
                    </span>
                    <span className="shrink-0 text-indigo-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          LIGHT GLASS FOOTER
          ========================================================================= */}
      <footer className="relative z-10 border-t border-slate-200/80 bg-white pt-16 pb-12 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            
            {/* Brand Col */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-sm">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-bold text-slate-900">OptiListing Pro Studio</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Professional e-commerce product title, description, and keyword optimization service for Amazon, Flipkart, and Meesho sellers.
              </p>
              <div>
                <a 
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp: +91 9373843585</span>
                </a>
              </div>
            </div>

            {/* Services Col */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Services</p>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><button onClick={() => scrollTo('services')} className="hover:text-indigo-600 cursor-pointer">SEO Product Titles</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-indigo-600 cursor-pointer">Benefit Bullet Points</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-indigo-600 cursor-pointer">Product Descriptions</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-indigo-600 cursor-pointer">Keyword Research</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-indigo-600 cursor-pointer">Bulk Catalog Writing</button></li>
              </ul>
            </div>

            {/* Marketplaces Col */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Marketplaces</p>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><button onClick={() => scrollTo('algorithm-matrix')} className="hover:text-indigo-600 cursor-pointer">Amazon India & Global</button></li>
                <li><button onClick={() => scrollTo('algorithm-matrix')} className="hover:text-indigo-600 cursor-pointer">Flipkart Sellers</button></li>
                <li><button onClick={() => scrollTo('algorithm-matrix')} className="hover:text-indigo-600 cursor-pointer">Meesho Sellers</button></li>
                <li><button onClick={() => scrollTo('studio-work')} className="hover:text-indigo-600 cursor-pointer">Work Showcase</button></li>
                <li><button onClick={() => scrollTo('pricing')} className="hover:text-indigo-600 cursor-pointer">Pricing Packages</button></li>
              </ul>
            </div>

            {/* Legal Col */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Trust & Policies</p>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><button onClick={() => setPrivacyModal(true)} className="hover:text-indigo-600 cursor-pointer">Privacy Policy</button></li>
                <li><button onClick={() => setTermsModal(true)} className="hover:text-indigo-600 cursor-pointer">Terms of Service</button></li>
                <li><button onClick={() => scrollTo('faq')} className="hover:text-indigo-600 cursor-pointer">FAQ</button></li>
                <li><button onClick={() => scrollTo('contact-section')} className="hover:text-indigo-600 cursor-pointer">Contact Form</button></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} OptiListing Pro Studio. All rights reserved.</p>
            <p>Independent e-commerce content studio. Not affiliated with Amazon, Flipkart, or Meesho.</p>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          PERSISTENT FLOATING LIGHT GLASS WHATSAPP LAUNCHER
          ========================================================================= */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50">
        <a 
          href={createWhatsAppUrl()} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/60"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline text-xs font-bold tracking-tight">Chat on WhatsApp</span>
        </a>
      </aside>

      {/* =========================================================================
          PRIVACY POLICY MODAL (LIGHT THEME)
          ========================================================================= */}
      {privacyModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Privacy Policy</h3>
              <button onClick={() => setPrivacyModal(false)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              <p>We respect your privacy. Information submitted (name, WhatsApp number, email, and product links) is used solely to audit your listings and deliver requested optimization quotes.</p>
              <p><strong>Zero Resale:</strong> We never sell, lease, or share your proprietary product listings, brand assets, or SKU information with third parties.</p>
              <p><strong>Direct Communication:</strong> We communicate directly via WhatsApp (+91 9373843585) or email to review drafts and coordinate delivery.</p>
            </div>
            <button 
              onClick={() => setPrivacyModal(false)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          TERMS OF SERVICE MODAL (LIGHT THEME)
          ========================================================================= */}
      {termsModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Terms of Service</h3>
              <button onClick={() => setTermsModal(false)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              <p><strong>Service Scope:</strong> OptiListing Pro provides professional copywriting, title formulation, bullet points, narrative descriptions, and keyword research for Amazon, Flipkart, and Meesho sellers.</p>
              <p><strong>Independent Status:</strong> Amazon, Flipkart, and Meesho are registered trademarks of their respective owners. We are an independent copywriting consultancy.</p>
              <p><strong>No Ranking Guarantees:</strong> While our copywriting follows proven SEO best practices, organic search rankings depend on platform pricing, customer reviews, inventory availability, and advertising budgets.</p>
            </div>
            <button 
              onClick={() => setTermsModal(false)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}