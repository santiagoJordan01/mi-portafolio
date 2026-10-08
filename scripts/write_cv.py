from pathlib import Path

from fpdf import FPDF

OUTPUT = Path(__file__).resolve().parents[1] / "public" / "hoja de vida Santiago Jordan Vargas.pdf"


class Resume(FPDF):
    def section(self, title):
        self.set_x(self.l_margin)
        self.ln(1.5)
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(15, 35, 64)
        self.cell(self.epw, 6, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(15, 35, 64)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(1.6)

    def paragraph(self, text, size=9.5, bold=False, gap=1.2):
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "B" if bold else "", size)
        self.set_text_color(28, 28, 28)
        self.multi_cell(self.epw, 4.3, text)
        self.ln(gap)


def build():
    pdf = Resume(format="A4", unit="mm")
    pdf.set_auto_page_break(auto=False)
    pdf.set_margins(14, 12, 14)
    pdf.add_page()

    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", "B", 16)
    pdf.set_text_color(15, 35, 64)
    pdf.cell(pdf.epw, 7, "Santiago Jordán Vargas", new_x="LMARGIN", new_y="NEXT")

    pdf.paragraph(
        "Desarrollador Full Stack  |  Laravel, React y Node.js  |  Disponible de inmediato",
        size=10.5,
        gap=0.6,
    )
    pdf.paragraph(
        "santijordanv@gmail.com  |  +57 322 834 3350",
        size=9,
        gap=0.2,
    )
    pdf.paragraph(
        "github.com/santiagoJordan01  |  linkedin.com/in/santiago-jordán-vargas-156363246",
        size=9,
        gap=0.2,
    )
    pdf.paragraph(
        "Portafolio: santiagojordan01.github.io/mi-portafolio",
        size=9,
        gap=0.4,
    )

    pdf.section("PERFIL")
    pdf.paragraph(
        "Más de 3 años llevando software de operación a producción: facturación electrónica ante la DIAN, báscula en caja, impresión de tiquetes y envío del tiquete desde el celular. Cubro desarrollo, instalación, despliegue y soporte con quien usa el sistema."
    )

    pdf.section("EXPERIENCIA")
    pdf.paragraph(
        "Desarrollador Full Stack PHP  |  DEUR  |  Noviembre 2023 - Actualidad",
        bold=True,
        gap=0.4,
    )
    pdf.paragraph(
        "Conector que sube la venta del almacén al sistema en la nube y la deja aceptada ante la DIAN, con código de factura (CUFE). Cubre facturas, documentos de compra y nómina electrónica. En la caja, un programa lee la báscula en vivo (venta por kilo desde 10 g y el plato vuelve a cero) y otro imprime el tiquete en esa computadora. En el parqueadero, el celular envía el tiquete y una computadora junto a la impresora lo imprime."
    )
    pdf.paragraph(
        "Desarrollador Full Stack Freelance  |  Mayo 2023 - Noviembre 2023",
        bold=True,
        gap=0.4,
    )
    pdf.paragraph(
        "Aplicaciones a la medida con Laravel, React y Node.js, desde el alcance hasta el despliegue. APIs REST, paneles de administración e integración de MySQL, MongoDB y Supabase."
    )

    pdf.section("PROYECTOS")
    projects = [
        (
            "Campañas de correo  |  React, Node.js, MySQL, Redis, Bull, Mailjet",
            "Carga de destinatarios por archivo y envío en segundo plano, con estado visible de cada campaña.",
        ),
        (
            "CRM empresarial  |  Laravel, MySQL",
            "Clientes, prospectos y permisos por rol, con informes exportados a PDF y Excel.",
        ),
        (
            "PhoneColombia  |  React, Laravel, MySQL",
            "La página pública se actualiza desde un panel, sin publicar el sitio de nuevo por cada promoción.",
        ),
        (
            "Chat de atención  |  Laravel, React, PostgreSQL",
            "Prospectos, citas y conversación en una sola API. El chat exige inicio de sesión.",
        ),
        (
            "Control de horas  |  Next.js, PostgreSQL",
            "Registro de horas por empleado. Una semana aprobada ya no se puede modificar.",
        ),
    ]
    for title, body in projects:
        pdf.paragraph(title, bold=True, gap=0.2)
        pdf.paragraph(body, gap=0.6)

    pdf.section("EDUCACIÓN")
    pdf.paragraph("Ingeniería de Software (en curso)  |  Corporación Universitaria Iberoamericana", gap=0.3)
    pdf.paragraph("Tecnólogo en Análisis y Desarrollo de Software  |  SENA", gap=0.3)
    pdf.paragraph("Administración de Empresas  |  Universidad del Valle", gap=0.4)

    pdf.section("HABILIDADES")
    pdf.paragraph(
        "Laravel, PHP, JavaScript, TypeScript, React, Next.js, Node.js, Express, HTML, CSS, MySQL, PostgreSQL, Redis, Supabase, Docker, Git, APIs REST y control de acceso por roles.",
        gap=0,
    )

    if pdf.page_no() != 1:
        raise SystemExit(f"El CV ocupa {pdf.page_no()} paginas.")
    pdf.output(OUTPUT)
    print(OUTPUT)


if __name__ == "__main__":
    build()
