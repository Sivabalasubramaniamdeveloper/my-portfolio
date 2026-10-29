import fs from 'fs';
import path from 'path';

const outDir = '/Users/priyajayakumar/Documents/test_images/web/my-portfolio/public/screenshots';

const svgs = {
  'voice-tasks.svg': `<svg width="800" height="520" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="520" rx="16" fill="#0B1120"/>
    <rect x="20" y="20" width="760" height="60" rx="12" fill="#1E293B"/>
    <circle cx="55" cy="50" r="16" fill="#3B82F6"/>
    <path d="M55 42v16M47 50h16" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <text x="85" y="47" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="16">AI Voice Task Extraction</text>
    <text x="85" y="65" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Natural Language Speech → Structured SQLite Task &amp; Local Notification</text>
    
    <!-- Audio Waveform Card -->
    <rect x="20" y="95" width="760" height="110" rx="14" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <circle cx="75" cy="150" r="28" fill="#EF4444" opacity="0.15"/>
    <circle cx="75" cy="150" r="20" fill="#EF4444"/>
    <path d="M75 142v10M72 152h6" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <rect x="120" y="125" width="8" height="40" rx="4" fill="#38BDF8"/>
    <rect x="135" y="115" width="8" height="60" rx="4" fill="#60A5FA"/>
    <rect x="150" y="130" width="8" height="30" rx="4" fill="#818CF8"/>
    <rect x="165" y="110" width="8" height="70" rx="4" fill="#A855F7"/>
    <rect x="180" y="120" width="8" height="50" rx="4" fill="#EC4899"/>
    <rect x="195" y="135" width="8" height="25" rx="4" fill="#38BDF8"/>
    <rect x="210" y="118" width="8" height="54" rx="4" fill="#60A5FA"/>
    <text x="240" y="142" fill="#E2E8F0" font-family="Inter, sans-serif" font-weight="600" font-size="15">"Schedule sprint review with frontend team tomorrow at 4 PM urgent"</text>
    <text x="240" y="165" fill="#34D399" font-family="Inter, sans-serif" font-size="12">✓ Real-time Speech-to-Text transcribed with 99.4% confidence</text>

    <!-- AI Extracted Parameters Cards -->
    <rect x="20" y="220" width="370" height="275" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="40" y="255" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="15">Gemini 2.5 Flash Extracted Entity</text>
    
    <rect x="40" y="275" width="330" height="42" rx="8" fill="#0F172A"/>
    <text x="55" y="301" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Title:</text>
    <text x="95" y="301" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="600" font-size="13">Sprint Review with Frontend Team</text>

    <rect x="40" y="325" width="160" height="42" rx="8" fill="#0F172A"/>
    <text x="55" y="351" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Priority:</text>
    <rect x="110" y="334" width="75" height="24" rx="6" fill="#DC2626"/>
    <text x="122" y="350" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="11">HIGH / URGENT</text>

    <rect x="210" y="325" width="160" height="42" rx="8" fill="#0F172A"/>
    <text x="225" y="351" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Category:</text>
    <rect x="285" y="334" width="70" height="24" rx="6" fill="#2563EB"/>
    <text x="303" y="350" fill="white" font-family="Inter, sans-serif" font-weight="600" font-size="11">WORK</text>

    <rect x="40" y="375" width="330" height="42" rx="8" fill="#0F172A"/>
    <text x="55" y="401" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Scheduled:</text>
    <text x="130" y="401" fill="#38BDF8" font-family="Inter, sans-serif" font-weight="600" font-size="13">Tomorrow @ 4:00 PM</text>

    <rect x="40" y="430" width="330" height="45" rx="8" fill="#059669"/>
    <text x="100" y="458" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="13">✓ Saved to SQLite &amp; Alarm Set</text>

    <!-- Task List Preview -->
    <rect x="410" y="220" width="370" height="275" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="430" y="255" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="15">Today's Voice Tasks (BLoC Stream)</text>

    <rect x="430" y="275" width="330" height="58" rx="8" fill="#0F172A" stroke="#38BDF8" stroke-width="1"/>
    <circle cx="452" cy="304" r="9" stroke="#38BDF8" stroke-width="2"/>
    <text x="472" y="298" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="600" font-size="13">Sprint review with frontend team</text>
    <text x="472" y="318" fill="#94A3B8" font-family="Inter, sans-serif" font-size="11">⏰ 4:00 PM • Work • Priority High</text>

    <rect x="430" y="343" width="330" height="58" rx="8" fill="#0F172A"/>
    <circle cx="452" cy="372" r="9" fill="#10B981"/>
    <path d="M448 372l3 3 5-5" stroke="white" stroke-width="2"/>
    <text x="472" y="366" fill="#94A3B8" font-family="Inter, sans-serif" font-weight="500" font-size="13" text-decoration="line-through">Deploy Node.js REST API to Render</text>
    <text x="472" y="386" fill="#64748B" font-family="Inter, sans-serif" font-size="11">Completed 11:30 AM • Engineering</text>

    <rect x="430" y="411" width="330" height="58" rx="8" fill="#0F172A"/>
    <circle cx="452" cy="440" r="9" stroke="#94A3B8" stroke-width="2"/>
    <text x="472" y="434" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="600" font-size="13">Review Play Store console verification</text>
    <text x="472" y="454" fill="#F59E0B" font-family="Inter, sans-serif" font-size="11">Pending review • Release Ops</text>
  </svg>`,

  'price-compare.svg': `<svg width="800" height="520" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="520" rx="16" fill="#0B1120"/>
    <rect x="20" y="20" width="760" height="60" rx="12" fill="#1E293B"/>
    <circle cx="55" cy="50" r="16" fill="#10B981"/>
    <text x="48" y="55" fill="white" font-family="Inter, sans-serif" font-weight="bold" font-size="16">₹</text>
    <text x="85" y="47" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="16">Multi-Store Real-Time Price Comparison Scraper</text>
    <text x="85" y="65" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Parallel scraping: Amazon vs Flipkart vs Meesho with automated savings calculation</text>

    <!-- Search Input Bar -->
    <rect x="20" y="95" width="760" height="54" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <text x="40" y="128" fill="#38BDF8" font-family="Inter, sans-serif" font-size="15">🔍</text>
    <text x="70" y="127" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="600" font-size="14">Sony WH-1000XM5 Wireless Headphones</text>
    <rect x="640" y="104" width="125" height="36" rx="6" fill="#2563EB"/>
    <text x="668" y="127" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="12">COMPARE</text>

    <!-- Results Cards (3 Columns) -->
    <!-- Flipkart (Best Deal) -->
    <rect x="20" y="165" width="240" height="330" rx="14" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
    <rect x="20" y="165" width="240" height="34" rx="14 14 0 0" fill="#10B981"/>
    <text x="80" y="188" fill="white" font-family="Inter, sans-serif" font-weight="800" font-size="12">★ BEST DEAL (SAVE ₹4,000)</text>
    <rect x="35" y="210" width="70" height="26" rx="4" fill="#2874F0"/>
    <text x="43" y="227" fill="white" font-family="Inter, sans-serif" font-weight="800" font-size="12">Flipkart</text>
    <text x="35" y="270" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="800" font-size="28">₹25,990</text>
    <text x="35" y="295" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12" text-decoration="line-through">M.R.P: ₹34,990 (25% off)</text>
    <text x="35" y="325" fill="#34D399" font-family="Inter, sans-serif" font-weight="600" font-size="12">✓ In Stock • Free Express Delivery</text>
    <text x="35" y="350" fill="#FBBF24" font-family="Inter, sans-serif" font-size="13">★★★★☆ 4.6 (14,200 reviews)</text>
    <rect x="35" y="435" width="210" height="42" rx="8" fill="#10B981"/>
    <text x="85" y="461" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="13">View on Flipkart</text>

    <!-- Amazon -->
    <rect x="280" y="165" width="240" height="330" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <rect x="295" y="210" width="75" height="26" rx="4" fill="#FF9900"/>
    <text x="307" y="227" fill="#111827" font-family="Inter, sans-serif" font-weight="800" font-size="12">Amazon</text>
    <text x="295" y="270" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="800" font-size="28">₹29,990</text>
    <text x="295" y="295" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12" text-decoration="line-through">M.R.P: ₹34,990 (14% off)</text>
    <text x="295" y="325" fill="#60A5FA" font-family="Inter, sans-serif" font-weight="600" font-size="12">✓ Prime Delivery Available</text>
    <text x="295" y="350" fill="#FBBF24" font-family="Inter, sans-serif" font-size="13">★★★★☆ 4.5 (21,500 reviews)</text>
    <rect x="295" y="435" width="210" height="42" rx="8" fill="#0F172A" stroke="#475569" stroke-width="1"/>
    <text x="348" y="461" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="13">View on Amazon</text>

    <!-- Meesho -->
    <rect x="540" y="165" width="240" height="330" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <rect x="555" y="210" width="70" height="26" rx="4" fill="#F43397"/>
    <text x="566" y="227" fill="white" font-family="Inter, sans-serif" font-weight="800" font-size="12">Meesho</text>
    <text x="555" y="270" fill="#94A3B8" font-family="Inter, sans-serif" font-weight="800" font-size="24">Unavailable</text>
    <text x="555" y="295" fill="#64748B" font-family="Inter, sans-serif" font-size="12">No verified seller match</text>
    <text x="555" y="325" fill="#F87171" font-family="Inter, sans-serif" font-size="12">OEM accessories only</text>
    <rect x="555" y="435" width="210" height="42" rx="8" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <text x="595" y="461" fill="#64748B" font-family="Inter, sans-serif" font-weight="600" font-size="13">Search Alternates</text>
  </svg>`,

  'city-news.svg': `<svg width="800" height="520" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="520" rx="16" fill="#0B1120"/>
    <rect x="20" y="20" width="760" height="60" rx="12" fill="#1E293B"/>
    <circle cx="55" cy="50" r="16" fill="#F59E0B"/>
    <text x="47" y="55" fill="white" font-family="Inter, sans-serif" font-weight="bold" font-size="16">📰</text>
    <text x="85" y="47" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="16">Curated City-Bound RSS &amp; Photo Scraper</text>
    <text x="85" y="65" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">The Hindu &amp; Times of India strict geo-filtered feeds with Cheerio editorial photo enrichment</text>

    <!-- City Selector Tabs -->
    <rect x="20" y="95" width="760" height="44" rx="8" fill="#0F172A"/>
    <rect x="25" y="99" width="100" height="36" rx="6" fill="#3B82F6"/>
    <text x="45" y="122" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="13">Chennai 📍</text>
    <text x="145" y="122" fill="#94A3B8" font-family="Inter, sans-serif" font-size="13">Bengaluru</text>
    <text x="245" y="122" fill="#94A3B8" font-family="Inter, sans-serif" font-size="13">Mumbai</text>
    <text x="330" y="122" fill="#94A3B8" font-family="Inter, sans-serif" font-size="13">Delhi</text>
    <text x="395" y="122" fill="#94A3B8" font-family="Inter, sans-serif" font-size="13">Hyderabad</text>
    <text x="495" y="122" fill="#94A3B8" font-family="Inter, sans-serif" font-size="13">Coimbatore</text>
    <text x="600" y="122" fill="#94A3B8" font-family="Inter, sans-serif" font-size="13">Madurai</text>

    <!-- News Cards Grid -->
    <rect x="20" y="155" width="370" height="340" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <rect x="35" y="170" width="340" height="150" rx="8" fill="#334155"/>
    <path d="M70 270l60-60 50 40 70-70 90 90H70z" fill="#475569"/>
    <circle cx="110" cy="205" r="18" fill="#FBBF24"/>
    <rect x="45" y="180" width="85" height="24" rx="4" fill="#0284C7"/>
    <text x="52" y="196" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="11">The Hindu</text>
    <text x="35" y="345" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="15">Metro Phase 2 underground tunnel</text>
    <text x="35" y="367" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="15">breakthrough achieved at Adyar</text>
    <text x="35" y="395" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">CMRL engineers mark major milestone completing the 1.8km tunnel under river bed...</text>
    <text x="35" y="475" fill="#38BDF8" font-family="Inter, sans-serif" font-weight="600" font-size="12">Chennai • 32 mins ago • In-App Browser ↗</text>

    <rect x="410" y="155" width="370" height="340" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <rect x="425" y="170" width="340" height="150" rx="8" fill="#1E293B"/>
    <rect x="425" y="170" width="340" height="150" rx="8" fill="#164E63"/>
    <circle cx="480" cy="235" r="30" fill="#0E7490"/>
    <text x="465" y="243" fill="white" font-size="24">🌧️</text>
    <rect x="435" y="180" width="115" height="24" rx="4" fill="#DC2626"/>
    <text x="442" y="196" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="11">Times of India</text>
    <text x="425" y="345" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="15">RMC issues yellow alert for coastal</text>
    <text x="425" y="367" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="15">districts as low pressure develops</text>
    <text x="425" y="395" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Isolated heavy rainfall predicted across Chennai, Kancheepuram, and Tiruvallur...</text>
    <text x="425" y="475" fill="#38BDF8" font-family="Inter, sans-serif" font-weight="600" font-size="12">Chennai • 1 hour ago • Read Full Story ↗</text>
  </svg>`,

  'ai-email.svg': `<svg width="800" height="520" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="520" rx="16" fill="#0B1120"/>
    <rect x="20" y="20" width="760" height="60" rx="12" fill="#1E293B"/>
    <circle cx="55" cy="50" r="16" fill="#8B5CF6"/>
    <text x="47" y="55" fill="white" font-family="Inter, sans-serif" font-weight="bold" font-size="16">✉️</text>
    <text x="85" y="47" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="16">AI Email Assistant &amp; Direct SMTP Dispatch</text>
    <text x="85" y="65" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Draft tone-adjusted responses (Professional, Casual, Urgent) + Send via Gmail App Password</text>

    <!-- Inputs -->
    <rect x="20" y="95" width="760" height="410" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="40" y="130" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">SELECT TONE &amp; CONTEXT:</text>
    
    <rect x="40" y="145" width="130" height="34" rx="6" fill="#3B82F6"/>
    <text x="55" y="167" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="12">✓ Professional</text>
    <rect x="180" y="145" width="110" height="34" rx="6" fill="#0F172A"/>
    <text x="210" y="167" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Casual</text>
    <rect x="300" y="145" width="110" height="34" rx="6" fill="#0F172A"/>
    <text x="330" y="167" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Friendly</text>
    <rect x="420" y="145" width="110" height="34" rx="6" fill="#0F172A"/>
    <text x="450" y="167" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Urgent</text>

    <!-- Drafted Email Area -->
    <rect x="40" y="195" width="720" height="240" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <text x="60" y="230" fill="#94A3B8" font-family="Inter, sans-serif" font-size="13">Subject: <tspan fill="#F8FAFC" font-weight="600">Application for Senior Flutter Developer Role — Siva Bala Subramaniam P</tspan></text>
    <line x1="60" y1="245" x2="740" y2="245" stroke="#334155"/>
    <text x="60" y="275" fill="#E2E8F0" font-family="Inter, sans-serif" font-size="13">Dear Hiring Team,</text>
    <text x="60" y="305" fill="#E2E8F0" font-family="Inter, sans-serif" font-size="13">I am writing to express my strong enthusiasm for the Flutter Developer position at your organization.</text>
    <text x="60" y="330" fill="#E2E8F0" font-family="Inter, sans-serif" font-size="13">With 3+ years of experience engineering scalable mobile and desktop applications with Flutter, Dart, BLoC,</text>
    <text x="60" y="355" fill="#E2E8F0" font-family="Inter, sans-serif" font-size="13">and Node.js backend architectures, I have successfully launched multiple apps to Play Store and App Store.</text>
    <text x="60" y="385" fill="#E2E8F0" font-family="Inter, sans-serif" font-size="13">I look forward to discussing how my cross-platform engineering expertise can accelerate your product roadmap.</text>

    <!-- Action Buttons -->
    <rect x="40" y="450" width="180" height="40" rx="8" fill="#10B981"/>
    <text x="75" y="475" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="13">🚀 Send via SMTP</text>

    <rect x="235" y="450" width="160" height="40" rx="8" fill="#0F172A" stroke="#475569" stroke-width="1"/>
    <text x="270" y="475" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="600" font-size="13">📋 Copy Draft</text>
  </svg>`,

  'vault-security.svg': `<svg width="800" height="520" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="520" rx="16" fill="#0B1120"/>
    <rect x="20" y="20" width="760" height="60" rx="12" fill="#1E293B"/>
    <circle cx="55" cy="50" r="16" fill="#06B6D4"/>
    <text x="47" y="55" fill="white" font-family="Inter, sans-serif" font-weight="bold" font-size="16">🔒</text>
    <text x="85" y="47" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="16">Encrypted Biometric Private Vault</text>
    <text x="85" y="65" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">AES-256 local encrypted storage + FaceID / Fingerprint biometric authentication</text>

    <!-- Left: Biometric Auth Mock -->
    <rect x="20" y="95" width="280" height="405" rx="14" fill="#1E293B" stroke="#06B6D4" stroke-width="1.5"/>
    <circle cx="160" cy="180" r="45" fill="#0891B2" opacity="0.15"/>
    <circle cx="160" cy="180" r="35" stroke="#06B6D4" stroke-width="3" stroke-dasharray="8 6"/>
    <path d="M148 180c0-6.6 5.4-12 12-12s12 5.4 12 12v10h-24v-10z" fill="#06B6D4"/>
    <circle cx="160" cy="185" r="3" fill="#0B1120"/>
    <text x="100" y="250" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="16">Biometric Active</text>
    <text x="65" y="275" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Touch Sensor / FaceID to Unlock</text>
    <rect x="50" y="320" width="220" height="38" rx="8" fill="#06B6D4"/>
    <text x="95" y="344" fill="#0F172A" font-family="Inter, sans-serif" font-weight="800" font-size="13">AUTHENTICATE</text>
    <text x="65" y="380" fill="#64748B" font-family="Inter, sans-serif" font-size="11">Hardware Keystore / Keyring Protected</text>

    <!-- Right: Stored Passwords & Secrets -->
    <rect x="320" y="95" width="460" height="405" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="345" y="130" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="15">Encrypted Credentials (AES-256)</text>

    <rect x="345" y="150" width="410" height="70" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <text x="365" y="177" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="600" font-size="14">AWS Production Key</text>
    <text x="365" y="202" fill="#94A3B8" font-family="Courier, monospace" font-size="13">AKIA••••••••••••4J2Q</text>
    <rect x="670" y="165" width="70" height="34" rx="6" fill="#334155"/>
    <text x="688" y="187" fill="#38BDF8" font-family="Inter, sans-serif" font-weight="600" font-size="12">Copy</text>

    <rect x="345" y="235" width="410" height="70" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <text x="365" y="262" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="600" font-size="14">Google Gemini API Key</text>
    <text x="365" y="287" fill="#94A3B8" font-family="Courier, monospace" font-size="13">AIzaSy••••••••••••92Kx</text>
    <rect x="670" y="250" width="70" height="34" rx="6" fill="#334155"/>
    <text x="688" y="272" fill="#38BDF8" font-family="Inter, sans-serif" font-weight="600" font-size="12">Copy</text>

    <rect x="345" y="320" width="410" height="70" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <text x="365" y="347" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="600" font-size="14">Supabase Service Role JWT</text>
    <text x="365" y="372" fill="#94A3B8" font-family="Courier, monospace" font-size="13">eyJhbGci••••••••••••hK8a</text>
    <rect x="670" y="335" width="70" height="34" rx="6" fill="#334155"/>
    <text x="688" y="357" fill="#38BDF8" font-family="Inter, sans-serif" font-weight="600" font-size="12">Copy</text>

    <rect x="345" y="410" width="410" height="65" rx="10" fill="#0F172A"/>
    <text x="365" y="445" fill="#34D399" font-family="Inter, sans-serif" font-weight="600" font-size="13">✓ Zero telemetry • Decrypted in-memory only</text>
  </svg>`,

  'ott-streams.svg': `<svg width="800" height="520" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="520" rx="16" fill="#0B1120"/>
    <rect x="20" y="20" width="760" height="60" rx="12" fill="#1E293B"/>
    <circle cx="55" cy="50" r="16" fill="#EC4899"/>
    <text x="47" y="55" fill="white" font-family="Inter, sans-serif" font-weight="bold" font-size="16">🎬</text>
    <text x="85" y="47" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="16">MineAI Streams — Adaptive HLS Video OTT Player</text>
    <text x="85" y="65" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Multi-bitrate HLS (Auto, 720p, 480p), gesture scrub, custom playback rates (0.5x–2.0x)</text>

    <!-- Video Player Screen -->
    <rect x="20" y="95" width="520" height="405" rx="14" fill="#020617" stroke="#334155" stroke-width="1"/>
    <!-- Video Visual Simulation -->
    <rect x="35" y="110" width="490" height="280" rx="10" fill="#1E1B4B"/>
    <circle cx="280" cy="240" r="35" fill="#EC4899" opacity="0.9"/>
    <polygon points="273,225 295,240 273,255" fill="white"/>

    <!-- Player Controls Bar -->
    <rect x="35" y="405" width="490" height="80" rx="8" fill="#0F172A"/>
    <rect x="50" y="420" width="460" height="6" rx="3" fill="#334155"/>
    <rect x="50" y="420" width="220" height="6" rx="3" fill="#EC4899"/>
    <circle cx="270" cy="423" r="6" fill="white"/>
    <text x="50" y="455" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">14:22 / 38:50</text>
    <rect x="340" y="440" width="60" height="26" rx="4" fill="#334155"/>
    <text x="352" y="457" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="600" font-size="11">1.5x</text>
    <rect x="415" y="440" width="80" height="26" rx="4" fill="#DB2777"/>
    <text x="427" y="457" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="11">720p HLS</text>

    <!-- Playlist on Right -->
    <rect x="555" y="95" width="225" height="405" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="575" y="130" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="14">Curated Streams</text>

    <rect x="570" y="150" width="195" height="70" rx="8" fill="#0F172A" stroke="#EC4899" stroke-width="1"/>
    <text x="585" y="175" fill="#EC4899" font-family="Inter, sans-serif" font-weight="700" font-size="12">▶ NOW PLAYING</text>
    <text x="585" y="198" fill="#F8FAFC" font-family="Inter, sans-serif" font-size="11">Flutter Global Keynote</text>

    <rect x="570" y="230" width="195" height="70" rx="8" fill="#0F172A"/>
    <text x="585" y="255" fill="#94A3B8" font-family="Inter, sans-serif" font-weight="600" font-size="12">Episode 2</text>
    <text x="585" y="278" fill="#F8FAFC" font-family="Inter, sans-serif" font-size="11">Deep Dive into BLoC v9</text>

    <rect x="570" y="310" width="195" height="70" rx="8" fill="#0F172A"/>
    <text x="585" y="335" fill="#94A3B8" font-family="Inter, sans-serif" font-weight="600" font-size="12">Episode 3</text>
    <text x="585" y="358" fill="#F8FAFC" font-family="Inter, sans-serif" font-size="11">Building Cross-Platform Apps</text>
  </svg>`,

  'admin-portal.svg': `<svg width="800" height="520" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="520" rx="16" fill="#0B1120"/>
    <rect x="20" y="20" width="760" height="60" rx="12" fill="#1E293B"/>
    <circle cx="55" cy="50" r="16" fill="#6366F1"/>
    <text x="47" y="55" fill="white" font-family="Inter, sans-serif" font-weight="bold" font-size="16">⚙️</text>
    <text x="85" y="47" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="16">MineAI Admin Web &amp; Desktop Control Center</text>
    <text x="85" y="65" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">Flutter Desktop/Web Admin — User Management, Token Balances, Support Tickets &amp; Health</text>

    <!-- Top KPI Cards -->
    <rect x="20" y="95" width="175" height="85" rx="10" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="35" y="125" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">TOTAL USERS</text>
    <text x="35" y="158" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="800" font-size="24">1,420</text>

    <rect x="215" y="95" width="175" height="85" rx="10" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="230" y="125" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">SCRAPED DEALS</text>
    <text x="230" y="158" fill="#34D399" font-family="Inter, sans-serif" font-weight="800" font-size="24">8,950</text>

    <rect x="410" y="95" width="175" height="85" rx="10" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="425" y="125" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">OPEN TICKETS</text>
    <text x="425" y="158" fill="#F59E0B" font-family="Inter, sans-serif" font-weight="800" font-size="24">12</text>

    <rect x="605" y="95" width="175" height="85" rx="10" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="620" y="125" fill="#94A3B8" font-family="Inter, sans-serif" font-size="12">SERVER STATUS</text>
    <text x="620" y="158" fill="#38BDF8" font-family="Inter, sans-serif" font-weight="800" font-size="20">100% OK</text>

    <!-- Table Preview -->
    <rect x="20" y="200" width="760" height="300" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="45" y="235" fill="#F8FAFC" font-family="Inter, sans-serif" font-weight="700" font-size="15">Support Tickets &amp; User Inquiries (Live Supabase Sync)</text>

    <rect x="45" y="255" width="710" height="36" rx="6" fill="#0F172A"/>
    <text x="65" y="278" fill="#94A3B8" font-family="Inter, sans-serif" font-weight="600" font-size="12">ID</text>
    <text x="140" y="278" fill="#94A3B8" font-family="Inter, sans-serif" font-weight="600" font-size="12">USER EMAIL</text>
    <text x="320" y="278" fill="#94A3B8" font-family="Inter, sans-serif" font-weight="600" font-size="12">ISSUE CATEGORY</text>
    <text x="510" y="278" fill="#94A3B8" font-family="Inter, sans-serif" font-weight="600" font-size="12">PRIORITY</text>
    <text x="640" y="278" fill="#94A3B8" font-family="Inter, sans-serif" font-weight="600" font-size="12">STATUS</text>

    <!-- Row 1 -->
    <rect x="45" y="300" width="710" height="42" rx="4" fill="#1E293B"/>
    <text x="65" y="326" fill="#64748B" font-family="Inter, sans-serif" font-size="12">#1042</text>
    <text x="140" y="326" fill="#F8FAFC" font-family="Inter, sans-serif" font-size="12">rahul.dev@gmail.com</text>
    <text x="320" y="326" fill="#E2E8F0" font-family="Inter, sans-serif" font-size="12">Price Scraper API Timeout</text>
    <rect x="510" y="310" width="55" height="22" rx="4" fill="#DC2626"/>
    <text x="522" y="325" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="10">HIGH</text>
    <rect x="640" y="310" width="75" height="22" rx="4" fill="#10B981"/>
    <text x="650" y="325" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="10">RESOLVED</text>

    <!-- Row 2 -->
    <rect x="45" y="350" width="710" height="42" rx="4" fill="#0F172A"/>
    <text x="65" y="376" fill="#64748B" font-family="Inter, sans-serif" font-size="12">#1043</text>
    <text x="140" y="376" fill="#F8FAFC" font-family="Inter, sans-serif" font-size="12">priya.m@techcorp.in</text>
    <text x="320" y="376" fill="#E2E8F0" font-family="Inter, sans-serif" font-size="12">BYOK OpenAI Key validation</text>
    <rect x="510" y="360" width="65" height="22" rx="4" fill="#F59E0B"/>
    <text x="520" y="375" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="10">MEDIUM</text>
    <rect x="640" y="360" width="75" height="22" rx="4" fill="#2563EB"/>
    <text x="650" y="375" fill="white" font-family="Inter, sans-serif" font-weight="700" font-size="10">IN REVIEW</text>
  </svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(outDir, filename), content.trim());
  console.log('Wrote', filename);
}
