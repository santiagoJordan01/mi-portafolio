from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "hoja de vida Santiago Jordan Vargas.pdf"
REGULAR_FONT = Path(r"C:\Windows\Fonts\arial.ttf")
BOLD_FONT = Path(r"C:\Windows\Fonts\arialbd.ttf")

PAGE_WIDTH, PAGE_HEIGHT = fitz.paper_size("a4")
LEFT = 42
RIGHT = PAGE_WIDTH - 42
CONTENT_WIDTH = RIGHT - LEFT


def wrap_text(text, font, size, max_width):
    words = text.split()
    lines = []
    current = ""

    for word in words:
        candidate = f"{current} {word}".strip()
        if not current or font.text_length(candidate, fontsize=size) <= max_width:
            current = candidate
        else:
            lines.append(current)
            current = word

    if current:
        lines.append(current)
    return lines


def generate_resume():
    if not REGULAR_FONT.exists() or not BOLD_FONT.exists():
        raise FileNotFoundError("No se encontraron las fuentes Arial de Windows.")

    doc = fitz.open()
    page = doc.new_page(width=PAGE_WIDTH, height=PAGE_HEIGHT)
    page.insert_font(fontname="ArialRegular", fontfile=str(REGULAR_FONT))
    page.insert_font(fontname="ArialBold", fontfile=str(BOLD_FONT))

    regular = fitz.Font(fontfile=str(REGULAR_FONT))
    bold = fitz.Font(fontfile=str(BOLD_FONT))
    fonts = {
        "regular": ("ArialRegular", regular),
        "bold": ("ArialBold", bold),
    }

    def write(text, x, y, size=9, style="regular", width=CONTENT_WIDTH, leading=None):
        alias, font = fonts[style]
        leading = leading or size * 1.28
        lines = wrap_text(text, font, size, width)
        for line in lines:
            page.insert_text(
                (x, y),
                line,
                fontname=alias,
                fontsize=size,
                color=(0, 0, 0),
            )
            y += leading
        return y

    def section(title, y):
        y += 5
        page.insert_text(
            (LEFT, y),
            title,
            fontname="ArialBold",
            fontsize=10.5,
            color=(0.08, 0.16, 0.26),
        )
        y += 4
        page.draw_line(
            (LEFT, y),
            (RIGHT, y),
            color=(0.55, 0.6, 0.66),
            width=0.6,
        )
        return y + 12

    def bullet(text, y):
        return write(f"- {text}", LEFT + 8, y, size=8.7, width=CONTENT_WIDTH - 8, leading=11)

    def link_line(label, display, uri, y):
        text = f"{label}: {display}"
        page.insert_text(
            (LEFT, y),
            text,
            fontname="ArialRegular",
            fontsize=8.7,
            color=(0, 0, 0),
        )
        text_width = regular.text_length(text, fontsize=8.7)
        page.insert_link(
            {
                "kind": fitz.LINK_URI,
                "from": fitz.Rect(LEFT, y - 9, LEFT + text_width, y + 2),
                "uri": uri,
            }
        )
        return y + 11

    # Encabezado y contacto
    y = 46
    page.insert_text(
        (LEFT, y),
        "SANTIAGO JORDÁN VARGAS",
        fontname="ArialBold",
        fontsize=18,
        color=(0.05, 0.1, 0.17),
    )
    y += 18
    page.insert_text(
        (LEFT, y),
        "Full Stack Developer | Laravel | React | Node.js | Supabase",
        fontname="ArialBold",
        fontsize=10.5,
        color=(0.12, 0.2, 0.3),
    )
    y += 16
    y = link_line(
        "Email",
        "santijordanv@gmail.com",
        "mailto:santijordanv@gmail.com",
        y,
    )
    y = write("Teléfono: +57 322 834 3350", LEFT, y, size=8.7, leading=11)
    y = link_line(
        "LinkedIn",
        "linkedin.com/in/santiago-jordán-vargas-156363246",
        "https://www.linkedin.com/in/santiago-jord%C3%A1n-vargas-156363246/",
        y,
    )
    y = link_line(
        "GitHub",
        "github.com/santiagoJordan01",
        "https://github.com/santiagoJordan01",
        y,
    )

    # Perfil
    y = section("PERFIL PROFESIONAL", y)
    y = write(
        "Desarrollador Full Stack con experiencia en Laravel, React, Node.js, "
        "Supabase, APIs REST, CRM, paneles administrativos e integraciones "
        "empresariales. Experiencia en automatización, roles y permisos, "
        "reporting, procesamiento asíncrono y soluciones full stack.",
        LEFT,
        y,
        size=8.9,
        leading=11.3,
    )

    # Experiencia
    y = section("EXPERIENCIA PROFESIONAL", y)
    y = write(
        "Desarrollador Full Stack PHP | DEUR | Desde 11/2023 hasta Actualidad",
        LEFT,
        y,
        size=9.2,
        style="bold",
        leading=12,
    )
    y = bullet("Desarrollo y mantenimiento de aplicaciones empresariales con Laravel.", y)
    y = bullet("Soporte técnico y funcional, instalaciones POS y capacitación.", y)
    y = bullet("Optimización SQL, mantenimiento evolutivo y soporte de sistemas.", y)
    y += 3
    y = write(
        "Desarrollador Full Stack Freelance | Desde 05/2023 hasta 11/2023",
        LEFT,
        y,
        size=9.2,
        style="bold",
        leading=12,
    )
    y = bullet("Desarrollo de aplicaciones web full stack con Laravel, React y Node.js.", y)
    y = bullet("Implementación de APIs REST, paneles administrativos y sistemas CRUD.", y)
    y = bullet("Desarrollo de soluciones empresariales y automatización de procesos.", y)
    y = bullet("Integración de bases de datos MySQL, MongoDB y Supabase.", y)
    y = bullet("Gestión y despliegue de proyectos con Git, Docker y servicios cloud.", y)

    # Proyectos
    y = section("PROYECTOS DESTACADOS", y)
    projects = [
        (
            "Campañas de Correos MERN | React, Node.js, Express, MySQL, Redis, Bull, Mailjet",
            "Plataforma para campañas masivas con carga CSV, colas de procesamiento asíncrono y monitoreo de estados.",
        ),
        (
            "CRM Empresarial | Laravel, PHP, MySQL",
            "Gestión de usuarios, roles y permisos; exportación de informes en PDF y Excel.",
        ),
        (
            "PhoneColombia | React, Node.js, Supabase",
            "Panel administrativo para contenido multimedia con persistencia y gestión dinámica.",
        ),
        (
            "MERN ToDo | MongoDB, Express, React, Node.js, Docker",
            "Aplicación CRUD con API REST y contenerización para despliegue portable.",
        ),
    ]
    for title, description in projects:
        y = write(title, LEFT, y, size=8.8, style="bold", leading=10.8)
        y = bullet(description, y)
        y += 2

    # Habilidades
    y = section("HABILIDADES TÉCNICAS", y)
    skills = [
        "Backend: Laravel, PHP, Node.js, Express, APIs REST, RBAC",
        "Frontend: React, JavaScript, HTML, CSS, paneles administrativos",
        "Bases de datos: MySQL, MongoDB, Supabase, Redis",
        "Herramientas: Git, GitHub, Docker, Bull, Postman",
    ]
    for skill in skills:
        y = bullet(skill, y)

    # Educación
    y = section("EDUCACIÓN", y)
    education = [
        "Administración de Empresas | Universidad del Valle",
        "Tecnólogo en Análisis y Desarrollo de Software | SENA",
        "Ingeniería de Software (en curso) | Corporación Universitaria Iberoamericana",
    ]
    for item in education:
        y = write(item, LEFT, y, size=8.7, leading=11)

    if y > PAGE_HEIGHT - 28:
        raise RuntimeError(f"El contenido excede una página (posición final: {y:.1f}).")

    doc.set_metadata(
        {
            "title": "Hoja de vida - Santiago Jordán Vargas",
            "author": "Santiago Jordán Vargas",
            "subject": "Full Stack Developer",
            "keywords": "Laravel, React, Node.js, PHP, JavaScript, APIs REST, MySQL, Docker",
        }
    )

    temp_output = OUTPUT.with_suffix(".tmp.pdf")
    doc.save(temp_output, garbage=4, deflate=True, clean=True)
    doc.close()
    temp_output.replace(OUTPUT)


if __name__ == "__main__":
    generate_resume()
