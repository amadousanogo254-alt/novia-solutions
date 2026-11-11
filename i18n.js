(() => {
  const phraseTranslations = {
    'NOVIA SOLUTIONS | Solutions digitales & accompagnement professionnel': [
      'NOVIA SOLUTIONS | Soluzioni digitali e supporto professionale',
      'NOVIA SOLUTIONS | Digital solutions & professional support',
      'NOVIA SOLUTIONS | Soluciones digitales y acompañamiento profesional',
    ],
    'À propos | NOVIA SOLUTIONS': ['Chi siamo | NOVIA SOLUTIONS', 'About | NOVIA SOLUTIONS', 'Acerca de | NOVIA SOLUTIONS'],
    'Nos services | NOVIA SOLUTIONS': ['I nostri servizi | NOVIA SOLUTIONS', 'Our services | NOVIA SOLUTIONS', 'Nuestros servicios | NOVIA SOLUTIONS'],
    'Formations | NOVIA SOLUTIONS': ['Formazione | NOVIA SOLUTIONS', 'Training | NOVIA SOLUTIONS', 'Formación | NOVIA SOLUTIONS'],
    'Offres & produits | NOVIA SOLUTIONS': ['Offerte e prodotti | NOVIA SOLUTIONS', 'Offers & products | NOVIA SOLUTIONS', 'Ofertas y productos | NOVIA SOLUTIONS'],
    'Prendre rendez-vous | NOVIA SOLUTIONS': ['Prenota un appuntamento | NOVIA SOLUTIONS', 'Book an appointment | NOVIA SOLUTIONS', 'Pedir una cita | NOVIA SOLUTIONS'],
    'Contact | NOVIA SOLUTIONS': ['Contatti | NOVIA SOLUTIONS', 'Contact | NOVIA SOLUTIONS', 'Contacto | NOVIA SOLUTIONS'],
    'Propositions sur mesure | NOVIA SOLUTIONS': ['Proposte su misura | NOVIA SOLUTIONS', 'Custom proposals | NOVIA SOLUTIONS', 'Propuestas a medida | NOVIA SOLUTIONS'],
    'Billetterie et voyages | NOVIA SOLUTIONS': ['Biglietteria e viaggi | NOVIA SOLUTIONS', 'Travel & ticketing | NOVIA SOLUTIONS', 'Billetes y viajes | NOVIA SOLUTIONS'],
    'Démarches administratives | NOVIA SOLUTIONS': ['Pratiche amministrative | NOVIA SOLUTIONS', 'Administrative procedures | NOVIA SOLUTIONS', 'Trámites administrativos | NOVIA SOLUTIONS'],
    'Témoignages | NOVIA SOLUTIONS': ['Testimonianze | NOVIA SOLUTIONS', 'Testimonials | NOVIA SOLUTIONS', 'Testimonios | NOVIA SOLUTIONS'],
    'NOVIA SOLUTIONS accompagne les entreprises avec des solutions sur mesure, des services premium, des rendez-vous et un accompagnement professionnel.': [
      'NOVIA SOLUTIONS affianca le aziende con soluzioni su misura, servizi premium, appuntamenti e supporto professionale.',
      'NOVIA SOLUTIONS supports businesses with tailored solutions, premium services, appointments and professional guidance.',
      'NOVIA SOLUTIONS acompaña a las empresas con soluciones a medida, servicios premium, citas y asesoramiento profesional.',
    ],
    'Accueil': ['Home', 'Home', 'Inicio'],
    'À propos': ['Chi siamo', 'About', 'Acerca de'],
    'Nos services': ['I nostri servizi', 'Our services', 'Nuestros servicios'],
    'Navigation principale': ['Navigazione principale', 'Main navigation', 'Navegación principal'],
    'Services': ['Servizi', 'Services', 'Servicios'],
    'Tous nos services': ['Tutti i nostri servizi', 'All our services', 'Todos nuestros servicios'],
    'Démarches et visas': ['Pratiche e visti', 'Procedures and visas', 'Trámites y visados'],
    'Billetterie et voyages': ['Biglietteria e viaggi', 'Ticketing and travel', 'Billetes y viajes'],
    'Découvrir nos services': ['Scopri i nostri servizi', 'Explore our services', 'Descubre nuestros servicios'],
    'Bamako, Mali': ['Bamako, Mali', 'Bamako, Mali', 'Bamako, Mali'],
    'Monument de l’Indépendance à Bamako, au Mali': ['Monumento all’Indipendenza a Bamako, in Mali', 'Independence Monument in Bamako, Mali', 'Monumento a la Independencia en Bamako, Mali'],
    'Liens rapides': ['Link rapidi', 'Quick links', 'Enlaces rápidos'],
    'FIABILITÉ & TRANSPARENCE': ['AFFIDABILITÀ E TRASPARENZA', 'RELIABILITY & TRANSPARENCY', 'FIABILIDAD Y TRANSPARENCIA'],
    'Face aux arnaques en ligne, nous vous donnons les moyens de vérifier avant de vous engager.': ['Di fronte alle truffe online, vi diamo gli strumenti per verificare prima di impegnarvi.', 'Faced with online scams, we give you the means to verify before you commit.', 'Frente a las estafas en línea, le damos los medios para verificar antes de comprometerse.'],
    'Des contacts vérifiables': ['Contatti verificabili', 'Verifiable contacts', 'Contactos verificables'],
    'Un e-mail et deux numéros de téléphone (Italie et Mali) affichés sur ce site. Appelez-nous ou écrivez-nous sur WhatsApp avant toute démarche.': ['Un’e-mail e due numeri di telefono (Italia e Mali) indicati su questo sito. Chiamateci o scriveteci su WhatsApp prima di ogni passo.', 'One email and two phone numbers (Italy and Mali) shown on this site. Call us or message us on WhatsApp before taking any step.', 'Un correo y dos números de teléfono (Italia y Mali) en este sitio. Llámenos o escríbanos por WhatsApp antes de cualquier trámite.'],
    'Des offres claires': ['Offerte chiare', 'Clear offers', 'Ofertas claras'],
    'Chaque service est détaillé sur le site, avec un devis écrit sur demande. Aucune promesse irréaliste de visa, d’emploi ou de gain garanti.': ['Ogni servizio è descritto sul sito, con preventivo scritto su richiesta. Nessuna promessa irrealistica di visto, lavoro o guadagno garantito.', 'Each service is described on the site, with a written quote on request. No unrealistic promises of visas, jobs or guaranteed earnings.', 'Cada servicio se detalla en el sitio, con presupuesto por escrito bajo petición. Ninguna promesa irreal de visado, empleo o ganancias garantizadas.'],
    'Des rendez-vous confirmés': ['Appuntamenti confermati', 'Confirmed appointments', 'Citas confirmadas'],
    'Vous réservez un créneau en ligne et recevez une invitation par e-mail. Vous pouvez poser toutes vos questions avant de vous décider.': ['Prenotate un orario online e ricevete un invito via e-mail. Potete porre tutte le domande prima di decidere.', 'You book a slot online and receive an email invitation. You can ask all your questions before deciding.', 'Reserva un horario en línea y recibe una invitación por correo. Puede hacer todas sus preguntas antes de decidir.'],
    'Vérifiez que le paiement est demandé uniquement après un devis écrit et accepté.': ['Verificate che il pagamento venga richiesto solo dopo un preventivo scritto e accettato.', 'Check that payment is requested only after a written, accepted quote.', 'Compruebe que el pago se solicita solo tras un presupuesto escrito y aceptado.'],
    'Méfiez-vous de toute personne qui prétend nous représenter via un numéro ou un compte qui n’apparaît pas sur ce site.': ['Diffidate di chiunque dichiari di rappresentarci tramite un numero o un account che non compare su questo sito.', 'Beware of anyone claiming to represent us through a number or account not shown on this site.', 'Desconfíe de quien diga representarnos mediante un número o cuenta que no aparece en este sitio.'],
    'En cas de doute, contactez-nous directement par les coordonnées officielles ci-dessous.': ['In caso di dubbio, contattateci direttamente ai recapiti ufficiali qui sotto.', 'If in doubt, contact us directly using the official details below.', 'En caso de duda, contáctenos directamente con los datos oficiales indicados abajo.'],
    'Nous contacter pour vérifier une information': ['Contattateci per verificare un’informazione', 'Contact us to verify information', 'Contáctenos para verificar una información'],
    'Nos coordonnées': ['I nostri contatti', 'Contact information', 'Nuestros datos de contacto'],
    'Formations': ['Formazione', 'Training', 'Formación'],
    'Offres': ['Offerte', 'Offers', 'Ofertas'],
    'Formules': ['Pacchetti', 'Packages', 'Planes'],
    'Rendez-vous': ['Appuntamenti', 'Appointments', 'Citas'],
    'Contact': ['Contatti', 'Contact', 'Contacto'],
    'Espace client': ['Area clienti', 'Client area', 'Área de clientes'],
    'Prendre rendez-vous': ['Prenota un appuntamento', 'Book an appointment', 'Pedir una cita'],
    'Nous contacter': ['Contattaci', 'Contact us', 'Contáctanos'],
    'Décrire ma démarche': ['Descrivi la tua pratica', 'Describe your case', 'Describe tu trámite'],
    'Décrire mon projet': ['Descrivi il mio progetto', 'Describe my project', 'Describir mi proyecto'],
    'Ouvrir le menu': ['Apri il menu', 'Open menu', 'Abrir el menú'],
    'Revenir à la page précédente': ['Torna alla pagina precedente', 'Go back to the previous page', 'Volver a la página anterior'],
    'Retour': ['Indietro', 'Back', 'Volver'],
    'Navigation': ['Navigazione', 'Navigation', 'Navegación'],
    'Coordonnées': ['Contatti', 'Contact details', 'Datos de contacto'],
    'Email :': ['E-mail:', 'Email:', 'Correo electrónico:'],
    'Tél. :': ['Tel.:', 'Phone:', 'Tel.:'],
    'Téléphone :': ['Telefono:', 'Phone:', 'Teléfono:'],
    '©': ['©', '©', '©'],
    'NOVIA SOLUTIONS. Tous droits réservés.': ['NOVIA SOLUTIONS. Tutti i diritti riservati.', 'NOVIA SOLUTIONS. All rights reserved.', 'NOVIA SOLUTIONS. Todos los derechos reservados.'],
    'Des solutions modernes, claires et efficaces pour accompagner votre croissance.': [
      'Soluzioni moderne, chiare ed efficaci per sostenere la tua crescita.',
      'Modern, clear and effective solutions to support your growth.',
      'Soluciones modernas, claras y eficaces para impulsar tu crecimiento.',
    ],
    'Des solutions modernes, claires et efficaces pour accompagner vos projets.': [
      'Soluzioni moderne, chiare ed efficaci per accompagnare i tuoi progetti.',
      'Modern, clear and effective solutions for your projects.',
      'Soluciones modernas, claras y eficaces para acompañar tus proyectos.',
    ],
    'CONNECTER • INNOVER • RÉUSSIR': ['CONNETTERE • INNOVARE • REALIZZARE', 'CONNECT • INNOVATE • SUCCEED', 'CONECTAR • INNOVAR • LOGRAR'],
    'Vos démarches, voyages et projets,': ['Le tue pratiche, i tuoi viaggi e progetti,', 'Your paperwork, travel and projects,', 'Tus trámites, viajes y proyectos,'],
    'simplifiés.': ['semplificati.', 'made simple.', 'simplificados.'],
    'Des services complets pour vous accompagner à chaque étape.': [
      'Servizi completi per accompagnarti in ogni fase.',
      'Comprehensive services to support you at every step.',
      'Servicios completos para acompañarte en cada etapa.',
    ],
    'Pour les particuliers, les étudiants et les entrepreneurs : démarches administratives et visas, voyages, achat et transport de véhicules, création de sites web et formations.': [
      'Per privati, studenti e imprenditori: pratiche amministrative e visti, viaggi, acquisto e trasporto di veicoli, creazione di siti web e formazione.',
      'For individuals, students and entrepreneurs: administrative procedures and visas, travel, vehicle purchase and transport, website creation and training.',
      'Para particulares, estudiantes y emprendedores: trámites administrativos y visados, viajes, compra y transporte de vehículos, creación de sitios web y formación.',
    ],
    'Assistance et orientation pour vos démarches administratives liées aux visas': [
      'Assistenza e orientamento per le pratiche amministrative relative ai visti',
      'Assistance and guidance for visa-related administrative procedures',
      'Asistencia y orientación para trámites administrativos relacionados con visados',
    ],
    'Rendez-vous consulaires, regroupement familial, orientation des étudiants, comparabilité des diplômes et accompagnement à l’intégration.': [
      'Appuntamenti consolari, ricongiungimento familiare, orientamento agli studenti, comparabilità dei titoli e supporto all’integrazione.',
      'Consular appointments, family reunification, student guidance, qualification comparability and integration support.',
      'Citas consulares, reagrupación familiar, orientación estudiantil, comparabilidad de títulos y apoyo a la integración.',
    ],
    'Découvrir les démarches accompagnées': ['Scopri le pratiche assistite', 'Explore supported procedures', 'Descubre los trámites con acompañamiento'],
    'Achat et transport de véhicules': ['Acquisto e trasporto di veicoli', 'Vehicle purchase and transport', 'Compra y transporte de vehículos'],
    'Commande sur mesure et accompagnement pour comparer des véhicules disponibles sur plusieurs marchés européens.': [
      'Ricerca su misura e supporto per confrontare i veicoli disponibili in diversi mercati europei.',
      'Tailored requests and guidance to compare vehicles available across several European markets.',
      'Búsqueda a medida y asistencia para comparar vehículos disponibles en varios mercados europeos.',
    ],
    'Voir les marchés et commander': ['Esplora i mercati e ordina', 'Explore markets and place an order', 'Ver mercados y solicitar'],
    'Partenariats et développement des ressources humaines': ['Partnership e sviluppo delle risorse umane', 'Partnerships and human resources development', 'Alianzas y desarrollo de recursos humanos'],
    'Découvrez nos propositions de partenariat ainsi que notre accompagnement linguistique et stratégique.': [
      'Scopri le nostre proposte di partnership e il supporto linguistico e strategico.',
      'Discover our partnership proposals and language and strategy support.',
      'Descubre nuestras propuestas de colaboración y nuestro apoyo lingüístico y estratégico.',
    ],
    'Découvrir nos propositions': ['Scopri le nostre proposte', 'Explore our proposals', 'Descubre nuestras propuestas'],
    'Création et développement de sites web': ['Creazione e sviluppo di siti web', 'Website design and development', 'Creación y desarrollo de sitios web'],
    'Choisissez un modèle de départ, puis adaptez votre site à l’image et aux besoins de votre activité.': [
      'Scegli un modello di partenza e adattalo all’immagine e alle esigenze della tua attività.',
      'Choose a starting template, then tailor your website to your business image and needs.',
      'Elige una plantilla inicial y adapta tu sitio a la imagen y las necesidades de tu actividad.',
    ],
    'Voir les modèles et les tarifs': ['Scopri i modelli e i prezzi', 'View templates and pricing', 'Ver modelos y precios'],
    'Nos formations': ['I nostri corsi', 'Our training', 'Nuestra formación'],
    'Découvrez nos formations en langue italienne, l’auto-école italienne et l’informatique pour débutants.': [
      'Scopri i nostri corsi di italiano, la scuola guida italiana e l’informatica per principianti.',
      'Explore our Italian language courses, Italian driving school and computer training for beginners.',
      'Descubre nuestros cursos de italiano, autoescuela italiana e informática para principiantes.',
    ],
    'Voir toutes les formations': ['Vedi tutti i corsi', 'View all training', 'Ver toda la formación'],
    'Une entreprise pensée pour accompagner vos projets avec clarté, rigueur et confiance.': [
      'Un’azienda che accompagna i tuoi progetti con chiarezza, rigore e fiducia.',
      'A company built to support your projects with clarity, rigour and trust.',
      'Una empresa creada para acompañar tus proyectos con claridad, rigor y confianza.',
    ],
    'Accompagnement personnalisé': ['Supporto personalizzato', 'Personalised support', 'Acompañamiento personalizado'],
    'Support administratif et digital': ['Supporto amministrativo e digitale', 'Administrative and digital support', 'Apoyo administrativo y digital'],
    'Réactivité et proximité': ['Reattività e vicinanza', 'Responsiveness and close support', 'Agilidad y cercanía'],
    'Clarté': ['Chiarezza', 'Clarity', 'Claridad'],
    'Des solutions simples, lisibles et adaptées à chaque situation, pour guider les décisions avec confiance.': [
      'Soluzioni semplici, chiare e adatte a ogni situazione per guidare le decisioni con fiducia.',
      'Simple, clear solutions tailored to each situation, helping you make decisions with confidence.',
      'Soluciones sencillas, claras y adaptadas a cada situación para tomar decisiones con confianza.',
    ],
    'Innovation': ['Innovazione', 'Innovation', 'Innovación'],
    'Nous combinons accompagnement humain et présence digitale pour faire grandir vos ambitions.': [
      'Uniamo il supporto umano alla presenza digitale per far crescere le tue ambizioni.',
      'We combine personal support and digital presence to help your ambitions grow.',
      'Combinamos el acompañamiento personal y la presencia digital para impulsar tus ambiciones.',
    ],
    'Confiance': ['Fiducia', 'Trust', 'Confianza'],
    'Une relation durable, respectueuse et professionnelle, fondée sur l’écoute et la fiabilité.': [
      'Un rapporto duraturo, rispettoso e professionale, basato sull’ascolto e sull’affidabilità.',
      'A lasting, respectful and professional relationship built on listening and reliability.',
      'Una relación duradera, respetuosa y profesional, basada en la escucha y la fiabilidad.',
    ],
    'Avec NOVIA SOLUTIONS,': ['Con NOVIA SOLUTIONS,', 'With NOVIA SOLUTIONS,', 'Con NOVIA SOLUTIONS,'],
    'un clic suffit pour découvrir le monde.': ['basta un clic per scoprire il mondo.', 'one click is all it takes to discover the world.', 'un clic basta para descubrir el mundo.'],
    'DÉCOUVREZ NOS SERVICES': ['SCOPRI I NOSTRI SERVIZI', 'EXPLORE OUR SERVICES', 'DESCUBRE NUESTROS SERVICIOS'],
    'ET DONNEZ VIE À VOS PROJETS': ['E DAI VITA AI TUOI PROGETTI', 'AND BRING YOUR PROJECTS TO LIFE', 'Y DA VIDA A TUS PROYECTOS'],
    'PRENDRE RENDEZ-VOUS': ['PRENOTA UN APPUNTAMENTO', 'BOOK AN APPOINTMENT', 'PEDIR UNA CITA'],
    'AVEC NOTRE ÉQUIPE': ['CON IL NOSTRO TEAM', 'WITH OUR TEAM', 'CON NUESTRO EQUIPO'],
    'PROFESSIONNALISME': ['PROFESSIONALITÀ', 'PROFESSIONALISM', 'PROFESIONALIDAD'],
    'ACCOMPAGNEMENT': ['SUPPORTO', 'SUPPORT', 'ACOMPAÑAMIENTO'],
    'ET FIABILITÉ': ['E AFFIDABILITÀ', 'AND RELIABILITY', 'Y FIABILIDAD'],
    'SOLUTIONS': ['SOLUZIONI', 'SOLUTIONS', 'SOLUCIONES'],
    'INNOVANTES': ['INNOVATIVE', 'INNOVATIVE', 'INNOVADORAS'],
    'OUVERTURE': ['APERTURA', 'OPENNESS', 'APERTURA'],
    'SUR LE MONDE': ['SUL MONDO', 'TO THE WORLD', 'AL MUNDO'],
    'Une structure construite pour accompagner particuliers et entreprises vers la réussite.': [
      'Una struttura creata per accompagnare privati e imprese verso il successo.',
      'An organisation built to support individuals and businesses towards success.',
      'Una estructura creada para acompañar a particulares y empresas hacia el éxito.',
    ],
    'Une entreprise construite pour accompagner les entreprises vers la performance.': [
      'Un’azienda creata per accompagnare le imprese verso il successo.',
      'A company built to help businesses achieve high performance.',
      'Una empresa creada para acompañar a las empresas hacia el éxito.',
    ],
    'NOVIA SOLUTIONS est une structure pensée pour aider les entreprises à clarifier leur stratégie, améliorer leur présence digitale et développer des solutions concrètes, efficaces et durables.': [
      'NOVIA SOLUTIONS aiuta le imprese a definire la propria strategia, migliorare la presenza digitale e sviluppare soluzioni concrete, efficaci e durature.',
      'NOVIA SOLUTIONS helps businesses clarify their strategy, improve their digital presence and develop practical, effective and lasting solutions.',
      'NOVIA SOLUTIONS ayuda a las empresas a definir su estrategia, mejorar su presencia digital y desarrollar soluciones concretas, eficaces y duraderas.',
    ],
    'Notre approche repose sur la compréhension des besoins réels de nos clients, l’analyse claire des opportunités et la mise en place d’actions sur mesure. Nous croyons en un accompagnement humain, transparent et orienté résultats.': [
      'Il nostro approccio si basa sulla comprensione delle reali esigenze dei clienti, sull’analisi delle opportunità e su interventi su misura. Crediamo in un supporto umano, trasparente e orientato ai risultati.',
      'Our approach is based on understanding our clients’ real needs, clearly assessing opportunities and taking tailored action. We believe in human, transparent and results-driven support.',
      'Nuestro enfoque se basa en comprender las necesidades reales de nuestros clientes, analizar las oportunidades con claridad y poner en marcha acciones a medida. Creemos en un acompañamiento humano, transparente y orientado a resultados.',
    ],
    'Notre mission': ['La nostra missione', 'Our mission', 'Nuestra misión'],
    'Transformer les défis en solutions concrètes.': ['Trasformare le sfide in soluzioni concrete.', 'Turning challenges into practical solutions.', 'Transformar los retos en soluciones concretas.'],
    'Mission': ['Missione', 'Mission', 'Misión'],
    'Aider les entreprises à avancer avec clarté, efficacité et confiance dans un environnement digital en constante évolution.': [
      'Aiutare le imprese a progredire con chiarezza, efficacia e fiducia in un ambiente digitale in continua evoluzione.',
      'Helping businesses move forward with clarity, efficiency and confidence in a constantly changing digital environment.',
      'Ayudar a las empresas a avanzar con claridad, eficacia y confianza en un entorno digital en constante evolución.',
    ],
    'Vision': ['Visione', 'Vision', 'Visión'],
    'Devenir un partenaire de confiance pour les entreprises qui souhaitent croître de manière durable et intelligente.': [
      'Diventare un partner affidabile per le imprese che desiderano crescere in modo sostenibile e strategico.',
      'To become a trusted partner for businesses seeking sustainable and smart growth.',
      'Convertirnos en un socio de confianza para las empresas que desean crecer de forma sostenible e inteligente.',
    ],
    'Valeurs': ['Valori', 'Values', 'Valores'],
    'Professionnalisme, transparence, écoute, qualité et engagement pour chaque client.': [
      'Professionalità, trasparenza, ascolto, qualità e impegno per ogni cliente.',
      'Professionalism, transparency, listening, quality and commitment to every client.',
      'Profesionalidad, transparencia, escucha, calidad y compromiso con cada cliente.',
    ],
    'Notre équipe': ['Il nostro team', 'Our team', 'Nuestro equipo'],
    'Une équipe polyvalente, engagée et orientée service.': ['Un team versatile, impegnato e attento al servizio.', 'A versatile, committed and service-focused team.', 'Un equipo versátil, comprometido y orientado al servicio.'],
    'FONDATEUR': ['FONDATORE', 'FOUNDER', 'FUNDADOR'],
    'Il apporte à NOVIA SOLUTIONS un sens aigu de la rigueur, de la stratégie et de l’accompagnement.': [
      'Apporta a NOVIA SOLUTIONS rigore, visione strategica e capacità di supporto.',
      'He brings rigour, strategic insight and a strong commitment to support NOVIA SOLUTIONS.',
      'Aporta rigor, visión estratégica y capacidad de acompañamiento a NOVIA SOLUTIONS.',
    ],
    'Conseil et coordination des projets': ['Consulenza e coordinamento dei progetti', 'Project consulting and coordination', 'Consultoría y coordinación de proyectos'],
    'Consultant et coordinateur de nos projets.': ['Consulente e coordinatore dei nostri progetti.', 'Consultant and coordinator of our projects.', 'Consultor y coordinador de nuestros proyectos.'],
    'ans d’expérience': ['anni di esperienza', 'years of experience', 'años de experiencia'],
    'clients accompagnés': ['clienti assistiti', 'clients supported', 'clientes acompañados'],
    'clients satisfaits': ['clienti soddisfatti', 'satisfied clients', 'clientes satisfechos'],
    'réponse moyenne': ['tempo medio di risposta', 'average response time', 'tiempo medio de respuesta'],
    'Nos compétences': ['Le nostre competenze', 'Our expertise', 'Nuestras competencias'],
    'Des compétences diversifiées pour répondre à des besoins variés.': ['Competenze diversificate per rispondere a esigenze diverse.', 'A broad range of expertise to meet diverse needs.', 'Competencias diversas para responder a distintas necesidades.'],
    'Stratégie': ['Strategia', 'Strategy', 'Estrategia'],
    'Analyse de marché, plan d’action et développement durable.': ['Analisi di mercato, piano d’azione e sviluppo sostenibile.', 'Market analysis, action plans and sustainable development.', 'Análisis de mercado, plan de acción y desarrollo sostenible.'],
    'Web': ['Web', 'Web', 'Web'],
    'Sites vitrines, boutiques, landing pages et solutions digitales.': ['Siti vetrina, negozi online, landing page e soluzioni digitali.', 'Showcase websites, online stores, landing pages and digital solutions.', 'Webs corporativas, tiendas online, páginas de destino y soluciones digitales.'],
    'Accompagnement': ['Supporto', 'Guidance', 'Acompañamiento'],
    'Conseils opérationnels pour améliorer la performance globale.': ['Consulenza operativa per migliorare le prestazioni complessive.', 'Practical advice to improve overall performance.', 'Asesoramiento operativo para mejorar el rendimiento global.'],
    'Besoin d’un partenaire fiable pour votre croissance ?': ['Cerchi un partner affidabile per la tua crescita?', 'Looking for a reliable partner for your growth?', '¿Necesitas un socio de confianza para crecer?'],
    'Nous contacter': ['Contattaci', 'Contact us', 'Contáctanos'],
    'Nos services': ['I nostri servizi', 'Our services', 'Nuestros servicios'],
    'Des prestations pensées pour un développement simple, solide et durable.': ['Servizi progettati per una crescita semplice, solida e duratura.', 'Services designed for straightforward, solid and sustainable growth.', 'Servicios pensados para un crecimiento sencillo, sólido y sostenible.'],
    'Marketing digital et stratégie en ligne': ['Marketing digitale e strategia online', 'Digital marketing and online strategy', 'Marketing digital y estrategia online'],
    'Diagnostic, plan marketing et recommandations concrètes pour améliorer votre visibilité et vos conversions.': ['Analisi, piano marketing e consigli concreti per migliorare visibilità e conversioni.', 'Audits, marketing plans and practical recommendations to improve visibility and conversions.', 'Diagnóstico, plan de marketing y recomendaciones concretas para mejorar tu visibilidad y conversión.'],
    'Nous aidons les entreprises à développer leurs solutions en ligne à l’international, avec une attention particulière aux réalités et aux opportunités des marchés africains.': ['Aiutiamo le imprese a sviluppare soluzioni online a livello internazionale, con particolare attenzione alle realtà e alle opportunità dei mercati africani.', 'We help businesses develop online solutions internationally, with a particular focus on the realities and opportunities of African markets.', 'Ayudamos a las empresas a desarrollar soluciones en línea a nivel internacional, prestando especial atención a la realidad y las oportunidades de los mercados africanos.'],
    'Formule personnalisable dès 50 €': ['Formula personalizzabile da 50 €', 'Customisable plan from €50', 'Plan personalizable desde 50 €'],
    'Formule personnalisable dès 300 €': ['Formula personalizzabile da 300 €', 'Customisable plan from €300', 'Plan personalizable desde 300 €'],
    'Dès 300 €': ['Da 300 €', 'From €300', 'Desde 300 €'],
    'Vous pouvez proposer un budget à partir de 300 €. Ce montant est indicatif et ne garantit pas la réalisation d’un site complet : le périmètre et le devis seront définis ensemble selon vos besoins.': ['Puoi proporre un budget a partire da 300 €. L’importo è indicativo e non garantisce la realizzazione di un sito completo: definiremo insieme ambito e preventivo in base alle tue esigenze.', 'You can suggest a budget from €300. This is indicative and does not guarantee a complete website; scope and pricing will be agreed together based on your needs.', 'Puedes proponer un presupuesto desde 300 €. Es orientativo y no garantiza un sitio completo: definiremos juntos el alcance y el presupuesto según tus necesidades.'],
    'Demander un devis': ['Richiedi un preventivo', 'Request a quote', 'Solicitar presupuesto'],
    'Prendre rendez-vous': ['Prenota un appuntamento', 'Book an appointment', 'Pedir una cita'],
    'Développement web': ['Sviluppo web', 'Web development', 'Desarrollo web'],
    'Création de sites vitrines, sites professionnels, landing pages et interfaces performantes.': ['Creazione di siti vetrina e professionali, landing page e interfacce performanti.', 'Showcase and business websites, landing pages and high-performing interfaces.', 'Creación de webs corporativas y profesionales, páginas de destino e interfaces de alto rendimiento.'],
    'Voir les modèles': ['Scopri i modelli', 'View templates', 'Ver modelos'],
    'Solutions e-commerce': ['Soluzioni e-commerce', 'E-commerce solutions', 'Soluciones de comercio electrónico'],
    'Configuration et optimisation de boutique en ligne, parcours d’achat et stimulation des ventes.': ['Configurazione e ottimizzazione del negozio online, del processo d’acquisto e delle vendite.', 'Online store setup and optimisation, purchasing journeys and sales growth.', 'Configuración y optimización de tiendas online, procesos de compra e impulso de ventas.'],
    'Partenariats et accompagnement': ['Partnership e supporto', 'Partnerships and guidance', 'Colaboraciones y acompañamiento'],
    'Propositions de partenariats, assistance linguistique et accompagnement stratégique adaptés à votre projet.': ['Proposte di partnership, supporto linguistico e consulenza strategica su misura.', 'Partnership proposals, language assistance and strategic guidance tailored to your project.', 'Propuestas de colaboración, asistencia lingüística y acompañamiento estratégico adaptados a tu proyecto.'],
    'Sur mesure': ['Su misura', 'Tailored', 'A medida'],
    'Découvrir': ['Scopri', 'Discover', 'Descubrir'],
    'Achat et transport de véhicules': ['Acquisto e trasporto di veicoli', 'Vehicle purchase and transport', 'Compra y transporte de vehículos'],
    'Décrivez le véhicule souhaité et comparez des annonces sur des marchés automobiles européens.': ['Descrivi il veicolo che cerchi e confronta gli annunci dei mercati automobilistici europei.', 'Describe the vehicle you want and compare listings across European markets.', 'Describe el vehículo que buscas y compara anuncios de mercados automovilísticos europeos.'],
    'Commande sur mesure': ['Richiesta su misura', 'Tailored request', 'Solicitud a medida'],
    'Voir les marchés': ['Esplora i mercati', 'Explore markets', 'Ver mercados'],
    'Pack sur mesure': ['Pacchetto su misura', 'Tailored package', 'Paquete a medida'],
    'Un accompagnement complet adapté à votre structure, vos objectifs et votre rythme de travail.': ['Un supporto completo adatto alla tua organizzazione, ai tuoi obiettivi e ai tuoi ritmi di lavoro.', 'Comprehensive support tailored to your organisation, goals and working pace.', 'Acompañamiento integral adaptado a tu organización, objetivos y ritmo de trabajo.'],
    'Sur devis': ['Su preventivo', 'By quote', 'A consultar'],
    'Support & suivi': ['Supporto e assistenza', 'Support & follow-up', 'Soporte y seguimiento'],
    'Un suivi continu pour ajuster, améliorer et sécuriser votre performance digitale.': ['Un supporto continuo per adeguare, migliorare e proteggere le tue prestazioni digitali.', 'Ongoing support to refine, improve and secure your digital performance.', 'Seguimiento continuo para ajustar, mejorar y asegurar tu rendimiento digital.'],
    'Méthode de travail': ['Metodo di lavoro', 'How we work', 'Método de trabajo'],
    'Un cadre clair pour réduire les risques et accélérer la mise en œuvre.': ['Un processo chiaro per ridurre i rischi e accelerare l’attuazione.', 'A clear framework to reduce risks and speed up implementation.', 'Un marco claro para reducir riesgos y acelerar la implementación.'],
    'Diagnostic': ['Analisi', 'Assessment', 'Diagnóstico'],
    'Nous identifions les besoins, les points de friction et les opportunités.': ['Individuiamo le esigenze, gli ostacoli e le opportunità.', 'We identify needs, obstacles and opportunities.', 'Identificamos necesidades, obstáculos y oportunidades.'],
    'Proposition': ['Proposta', 'Proposal', 'Propuesta'],
    'Nous vous présentons un plan précis avec recommandations, livrables et délais.': ['Presentiamo un piano dettagliato con raccomandazioni, risultati attesi e scadenze.', 'We present a clear plan with recommendations, deliverables and timelines.', 'Presentamos un plan claro con recomendaciones, entregables y plazos.'],
    'Réalisation': ['Realizzazione', 'Delivery', 'Ejecución'],
    'Nous mettons en œuvre la solution avec un suivi régulier et un accès simple.': ['Realizziamo la soluzione con aggiornamenti regolari e un accesso semplice.', 'We implement the solution with regular follow-up and straightforward access.', 'Implementamos la solución con seguimiento periódico y acceso sencillo.'],
    'Optimisation': ['Ottimizzazione', 'Optimisation', 'Optimización'],
    'Nous ajustons, mesurons et améliorons le résultat pour sécuriser la performance.': ['Adeguiamo, misuriamo e miglioriamo i risultati per consolidare le prestazioni.', 'We refine, measure and improve outcomes to sustain performance.', 'Ajustamos, medimos y mejoramos los resultados para consolidar el rendimiento.'],
    'FAQ services': ['Domande frequenti sui servizi', 'Services FAQ', 'Preguntas frecuentes sobre servicios'],
    'Les questions les plus fréquentes.': ['Le domande più frequenti.', 'Frequently asked questions.', 'Las preguntas más frecuentes.'],
    'Combien de temps dure un projet ?': ['Quanto dura un progetto?', 'How long does a project take?', '¿Cuánto dura un proyecto?'],
    'Le délai dépend de la complexité du besoin. Nous vous proposons un planning précis avant le lancement.': ['I tempi dipendono dalla complessità delle esigenze. Proponiamo un calendario dettagliato prima dell’avvio.', 'Timing depends on the complexity of your needs. We provide a clear schedule before starting.', 'El plazo depende de la complejidad de las necesidades. Proponemos un calendario detallado antes de empezar.'],
    'Peut-on personnaliser la prestation ?': ['È possibile personalizzare il servizio?', 'Can the service be customised?', '¿Se puede personalizar el servicio?'],
    'Oui. Chaque service peut être adapté selon le contexte, le budget et les objectifs de votre entreprise.': ['Sì. Ogni servizio può essere adattato al contesto, al budget e agli obiettivi della tua azienda.', 'Yes. Each service can be tailored to your business context, budget and goals.', 'Sí. Cada servicio puede adaptarse al contexto, presupuesto y objetivos de tu empresa.'],
    'Proposez-vous un suivi après livraison ?': ['Offrite assistenza dopo la consegna?', 'Do you provide support after delivery?', '¿Ofrecen seguimiento después de la entrega?'],
    'Oui. Nous assurons un accompagnement et un support de suivi selon le format choisi.': ['Sì. Offriamo supporto e assistenza continuativa secondo la formula scelta.', 'Yes. We provide ongoing guidance and support according to the selected plan.', 'Sí. Ofrecemos acompañamiento y soporte según la modalidad elegida.'],
    'Nos formations': ['I nostri corsi', 'Our training', 'Nuestra formación'],
    'Apprenez à votre rythme, avec un accompagnement adapté.': ['Impara al tuo ritmo con un supporto su misura.', 'Learn at your own pace with tailored support.', 'Aprende a tu ritmo con un acompañamiento adaptado.'],
    'Langue italienne, conduite et informatique : choisissez la formation qui correspond à votre projet et contactez-nous pour en connaître les modalités.': ['Lingua italiana, guida e informatica: scegli il corso adatto al tuo progetto e contattaci per conoscere le modalità.', 'Italian, driving and computing: choose the training that suits your goals and contact us for details.', 'Italiano, conducción e informática: elige la formación que se ajuste a tu proyecto y consúltanos las condiciones.'],
    'Mobilité': ['Mobilità', 'Mobility', 'Movilidad'],
    'Auto-école italienne': ['Scuola guida italiana', 'Italian driving school', 'Autoescuela italiana'],
    'Un programme progressif pour gagner en autonomie en Italie, avec un accompagnement clair et un suivi adapté à votre rythme.': ['Un programma graduale per acquisire autonomia in Italia, con supporto chiaro e assistenza al tuo ritmo.', 'A step-by-step programme to build independence in Italy, with clear guidance at your own pace.', 'Un programa progresivo para ganar autonomía en Italia, con orientación clara y seguimiento a tu ritmo.'],
    'Apprentissage progressif': ['Apprendimento graduale', 'Step-by-step learning', 'Aprendizaje progresivo'],
    'Accompagnement personnalisé': ['Supporto personalizzato', 'Personalised guidance', 'Acompañamiento personalizado'],
    '60 € par mois · PayPal ou espèces': ['60 € al mese · PayPal o contanti', '€60 per month · PayPal or cash', '60 € al mes · PayPal o efectivo'],
    'Se renseigner': ['Chiedi informazioni', 'Enquire', 'Solicitar información'],
    'Langues': ['Lingue', 'Languages', 'Idiomas'],
    'Apprentissage de la langue italienne': ['Corso di lingua italiana', 'Italian language learning', 'Aprendizaje del italiano'],
    'Vous êtes déjà en Italie ou préparez votre projet ? Nous vous orientons vers un cursus adapté pour progresser en italien.': ['Sei già in Italia o stai preparando il tuo progetto? Ti aiutiamo a trovare un percorso adatto per migliorare il tuo italiano.', 'Already in Italy or planning a move? We can guide you towards a course suited to your Italian learning goals.', '¿Ya estás en Italia o preparas tu proyecto? Te orientamos hacia un curso adecuado para mejorar tu italiano.'],
    'Parcours adapté à votre niveau et à vos objectifs': ['Percorso adatto al tuo livello e ai tuoi obiettivi', 'A course tailored to your level and goals', 'Itinerario adaptado a tu nivel y objetivos'],
    'Accompagnement pour progresser à votre rythme': ['Supporto per progredire al tuo ritmo', 'Guidance to progress at your own pace', 'Acompañamiento para avanzar a tu ritmo'],
    'Modalités à définir selon votre besoin': ['Modalità da definire in base alle tue esigenze', 'Details to be agreed according to your needs', 'Condiciones a definir según tus necesidades'],
    'Informatique · débutants': ['Informatica · principianti', 'Computing · beginners', 'Informática · principiantes'],
    'Initiation à l’informatique': ['Introduzione all’informatica', 'Introduction to computing', 'Introducción a la informática'],
    'Les bases pour prendre en main un ordinateur et utiliser les outils numériques du quotidien, même sans expérience préalable.': ['Le basi per usare un computer e gli strumenti digitali quotidiani, anche senza esperienza.', 'Learn the basics of using a computer and everyday digital tools, even with no prior experience.', 'Aprende a usar un ordenador y las herramientas digitales cotidianas, incluso sin experiencia previa.'],
    'Ordinateur, clavier, souris et gestion des fichiers': ['Computer, tastiera, mouse e gestione dei file', 'Computer, keyboard, mouse and file management', 'Ordenador, teclado, ratón y gestión de archivos'],
    'Premiers pas sur Windows et bonnes pratiques': ['Primi passi con Windows e buone pratiche', 'Getting started with Windows and good practices', 'Primeros pasos con Windows y buenas prácticas'],
    'Internet, e-mail et sécurité en ligne': ['Internet, e-mail e sicurezza online', 'Internet, email and online safety', 'Internet, correo electrónico y seguridad en línea'],
    'Bureautique : Word, Excel et PowerPoint': ['Office: Word, Excel e PowerPoint', 'Office software: Word, Excel and PowerPoint', 'Ofimática: Word, Excel y PowerPoint'],
    'Découvrez les principales applications bureautiques et apprenez à les utiliser pour vos besoins personnels ou professionnels.': ['Scopri le principali applicazioni per l’ufficio e impara a usarle per esigenze personali o professionali.', 'Discover key office applications and learn how to use them for personal or professional needs.', 'Descubre las principales aplicaciones ofimáticas y aprende a utilizarlas para tus necesidades personales o profesionales.'],
    'Rédiger et mettre en forme des documents': ['Scrivere e formattare documenti', 'Write and format documents', 'Redactar y dar formato a documentos'],
    'Créer des tableaux et utiliser les formules de base': ['Creare tabelle e usare le formule di base', 'Create spreadsheets and use basic formulas', 'Crear hojas de cálculo y usar fórmulas básicas'],
    'Préparer des présentations simples': ['Preparare presentazioni semplici', 'Prepare simple presentations', 'Preparar presentaciones sencillas'],
    'Vous ne savez pas quelle formation choisir ?': ['Non sai quale corso scegliere?', 'Not sure which course to choose?', '¿No sabes qué formación elegir?'],
    'Présentez-nous votre objectif : nous vous aiderons à trouver le parcours adapté.': ['Parlaci del tuo obiettivo: ti aiuteremo a trovare il percorso giusto.', 'Tell us your goal and we will help you find the right course.', 'Cuéntanos tu objetivo y te ayudaremos a encontrar el itinerario adecuado.'],
    'Contacter NOVIA SOLUTIONS': ['Contatta NOVIA SOLUTIONS', 'Contact NOVIA SOLUTIONS', 'Contactar con NOVIA SOLUTIONS'],
    'Offres & produits': ['Offerte e prodotti', 'Offers & products', 'Ofertas y productos'],
    'Des formules flexibles pour démarrer, développer ou booster votre activité.': ['Formule flessibili per avviare, sviluppare o far crescere la tua attività.', 'Flexible plans to start, grow or boost your business.', 'Planes flexibles para iniciar, desarrollar o impulsar tu actividad.'],
    'Essentielle': ['Essenziale', 'Essential', 'Esencial'],
    'Audit initial': ['Analisi iniziale', 'Initial audit', 'Auditoría inicial'],
    'Recommandations claires': ['Raccomandazioni chiare', 'Clear recommendations', 'Recomendaciones claras'],
    'Support de base': ['Supporto di base', 'Basic support', 'Soporte básico'],
    'Choisir cette formule': ['Scegli questo piano', 'Choose this plan', 'Elegir este plan'],
    'Populaire': ['Popolare', 'Popular', 'Popular'],
    'Professionnelle': ['Professionale', 'Professional', 'Profesional'],
    'Dès 50 €': ['A partire da 50 €', 'From €50', 'Desde 50 €'],
    'Accompagnement complet': ['Supporto completo', 'Full support', 'Acompañamiento integral'],
    'Livrables détaillés': ['Risultati dettagliati', 'Detailed deliverables', 'Entregables detallados'],
    'Suivi prioritaire': ['Assistenza prioritaria', 'Priority follow-up', 'Seguimiento prioritario'],
    'Votre budget (€)': ['Il tuo budget (€)', 'Your budget (€)', 'Tu presupuesto (€)'],
    'Premium': ['Premium', 'Premium', 'Premium'],
    'Stratégie avancée': ['Strategia avanzata', 'Advanced strategy', 'Estrategia avanzada'],
    'Site ou solution clé en main': ['Sito o soluzione chiavi in mano', 'Turnkey website or solution', 'Sitio o solución llave en mano'],
    'Optimisation continue': ['Ottimizzazione continua', 'Ongoing optimisation', 'Optimización continua'],
    'par mois': ['al mese', 'per month', 'al mes'],
    'Paiement via PayPal ou cash': ['Pagamento tramite PayPal o contanti', 'Pay by PayPal or cash', 'Pago por PayPal o en efectivo'],
    'Payer maintenant': ['Paga ora', 'Pay now', 'Pagar ahora'],
    'La formule Essentielle est proposée au prix fixe de 35 €. Pour les formules Professionnelle et Premium, indiquez votre budget à partir respectivement de 50 € et 100 €. Ces montants sont indicatifs : nous confirmerons avec vous les prestations adaptées avant toute commande. Aucun paiement n’est effectué depuis cette sélection.': [
      'Il piano Essenziale ha un prezzo fisso di 35 €. Per i piani Professionale e Premium, indica un budget minimo rispettivamente di 50 € e 100 €. Gli importi sono indicativi: confermeremo con te i servizi adatti prima di ogni ordine. Questa selezione non comporta alcun pagamento.',
      'The Essential plan costs a fixed €35. For the Professional and Premium plans, enter a budget starting at €50 and €100 respectively. These amounts are indicative; we will confirm suitable services with you before any order. No payment is taken here.',
      'El plan Esencial tiene un precio fijo de 35 €. Para los planes Profesional y Premium, indica un presupuesto mínimo de 50 € y 100 €, respectivamente. Los importes son orientativos: confirmaremos contigo los servicios adecuados antes de cualquier pedido. Esta selección no implica ningún pago.',
    ],
    'Paiement sécurisé': ['Pagamento sicuro', 'Secure payment', 'Pago seguro'],
    'Paiement digital NOVIA SOLUTIONS': ['Pagamento digitale NOVIA SOLUTIONS', 'NOVIA SOLUTIONS digital payment', 'Pago digital de NOVIA SOLUTIONS'],
    'Service': ['Servizio', 'Service', 'Servicio'],
    'Numéro de téléphone': ['Numero di telefono', 'Phone number', 'Número de teléfono'],
    'Envoyer le code SMS': ['Invia codice SMS', 'Send SMS code', 'Enviar código SMS'],
    'SMS envoyé': ['SMS inviato', 'SMS sent', 'SMS enviado'],
    'Un code de sécurité a été envoyé à votre numéro.': ['Un codice di sicurezza è stato inviato al tuo numero.', 'A security code has been sent to your number.', 'Se ha enviado un código de seguridad a tu número.'],
    'Code de sécurité': ['Codice di sicurezza', 'Security code', 'Código de seguridad'],
    'Valider le paiement': ['Conferma il pagamento', 'Confirm payment', 'Confirmar el pago'],
    'Paiement validé': ['Pagamento confermato', 'Payment confirmed', 'Pago confirmado'],
    'Le règlement pour': ['Il pagamento per', 'Payment for', 'El pago de'],
    'votre service': ['il tuo servizio', 'your service', 'tu servicio'],
    'a bien été confirmé.': ['è stato confermato.', 'has been confirmed.', 'se ha confirmado.'],
    'Montant :': ['Importo:', 'Amount:', 'Importe:'],
    'Comparatif': ['Confronto', 'Comparison', 'Comparativa'],
    'Choisissez la formule la plus adaptée à votre besoin.': ['Scegli il piano più adatto alle tue esigenze.', 'Choose the plan that best suits your needs.', 'Elige el plan que mejor se adapte a tus necesidades.'],
    'Fonctionnalités': ['Funzionalità', 'Features', 'Funciones'],
    'Budget indicatif': ['Budget indicativo', 'Indicative budget', 'Presupuesto orientativo'],
    '35 € fixe': ['35 € fissi', 'Fixed €35', '35 € fijo'],
    'Dès 50 €, à définir': ['Da 50 €, da concordare', 'From €50, to be agreed', 'Desde 50 €, a definir'],
    'Dès 100 €, à définir': ['Da 100 €, da concordare', 'From €100, to be agreed', 'Desde 100 €, a definir'],
    'Consultation initiale': ['Consulenza iniziale', 'Initial consultation', 'Consulta inicial'],
    'Oui': ['Sì', 'Yes', 'Sí'],
    'Livrables détaillés': ['Risultati dettagliati', 'Detailed deliverables', 'Entregables detallados'],
    'Partiel': ['Parziale', 'Partial', 'Parcial'],
    'Support prioritaire': ['Supporto prioritario', 'Priority support', 'Soporte prioritario'],
    'Non': ['No', 'No', 'No'],
    'Suivi et optimisation': ['Assistenza e ottimizzazione', 'Follow-up and optimisation', 'Seguimiento y optimización'],
    'Base': ['Base', 'Basic', 'Básico'],
    'Complet': ['Completo', 'Full', 'Completo'],
    'Autres offres': ['Altre offerte', 'Other offers', 'Otras ofertas'],
    'Des solutions pour des besoins spécifiques.': ['Soluzioni per esigenze specifiche.', 'Solutions for specific needs.', 'Soluciones para necesidades específicas.'],
    'Abonnement mensuel': ['Abbonamento mensile', 'Monthly subscription', 'Suscripción mensual'],
    'Budget personnalisable dès 50 €': ['Budget personalizzabile da 50 €', 'Customisable budget from €50', 'Presupuesto personalizable desde 50 €'],
    'Un accompagnement régulier pour les entreprises en croissance.': ['Supporto regolare per le imprese in crescita.', 'Ongoing support for growing businesses.', 'Acompañamiento continuo para empresas en crecimiento.'],
    'Abonnement annuel': ['Abbonamento annuale', 'Annual subscription', 'Suscripción anual'],
    'Une solution plus avantageuse pour un suivi continu.': ['Una soluzione più conveniente per un supporto continuativo.', 'A better-value option for ongoing support.', 'Una opción más ventajosa para un seguimiento continuo.'],
    'Audit & consultation': ['Analisi e consulenza', 'Audit & consultation', 'Auditoría y consulta'],
    'Un diagnostic stratégique pour clarifier les points de blocage.': ['Un’analisi strategica per chiarire i punti critici.', 'A strategic assessment to clarify obstacles.', 'Un diagnóstico estratégico para aclarar los obstáculos.'],
    'Rendez-vous': ['Appuntamento', 'Appointment', 'Cita'],
    'Réservez un créneau avec notre équipe.': ['Prenota un appuntamento con il nostro team.', 'Book a time slot with our team.', 'Reserva un horario con nuestro equipo.'],
    'Disponibilités': ['Disponibilità', 'Availability', 'Disponibilidad'],
    'Choisissez une date': ['Scegli una data', 'Choose a date', 'Elige una fecha'],
    'Sélectionnez un jour ouvré pour afficher les créneaux proposés.': ['Seleziona un giorno lavorativo per visualizzare gli orari disponibili.', 'Select a weekday to view available time slots.', 'Selecciona un día laborable para ver los horarios disponibles.'],
    'Mois précédent': ['Mese precedente', 'Previous month', 'Mes anterior'],
    'Mois suivant': ['Mese successivo', 'Next month', 'Mes siguiente'],
    'Lun': ['Lun', 'Mon', 'Lun'],
    'Mar': ['Mar', 'Tue', 'Mar'],
    'Mer': ['Mer', 'Wed', 'Mié'],
    'Jeu': ['Gio', 'Thu', 'Jue'],
    'Ven': ['Ven', 'Fri', 'Vie'],
    'Sam': ['Sab', 'Sat', 'Sáb'],
    'Dim': ['Dom', 'Sun', 'Dom'],
    'Chargement des disponibilités Google Calendar…': ['Caricamento disponibilità di Google Calendar…', 'Loading Google Calendar availability…', 'Cargando disponibilidad de Google Calendar…'],
    'Votre demande': ['La tua richiesta', 'Your request', 'Tu solicitud'],
    'Réservez votre rendez-vous': ['Prenota il tuo appuntamento', 'Book your appointment', 'Reserva tu cita'],
    'Choisir un service': ['Scegli un servizio', 'Choose a service', 'Elige un servicio'],
    'Choisir': ['Scegli', 'Choose', 'Elegir'],
    'Accompagnement business': ['Supporto aziendale', 'Business support', 'Acompañamiento empresarial'],
    'Type de rendez-vous': ['Tipo di appuntamento', 'Appointment type', 'Tipo de cita'],
    'En ligne': ['Online', 'Online', 'En línea'],
    'Téléphone': ['Telefono', 'Phone', 'Teléfono'],
    'Présentiel': ['In presenza', 'In person', 'Presencial'],
    'Aucune date sélectionnée': ['Nessuna data selezionata', 'No date selected', 'Ninguna fecha seleccionada'],
    'Sélectionnez une date dans le calendrier.': ['Seleziona una data nel calendario.', 'Select a date in the calendar.', 'Selecciona una fecha en el calendario.'],
    'Nom complet': ['Nome completo', 'Full name', 'Nombre completo'],
    'Email': ['E-mail', 'Email', 'Correo electrónico'],
    'Objet du rendez-vous': ['Oggetto dell’appuntamento', 'Appointment subject', 'Asunto de la cita'],
    'Commentaire': ['Commento', 'Comment', 'Comentario'],
    'J’accepte d’être recontacté pour confirmer ce rendez-vous.': ['Accetto di essere ricontattato per confermare l’appuntamento.', 'I agree to be contacted to confirm this appointment.', 'Acepto que me contacten para confirmar esta cita.'],
    'Demander ce rendez-vous': ['Richiedi questo appuntamento', 'Request this appointment', 'Solicitar esta cita'],
    'Parlons de votre projet et trouvez la bonne solution.': ['Parliamo del tuo progetto e troviamo la soluzione giusta.', 'Let’s discuss your project and find the right solution.', 'Hablemos de tu proyecto y encontremos la solución adecuada.'],
    'Nous contacter': ['Contattaci', 'Contact us', 'Contáctanos'],
    'Horaires : Lun–Ven, 9h–18h': ['Orari: lun–ven, 9:00–18:00', 'Hours: Mon–Fri, 9 am–6 pm', 'Horario: lun–vie, 9:00–18:00'],
    'Carte à intégrer ici': ['Mappa da integrare qui', 'Map to be added here', 'Mapa por integrar aquí'],
    'Votre nom': ['Il tuo nome', 'Your name', 'Tu nombre'],
    'Votre email': ['La tua e-mail', 'Your email', 'Tu correo electrónico'],
    'Votre téléphone': ['Il tuo telefono', 'Your phone', 'Tu teléfono'],
    'Entreprise': ['Azienda', 'Company', 'Empresa'],
    'Vous êtes :': ['Sei:', 'You are:', 'Usted es:'],
    'Un particulier': ['Un privato', 'An individual', 'Un particular'],
    'Une entreprise / Professionnel': ['Un’azienda / Professionista', 'A company / Professional', 'Una empresa / Profesional'],
    'Organisation / Nom (Optionnel)': ['Organizzazione / Nome (facoltativo)', 'Organisation / Name (Optional)', 'Organización / Nombre (opcional)'],
    'Profession / Activité (Optionnel)': ['Professione / Attività (facoltativo)', 'Profession / Activity (Optional)', 'Profesión / Actividad (opcional)'],
    'Ex : Nom de votre entreprise, association...': ['Es.: nome della tua azienda, associazione...', 'E.g. your company or association name...', 'Ej.: nombre de su empresa, asociación...'],
    'Ex : Étudiant, salarié, indépendant...': ['Es.: studente, dipendente, libero professionista...', 'E.g. student, employee, freelancer...', 'Ej.: estudiante, empleado, autónomo...'],
    'Nom de votre entreprise': ['Nome della tua azienda', 'Your company name', 'Nombre de tu empresa'],
    'Service concerné': ['Servizio richiesto', 'Service required', 'Servicio solicitado'],
    'Partenariat & accompagnement': ['Partnership e supporto', 'Partnership & guidance', 'Colaboración y acompañamiento'],
    'Billetterie et voyage': ['Biglietteria e viaggi', 'Ticketing and travel', 'Billetes y viajes'],
    'Formation en langue italienne': ['Corso di lingua italiana', 'Italian language training', 'Formación en italiano'],
    'Rendez-vous consulaire et regroupement familial': ['Appuntamenti consolari e ricongiungimento familiare', 'Consular appointments and family reunification', 'Citas consulares y reagrupación familiar'],
    'Orientation des étudiants': ['Orientamento agli studenti', 'Student guidance', 'Orientación estudiantil'],
    'Comparabilité des diplômes': ['Comparabilità dei titoli di studio', 'Qualification comparability', 'Comparabilidad de títulos'],
    'Accompagnement à l’intégration': ['Supporto all’integrazione', 'Integration support', 'Acompañamiento a la integración'],
    'Assistance et orientation administrative': ['Assistenza e orientamento amministrativo', 'Administrative assistance and guidance', 'Asistencia y orientación administrativa'],
    'Budget estimé': ['Budget stimato', 'Estimated budget', 'Presupuesto estimado'],
    'Ex : 500 € - 2000 €': ['Es.: 500 € - 2000 €', 'E.g. €500–€2,000', 'Ej.: 500 € - 2000 €'],
    'Objet de la demande': ['Oggetto della richiesta', 'Request subject', 'Asunto de la solicitud'],
    'Objet': ['Oggetto', 'Subject', 'Asunto'],
    'Message': ['Messaggio', 'Message', 'Mensaje'],
    'Décrivez votre besoin': ['Descrivi le tue esigenze', 'Describe what you need', 'Describe lo que necesitas'],
    'Joindre des documents (facultatif)': ['Allega documenti (facoltativo)', 'Attach documents (optional)', 'Adjuntar documentos (opcional)'],
    'PDF, JPG/PNG ou DOCX · 5 fichiers max. · 12 Mo au total.': ['PDF, JPG/PNG o DOCX · max. 5 file · 12 MB totali.', 'PDF, JPG/PNG or DOCX · up to 5 files · 12 MB total.', 'PDF, JPG/PNG o DOCX · máximo 5 archivos · 12 MB en total.'],
    'Aucun fichier sélectionné.': ['Nessun file selezionato.', 'No files selected.', 'No se ha seleccionado ningún archivo.'],
    'Adresse de réception prévue : noviasolutions0@gmail.com. Le formulaire confirme l’envoi uniquement après transmission réussie. Évitez de joindre des documents sensibles qui ne sont pas nécessaires à votre demande.': [
      'Indirizzo di ricezione: noviasolutions0@gmail.com. L’invio sarà confermato solo dopo la trasmissione. Evita di allegare documenti sensibili non necessari.',
      'Expected recipient: noviasolutions0@gmail.com. Submission is confirmed only after successful delivery. Avoid attaching sensitive documents that are not needed for your request.',
      'Destinatario previsto: noviasolutions0@gmail.com. El envío solo se confirmará tras la transmisión correcta. Evita adjuntar documentos sensibles que no sean necesarios.',
    ],
    'J’accepte d’être recontacté au sujet de cette demande.': ['Accetto di essere ricontattato in merito a questa richiesta.', 'I agree to be contacted about this request.', 'Acepto que me contacten sobre esta solicitud.'],
    'Envoyer ma demande': ['Invia la richiesta', 'Send my request', 'Enviar mi solicitud'],
    'Des solutions adaptées à votre projet': ['Soluzioni adatte al tuo progetto', 'Solutions tailored to your project', 'Soluciones adaptadas a tu proyecto'],
    'Choisissez une proposition, nous l’adaptons à vos besoins.': ['Scegli una proposta: la adatteremo alle tue esigenze.', 'Choose a proposal and we will tailor it to your needs.', 'Elige una propuesta y la adaptaremos a tus necesidades.'],
    'Sites web, partenariats ou recherche et transport de véhicules : découvrez nos pistes et contactez-nous pour une proposition personnalisée.': ['Siti web, partnership o ricerca e trasporto di veicoli: scopri le nostre opzioni e contattaci per una proposta personalizzata.', 'Websites, partnerships, or vehicle sourcing and transport: explore our options and contact us for a tailored proposal.', 'Sitios web, colaboraciones o búsqueda y transporte de vehículos: descubre nuestras opciones y contáctanos para una propuesta personalizada.'],
    'Création de sites web': ['Creazione di siti web', 'Website design', 'Creación de sitios web'],
    'Partenariats & accompagnement': ['Partnership e supporto', 'Partnerships & guidance', 'Colaboraciones y acompañamiento'],
    'Achat & transport de véhicules': ['Acquisto e trasporto di veicoli', 'Vehicle purchase & transport', 'Compra y transporte de vehículos'],
    'Création et développement web': ['Creazione e sviluppo web', 'Website design and development', 'Creación y desarrollo web'],
    'Un modèle de départ, personnalisé pour votre activité.': ['Un modello iniziale personalizzato per la tua attività.', 'A starting template tailored to your business.', 'Una plantilla inicial personalizada para tu actividad.'],
    'Choisissez une base parmi nos pistes de conception. Nous adaptons ensuite les pages, les contenus et les fonctionnalités selon votre besoin.': ['Scegli una base tra le nostre proposte. Adatteremo pagine, contenuti e funzionalità alle tue esigenze.', 'Choose a starting point from our design options. We then adapt the pages, content and features to your needs.', 'Elige una base entre nuestras propuestas. Después adaptaremos las páginas, los contenidos y las funciones a tus necesidades.'],
    'Budget de départ pour étudier un modèle de site vitrine': ['Budget iniziale per valutare un sito vetrina', 'Starting budget to scope a showcase website', 'Presupuesto inicial para valorar una web corporativa'],
    'Dès 50 €': ['Da 50 €', 'From €50', 'Desde 50 €'],
    'Le contenu et le devis sont adaptés à votre projet.': ['Contenuti e preventivo saranno adattati al tuo progetto.', 'Content and pricing are tailored to your project.', 'El contenido y el presupuesto se adaptan a tu proyecto.'],
    'Vitrine essentielle': ['Sito vetrina essenziale', 'Essential showcase site', 'Web corporativa esencial'],
    'Une présentation claire de votre activité, de vos services et de vos coordonnées.': ['Una presentazione chiara della tua attività, dei servizi e dei contatti.', 'A clear overview of your business, services and contact details.', 'Una presentación clara de tu actividad, servicios y datos de contacto.'],
    'Accueil et présentation': ['Home e presentazione', 'Home and overview', 'Inicio y presentación'],
    'Services et contact': ['Servizi e contatti', 'Services and contact', 'Servicios y contacto'],
    'Adaptation mobile': ['Ottimizzazione mobile', 'Mobile-friendly design', 'Adaptación móvil'],
    'Vitrine professionnelle': ['Sito vetrina professionale', 'Professional showcase site', 'Web corporativa profesional'],
    'Une présence en ligne plus complète pour présenter votre entreprise et rassurer vos clients.': ['Una presenza online più completa per presentare l’azienda e rassicurare i clienti.', 'A more complete online presence to showcase your business and reassure customers.', 'Una presencia online más completa para presentar tu empresa y generar confianza.'],
    'Pages et contenus organisés': ['Pagine e contenuti organizzati', 'Organised pages and content', 'Páginas y contenidos organizados'],
    'Mise en avant de vos réalisations': ['Valorizzazione dei tuoi progetti', 'Showcase your work', 'Presentación de tus trabajos'],
    'Formulaire de demande': ['Modulo di richiesta', 'Enquiry form', 'Formulario de solicitud'],
    'Catalogue ou réservation': ['Catalogo o prenotazione', 'Catalogue or booking', 'Catálogo o reserva'],
    'Une base à personnaliser pour présenter des produits, des offres ou permettre une prise de contact ciblée.': ['Una base personalizzabile per presentare prodotti e offerte o facilitare richieste mirate.', 'A customisable foundation to showcase products and offers or enable targeted enquiries.', 'Una base personalizable para presentar productos y ofertas o facilitar consultas específicas.'],
    'Présentation structurée': ['Presentazione strutturata', 'Structured presentation', 'Presentación estructurada'],
    'Parcours adapté à votre clientèle': ['Percorso adatto ai tuoi clienti', 'Customer-focused journey', 'Recorrido adaptado a tus clientes'],
    'Fonctionnalités définies sur devis': ['Funzionalità definite su preventivo', 'Features scoped by quote', 'Funciones definidas mediante presupuesto'],
    'Vous pouvez proposer un budget à partir de 50 €. Ce montant est indicatif et ne garantit pas la réalisation d’un site complet : le périmètre et le devis seront définis ensemble selon vos besoins.': ['Puoi proporre un budget a partire da 50 €. L’importo è indicativo e non garantisce la realizzazione di un sito completo: definiremo insieme ambito e preventivo in base alle tue esigenze.', 'You can suggest a budget from €50. This is indicative and does not guarantee a complete website; scope and pricing will be agreed together based on your needs.', 'Puedes proponer un presupuesto desde 50 €. Es orientativo y no garantiza un sitio completo: definiremos juntos el alcance y el presupuesto según tus necesidades.'],
    'Demander une proposition web': ['Richiedi una proposta web', 'Request a web proposal', 'Solicitar una propuesta web'],
    'Ressources humaines & partenariats': ['Risorse umane e partnership', 'Human resources & partnerships', 'Recursos humanos y colaboraciones'],
    'Construisons des collaborations utiles et adaptées.': ['Costruiamo collaborazioni utili e su misura.', 'Let’s build useful, tailored collaborations.', 'Construyamos colaboraciones útiles y adaptadas.'],
    'Nous échangeons avec vous sur les objectifs, les compétences recherchées et le contexte avant de définir une proposition.': ['Confrontiamoci su obiettivi, competenze richieste e contesto prima di definire una proposta.', 'We discuss your goals, required skills and context before developing a proposal.', 'Hablamos de objetivos, competencias necesarias y contexto antes de definir una propuesta.'],
    'Propositions de partenariat': ['Proposte di partnership', 'Partnership proposals', 'Propuestas de colaboración'],
    'Étudions les possibilités de collaboration, les besoins de votre structure et les prochaines étapes.': ['Valutiamo le possibilità di collaborazione, le esigenze della tua organizzazione e i prossimi passi.', 'Let’s explore collaboration opportunities, your organisation’s needs and next steps.', 'Analicemos las opciones de colaboración, las necesidades de tu organización y los próximos pasos.'],
    'Assistance linguistique': ['Supporto linguistico', 'Language assistance', 'Asistencia lingüística'],
    'Un accompagnement linguistique adapté aux échanges et démarches liés à votre projet.': ['Supporto linguistico per comunicazioni e procedure legate al tuo progetto.', 'Language support for communications and procedures related to your project.', 'Apoyo lingüístico para las comunicaciones y trámites de tu proyecto.'],
    'Accompagnement stratégique': ['Supporto strategico', 'Strategic guidance', 'Acompañamiento estratégico'],
    'Clarifiez vos objectifs, vos priorités et les options de développement envisageables.': ['Definisci obiettivi, priorità e possibili opzioni di sviluppo.', 'Clarify your goals, priorities and potential development options.', 'Aclara tus objetivos, prioridades y posibles opciones de desarrollo.'],
    'Échanges et assistance mutuelle': ['Scambio e supporto reciproco', 'Dialogue and mutual support', 'Intercambio y apoyo mutuo'],
    'Organisons des séances de partenariat pour partager les besoins, les compétences et les formes d’entraide possibles.': ['Organizziamo incontri di partnership per condividere esigenze, competenze e possibili forme di collaborazione.', 'Let’s organise partnership sessions to share needs, skills and opportunities for mutual support.', 'Organicemos sesiones de colaboración para compartir necesidades, competencias y posibles formas de apoyo mutuo.'],
    'Organiser une séance de partenariat': ['Organizza un incontro di partnership', 'Arrange a partnership session', 'Organizar una sesión de colaboración'],
    'Décrivez votre recherche : nous étudierons une commande sur mesure.': ['Descrivi la tua ricerca: valuteremo una richiesta su misura.', 'Describe what you are looking for and we will assess a tailored request.', 'Describe lo que buscas y valoraremos una solicitud a medida.'],
    'Consultez directement des annonces publiées sur différents marchés européens, puis transmettez-nous un lien pour demander un accompagnement à l’achat et au transport. Allemagne, Belgique et Pologne sont indiquées comme premières pistes à comparer, sans garantie d’un prix ou d’un transport moins cher.': ['Consulta gli annunci pubblicati nei mercati europei e inviaci un link per chiedere supporto all’acquisto e al trasporto. Germania, Belgio e Polonia sono i primi mercati da confrontare; non è garantito un prezzo o un trasporto più economico.', 'Browse listings across European markets, then send us a link to request purchase and transport support. Germany, Belgium and Poland are initial markets to compare; lower prices or transport costs are not guaranteed.', 'Consulta anuncios de distintos mercados europeos y envíanos un enlace para solicitar ayuda con la compra y el transporte. Alemania, Bélgica y Polonia son mercados iniciales para comparar; no se garantiza un precio ni un transporte más barato.'],
    'À comparer en priorité': ['Da confrontare per primi', 'Priority comparison', 'Prioridad de comparación'],
    'Allemagne': ['Germania', 'Germany', 'Alemania'],
    'annonces auto': ['annunci auto', 'car listings', 'anuncios de coches'],
    'Belgique': ['Belgio', 'Belgium', 'Bélgica'],
    'autos': ['auto', 'cars', 'coches'],
    'Italie': ['Italia', 'Italy', 'Italia'],
    'Pays-Bas': ['Paesi Bassi', 'Netherlands', 'Países Bajos'],
    'Pologne': ['Polonia', 'Poland', 'Polonia'],
    'voitures particulières': ['autovetture', 'passenger cars', 'turismos'],
    'France': ['Francia', 'France', 'Francia'],
    'Ces liens donnent accès à des plateformes d’annonces indépendantes, pas à des offres vérifiées par NOVIA SOLUTIONS. Les pays mis en avant sont des pistes de comparaison, pas une garantie du marché le moins cher. Les prix et frais de transport varient selon le véhicule, le vendeur, le pays de livraison et les formalités : comparez le coût total et vérifiez l’annonce avant toute décision.': ['Questi link rimandano a piattaforme indipendenti e non a offerte verificate da NOVIA SOLUTIONS. I paesi indicati sono opzioni da confrontare, non una garanzia del mercato più economico. Prezzi e trasporto dipendono da veicolo, venditore, destinazione e formalità: confronta i costi totali e verifica l’annuncio prima di decidere.', 'These links lead to independent listing platforms, not offers verified by NOVIA SOLUTIONS. The countries shown are options to compare, not a guarantee of the cheapest market. Prices and transport costs vary by vehicle, seller, destination and formalities: compare the total cost and verify each listing before deciding.', 'Estos enlaces llevan a plataformas independientes, no a ofertas verificadas por NOVIA SOLUTIONS. Los países indicados son opciones para comparar, no una garantía del mercado más barato. Los precios y el transporte dependen del vehículo, vendedor, destino y trámites: compara el coste total y verifica el anuncio antes de decidir.'],
    'Demander une recherche ou un transport': ['Richiedi una ricerca o un trasporto', 'Request vehicle sourcing or transport', 'Solicitar búsqueda o transporte'],
    'Ouverture sur le monde': ['Apertura sul mondo', 'Open to the world', 'Apertura al mundo'],
    'Votre prochain voyage commence avec NOVIA SOLUTIONS.': ['Il tuo prossimo viaggio inizia con NOVIA SOLUTIONS.', 'Your next trip starts with NOVIA SOLUTIONS.', 'Tu próximo viaje empieza con NOVIA SOLUTIONS.'],
    'Nous préparons un service de billetterie en ligne pour vous accompagner dans vos projets de voyage.': ['Stiamo preparando un servizio di biglietteria online per accompagnarti nei tuoi viaggi.', 'We are preparing an online ticketing service to support your travel plans.', 'Estamos preparando un servicio de billetes en línea para acompañarte en tus viajes.'],
    'Aéroport de Heathrow · Londres, Europe': ['Aeroporto di Heathrow · Londra, Europa', 'Heathrow Airport · London, Europe', 'Aeropuerto de Heathrow · Londres, Europa'],
    "Aéroport d'Istanbul · Turquie": ['Aeroporto di Istanbul · Turchia', 'Istanbul Airport · Türkiye', 'Aeropuerto de Estambul · Turquía'],
    'Aéroport de Milan Malpensa · Italie': ['Aeroporto di Milano Malpensa · Italia', 'Milan Malpensa Airport · Italy', 'Aeropuerto de Milán-Malpensa · Italia'],
    'Aéroport de Milan Linate · Italie': ['Aeroporto di Milano Linate · Italia', 'Milan Linate Airport · Italy', 'Aeropuerto de Milán-Linate · Italia'],
    'Aéroport de Bamako-Sénou · Mali, Afrique': ['Aeroporto di Bamako-Sénou · Mali, Africa', 'Bamako-Sénou Airport · Mali, Africa', 'Aeropuerto de Bamako-Sénou · Mali, África'],
    'Aéroport Mohammed V · Casablanca, Maroc': ['Aeroporto Mohammed V · Casablanca, Marocco', 'Mohammed V Airport · Casablanca, Morocco', 'Aeropuerto Mohammed V · Casablanca, Marruecos'],
    'Aéroport de Ouagadougou · Burkina Faso': ['Aeroporto di Ouagadougou · Burkina Faso', 'Ouagadougou Airport · Burkina Faso', 'Aeropuerto de Uagadugú · Burkina Faso'],
    'Aéroport Blaise Diagne · Dakar, Sénégal': ['Aeroporto Blaise Diagne · Dakar, Senegal', 'Blaise Diagne Airport · Dakar, Senegal', 'Aeropuerto Blaise Diagne · Dakar, Senegal'],
    "Aéroport d'Abidjan · Côte d'Ivoire": ['Aeroporto di Abidjan · Costa d’Avorio', 'Abidjan Airport · Côte d’Ivoire', 'Aeropuerto de Abiyán · Costa de Marfil'],
    'Aéroport de Bole · Addis-Abeba, Éthiopie': ['Aeroporto di Bole · Addis Abeba, Etiopia', 'Bole Airport · Addis Ababa, Ethiopia', 'Aeropuerto de Bole · Adís Abeba, Etiopía'],
    "Entrée du terminal de l'aéroport international de Bamako-Sénou": ['Ingresso del terminal dell’aeroporto internazionale di Bamako-Sénou', 'Terminal entrance at Bamako-Sénou International Airport', 'Entrada de la terminal del aeropuerto internacional de Bamako-Sénou'],
    "Intérieur de l'aéroport international Mohammed V de Casablanca": ['Interno dell’aeroporto internazionale Mohammed V di Casablanca', 'Inside Casablanca Mohammed V International Airport', 'Interior del aeropuerto internacional Mohammed V de Casablanca'],
    "Avions d'Air Burkina devant la tour de contrôle de l'aéroport de Ouagadougou": ['Aerei di Air Burkina davanti alla torre di controllo dell’aeroporto di Ouagadougou', 'Air Burkina planes in front of the control tower at Ouagadougou Airport', 'Aviones de Air Burkina frente a la torre de control del aeropuerto de Uagadugú'],
    'Aéroport international Blaise Diagne près de Dakar': ['Aeroporto internazionale Blaise Diagne vicino a Dakar', 'Blaise Diagne International Airport near Dakar', 'Aeropuerto internacional Blaise Diagne cerca de Dakar'],
    "Hall de l'aéroport Félix-Houphouët-Boigny d'Abidjan": ['Atrio dell’aeroporto Félix-Houphouët-Boigny di Abidjan', 'Hall of Félix-Houphouët-Boigny Airport in Abidjan', 'Vestíbulo del aeropuerto Félix-Houphouët-Boigny de Abiyán'],
    "Aéroport international Bole d'Addis-Abeba": ['Aeroporto internazionale Bole di Addis Abeba', 'Bole International Airport, Addis Ababa', 'Aeropuerto internacional Bole de Adís Abeba'],
    'Bamako : PetterLundkvist,': ['Bamako: PetterLundkvist,', 'Bamako: PetterLundkvist,', 'Bamako: PetterLundkvist,'],
    'Casablanca : Sharon Hahn Darlin,': ['Casablanca: Sharon Hahn Darlin,', 'Casablanca: Sharon Hahn Darlin,', 'Casablanca: Sharon Hahn Darlin,'],
    'Ouagadougou : Sputniktilt,': ['Ouagadougou: Sputniktilt,', 'Ouagadougou: Sputniktilt,', 'Uagadugú: Sputniktilt,'],
    'Dakar : Benj90,': ['Dakar: Benj90,', 'Dakar: Benj90,', 'Dakar: Benj90,'],
    'Abidjan : Citizen59,': ['Abidjan: Citizen59,', 'Abidjan: Citizen59,', 'Abiyán: Citizen59,'],
    'Addis-Abeba : Captain Raju,': ['Addis Abeba: Captain Raju,', 'Addis Ababa: Captain Raju,', 'Adís Abeba: Captain Raju,'],
    'Mettre le diaporama en pause': ['Metti in pausa la presentazione', 'Pause slideshow', 'Pausar la presentación'],
    'Reprendre le diaporama': ['Riprendi la presentazione', 'Resume slideshow', 'Reanudar la presentación'],
    'Aéroports internationaux': ['Aeroporti internazionali', 'International airports', 'Aeropuertos internacionales'],
    'Hall du terminal 2 de l’aéroport de Heathrow à Londres': ['Atrio del terminal 2 dell’aeroporto di Heathrow a Londra', 'Terminal 2 concourse at Heathrow Airport in London', 'Vestíbulo de la terminal 2 del aeropuerto de Heathrow en Londres'],
    "Hall de l'aéroport d'Istanbul à Arnavutköy": ['Atrio dell’aeroporto di Istanbul ad Arnavutköy', 'Istanbul Airport terminal in Arnavutköy', 'Vestíbulo del aeropuerto de Estambul en Arnavutköy'],
    "Zone d'enregistrement de l'aéroport de Milan Malpensa": ['Area check-in dell’aeroporto di Milano Malpensa', 'Check-in area at Milan Malpensa Airport', 'Zona de facturación del aeropuerto de Milán-Malpensa'],
    "Terminal de l'aéroport de Milan Linate": ['Terminal dell’aeroporto di Milano Linate', 'Terminal at Milan Linate Airport', 'Terminal del aeropuerto de Milán-Linate'],
    'Istanbul : Matti Blume,': ['Istanbul: Matti Blume,', 'Istanbul: Matti Blume,', 'Estambul: Matti Blume,'],
    'Milan Malpensa : Daniel Case,': ['Milano Malpensa: Daniel Case,', 'Milan Malpensa: Daniel Case,', 'Milán-Malpensa: Daniel Case,'],
    'Milan Linate : Immanuel Giel,': ['Milano Linate: Immanuel Giel,', 'Milan Linate: Immanuel Giel,', 'Milán-Linate: Immanuel Giel,'],
    'Service en préparation': ['Servizio in preparazione', 'Service in preparation', 'Servicio en preparación'],
    'La billetterie en ligne arrive bientôt.': ['La biglietteria online sarà disponibile a breve.', 'Online ticketing is coming soon.', 'La venta de billetes en línea llegará pronto.'],
    'La recherche de vols, la réservation et le paiement ne sont pas encore disponibles. Nous finalisons la mise en place d’un partenaire de billetterie avant de proposer des réservations réelles.': ['La ricerca dei voli, la prenotazione e il pagamento non sono ancora disponibili. Stiamo finalizzando la collaborazione con un partner prima di aprire le prenotazioni.', 'Flight search, booking and payment are not yet available. We are finalising a ticketing partnership before offering real bookings.', 'La búsqueda de vuelos, las reservas y el pago aún no están disponibles. Estamos finalizando una colaboración antes de ofrecer reservas reales.'],
    'Vous pouvez nous contacter pour être informé lorsque le service sera prêt. Cette demande ne constitue pas une réservation et aucun paiement ne sera demandé.': ['Puoi contattarci per ricevere aggiornamenti quando il servizio sarà disponibile. La richiesta non è una prenotazione e non comporta alcun pagamento.', 'Contact us to be notified when the service is ready. This is not a booking and no payment will be requested.', 'Puedes contactarnos para recibir novedades cuando el servicio esté listo. Esta solicitud no es una reserva y no se pedirá ningún pago.'],
    'Être informé de l’ouverture': ['Ricevi aggiornamenti sul lancio', 'Get launch updates', 'Recibir novedades del lanzamiento'],
    'Assistance et orientation': ['Assistenza e orientamento', 'Assistance and guidance', 'Asistencia y orientación'],
    'Avançons étape par étape dans vos démarches.': ['Procediamo passo dopo passo con le tue pratiche.', 'Let’s work through your procedures step by step.', 'Avancemos paso a paso con tus trámites.'],
    'Nos accompagnements': ['I nostri servizi di supporto', 'Our support services', 'Nuestro acompañamiento'],
    'Choisissez la démarche qui correspond à votre besoin.': ['Scegli la procedura più adatta alle tue esigenze.', 'Choose the procedure that matches your needs.', 'Elige el trámite que se ajuste a tus necesidades.'],
    'Rendez-vous consulaire et regroupement familial': ['Appuntamento consolare e ricongiungimento familiare', 'Consular appointments and family reunification', 'Cita consular y reagrupación familiar'],
    'Clarifier le pays et le type de démarche': ['Chiarire il paese e il tipo di procedura', 'Clarify the country and type of procedure', 'Aclarar el país y el tipo de trámite'],
    'Préparer une liste de documents à vérifier': ['Preparare un elenco di documenti da verificare', 'Prepare a checklist of documents to verify', 'Preparar una lista de documentos que revisar'],
    'Vous orienter vers le canal officiel de rendez-vous': ['Indirizzarti al canale ufficiale per gli appuntamenti', 'Direct you to the official appointment channel', 'Orientarte al canal oficial de citas'],
    'Demander un accompagnement': ['Richiedi supporto', 'Request assistance', 'Solicitar acompañamiento'],
    'Orientation des étudiants': ['Orientamento agli studenti', 'Student guidance', 'Orientación estudiantil'],
    'Échange sur votre parcours, vos objectifs et vos contraintes pour identifier des filières et des pistes d’études cohérentes avec votre réalité.': ['Un confronto sul tuo percorso, obiettivi e vincoli per individuare corsi e opportunità di studio adatti alla tua situazione.', 'We discuss your background, goals and constraints to identify suitable study paths and options.', 'Analizamos tu trayectoria, objetivos y limitaciones para identificar itinerarios y opciones de estudio adecuados.'],
    'Faire le point sur le parcours et le niveau d’études': ['Valutare il percorso e il livello di studi', 'Review your background and education level', 'Revisar tu trayectoria y nivel de estudios'],
    'Comparer des domaines et des critères de choix': ['Confrontare aree di studio e criteri di scelta', 'Compare subject areas and selection criteria', 'Comparar áreas y criterios de elección'],
    'Repérer les conditions d’admission à vérifier': ['Individuare i requisiti di ammissione da verificare', 'Identify admission requirements to check', 'Identificar los requisitos de admisión que se deben verificar'],
    'Parler de mon projet d’études': ['Parla del mio progetto di studio', 'Discuss my study plans', 'Hablar de mi proyecto de estudios'],
    'Comparabilité des diplômes': ['Comparabilità dei titoli di studio', 'Qualification comparability', 'Comparabilidad de títulos'],
    'Orientation vers l’autorité compétente du pays concerné et aide à repérer les informations ou justificatifs généralement demandés.': ['Indicazioni sull’autorità competente del paese interessato e aiuto per individuare informazioni e documenti richiesti.', 'Guidance on the relevant authority and help identifying commonly requested information and documents.', 'Orientación sobre la autoridad competente y ayuda para identificar la información y documentación habitual.'],
    'Identifier le pays et l’usage prévu du diplôme': ['Individuare il paese e l’uso previsto del titolo', 'Identify the country and intended use of your qualification', 'Identificar el país y el uso previsto del título'],
    'Repérer le centre national compétent': ['Individuare il centro nazionale competente', 'Identify the relevant national centre', 'Identificar el centro nacional competente'],
    'Préparer les questions et les pièces à vérifier': ['Preparare le domande e i documenti da verificare', 'Prepare questions and documents to check', 'Preparar preguntas y documentos que revisar'],
    'Consulter le réseau officiel ENIC-NARIC ↗': ['Consulta la rete ufficiale ENIC-NARIC ↗', 'Visit the official ENIC-NARIC network ↗', 'Consultar la red oficial ENIC-NARIC ↗'],
    'Demander une orientation': ['Richiedi orientamento', 'Request guidance', 'Solicitar orientación'],
    'Accompagnement à l’intégration': ['Supporto all’integrazione', 'Integration support', 'Acompañamiento a la integración'],
    'Un accompagnement pour organiser les premières étapes de votre installation et vous orienter vers les ressources adaptées à votre situation.': ['Supporto per organizzare le prime fasi del trasferimento e individuare le risorse adatte alla tua situazione.', 'Support with the first steps of settling in and finding resources suited to your situation.', 'Acompañamiento para organizar los primeros pasos de tu instalación y encontrar recursos adecuados a tu situación.'],
    'Repères pour les démarches administratives locales': ['Indicazioni per le pratiche amministrative locali', 'Guidance on local administrative procedures', 'Orientación sobre trámites administrativos locales'],
    'Orientation vers des ressources linguistiques': ['Orientamento verso risorse linguistiche', 'Guidance to language resources', 'Orientación hacia recursos lingüísticos'],
    'Pistes pour les études, l’emploi et la vie quotidienne': ['Indicazioni per studio, lavoro e vita quotidiana', 'Options for study, work and everyday life', 'Opciones para estudios, empleo y vida cotidiana'],
    'Préparer mon projet d’intégration': ['Prepara il mio progetto di integrazione', 'Prepare my integration plan', 'Preparar mi proyecto de integración'],
    'NOVIA SOLUTIONS propose un service d’information et d’orientation, et non une représentation juridique ou consulaire. Les règles, documents et modalités de rendez-vous varient selon le pays et l’autorité compétente. Les décisions et disponibilités relèvent exclusivement des organismes officiels ; aucun rendez-vous, visa, admission ou résultat de reconnaissance ne peut être garanti.': ['NOVIA SOLUTIONS offre informazioni e orientamento, non rappresentanza legale o consolare. Regole, documenti e appuntamenti variano in base al paese e all’autorità competente. Decisioni e disponibilità spettano esclusivamente agli enti ufficiali; non è possibile garantire appuntamenti, visti, ammissioni o riconoscimenti.', 'NOVIA SOLUTIONS provides information and guidance, not legal or consular representation. Rules, documents and appointment procedures vary by country and authority. Decisions and availability rest solely with official bodies; appointments, visas, admission or recognition outcomes cannot be guaranteed.', 'NOVIA SOLUTIONS ofrece información y orientación, no representación legal ni consular. Las normas, documentos y citas varían según el país y la autoridad competente. Las decisiones y la disponibilidad corresponden exclusivamente a organismos oficiales; no se pueden garantizar citas, visados, admisiones ni reconocimientos.'],
    'Professionnalisme et fiabilité': ['Professionalità e affidabilità', 'Professionalism and reliability', 'Profesionalidad y fiabilidad'],
    'La confiance se construit avec vous.': ['La fiducia si costruisce insieme.', 'Trust is built together.', 'La confianza se construye contigo.'],
    'Nous souhaitons partager ici les retours de clients et de partenaires sur leurs expériences avec NOVIA SOLUTIONS.': ['Vogliamo condividere le esperienze dei clienti e dei partner con NOVIA SOLUTIONS.', 'We would like to share feedback from clients and partners about their experience with NOVIA SOLUTIONS.', 'Queremos compartir aquí las experiencias de clientes y colaboradores con NOVIA SOLUTIONS.'],
    'Témoignages à venir': ['Testimonianze in arrivo', 'Testimonials coming soon', 'Próximamente testimonios'],
    'Votre expérience compte.': ['La tua esperienza conta.', 'Your experience matters.', 'Tu experiencia cuenta.'],
    'Nous publierons les témoignages réels de nos clients et partenaires après validation de leur contenu et avec leur accord. Aucun avis n’est affiché sans autorisation.': ['Pubblicheremo le testimonianze autentiche di clienti e partner solo dopo averne verificato il contenuto e ottenuto il loro consenso. Nessuna recensione sarà pubblicata senza autorizzazione.', 'We will publish genuine client and partner testimonials only after validating their content and obtaining permission. No review is shown without consent.', 'Publicaremos testimonios reales de clientes y colaboradores tras validar su contenido y obtener su consentimiento. No se publicará ninguna opinión sin autorización.'],
    'Partager votre expérience': ['Condividi la tua esperienza', 'Share your experience', 'Compartir tu experiencia'],
    'Aucun créneau disponible ce jour. Choisissez une autre date.': ['Nessun orario disponibile in questa data. Scegli un altro giorno.', 'No time slots are available on this date. Choose another day.', 'No hay horarios disponibles ese día. Elige otra fecha.'],
    'Les disponibilités ne sont pas chargées.': ['Le disponibilità non sono state caricate.', 'Availability has not loaded.', 'No se ha cargado la disponibilidad.'],
    'Créneaux libres synchronisés avec Google Calendar. L’invitation sera envoyée par e-mail après réservation.': ['Orari disponibili sincronizzati con Google Calendar. L’invito verrà inviato via e-mail dopo la prenotazione.', 'Available time slots are synced with Google Calendar. An invitation will be emailed after booking.', 'Los horarios disponibles están sincronizados con Google Calendar. Se enviará una invitación por correo después de reservar.'],
    'Agenda Google Calendar indisponible. Réessayez plus tard.': ['Google Calendar non è disponibile. Riprova più tardi.', 'Google Calendar is unavailable. Please try again later.', 'Google Calendar no está disponible. Inténtalo más tarde.'],
    'Impossible de charger les disponibilités.': ['Impossibile caricare le disponibilità.', 'Unable to load availability.', 'No se pudo cargar la disponibilidad.'],
    'Choisissez une date et un créneau dans le calendrier.': ['Scegli una data e un orario nel calendario.', 'Choose a date and time slot in the calendar.', 'Elige una fecha y un horario en el calendario.'],
    'Rendez-vous confirmé dans Google Calendar. Une invitation a été envoyée par e-mail.': ['Appuntamento confermato in Google Calendar. È stato inviato un invito via e-mail.', 'Appointment confirmed in Google Calendar. An invitation has been sent by email.', 'Cita confirmada en Google Calendar. Se ha enviado una invitación por correo electrónico.'],
    'Connexion au calendrier impossible. Réessayez plus tard.': ['Impossibile connettersi al calendario. Riprova più tardi.', 'Unable to connect to the calendar. Please try again later.', 'No se pudo conectar con el calendario. Inténtalo más tarde.'],
    'Veuillez remplir tous les champs avant de continuer.': ['Compila tutti i campi prima di continuare.', 'Please complete all fields before continuing.', 'Completa todos los campos antes de continuar.'],
    'Le montant maximum autorisé est de 5 000 000 FCFA (environ 8 000 €).': ['L’importo massimo consentito è 5.000.000 FCFA (circa 8.000 €).', 'The maximum amount allowed is 5,000,000 XOF (approximately €8,000).', 'El importe máximo permitido es de 5.000.000 FCFA (aprox. 8.000 €).'],
    'Entrez le code reçu par SMS pour continuer.': ['Inserisci il codice ricevuto via SMS per continuare.', 'Enter the code received by SMS to continue.', 'Introduce el código recibido por SMS para continuar.'],
    'Code incorrect. Vérifiez le code envoyé par SMS.': ['Codice errato. Verifica il codice ricevuto via SMS.', 'Incorrect code. Check the code sent by SMS.', 'Código incorrecto. Comprueba el código enviado por SMS.'],
    'Le budget minimum pour cette formule est de {amount} €.': ['Il budget minimo per questo piano è di {amount} €.', 'The minimum budget for this plan is €{amount}.', 'El presupuesto mínimo para este plan es de {amount} €.'],
    'Le budget minimum pour cette formule est de {amount}.': ['Il budget minimo per questo piano è di {amount}.', 'The minimum budget for this plan is {amount}.', 'El presupuesto mínimo para este plan es de {amount}.'],
    'Un code de sécurité a été envoyé au {phone}.': ['Un codice di sicurezza è stato inviato a {phone}.', 'A security code has been sent to {phone}.', 'Se ha enviado un código de seguridad a {phone}.'],
    'Formats acceptés : PDF, JPG, PNG et DOCX.': ['Formati accettati: PDF, JPG, PNG e DOCX.', 'Accepted formats: PDF, JPG, PNG and DOCX.', 'Formatos aceptados: PDF, JPG, PNG y DOCX.'],
    'Vous pouvez joindre au maximum 5 fichiers.': ['Puoi allegare al massimo 5 file.', 'You can attach up to 5 files.', 'Puedes adjuntar un máximo de 5 archivos.'],
    'La taille totale des pièces jointes ne doit pas dépasser 12 Mo.': ['La dimensione totale degli allegati non deve superare 12 MB.', 'The total size of attachments must not exceed 12 MB.', 'El tamaño total de los archivos adjuntos no debe superar los 12 MB.'],
    'Envoi de votre demande…': ['Invio della richiesta…', 'Sending your request…', 'Enviando tu solicitud…'],
    'La demande n’a pas pu être envoyée. Vos informations restent dans le formulaire.': ['Impossibile inviare la richiesta. I tuoi dati restano nel modulo.', 'Your request could not be sent. Your information remains in the form.', 'No se pudo enviar la solicitud. Tus datos permanecen en el formulario.'],
    'Une erreur inattendue a empêché l’envoi. Vos informations restent dans le formulaire.': ['Un errore imprevisto ha impedito l’invio. I tuoi dati restano nel modulo.', 'An unexpected error prevented submission. Your information remains in the form.', 'Un error inesperado impidió el envío. Tus datos permanecen en el formulario.'],
    'Votre demande a bien été enregistrée. Notre équipe vous répondra rapidement.': ['La tua richiesta è stata registrata. Il nostro team ti risponderà al più presto.', 'Your request has been recorded. Our team will reply soon.', 'Tu solicitud se ha registrado. Nuestro equipo te responderá pronto.'],
    'Votre rendez-vous a bien été enregistré. Vous recevrez une confirmation très prochainement.': ['Il tuo appuntamento è stato registrato. Riceverai presto una conferma.', 'Your appointment has been recorded. You will receive confirmation shortly.', 'Tu cita se ha registrado. Recibirás una confirmación en breve.'],
    'Changer de langue': ['Cambia lingua', 'Change language', 'Cambiar idioma'],
    'Découvrir l’histoire, la mission, les valeurs et l’expertise de NOVIA SOLUTIONS.': ['Scopri la storia, la missione, i valori e le competenze di NOVIA SOLUTIONS.', 'Discover the history, mission, values and expertise of NOVIA SOLUTIONS.', 'Descubre la historia, misión, valores y experiencia de NOVIA SOLUTIONS.'],
    'Découvrez les services de NOVIA SOLUTIONS : stratégie, accompagnement, développement web et solutions sur mesure.': ['Scopri i servizi di NOVIA SOLUTIONS: strategia, supporto, sviluppo web e soluzioni su misura.', 'Discover NOVIA SOLUTIONS services: strategy, guidance, web development and tailored solutions.', 'Descubre los servicios de NOVIA SOLUTIONS: estrategia, acompañamiento, desarrollo web y soluciones a medida.'],
    'Découvrez les formations NOVIA SOLUTIONS : auto-école italienne, initiation à l’informatique et bureautique pour débutants.': ['Scopri i corsi NOVIA SOLUTIONS: scuola guida italiana, informatica di base e strumenti per l’ufficio.', 'Explore NOVIA SOLUTIONS training: Italian driving school, computer basics and office software for beginners.', 'Descubre la formación de NOVIA SOLUTIONS: autoescuela italiana, informática básica y ofimática para principiantes.'],
    'Découvrez les offres et produits NOVIA SOLUTIONS : packs, abonnements, services professionnels et solutions sur mesure.': ['Scopri offerte e prodotti NOVIA SOLUTIONS: pacchetti, abbonamenti, servizi professionali e soluzioni su misura.', 'Explore NOVIA SOLUTIONS offers and products: packages, subscriptions, professional services and tailored solutions.', 'Descubre las ofertas y productos de NOVIA SOLUTIONS: paquetes, suscripciones, servicios profesionales y soluciones a medida.'],
    'Réservez un rendez-vous avec NOVIA SOLUTIONS pour discuter de votre projet, votre besoin ou votre demande de devis.': ['Prenota un appuntamento con NOVIA SOLUTIONS per parlare del tuo progetto, delle tue esigenze o di un preventivo.', 'Book an appointment with NOVIA SOLUTIONS to discuss your project, needs or quote request.', 'Pide una cita con NOVIA SOLUTIONS para hablar de tu proyecto, tus necesidades o una solicitud de presupuesto.'],
    'Contactez NOVIA SOLUTIONS pour demander un devis, parler à un conseiller ou discuter de votre projet.': ['Contatta NOVIA SOLUTIONS per richiedere un preventivo, parlare con un consulente o discutere del tuo progetto.', 'Contact NOVIA SOLUTIONS to request a quote, speak to an adviser or discuss your project.', 'Contacta con NOVIA SOLUTIONS para solicitar un presupuesto, hablar con un asesor o comentar tu proyecto.'],
    'Découvrez nos modèles de sites web, nos propositions de partenariat et notre accompagnement pour l’achat et le transport de véhicules en Europe.': ['Scopri i modelli di siti web, le proposte di partnership e il supporto per l’acquisto e il trasporto di veicoli in Europa.', 'Explore our website templates, partnership proposals and support for vehicle purchase and transport in Europe.', 'Descubre nuestros modelos web, propuestas de colaboración y acompañamiento para comprar y transportar vehículos en Europa.'],
    'Découvrez le projet de billetterie en ligne de NOVIA SOLUTIONS et ses aéroports internationaux d’Europe et de Dubaï.': ['Scopri il progetto di biglietteria online di NOVIA SOLUTIONS e gli aeroporti internazionali in Europa e a Dubai.', 'Discover NOVIA SOLUTIONS’ online ticketing project and international airports in Europe and Dubai.', 'Descubre el proyecto de venta de billetes en línea de NOVIA SOLUTIONS y los aeropuertos internacionales de Europa y Dubái.'],
    'Orientation et assistance pour les rendez-vous consulaires, le regroupement familial, les études, la comparabilité des diplômes et l’intégration.': ['Orientamento e assistenza per appuntamenti consolari, ricongiungimento familiare, studi, comparabilità dei titoli e integrazione.', 'Guidance and assistance with consular appointments, family reunification, studies, qualification comparability and integration.', 'Orientación y asistencia para citas consulares, reagrupación familiar, estudios, comparabilidad de títulos e integración.'],
    'Les témoignages de clients et partenaires de NOVIA SOLUTIONS seront publiés avec leur accord.': ['Le testimonianze dei clienti e dei partner di NOVIA SOLUTIONS saranno pubblicate con il loro consenso.', 'Testimonials from NOVIA SOLUTIONS clients and partners will be published with their permission.', 'Los testimonios de clientes y colaboradores de NOVIA SOLUTIONS se publicarán con su consentimiento.'],
    'Accès rapide aux propositions': ['Accesso rapido alle proposte', 'Quick access to proposals', 'Acceso rápido a las propuestas'],
    'Catalogue des formations': ['Catalogo dei corsi', 'Training catalogue', 'Catálogo de formación'],
    'Crédits des photographies': ['Crediti fotografici', 'Photo credits', 'Créditos de las fotografías'],
    'Démarches accompagnées': ['Procedure assistite', 'Supported procedures', 'Trámites con acompañamiento'],
    'Découvrez nos engagements': ['Scopri i nostri impegni', 'Discover our commitments', 'Descubre nuestros compromisos'],
    'Nos valeurs et mission': ['I nostri valori e la nostra missione', 'Our values and mission', 'Nuestros valores y misión'],
    'Navigation principale': ['Navigazione principale', 'Main navigation', 'Navegación principal'],
    'Passer à l’action': ['Passa all’azione', 'Take action', 'Pasar a la acción'],
    'Présentation du fondateur de NOVIA SOLUTIONS': ['Presentazione del fondatore di NOVIA SOLUTIONS', 'About the founder of NOVIA SOLUTIONS', 'Presentación del fundador de NOVIA SOLUTIONS'],
    'AMADOU SANOGO, fondateur de NOVIA SOLUTIONS': ['AMADOU SANOGO, fondatore di NOVIA SOLUTIONS', 'AMADOU SANOGO, founder of NOVIA SOLUTIONS', 'AMADOU SANOGO, fundador de NOVIA SOLUTIONS'],
    'Amadou Sanogo, fondateur, et Bini Gabriele, consultant et coordinateur des projets chez NOVIA SOLUTIONS.': ['Amadou Sanogo, fondatore, e Bini Gabriele, consulente e coordinatore dei progetti di NOVIA SOLUTIONS.', 'Amadou Sanogo, founder, and Bini Gabriele, consultant and project coordinator at NOVIA SOLUTIONS.', 'Amadou Sanogo, fundador, y Bini Gabriele, consultor y coordinador de proyectos de NOVIA SOLUTIONS.'],
    'Bini Gabriele, consultant et coordinateur des projets de NOVIA SOLUTIONS': ['Bini Gabriele, consulente e coordinatore dei progetti di NOVIA SOLUTIONS', 'Bini Gabriele, consultant and project coordinator at NOVIA SOLUTIONS', 'Bini Gabriele, consultor y coordinador de proyectos de NOVIA SOLUTIONS'],
    'NOVIA SOLUTIONS logo': ['Logo NOVIA SOLUTIONS', 'NOVIA SOLUTIONS logo', 'Logotipo de NOVIA SOLUTIONS'],
    'Stratégie digitale': ['Strategia digitale', 'Digital strategy', 'Estrategia digital'],
    'Dès 100 €': ['Da 100 €', 'From €100', 'Desde 100 €'],
    'Montant (max 5 000 000 FCFA / ~8 000 €)': ['Importo (max. 5.000.000 FCFA / ~8.000 €)', 'Amount (max. 5,000,000 XOF / ~€8,000)', 'Importe (máx. 5.000.000 FCFA / ~8.000 €)'],
    'Entrez le code 6 chiffres': ['Inserisci il codice di 6 cifre', 'Enter the 6-digit code', 'Introduce el código de 6 dígitos'],
    'Ex : besoin de stratégie': ['Es.: esigenza strategica', 'E.g. strategy support', 'Ej.: necesidad de estrategia'],
    'Fermer la fenêtre de paiement': ['Chiudi la finestra di pagamento', 'Close the payment window', 'Cerrar la ventana de pago'],
    'Lancer le diaporama': ['Avvia la presentazione', 'Start slideshow', 'Iniciar la presentación'],
    'Aéroport de Francfort · Allemagne, Europe': ['Aeroporto di Francoforte · Germania, Europa', 'Frankfurt Airport · Germany, Europe', 'Aeropuerto de Fráncfort · Alemania, Europa'],
    'Aéroport international de Dubaï': ['Aeroporto internazionale di Dubai', 'Dubai International Airport', 'Aeropuerto internacional de Dubái'],
    'Avion au départ de l’aéroport de Francfort, photographié depuis le terminal 2': ['Aereo in partenza dall’aeroporto di Francoforte, fotografato dal terminal 2', 'Aircraft departing Frankfurt Airport, photographed from Terminal 2', 'Avión despegando del aeropuerto de Fráncfort, fotografiado desde la terminal 2'],
    'Hall du terminal 3 de l’aéroport international de Dubaï': ['Atrio del terminal 3 dell’aeroporto internazionale di Dubai', 'Terminal 3 concourse at Dubai International Airport', 'Vestíbulo de la terminal 3 del aeropuerto internacional de Dubái'],
    'Impossible de charger la photo de cet aéroport.': ['Impossibile caricare la foto di questo aeroporto.', 'Unable to load this airport photo.', 'No se pudo cargar la foto de este aeropuerto.'],
    'Le montant maximum autorisé est de 5 000 000 FCFA (environ 8 000 €).': ['L’importo massimo consentito è 5.000.000 FCFA (circa 8.000 €).', 'The maximum amount allowed is 5,000,000 XOF (approximately €8,000).', 'El importe máximo permitido es de 5.000.000 FCFA (aprox. 8.000 €).'],
    'Lancer le diaporama': ['Avvia la presentazione', 'Start slideshow', 'Iniciar la presentación'],
    'Aucun fichier sélectionné.': ['Nessun file selezionato.', 'No files selected.', 'No se ha seleccionado ningún archivo.'],
    'file-size': ['dimensione file', 'file size', 'tamaño del archivo'],
    'Découvrez le projet de billetterie en ligne de NOVIA SOLUTIONS et ses aéroports internationaux d\'Europe et de Dubaï.': ['Scopri il progetto di biglietteria online di NOVIA SOLUTIONS e gli aeroporti internazionali in Europa e a Dubai.', 'Discover NOVIA SOLUTIONS’ online ticketing project and international airports in Europe and Dubai.', 'Descubre el proyecto de venta de billetes en línea de NOVIA SOLUTIONS y los aeropuertos internacionales de Europa y Dubái.'],
    'Découvrez les formations NOVIA SOLUTIONS : auto-école italienne, initiation à l\'informatique et bureautique pour débutants.': ['Scopri i corsi NOVIA SOLUTIONS: scuola guida italiana, informatica di base e strumenti per l’ufficio.', 'Explore NOVIA SOLUTIONS training: Italian driving school, computer basics and office software for beginners.', 'Descubre la formación de NOVIA SOLUTIONS: autoescuela italiana, informática básica y ofimática para principiantes.'],
    'Découvrez nos modèles de sites web, nos propositions de partenariat et notre accompagnement pour l\'achat et le transport de véhicules en Europe.': ['Scopri i modelli di siti web, le proposte di partnership e il supporto per l’acquisto e il trasporto di veicoli in Europa.', 'Explore our website templates, partnership proposals and support for vehicle purchase and transport in Europe.', 'Descubre nuestros modelos web, propuestas de colaboración y acompañamiento para comprar y transportar vehículos en Europa.'],
    'Hall du terminal 2 de l\'aéroport de Heathrow à Londres': ['Atrio del terminal 2 dell’aeroporto di Heathrow a Londra', 'Terminal 2 concourse at Heathrow Airport in London', 'Vestíbulo de la terminal 2 del aeropuerto de Heathrow en Londres'],
    'Jours disponibles': ['Giorni disponibili', 'Available days', 'Días disponibles'],
    'Nous vous aidons à comprendre les étapes, préparer vos questions et vous orienter vers les organismes compétents selon votre situation et votre pays de destination.': ['Ti aiutiamo a comprendere le fasi, preparare le domande e individuare gli enti competenti in base alla tua situazione e al paese di destinazione.', 'We help you understand the steps, prepare your questions and find the relevant organisations based on your situation and destination country.', 'Te ayudamos a comprender los pasos, preparar tus preguntas y encontrar los organismos competentes según tu situación y país de destino.'],
    'Orientation et assistance pour les rendez-vous consulaires, le regroupement familial, les études, la comparabilité des diplômes et l\'intégration.': ['Orientamento e assistenza per appuntamenti consolari, ricongiungimento familiare, studi, comparabilità dei titoli e integrazione.', 'Guidance and assistance with consular appointments, family reunification, studies, qualification comparability and integration.', 'Orientación y asistencia para citas consulares, reagrupación familiar, estudios, comparabilidad de títulos e integración.'],
    'Repérage des étapes et des pièces à préparer pour une demande de rendez-vous auprès de l’ambassade ou du prestataire officiel concerné, notamment dans le cadre d’un regroupement familial.': ['Individuazione delle fasi e dei documenti da preparare per richiedere un appuntamento presso l’ambasciata o il fornitore ufficiale competente, in particolare per il ricongiungimento familiare.', 'Identify the steps and documents needed to request an appointment with the relevant embassy or official provider, including for family reunification.', 'Identificación de los pasos y documentos necesarios para solicitar una cita en la embajada o entidad oficial correspondiente, especialmente para la reagrupación familiar.'],
    'mobile.de · annonces auto': ['mobile.de · annunci auto', 'mobile.de · car listings', 'mobile.de · anuncios de coches'],
    'OTOMOTO · voitures particulières': ['OTOMOTO · autovetture', 'OTOMOTO · passenger cars', 'OTOMOTO · turismos'],
    'Partenariats': ['Partnership', 'Partnerships', 'Colaboraciones'],
    'Passer à l’action': ['Passa all’azione', 'Take action', 'Pasar a la acción'],
    'Être informé de l\'ouverture': ['Ricevi aggiornamenti sul lancio', 'Get launch updates', 'Recibir novedades del lanzamiento'],
    'Il apporte à NOVIA SOLUTIONS un sens aigu de la rigueur, de la stratégie et de l’accompagnement.': ['Apporta a NOVIA SOLUTIONS rigore, visione strategica e capacità di supporto.', 'He brings rigour, strategic insight and a strong commitment to support NOVIA SOLUTIONS.', 'Aporta rigor, visión estratégica y capacidad de acompañamiento a NOVIA SOLUTIONS.'],
    "Passer à l'action": ['Passa all’azione', 'Take action', 'Pasar a la acción'],
    '2ememain · autos': ['2ememain · auto', '2ememain · cars', '2ememain · coches'],
    'Dubaï : EditQ,': ['Dubai: EditQ,', 'Dubai: EditQ,', 'Dubái: EditQ,'],
    'Votre demande et ses pièces jointes ont bien été envoyées.': ['La tua richiesta e i relativi allegati sono stati inviati correttamente.', 'Your request and attachments have been sent successfully.', 'Tu solicitud y sus archivos adjuntos se han enviado correctamente.'],
    'Votre demande a été acceptée pour envoi. Si vous ne recevez pas de réponse, contactez-nous directement.': ['La tua richiesta è stata accettata per l’invio. Se non ricevi risposta, contattaci direttamente.', 'Your request was accepted for delivery. If you do not receive a response, contact us directly.', 'Tu solicitud se ha aceptado para su envío. Si no recibes respuesta, contáctanos directamente.'],
    'Veuillez renseigner tous les champs obligatoires.': ['Compila tutti i campi obbligatori.', 'Please complete all required fields.', 'Completa todos los campos obligatorios.'],
    'Veuillez accepter d’être recontacté pour envoyer votre demande.': ['Accetta di essere ricontattato per inviare la richiesta.', 'Please agree to be contacted so your request can be sent.', 'Acepta que te contacten para enviar la solicitud.'],
    "Veuillez accepter d'être recontacté pour envoyer votre demande.": ['Accetta di essere ricontattato per inviare la richiesta.', 'Please agree to be contacted so your request can be sent.', 'Acepta que te contacten para enviar la solicitud.'],
    'Veuillez accepter d’être recontacté pour confirmer le rendez-vous.': ['Accetta di essere ricontattato per confermare l’appuntamento.', 'Please agree to be contacted to confirm the appointment.', 'Acepta que te contacten para confirmar la cita.'],
    "Veuillez accepter d'être recontacté pour confirmer le rendez-vous.": ['Accetta di essere ricontattato per confermare l’appuntamento.', 'Please agree to be contacted to confirm the appointment.', 'Acepta que te contacten para confirmar la cita.'],
    'Le service choisi est invalide.': ['Il servizio selezionato non è valido.', 'The selected service is invalid.', 'El servicio seleccionado no es válido.'],
    'Saisissez une adresse e-mail valide.': ['Inserisci un indirizzo e-mail valido.', 'Enter a valid email address.', 'Introduce una dirección de correo electrónico válida.'],
    'Un des champs dépasse la longueur autorisée.': ['Uno dei campi supera la lunghezza consentita.', 'One of the fields exceeds the allowed length.', 'Uno de los campos supera la longitud permitida.'],
    'Un nom de fichier joint est invalide.': ['Il nome di un allegato non è valido.', 'An attachment filename is invalid.', 'El nombre de un archivo adjunto no es válido.'],
    'La taille totale des pièces jointes dépasse 12 Mo.': ['La dimensione totale degli allegati supera 12 MB.', 'The total size of attachments exceeds 12 MB.', 'El tamaño total de los archivos adjuntos supera los 12 MB.'],
    'L’adresse de réception des demandes n’est pas correctement configurée.': ['L’indirizzo di ricezione delle richieste non è configurato correttamente.', 'The request recipient address is not configured correctly.', 'La dirección de recepción de solicitudes no está configurada correctamente.'],
    "L'adresse de réception des demandes n'est pas correctement configurée.": ['L’indirizzo di ricezione delle richieste non è configurato correttamente.', 'The request recipient address is not configured correctly.', 'La dirección de recepción de solicitudes no está configurada correctamente.'],
    'L’envoi des demandes n’est pas encore configuré. Veuillez réessayer ultérieurement.': ['L’invio delle richieste non è ancora configurato. Riprova più tardi.', 'Request delivery is not configured yet. Please try again later.', 'El envío de solicitudes aún no está configurado. Inténtalo más tarde.'],
    "L'envoi des demandes n'est pas encore configuré. Veuillez réessayer ultérieurement.": ['L’invio delle richieste non è ancora configurato. Riprova più tardi.', 'Request delivery is not configured yet. Please try again later.', 'El envío de solicitudes aún no está configurado. Inténtalo más tarde.'],
    'L’envoi de votre demande a échoué. Vos informations sont conservées dans le formulaire ; réessayez ou contactez-nous par e-mail.': ['L’invio della richiesta non è riuscito. I tuoi dati restano nel modulo; riprova o contattaci via e-mail.', 'Your request could not be sent. Your information remains in the form; try again or email us.', 'No se pudo enviar la solicitud. Tus datos permanecen en el formulario; inténtalo de nuevo o escríbenos por correo.'],
    "L'envoi de votre demande a échoué. Vos informations sont conservées dans le formulaire ; réessayez ou contactez-nous par e-mail.": ['L’invio della richiesta non è riuscito. I tuoi dati restano nel modulo; riprova o contattaci via e-mail.', 'Your request could not be sent. Your information remains in the form; try again or email us.', 'No se pudo enviar la solicitud. Tus datos permanecen en el formulario; inténtalo de nuevo o escríbenos por correo.'],
    'La demande de rendez-vous est invalide.': ['La richiesta di appuntamento non è valida.', 'The appointment request is invalid.', 'La solicitud de cita no es válida.'],
    'Le service ou le type de rendez-vous choisi est invalide.': ['Il servizio o il tipo di appuntamento selezionato non è valido.', 'The selected service or appointment type is invalid.', 'El servicio o tipo de cita seleccionado no es válido.'],
    'La date choisie est invalide.': ['La data selezionata non è valida.', 'The selected date is invalid.', 'La fecha seleccionada no es válida.'],
    'Cette date n’est pas disponible. Choisissez un jour ouvré à venir.': ['Questa data non è disponibile. Scegli un giorno lavorativo futuro.', 'This date is unavailable. Choose a future weekday.', 'Esta fecha no está disponible. Elige un día laborable futuro.'],
    "Cette date n'est pas disponible. Choisissez un jour ouvré à venir.": ['Questa data non è disponibile. Scegli un giorno lavorativo futuro.', 'This date is unavailable. Choose a future weekday.', 'Esta fecha no está disponible. Elige un día laborable futuro.'],
    'Le créneau choisi n’est pas valide.': ['L’orario selezionato non è valido.', 'The selected time slot is invalid.', 'El horario seleccionado no es válido.'],
    "Le créneau choisi n'est pas valide.": ['L’orario selezionato non è valido.', 'The selected time slot is invalid.', 'El horario seleccionado no es válido.'],
    'Ce créneau est déjà passé. Choisissez-en un autre.': ['Questo orario è già passato. Scegline un altro.', 'This time slot has already passed. Choose another.', 'Este horario ya ha pasado. Elige otro.'],
    'L’agenda Google Calendar de NOVIA SOLUTIONS n’est pas connecté.': ['Il calendario Google Calendar di NOVIA SOLUTIONS non è connesso.', 'NOVIA SOLUTIONS’ Google Calendar is not connected.', 'El calendario de Google Calendar de NOVIA SOLUTIONS no está conectado.'],
    "L'agenda Google Calendar de NOVIA SOLUTIONS n'est pas connecté.": ['Il calendario Google Calendar di NOVIA SOLUTIONS non è connesso.', 'NOVIA SOLUTIONS’ Google Calendar is not connected.', 'El calendario de Google Calendar de NOVIA SOLUTIONS no está conectado.'],
    'Ce créneau vient d’être réservé. Choisissez un autre horaire.': ['Questo orario è appena stato prenotato. Scegline un altro.', 'This time slot has just been booked. Choose another.', 'Este horario acaba de reservarse. Elige otro.'],
    "Ce créneau vient d'être réservé. Choisissez un autre horaire.": ['Questo orario è appena stato prenotato. Scegline un altro.', 'This time slot has just been booked. Choose another.', 'Este horario acaba de reservarse. Elige otro.'],
    'La disponibilité de ce créneau ne peut pas être vérifiée.': ['Impossibile verificare la disponibilità di questo orario.', 'Availability for this time slot cannot be checked.', 'No se puede comprobar la disponibilidad de este horario.'],
    'Ce créneau n’est plus disponible. Choisissez un autre horaire.': ['Questo orario non è più disponibile. Scegline un altro.', 'This time slot is no longer available. Choose another.', 'Este horario ya no está disponible. Elige otro.'],
    "Ce créneau n'est plus disponible. Choisissez un autre horaire.": ['Questo orario non è più disponibile. Scegline un altro.', 'This time slot is no longer available. Choose another.', 'Este horario ya no está disponible. Elige otro.'],
    "La réservation n'a pas abouti. Réessayez ou contactez NOVIA SOLUTIONS.": ['La prenotazione non è andata a buon fine. Riprova o contatta NOVIA SOLUTIONS.', 'The booking could not be completed. Try again or contact NOVIA SOLUTIONS.', 'No se pudo completar la reserva. Inténtalo de nuevo o contacta con NOVIA SOLUTIONS.'],
    'Vous pouvez joindre au maximum {count} fichiers.': ['Puoi allegare al massimo {count} file.', 'You can attach up to {count} files.', 'Puedes adjuntar un máximo de {count} archivos.'],
    '{name} ({size} Mo)': ['{name} ({size} MB)', '{name} ({size} MB)', '{name} ({size} MB)'],
    'Informations sur la billetterie': ['Informazioni sulla biglietteria', 'Ticketing information', 'Información sobre la venta de billetes'],
    'Orientation pour un rendez-vous consulaire': ['Orientamento per un appuntamento consolare', 'Guidance for a consular appointment', 'Orientación para una cita consular'],
    'Orientation pour un projet d’études': ['Orientamento per un progetto di studio', 'Guidance for a study plan', 'Orientación para un proyecto de estudios'],
    "Orientation pour un projet d'études": ['Orientamento per un progetto di studio', 'Guidance for a study plan', 'Orientación para un proyecto de estudios'],
    'Orientation pour la comparabilité d’un diplôme': ['Orientamento per la comparabilità di un titolo di studio', 'Guidance on qualification comparability', 'Orientación sobre la comparabilidad de un título'],
    "Orientation pour la comparabilité d'un diplôme": ['Orientamento per la comparabilità di un titolo di studio', 'Guidance on qualification comparability', 'Orientación sobre la comparabilidad de un título'],
    'Accompagnement pour mon projet d’intégration': ['Supporto per il mio progetto di integrazione', 'Guidance for my integration plan', 'Acompañamiento para mi proyecto de integración'],
    'Formation en langue italienne': ['Corso di lingua italiana', 'Italian language training', 'Formación en italiano'],
    'Projet de création de site web': ['Progetto di creazione di un sito web', 'Website design project', 'Proyecto de creación de un sitio web'],
    'Séance de partenariat et assistance mutuelle': ['Incontro di partnership e supporto reciproco', 'Partnership and mutual support session', 'Sesión de colaboración y apoyo mutuo'],
    'Commande sur mesure de véhicule': ['Richiesta personalizzata di un veicolo', 'Custom vehicle order', 'Solicitud de vehículo a medida'],
    'Formule Essentielle': ['Piano Essenziale', 'Essential plan', 'Plan Esencial'],
    'Formule Professionnelle': ['Piano Professionale', 'Professional plan', 'Plan Profesional'],
    'Formule Premium': ['Piano Premium', 'Premium plan', 'Plan Premium'],
    'Abonnement mensuel personnalisé': ['Abbonamento mensile personalizzato', 'Custom monthly subscription', 'Suscripción mensual personalizada'],
    'Abonnement annuel personnalisé': ['Abbonamento annuale personalizzato', 'Custom annual subscription', 'Suscripción anual personalizada'],
    'Audit et consultation personnalisés': ['Analisi e consulenza personalizzate', 'Custom audit and consultation', 'Auditoría y consulta personalizadas'],
    'Marketing digital et solutions en ligne': ['Marketing digitale e soluzioni online', 'Digital marketing and online solutions', 'Marketing digital y soluciones en línea'],
    'Témoignage client ou partenaire': ['Testimonianza di un cliente o partner', 'Client or partner testimonial', 'Testimonio de cliente o colaborador'],
    'Je souhaite être informé de l’ouverture de la billetterie en ligne. Je comprends que ce message n’est pas une réservation.': ['Desidero ricevere aggiornamenti sull’apertura della biglietteria online. Comprendo che questo messaggio non costituisce una prenotazione.', 'I would like to be notified when online ticketing opens. I understand this message is not a booking.', 'Quiero recibir información cuando se abra la venta de billetes en línea. Entiendo que este mensaje no es una reserva.'],
    "Je souhaite être informé de l'ouverture de la billetterie en ligne. Je comprends que ce message n'est pas une réservation.": ['Desidero ricevere aggiornamenti sull’apertura della biglietteria online. Comprendo che questo messaggio non costituisce una prenotazione.', 'I would like to be notified when online ticketing opens. I understand this message is not a booking.', 'Quiero recibir información cuando se abra la venta de billetes en línea. Entiendo que este mensaje no es una reserva.'],
    'Indiquez le lien de l’annonce, votre budget et le pays de livraison.': ['Indica il link dell’annuncio, il tuo budget e il paese di consegna.', 'Provide the listing link, your budget and the delivery country.', 'Indica el enlace del anuncio, tu presupuesto y el país de entrega.'],
    "Indiquez le lien de l'annonce, votre budget et le pays de livraison.": ['Indica il link dell’annuncio, il tuo budget e il paese di consegna.', 'Provide the listing link, your budget and the delivery country.', 'Indica el enlace del anuncio, tu presupuesto y el país de entrega.'],
    'Je souhaite choisir la formule Essentielle à 35 €.': ['Desidero scegliere il piano Essenziale a 35 €.', 'I would like to choose the Essential plan at €35.', 'Quiero elegir el plan Esencial por 35 €.'],
    'Je souhaite partager mon expérience avec NOVIA SOLUTIONS. Vous pouvez me contacter pour valider le texte et mon accord de publication.': ['Desidero condividere la mia esperienza con NOVIA SOLUTIONS. Potete contattarmi per convalidare il testo e il mio consenso alla pubblicazione.', 'I would like to share my experience with NOVIA SOLUTIONS. You may contact me to approve the text and confirm my permission to publish it.', 'Quiero compartir mi experiencia con NOVIA SOLUTIONS. Pueden contactarme para validar el texto y mi autorización para publicarlo.'],
    'Je souhaite étudier la formule {subject} avec un budget indicatif de {budget} €.': ['Desidero valutare {subject} con un budget indicativo di {budget} €.', 'I would like to discuss {subject} with an indicative budget of €{budget}.', 'Quiero valorar {subject} con un presupuesto orientativo de {budget} €.'],
    'Espace client | NOVIA SOLUTIONS': ['Area clienti | NOVIA SOLUTIONS', 'Client area | NOVIA SOLUTIONS', 'Área de clientes | NOVIA SOLUTIONS'],
    'Espace client NOVIA SOLUTIONS : suivi des rendez-vous, devis, commandes et documents.': ['Area clienti NOVIA SOLUTIONS: gestione di appuntamenti, preventivi, ordini e documenti.', 'NOVIA SOLUTIONS client area: track appointments, quotes, orders and documents.', 'Área de clientes de NOVIA SOLUTIONS: seguimiento de citas, presupuestos, pedidos y documentos.'],
    'Suivez vos rendez-vous, devis et projets en toute simplicité.': ['Segui facilmente appuntamenti, preventivi e progetti.', 'Easily track your appointments, quotes and projects.', 'Haz un seguimiento sencillo de tus citas, presupuestos y proyectos.'],
    'Mon espace': ['La mia area', 'My area', 'Mi espacio'],
    'Tableau de bord': ['Pannello di controllo', 'Dashboard', 'Panel de control'],
    'Mes rendez-vous': ['I miei appuntamenti', 'My appointments', 'Mis citas'],
    'Mes devis': ['I miei preventivi', 'My quotes', 'Mis presupuestos'],
    'Mes commandes': ['I miei ordini', 'My orders', 'Mis pedidos'],
    'Mes documents': ['I miei documenti', 'My documents', 'Mis documentos'],
    'Support': ['Supporto', 'Support', 'Soporte'],
    '3 prochains créneaux': ['3 prossimi appuntamenti', '3 upcoming time slots', '3 próximas citas'],
    'Devis': ['Preventivi', 'Quotes', 'Presupuestos'],
    '2 devis en attente': ['2 preventivi in attesa', '2 quotes pending', '2 presupuestos pendientes'],
    'Commandes': ['Ordini', 'Orders', 'Pedidos'],
    '1 commande validée': ['1 ordine confermato', '1 order confirmed', '1 pedido confirmado'],
    'Activité récente': ['Attività recente', 'Recent activity', 'Actividad reciente'],
    'Devis envoyé le 10/10/2026': ['Preventivo inviato il 10/10/2026', 'Quote sent on 10/10/2026', 'Presupuesto enviado el 10/10/2026'],
    'Rendez-vous confirmé pour le 15/10/2026': ['Appuntamento confermato per il 15/10/2026', 'Appointment confirmed for 15/10/2026', 'Cita confirmada para el 15/10/2026'],
    'Commande validée : Offre Professionnelle': ['Ordine confermato: Piano Professionale', 'Order confirmed: Professional plan', 'Pedido confirmado: Plan Profesional'],
    'Origine de la demande non autorisée.': ['Origine della richiesta non autorizzata.', 'Request origin is not authorised.', 'El origen de la solicitud no está autorizado.'],
    'Les disponibilités Google Calendar sont momentanément indisponibles.': ['Le disponibilità di Google Calendar non sono momentaneamente disponibili.', 'Google Calendar availability is temporarily unavailable.', 'La disponibilidad de Google Calendar no está disponible temporalmente.'],
    'La connexion Google Calendar doit être renouvelée.': ['È necessario rinnovare la connessione a Google Calendar.', 'The Google Calendar connection must be renewed.', 'Es necesario renovar la conexión de Google Calendar.'],
    'Le mois demandé doit être au format AAAA-MM.': ['Il mese richiesto deve essere nel formato AAAA-MM.', 'The requested month must be in YYYY-MM format.', 'El mes solicitado debe tener el formato AAAA-MM.'],
    'La demande dépasse la taille maximale autorisée.': ['La richiesta supera la dimensione massima consentita.', 'The request exceeds the maximum permitted size.', 'La solicitud supera el tamaño máximo permitido.'],
    'Un des fichiers joints est vide.': ['Uno degli allegati è vuoto.', 'One of the attachments is empty.', 'Uno de los archivos adjuntos está vacío.'],
    'Un fichier PDF semble invalide.': ['Un file PDF sembra non valido.', 'A PDF file appears to be invalid.', 'Un archivo PDF parece no ser válido.'],
    'Un fichier JPG semble invalide.': ['Un file JPG sembra non valido.', 'A JPG file appears to be invalid.', 'Un archivo JPG parece no ser válido.'],
    'Un fichier PNG semble invalide.': ['Un file PNG sembra non valido.', 'A PNG file appears to be invalid.', 'Un archivo PNG parece no ser válido.'],
    'Un fichier DOCX semble invalide.': ['Un file DOCX sembra non valido.', 'A DOCX file appears to be invalid.', 'Un archivo DOCX parece no ser válido.'],
    'Formats autorisés : PDF, JPG, PNG et DOCX.': ['Formati consentiti: PDF, JPG, PNG e DOCX.', 'Allowed formats: PDF, JPG, PNG and DOCX.', 'Formatos permitidos: PDF, JPG, PNG y DOCX.'],
  };

  const languageOptions = [
    ['fr', 'Français'],
    ['it', 'Italiano'],
    ['en', 'English'],
    ['es', 'Español'],
  ];
  const localeByLanguage = { fr: 'fr-FR', it: 'it-IT', en: 'en-GB', es: 'es-ES' };
  const currencyRate = 655.957;
  const currencyLabels = {
    fr: ['Devise', 'Conversion indicative : 1 € = 655,957 FCFA (XOF).'],
    it: ['Valuta', 'Conversione indicativa: 1 € = 655,957 FCFA (XOF).'],
    en: ['Currency', 'Indicative conversion: €1 = 655.957 FCFA (XOF).'],
    es: ['Moneda', 'Conversión orientativa: 1 € = 655,957 FCFA (XOF).'],
  };
  const phraseTemplates = Object.entries(phraseTranslations).filter(([phrase]) => phrase.includes('{'));
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  function getLanguage() {
    try {
      const savedLanguage = window.localStorage.getItem('novia-language');
      return languageOptions.some(([code]) => code === savedLanguage) ? savedLanguage : 'fr';
    } catch (error) {
      console.warn('Impossible de lire la langue enregistrée.', error);
      return 'fr';
    }
  }

  let language = getLanguage();
  let currency = 'EUR';
  try {
    if (window.localStorage.getItem('novia-currency') === 'XOF') currency = 'XOF';
  } catch (error) {
    console.warn('Impossible de lire la devise enregistrée.', error);
  }

  function convertPriceText(text) {
    if (currency !== 'XOF') return text;
    return text.replace(/(?:€\s*(\d+(?:[.,]\d+)?)|(\d+(?:[.,]\d+)?)\s*€)/g, (_, prefix, suffix) => {
      const amount = Number((prefix || suffix).replace(',', '.'));
      return `≈ ${new Intl.NumberFormat(localeByLanguage[language]).format(Math.round(amount * currencyRate))} FCFA`;
    });
  }

  function sourcePhrase(source) {
    const phrase = String(source).trim().replace(/\s+/g, ' ');
    if (phraseTranslations[phrase]) return phrase;
    for (const [original, translations] of Object.entries(phraseTranslations)) {
      if (translations.includes(phrase)) return original;
    }
    return phrase;
  }

  function translatedText(source, languageCode = language) {
    const phrase = sourcePhrase(source);
    const translation = phraseTranslations[phrase];
    if (languageCode === 'fr' || !translation) return phrase;
    return translation[languageCode === 'it' ? 0 : languageCode === 'en' ? 1 : 2] || phrase;
  }

  function translatedTemplate(source, languageCode = language) {
    const normalizedSource = String(source).trim().replace(/\s+/g, ' ');
    if (languageCode === 'fr') return normalizedSource;
    const exact = translatedText(normalizedSource, languageCode);
    if (exact !== normalizedSource) return exact;

    for (const [template, values] of phraseTemplates) {
      const matcher = new RegExp(`^${template.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\\{[^}]+\\\}/g, '(.+?)')}$`);
      const match = normalizedSource.match(matcher);
      if (!match) continue;
      const translated = values[languageCode === 'it' ? 0 : languageCode === 'en' ? 1 : 2] || template;
      let index = 1;
      return translated.replace(/\{[^}]+\}/g, () => translatedText(match[index++] || '', languageCode));
    }

    return exact;
  }

  function translateTextNode(node) {
    if (!node.parentElement || node.parentElement.closest('script, style, [data-i18n-ignore]')) return;
    const original = originalText.has(node) ? originalText.get(node) : node.nodeValue;
    if (!originalText.has(node)) originalText.set(node, original);
    const source = sourcePhrase(original);
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    let translated = translatedTemplate(source);
    if (node.parentElement.closest('[data-currency-convert]')) translated = convertPriceText(translated);
    if (node.parentElement.matches('[data-currency-budget-label]') && currency === 'XOF') {
      translated = translated.replace('€', 'FCFA');
    }
    const value = `${leading}${translated}${trailing}`;
    if (node.nodeValue !== value) node.nodeValue = value;
  }

  function translateAttribute(element, attribute) {
    if (!element.hasAttribute(attribute)) return;
    let attributes = originalAttributes.get(element);
    if (!attributes) {
      attributes = new Map();
      originalAttributes.set(element, attributes);
    }
    if (!attributes.has(attribute)) attributes.set(attribute, sourcePhrase(element.getAttribute(attribute)));
    const source = attributes.get(attribute);
    let translated = translatedTemplate(source);
    if (attribute === 'placeholder' && element.matches('[name="budget"]')) translated = convertPriceText(translated);
    if (element.getAttribute(attribute) !== translated) element.setAttribute(attribute, translated);
  }

  function setTranslatedAttribute(element, attribute, source) {
    let attributes = originalAttributes.get(element);
    if (!attributes) {
      attributes = new Map();
      originalAttributes.set(element, attributes);
    }
    const phrase = sourcePhrase(source);
    attributes.set(attribute, phrase);
    element.setAttribute(attribute, translatedTemplate(phrase));
  }

  function translatePage() {
    document.documentElement.lang = language;
    document.title = translatedText(originalTitle);

    const description = document.querySelector('meta[name="description"]');
    if (description) translateAttribute(description, 'content');

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = walker.nextNode())) translateTextNode(textNode);

    document.querySelectorAll('[aria-label], [title], [placeholder], img[alt]').forEach((element) => {
      ['aria-label', 'title', 'placeholder', 'alt'].forEach((attribute) => translateAttribute(element, attribute));
    });

    document.querySelectorAll('.language-switcher select').forEach((select) => {
      select.value = language;
    });
    const currencyLabel = document.getElementById('currencyLabel');
    const currencyNote = document.getElementById('currencyNote');
    if (currencyLabel) currencyLabel.textContent = currencyLabels[language][0];
    if (currencyNote) currencyNote.textContent = currencyLabels[language][1];
  }

  const originalTitle = document.title;

  function saveLanguage(nextLanguage) {
    language = nextLanguage;
    try {
      window.localStorage.setItem('novia-language', language);
    } catch (error) {
      console.warn('Impossible d’enregistrer la langue choisie.', error);
    }
    translatePage();
    window.dispatchEvent(new CustomEvent('novia:languagechange', { detail: { language } }));
  }

  function addLanguageSelector() {
    const host = document.querySelector('.nav-wrap') || document.querySelector('.brand-header');
    if (!host) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'language-switcher';
    wrapper.setAttribute('data-i18n-ignore', '');

    const select = document.createElement('select');
    select.setAttribute('aria-label', 'Changer de langue');
    languageOptions.forEach(([code, label]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = label;
      select.append(option);
    });
    select.value = language;
    select.addEventListener('change', () => saveLanguage(select.value));
    wrapper.append(select);
    host.append(wrapper);
  }

  function addCurrencySelector() {
    const main = document.querySelector('main');
    if (!main) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'currency-bar';
    wrapper.setAttribute('data-i18n-ignore', '');
    wrapper.innerHTML = '<label id="currencyLabel" for="currencySelect"></label><select id="currencySelect"><option value="EUR">EUR (€)</option><option value="XOF">FCFA (XOF)</option></select><span id="currencyNote"></span>';
    const select = wrapper.querySelector('select');
    select.value = currency;
    select.addEventListener('change', () => {
      const previousCurrency = currency;
      currency = select.value;
      try {
        window.localStorage.setItem('novia-currency', currency);
      } catch (error) {
        console.warn('Impossible d’enregistrer la devise choisie.', error);
      }
      translatePage();
      window.dispatchEvent(new CustomEvent('novia:currencychange', { detail: { currency, previousCurrency } }));
    });
    main.prepend(wrapper);
  }

  window.NoviaI18n = {
    get language() {
      return language;
    },
    get locale() {
      return localeByLanguage[language] || localeByLanguage.fr;
    },
    get currency() {
      return currency;
    },
    currencyRate,
    convertPriceText,
    t: translatedTemplate,
    setTranslatedAttribute,
    setLanguage: saveLanguage,
  };

  addLanguageSelector();
  addCurrencySelector();
  translatePage();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        translateAttribute(mutation.target, mutation.attributeName);
      } else if (mutation.type === 'characterData') {
        translateTextNode(mutation.target);
      } else {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node);
          } else if (node.nodeType === Node.ELEMENT_NODE && !node.matches('.language-switcher')) {
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            let textNode;
            while ((textNode = walker.nextNode())) translateTextNode(textNode);
            if (node.matches('[aria-label], [title], [placeholder], img[alt]')) {
              ['aria-label', 'title', 'placeholder', 'alt'].forEach((attribute) => translateAttribute(node, attribute));
            }
          }
        });
      }
    });
  });
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['aria-label', 'title', 'placeholder', 'alt'],
    childList: true,
    characterData: true,
    subtree: true,
  });
})();
