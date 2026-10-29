#!/usr/bin/env python3
"""
Generates Siva Bala Subramaniam P's Updated Resume PDF (sample.pdf)
Incorporating MineAI (Flutter Mobile & Desktop + Node.js Backend)
"""

import os

class ResumePDF:
    def __init__(self, filename):
        self.filename = filename
        self.pages = []
        self.current_page_stream = []
        self.page_width = 595.28
        self.page_height = 841.89
        self.margin_left = 40.0
        self.margin_right = 40.0
        self.margin_top = 40.0
        self.margin_bottom = 35.0
        self.content_width = self.page_width - self.margin_left - self.margin_right
        self.y = self.page_height - self.margin_top
        self.new_page()

    def new_page(self):
        if self.current_page_stream:
            self.pages.append(self.current_page_stream)
        self.current_page_stream = []
        self.y = self.page_height - self.margin_top

    def check_space(self, needed):
        if self.y - needed < self.margin_bottom:
            self.new_page()

    def set_color(self, r, g, b):
        self.current_page_stream.append(f"{r:.3f} {g:.3f} {b:.3f} rg")

    def draw_line(self, x1, y1, x2, y2, r=0.75, g=0.75, b=0.75, width=0.8):
        self.current_page_stream.append(f"{r:.3f} {g:.3f} {b:.3f} RG {width:.2f} w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S")

    def draw_rect(self, x, y, w, h, fill_r, fill_g, fill_b, stroke_r=None, stroke_g=None, stroke_b=None):
        if stroke_r is not None:
            self.current_page_stream.append(f"{stroke_r:.3f} {stroke_g:.3f} {stroke_b:.3f} RG 0.5 w")
        self.current_page_stream.append(f"{fill_r:.3f} {fill_g:.3f} {fill_b:.3f} rg {x:.2f} {y:.2f} {w:.2f} {h:.2f} re {'B' if stroke_r is not None else 'f'}")

    def escape_text(self, text):
        return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')

    def wrap_text(self, text, max_chars=100):
        words = text.split(' ')
        lines = []
        cur_line = []
        cur_len = 0
        for w in words:
            if not w:
                continue
            if cur_len + len(w) + 1 > max_chars:
                lines.append(' '.join(cur_line))
                cur_line = [w]
                cur_len = len(w)
            else:
                cur_line.append(w)
                cur_len += len(w) + 1
        if cur_line:
            lines.append(' '.join(cur_line))
        return lines

    def add_header(self, name, phone, email, linkedin, portfolio):
        self.check_space(65)
        # Name
        self.set_color(0.08, 0.15, 0.35)
        esc_name = self.escape_text(name)
        self.current_page_stream.append(f"BT /F2 18 Tf {self.margin_left:.2f} {self.y:.2f} Td ({esc_name}) Tj ET")
        
        # Phone on top right
        esc_phone = self.escape_text(f"Phone: {phone}")
        self.set_color(0.2, 0.2, 0.2)
        self.current_page_stream.append(f"BT /F2 9.5 Tf {self.page_width - self.margin_right - 120:.2f} {self.y:.2f} Td ({esc_phone}) Tj ET")
        self.y -= 15

        # Contact line
        esc_li = self.escape_text(f"LinkedIn: {linkedin}")
        esc_em = self.escape_text(f"Email: {email}")
        self.set_color(0.2, 0.4, 0.7)
        self.current_page_stream.append(f"BT /F1 9 Tf {self.margin_left:.2f} {self.y:.2f} Td ({esc_li}) Tj ET")
        self.current_page_stream.append(f"BT /F1 9 Tf {self.page_width - self.margin_right - 200:.2f} {self.y:.2f} Td ({esc_em}) Tj ET")
        self.y -= 14

        esc_port = self.escape_text(f"Portfolio & App Demos: {portfolio}")
        self.set_color(0.1, 0.5, 0.4)
        self.current_page_stream.append(f"BT /F2 9 Tf {self.margin_left:.2f} {self.y:.2f} Td ({esc_port}) Tj ET")
        self.y -= 14
        self.draw_line(self.margin_left, self.y, self.margin_left + self.content_width, self.y, 0.2, 0.35, 0.65, 1.2)
        self.y -= 12

    def add_section_title(self, title):
        self.check_space(26)
        self.y -= 4
        self.set_color(0.08, 0.20, 0.45)
        esc = self.escape_text(title)
        self.current_page_stream.append(f"BT /F2 11 Tf {self.margin_left:.2f} {self.y:.2f} Td ({esc}) Tj ET")
        self.draw_line(self.margin_left, self.y - 2, self.margin_left + self.content_width, self.y - 2, 0.75, 0.8, 0.9, 0.75)
        self.y -= 12

    def add_paragraph(self, text, size=8.5, indent=0, max_chars=105):
        lines = self.wrap_text(text, max_chars=max_chars)
        for line in lines:
            self.check_space(12)
            self.set_color(0.2, 0.2, 0.2)
            esc = self.escape_text(line)
            self.current_page_stream.append(f"BT /F1 {size} Tf {self.margin_left + indent:.2f} {self.y:.2f} Td ({esc}) Tj ET")
            self.y -= 10.5
        self.y -= 2

    def add_role_heading(self, role, company, dates):
        self.check_space(18)
        self.set_color(0.1, 0.1, 0.1)
        esc_rc = self.escape_text(f"{role}  —  {company}")
        esc_dt = self.escape_text(dates)
        self.current_page_stream.append(f"BT /F2 9.5 Tf {self.margin_left:.2f} {self.y:.2f} Td ({esc_rc}) Tj ET")
        self.set_color(0.3, 0.3, 0.3)
        self.current_page_stream.append(f"BT /F2 9 Tf {self.page_width - self.margin_right - 110:.2f} {self.y:.2f} Td ({esc_dt}) Tj ET")
        self.y -= 12

    def add_project_heading(self, name, tags, store=""):
        self.check_space(20)
        self.set_color(0.08, 0.25, 0.55)
        esc_nm = self.escape_text(name)
        esc_tg = self.escape_text(tags)
        self.current_page_stream.append(f"BT /F2 9.5 Tf {self.margin_left:.2f} {self.y:.2f} Td ({esc_nm}) Tj ET")
        self.set_color(0.35, 0.35, 0.35)
        self.current_page_stream.append(f"BT /F3 8.5 Tf {self.page_width - self.margin_right - 235:.2f} {self.y:.2f} Td ({esc_tg}) Tj ET")
        self.y -= 11
        if store:
            self.set_color(0.2, 0.5, 0.3)
            esc_st = self.escape_text(store)
            self.current_page_stream.append(f"BT /F2 8.5 Tf {self.margin_left:.2f} {self.y:.2f} Td ({esc_st}) Tj ET")
            self.y -= 10

    def add_bullet(self, text, indent=12, max_chars=98):
        lines = self.wrap_text(text, max_chars=max_chars)
        self.check_space(len(lines) * 11 + 2)
        # Bullet dot
        self.set_color(0.15, 0.35, 0.65)
        self.current_page_stream.append(f"BT /F2 9 Tf {self.margin_left + indent - 8:.2f} {self.y:.2f} Td (*) Tj ET")
        for idx, line in enumerate(lines):
            self.set_color(0.2, 0.2, 0.2)
            esc = self.escape_text(line)
            self.current_page_stream.append(f"BT /F1 8.5 Tf {self.margin_left + indent:.2f} {self.y:.2f} Td ({esc}) Tj ET")
            self.y -= 10.5
        self.y -= 1.5

    def add_education_row(self, school, degree, dates, location):
        self.check_space(22)
        self.set_color(0.1, 0.1, 0.1)
        esc_sc = self.escape_text(f"{school}")
        esc_dt = self.escape_text(dates)
        self.current_page_stream.append(f"BT /F2 9.5 Tf {self.margin_left:.2f} {self.y:.2f} Td ({esc_sc}) Tj ET")
        self.set_color(0.3, 0.3, 0.3)
        self.current_page_stream.append(f"BT /F2 9 Tf {self.page_width - self.margin_right - 120:.2f} {self.y:.2f} Td ({esc_dt}) Tj ET")
        self.y -= 11
        esc_dg = self.escape_text(f"{degree}")
        esc_lc = self.escape_text(location)
        self.set_color(0.3, 0.3, 0.3)
        self.current_page_stream.append(f"BT /F1 8.5 Tf {self.margin_left:.2f} {self.y:.2f} Td ({esc_dg}) Tj ET")
        self.current_page_stream.append(f"BT /F3 8.5 Tf {self.page_width - self.margin_right - 120:.2f} {self.y:.2f} Td ({esc_lc}) Tj ET")
        self.y -= 13

    def save(self):
        if self.current_page_stream:
            self.pages.append(self.current_page_stream)
        total_pages = len(self.pages)
        catalog_id = 1
        pages_id = 2
        font_f1 = 3
        font_f2 = 4
        font_f3 = 5

        page_ids = []
        content_ids = []
        cur_id = 6
        for _ in range(total_pages):
            page_ids.append(cur_id)
            content_ids.append(cur_id + 1)
            cur_id += 2

        doc = bytearray()
        doc.extend(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        offsets = {}

        def write_obj(num, body):
            offsets[num] = len(doc)
            doc.extend(f"{num} 0 obj\n{body}\nendobj\n".encode('latin1'))

        write_obj(catalog_id, f"<< /Type /Catalog /Pages {pages_id} 0 R >>")
        kids = " ".join([f"{pid} 0 R" for pid in page_ids])
        write_obj(pages_id, f"<< /Type /Pages /Kids [{kids}] /Count {total_pages} >>")

        write_obj(font_f1, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
        write_obj(font_f2, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
        write_obj(font_f3, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>")

        for idx, ops in enumerate(self.pages):
            pid = page_ids[idx]
            cid = content_ids[idx]
            page_num = idx + 1

            footer = (
                f"0.8 0.8 0.8 RG 0.5 w {self.margin_left:.2f} {self.margin_bottom + 6:.2f} m {self.page_width - self.margin_right:.2f} {self.margin_bottom + 6:.2f} l S "
                f"0.4 0.4 0.4 rg BT /F1 7.5 Tf {self.margin_left:.2f} {self.margin_bottom - 2:.2f} Td "
                f"(Siva Bala Subramaniam P - Resume | Cross-Platform Flutter, Node.js & React Developer) Tj ET "
                f"BT /F2 7.5 Tf {self.page_width - self.margin_right - 45:.2f} {self.margin_bottom - 2:.2f} Td "
                f"(Page {page_num} of {total_pages}) Tj ET "
            )

            stream = (" ".join(ops) + " " + footer).encode('latin1', 'replace')
            write_obj(pid, f"<< /Type /Page /Parent {pages_id} 0 R /MediaBox [0 0 {self.page_width:.2f} {self.page_height:.2f}] /Contents {cid} 0 R /Resources << /Font << /F1 {font_f1} 0 R /F2 {font_f2} 0 R /F3 {font_f3} 0 R >> >> >>")
            write_obj(cid, f"<< /Length {len(stream)} >>\nstream\n" + stream.decode('latin1') + "\nendstream")

        startxref = len(doc)
        total_objects = cur_id
        doc.extend(f"xref\n0 {total_objects}\n0000000000 65535 f \n".encode('latin1'))
        for i in range(1, total_objects):
            offset = offsets.get(i, 0)
            doc.extend(f"{offset:010d} 00000 n \n".encode('latin1'))

        doc.extend(f"trailer\n<< /Size {total_objects} /Root {catalog_id} 0 R >>\nstartxref\n{startxref}\n%%EOF\n".encode('latin1'))
        os.makedirs(os.path.dirname(os.path.abspath(self.filename)), exist_ok=True)
        with open(self.filename, 'wb') as f:
            f.write(doc)
        print(f"Generated PDF: {self.filename} ({len(doc)} bytes, {total_pages} pages)")

def build_resume():
    doc = ResumePDF("/Users/priyajayakumar/Documents/test_images/web/my-portfolio/public/downloads/sample.pdf")
    
    # Header
    doc.add_header(
        name="Siva Bala Subramaniam P",
        phone="8870388517",
        email="sivabala.piramuthu@gmail.com",
        linkedin="linkedin.com/in/siva-bala-subramaniam-5a0b52283",
        portfolio="Live App Demo & APK/EXE Download Center Available on Portfolio"
    )

    # Profile Summary
    doc.add_section_title("Profile Summary")
    doc.add_paragraph(
        "Flutter & Full-Stack Developer with 3+ years of experience engineering high-performance cross-platform mobile (Android/iOS), web, and desktop (macOS/Windows) applications using Flutter, Dart, React.js, and Node.js. Experienced in developing production-ready apps published on Google Play Store and Apple App Store. Skilled in building responsive UIs, integrating RESTful APIs, Firebase/Supabase services, and implementing state management using BLoC/Cubit and Redux. Recently architected MineAI - an end-to-end personal AI productivity hub with voice task extraction, multi-store price scraper, biometric encrypted vault, and Node.js microservices. Extensive experience in AI integrations (Gemini, Flowise, OpenAI), offline-first SQLite architectures, CI/CD automation, and desktop productivity software."
    )

    # Core Competencies & Skills
    doc.add_section_title("Core Competencies & Skills")
    doc.add_bullet("Languages & Frameworks: Dart, Flutter, React.js, JavaScript, Node.js (Express), HTML5, CSS3")
    doc.add_bullet("State Management: BLoC, Cubit, Redux, Redux Toolkit, Provider")
    doc.add_bullet("Backend & APIs: Node.js, Express, RESTful APIs, Firebase (Auth, Firestore, Storage, Messaging), Supabase (Auth, PostgreSQL), WebSockets")
    doc.add_bullet("AI & GenAI: Google Gemini API, OpenAI API, Flowise, LangChain, RAG Vector Search, OCR, Voice AI (STT/TTS)")
    doc.add_bullet("Web Scraping & Telemetry: Cheerio, Axios, Playwright, RSS Feeds, Background Daemons, IoT Sensor Streams")
    doc.add_bullet("Databases: SQLite (Sqflite), Supabase PostgreSQL, Firestore, MongoDB, flutter_secure_storage (AES-256)")
    doc.add_bullet("Tools & DevOps: Git, GitHub, Android Studio, VS Code, Firebase CLI, GitHub Actions CI/CD, App Signing & Distribution")
    doc.add_bullet("Other: Desktop Window Orchestration, Flutter Map, Video Streaming (HLS), Package Publishing (pub.dev), Push Notifications")

    # Experience
    doc.add_section_title("Professional Experience")
    doc.add_role_heading("Flutter Developer", "Lumina Datamatics Pvt. Ltd.", "Dec 2025 – Present")
    doc.add_bullet("Developing cross-platform Flutter desktop applications for macOS and Windows focused on eBook publishing workflows.")
    doc.add_bullet("Implemented XML-based content processing, transformation, and conversion pipelines for enterprise publishing formats.")
    doc.add_bullet("Built rich text editing features using CKEditor for structured content creation and editing within desktop interfaces.")
    doc.add_bullet("Designed responsive desktop UI components optimized for large-screen productivity and multi-window workflows.")
    doc.add_bullet("Integrated backend services for content storage, processing, and publishing automation.")
    doc.add_bullet("Managed application distribution through Apple TestFlight and successfully published the macOS application to Apple App Store.")

    doc.add_role_heading("Flutter Developer", "Datayaan Solutions Pvt. Ltd.", "Jul 2023 – Nov 2025")
    doc.add_bullet("Developed high-performance Flutter apps with scalable clean architecture and responsive UI across Android, iOS, and desktop.")
    doc.add_bullet("Built complex UIs using custom widgets, FormBuilder, and Figma-based responsive design tokens.")
    doc.add_bullet("Integrated RESTful APIs and Firebase services (Auth, Firestore, Storage, Messaging, App Distribution) for secure real-time features.")
    doc.add_bullet("Used BLoC/Cubit extensively for modular structure, predictable state transitions, and improved testability.")
    doc.add_bullet("Implemented offline-first architecture using Sqflite with local caching, synchronization, and full CRUD operations.")
    doc.add_bullet("Deployed applications to Google Play Store and TestFlight with automated CI/CD pipelines, versioning, and app signing.")
    doc.add_bullet("Created an AI-powered assistant (Jarvis) integrating Flowise + GPT with full voice support (STT/TTS).")
    doc.add_bullet("Gained experience in React.js (Hooks, Redux Toolkit) and Node.js/MongoDB for full-stack service integrations.")

    # Projects (Featuring MineAI prominently)
    doc.add_section_title("Featured Projects")
    
    doc.add_project_heading("MineAI — All-in-One Personal AI Productivity Hub", "Flutter, Dart, Node.js, Express, Supabase, SQLite, Gemini AI, BLoC", "Cross-Platform: Android APK & Windows Desktop (.exe) | Direct Evaluation on Portfolio")
    doc.add_bullet("Architected a full-featured productivity super-app and desktop application integrated with a Node.js microservice backend.")
    doc.add_bullet("AI Voice Task Extraction: Built hands-free speech-to-text pipeline sending voice notes to Gemini 2.5 Flash, extracting title, category, priority, and due dates directly into local SQLite database with scheduled local alarm notifications.")
    doc.add_bullet("Multi-Store Price Comparison: Engineered real-time parallel web scrapers using Cheerio & Axios across Amazon, Flipkart, and Meesho, calculating best deals, savings margins, and ratings in real-time.")
    doc.add_bullet("City News Engine: Developed boundary-filtered RSS parser for 8 major Indian cities with editorial photo extraction.")
    doc.add_bullet("Encrypted Private Vault: Built biometric FaceID/Fingerprint protected safe using AES-256 client-side encryption.")
    doc.add_bullet("Multimedia Hub: Integrated adaptive HLS video OTT player, multimedia diary with mood poster generation, and budget tracker.")
    doc.add_bullet("Admin Portal: Developed dedicated Flutter Web/Desktop control dashboard for user telemetry, ticket resolution, and system health.")

    doc.add_project_heading("EnExpense — Expense Tracking App", "Flutter, Sqflite, Firebase, BLoC, OCR, CI/CD", "Google Play Store — EnExpense")
    doc.add_bullet("Built an offline-first personal finance app using Sqflite for local persistence and Firestore for cloud sync.")
    doc.add_bullet("Integrated OCR-based receipt scanning and automated category detection to eliminate manual entry friction.")
    doc.add_bullet("Added multi-currency support, configurable reminders, and automated PDF/Excel expense summary reports.")
    doc.add_bullet("Managed Play Store and TestFlight deployments including signing, versioning, and release rollouts.")

    doc.add_project_heading("Yaantrac — Vehicle Tracking Application", "Flutter, BLoC, WebSocket, Flutter Map, Charts", "Google Play Store — Yaantrac")
    doc.add_bullet("Implemented real-time vehicle telemetry tracking using WebSockets and Flutter Map to stream location coordinates.")
    doc.add_bullet("Built geofencing features with entry/exit push alerts, boundary visualization, and event audit logging.")
    doc.add_bullet("Designed trip history screens with custom charts and fleet management dashboards.")

    doc.add_project_heading("E-Book Publishing Desktop Application", "Flutter Desktop (macOS/Windows), Dart, XML, CKEditor", "Apple App Store — macOS")
    doc.add_bullet("Developed cross-platform desktop publishing app supporting XML transformation and rich text editing via CKEditor.")
    doc.add_bullet("Published macOS desktop release to Apple App Store with automated CI/CD code-signing.")

    doc.add_project_heading("Pollution Monitoring App", "Flutter, Firebase, Flutter Map, IoT Sensors", "Google Play Store (Beta)")
    doc.add_bullet("Developed cross-platform IoT app visualizing water, air, and noise pollution telemetry with threshold breach alerts.")

    doc.add_project_heading("AI Developer — Jarvis (Personal Project)", "Flowise, LangChain, RAG, OpenAI API, Flutter", "Render / Cloud")
    doc.add_bullet("Engineered conversational assistant with RAG-enabled PDF knowledge retrieval and speech-driven voice loop.")

    # Education
    doc.add_section_title("Education")
    doc.add_education_row("Anna University — Tirunelveli", "Master of Computer Applications (MCA) — CGPA: 7.3", "Aug 2021 – Jun 2023", "Tirunelveli, India")
    doc.add_education_row("Ambai Arts College — Ambasamudram", "Bachelor of Computer Applications (BCA) — GPA: 7.5", "Jun 2018 – May 2021", "Ambasamudram, India")

    # Achievements
    doc.add_section_title("Achievements & Open Source")
    doc.add_bullet("Currency Picker (pub.dev): Published open-source Flutter package ('currency_pick') for global currency selection with accessibility optimization.")
    doc.add_bullet("Flutter Automation System: Built shell automation tool (setup.sh) reducing project bootstrap time by 80% and enforcing clean architecture.")

    doc.save()

if __name__ == '__main__':
    build_resume()
