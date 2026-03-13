// CSS chargé globalement via layout.tsx → globals.css

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <div className="hero">
        <p className="eyebrow">Richard Bélénus</p>
        <div className="heroSymbols">🔨 &thinsp; 🪞</div>
        <h1 className="heroTitle">
          Le Marteau<br />et le Miroir
        </h1>
        <div className="titreSeparator" />
        <p className="subtitle">33 frappes pour se transformer</p>
        <div className="heroIncipit">
          <p>
            Tu tiens un <em>maillet</em>.<br />
            Devant toi, un <em>miroir</em>.
          </p>
        </div>
      </div>

      {/* ═══ PITCH ═══ */}
      <hr className="sep" />
      <section className="section">
        <span className="sectionLabel">Le livre</span>
        <div className="orLine" />

        <p className="pitchIncipit">
          En trente-trois étapes, il t&apos;invite<br />
          à regarder ce que tu évites,<br />
          à frapper ce qui t&apos;enferme,<br />
          à devenir ce que tu es déjà<br />
          sans oser l&apos;incarner.
        </p>

        <div className="pitchBody">
          <p>
            Chaque chapitre agit comme une frappe juste&nbsp;: sur la peur, la honte,
            le contrôle, les loyautés invisibles, les masques que tu croyais être toi.
          </p>
          <p style={{ fontStyle: 'italic', color: 'var(--or-clair)', textAlign: 'center' }}>
            Jusqu&apos;à ce que quelque chose cède.<br />
            Et qu&apos;autre chose naisse.
          </p>
        </div>

        <span className="pitchCoupure" />

        <p className="pitchAuteur">
          Nourri par des traditions initiatiques anciennes et par une expérience intérieure
          vécue, <strong>Richard Bélénus</strong> allie la force du symbole à la justesse
          d&apos;un accompagnement profondément humain.<br /><br />
          Son écriture directe, au «&nbsp;tu&nbsp;» le plus intime, ouvre un passage là
          où d&apos;autres donnent des réponses.
        </p>

        <p className="pitchPublic">
          Il s&apos;adresse à celles et ceux qui sentent qu&apos;un seuil les appelle.<br />
          <span className="secondaire">
            Chercheurs de sens, âmes en transition, esprits en quête de vérité.
          </span>
        </p>

        <div className="pitchQuestion">
          <p>
            Le marteau pèse. Le miroir ne ment pas.<br />
            Reste une question&nbsp;:<br />
            <strong>continuer à fuir… ou entrer vraiment&nbsp;?</strong>
          </p>
        </div>
      </section>

      {/* ═══ LES 4 ACTES ═══ */}
      <hr className="sep" />
      <section className={`section actesSection`}>
        <span className="sectionLabel">Structure</span>
        <div className="orLine" />

        <div className="actesGrid">
          {[
            { emoji: '🪞', titre: 'Acte I — Le Miroir',    desc: 'Voir. Reconnaître. Fissurer.' },
            { emoji: '🔨', titre: 'Acte II — Le Marteau',  desc: 'Sculpter. Frapper. Rompre.' },
            { emoji: '🌊', titre: 'Acte III — La Traversée', desc: 'Intégrer. Écouter. Ajuster.' },
            { emoji: '🔥', titre: "Acte IV — L'Œuvre",     desc: 'Construire. Engager. Incarner.' },
          ].map((acte) => (
            <div key={acte.titre} className="acteItem">
              <span className="acteEmoji">{acte.emoji}</span>
              <span className="acteTitre">{acte.titre}</span>
              <span className="acteDesc">{acte.desc}</span>
            </div>
          ))}
        </div>

        <p className="actesBas">
          Chaque frappe libère la forme prisonnière de ta pierre.<br />
          <span>33 frappes. Une pierre. Toi.</span>
        </p>
      </section>

      {/* ═══ EXTRAIT GRATUIT ═══ */}
      <hr className="sep" />
      <section className="section">
        <div className="extraitCard">
          <h2>✦ EXTRAIT GRATUIT ✦</h2>
          <p>Les 4 premières frappes de l&apos;Acte I — format EPUB</p>

          <div className="extraitChapitres">
            {["1. L'Appel", "2. L'Héritage", "3. Le Masque", "4. La Blessure"].map((ch) => (
              <span key={ch} className="chapitreTag">{ch}</span>
            ))}
          </div>

          <div className="btnGroup">
            <a
              href="https://t.me/le_marteau_et_le_miroir"
              className={`btn btnTelegram`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
              Canal Telegram
            </a>
            <span className="btnDivider">— ou —</span>
            <a
              href="mailto:richardblns@proton.me?subject=Demande%20extrait%20EPUB%20-%20Le%20Marteau%20et%20le%20Miroir"
              className={`btn btnOutline`}
            >
              <EmailIcon />
              Recevoir par email
            </a>
          </div>

          <p className="badgeGratuit">⚡ Gratuit · Sans inscription · Format EPUB</p>
        </div>
      </section>

      {/* ═══ LIVRE COMPLET ═══ */}
      <hr className="sep" />
      <section className={`section achatSection`}>
        <span className="sectionLabel">Le livre complet</span>
        <div className="orLine" />
        <h2>Les 33 frappes</h2>
        <p>Édition originale · Tirage limité</p>
        <div className="btnGroup">
          <a
            href="mailto:richardblns@proton.me?subject=Commande%20-%20Le%20Marteau%20et%20le%20Miroir"
            className={`btn btnPrimary`}
          >
            Obtenir le livre complet
          </a>
        </div>
      </section>

      {/* ═══ CITATION FINALE ═══ */}
      <hr className="sep" />
      <section className={`section citationSection`}>
        <p className="citationFinale">
          Si ce texte t&apos;a touché, ce n&apos;est pas un hasard.<br />
          <span>Certaines pierres savent quand elles doivent être frappées.</span>
        </p>
        <p className="devise">Entre · Frappe · Traverse · Deviens</p>
      </section>

      {/* ═══ CONTACT ═══ */}
      <hr className="sep" />
      <section className={`section contactSection`}>
        <span className="sectionLabel">Contact</span>
        <div className="orLine" />
        <p>Une question ? Une envie d&apos;échanger ?</p>
        <div className="contactLinks">
          <a href="mailto:richardblns@proton.me" className="contactLink">
            richardblns@proton.me
          </a>
          <a
            href="https://t.me/le_marteau_et_le_miroir"
            className={`contactLink contactLinkTelegram`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @le_marteau_et_le_miroir
          </a>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer>
        <p>© Richard Bélénus, 2026 — Tous droits réservés</p>
        <p>« Entre. Frappe. Traverse. Deviens. »</p>
      </footer>
    </>
  )
}

/* ─── Icônes SVG inline ─── */
function TelegramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
