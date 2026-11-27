# CV pipeline

CV-as-code: one YAML content file + one HTML template → per-track one-page PDFs.

- `content.yaml` — all CV content: shared sections plus per-variant overrides (headline, summary, skill order, project order)
- `template.html.j2` — Jinja2 HTML template (print CSS, letter size)
- `build.py` — renders each variant with Jinja2, then prints to PDF with headless Chrome

## Build

```sh
pip install jinja2 pyyaml
python3 build.py   # writes out/ibrahim-hamdy-*.pdf
```

Then copy the PDFs into `public/cv/` and rebuild the site.
