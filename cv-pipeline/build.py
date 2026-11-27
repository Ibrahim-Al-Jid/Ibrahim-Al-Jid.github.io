#!/usr/bin/env python3
"""Render one ATS-safe one-page PDF per CV variant.

content.yaml -> Jinja2 HTML (single column, selectable text, live links)
-> headless Chrome PDF. One page per variant is asserted via pdfinfo if present.
"""
import subprocess
import sys
from pathlib import Path

import yaml
from jinja2 import Template

HERE = Path(__file__).parent
OUT = HERE / "out"

SKILL_LABELS = {
    "languages": "Languages",
    "ai_agents": "AI & agents",
    "data_ml": "Data & ML",
    "web": "Web",
    "infra": "Infrastructure",
    "bi": "BI",
    "fundamentals": "Fundamentals",
}


def main() -> int:
    data = yaml.safe_load((HERE / "content.yaml").read_text(encoding="utf-8"))
    template = Template((HERE / "template.html.j2").read_text(encoding="utf-8"))
    OUT.mkdir(exist_ok=True)

    fonts = "@font-face{font-family:Inter;src:url(fonts/Inter-Regular.woff2)}"
    for name, variant in data["variants"].items():
        html = template.render(
            id=data["identity"],
            v=variant,
            skills=data["skills"],
            skill_labels=SKILL_LABELS,
            projects=data["projects"],
            edu=data["education"],
            languages=data["languages"],
        )
        html_path = OUT / f"ibrahim-hamdy-{name}.html"
        pdf_path = OUT / f"ibrahim-hamdy-{name}.pdf"
        html_path.write_text(html, encoding="utf-8")
        subprocess.run(
            [
                "google-chrome", "--headless", "--disable-gpu", "--no-sandbox",
                "--no-pdf-header-footer",
                f"--print-to-pdf={pdf_path}",
                str(html_path),
            ],
            check=True,
            capture_output=True,
        )
        print("built", pdf_path)
    return 0


if __name__ == "__main__":
    sys.exit(main())
