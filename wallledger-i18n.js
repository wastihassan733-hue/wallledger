window.WL_I18N = (function(){

  /* ---------- HEADER NAV + CTA + FOOTER (plain strings) ---------- */
  var CHROME = {
    en:{
      nav:{overview:'Home', about:'About Us', accounting:'Accounting Services', planning:'Financial Operations', contact:'Contact Us'},
      cta:'Book a Consultation \u2192',
      footHead:'Industries We Work With',
      footSub:'Growing businesses across all sectors',
      industries:['MANUFACTURING','HEALTHCARE','HOSPITALITY & ENTERTAINMENT','LOGISTICS & TRANSPORTATION','PROPERTY MANAGEMENT','RETAIL']
    },
    ru:{
      nav:{overview:'Главная', about:'О нас', accounting:'Бухгалтерские услуги', planning:'Финансовые операции', contact:'Контакты'},
      cta:'Записаться на консультацию \u2192',
      footHead:'Отрасли, с которыми мы работаем',
      footSub:'Растущий бизнес во всех секторах',
      industries:['ПРОИЗВОДСТВО','ЗДРАВООХРАНЕНИЕ','ГОСТЕПРИИМСТВО И РАЗВЛЕЧЕНИЯ','ЛОГИСТИКА И ТРАНСПОРТ','УПРАВЛЕНИЕ НЕДВИЖИМОСТЬЮ','РОЗНИЧНАЯ ТОРГОВЛЯ']
    },
    es:{
      nav:{overview:'Inicio', about:'Nosotros', accounting:'Servicios contables', planning:'Operaciones financieras', contact:'Contacto'},
      cta:'Reservar una consulta \u2192',
      footHead:'Sectores con los que trabajamos',
      footSub:'Empresas en crecimiento en todos los sectores',
      industries:['FABRICACIÓN','SALUD','HOSTELERÍA Y OCIO','LOGÍSTICA Y TRANSPORTE','GESTIÓN INMOBILIARIA','COMERCIO MINORISTA']
    }
  };

  /* ---------- BOOK CONTENT (function per language) ----------
     Each returns the same object shape your main script expects:
     { overview:{left,right}, about:{left,right}, ... , terms:{left,right} }
     IMG = {overview, aboutL, aboutR}, ic = your icon fn, IC = your icon map */

  function EN(IMG, ic, IC){ return {
    overview:{
      left:'<div class="we-ov-left">'
        +'<div class="overview-head we-eyebrow">Building financial clarity<br>for growing businesses<div class="we-rule"></div></div>'
        +'<div class="overview-center">'
        +'<h1 class="we-h1 block">Your financials.<em>Finally under control.</em></h1>'
        +'<div class="we-rule" style="margin:14px 0"></div>'
        +'<p class="we-sub">Financial clarity, time savings, lower risks, and real opportunities for business growth.</p>'
        +'<div class="we-hero-actions"><a class="we-btn" data-tab="contact">Schedule Free Consultation &rarr;</a></div>'
        +'</div><div class="overview-footer"></div></div>',
      right:'<div class="we-page-home">'+IMG.overview
        +'<h2 class="we-h2">Your business already uses <em>multiple systems</em>.</h2>'
        +'<p class="we-label">We turn that data into financial clarity.</p>'
        +'<div class="we-body-txt we-overview-txt">'
        +'<p>WallLedger collects, cleans, and organizes information from all your systems and turns it into clear reports and strategic recommendations.</p>'
        +'<p class="we-label" style="margin-top:10px">What We Do</p>'
        +'<div class="we-do-grid"><ul>'
        +'<li>Full-service bookkeeping</li><li>Tax planning &amp; optimization</li><li>Accounting cleanup</li><li>Management accounting</li>'
        +'<li>Cost calculation</li><li>Budgeting &amp; forecasting</li><li>New systems implementation</li><li>Data migration &amp; report setup</li>'
        +'</ul></div></div></div>'
    },
    about:{
      left:'<div class="we-eyebrow">About us</div>'
        +'<h2 class="we-h2 block">Wall Ledger<em>Where the name comes from</em></h2>'
        +'<div class="we-body-txt we-overview-txt">'
        +'<p>Merchants in Athens and Pompeii recorded debtors, prices, and obligations directly on the walls of their shops.</p>'
        +'<p>Later, Italian merchants created books with two columns — debit and credit. This gave birth to double-entry bookkeeping, the foundation of modern accounting.</p>'
        +'<p>One rule has remained unchanged for centuries: whoever controls the accounting controls the business. That is why we named the company Wall Ledger.</p>'
        +'<p style="margin-bottom:4px">• <b>Wall</b> — reliability and protection</p>'
        +'<p style="margin-bottom:4px">• <b>Ledger</b> — order and financial discipline</p>'
        +'<p>Financial clarity is the foundation of every strong business — and our team helps you build it.</p>'
        +'</div>'+IMG.aboutL,
      right:'<div class="we-eyebrow">Today</div>'
        +'<h2 class="we-h2">What we do <em>today</em><div class="we-rule" style="margin-left:0;max-width:200px;"></div></h2>'
        +'<div class="we-body-txt we-overview-txt">'
        +'<p>Today, your financial data is scattered across multiple systems — inventory, payments, sales, and operations.</p>'
        +'<p>As a result, most business owners can\'t clearly see real costs, true margins, or actual cash flow. Decisions are made on incomplete information.</p>'
        +'<p>At Wall Ledger, we bring all your data into one structured financial system. You get accurate cost calculation, clear profitability analysis, and reliable cash flow visibility.</p>'
        +'<p>This is how you stop guessing and start managing your business with real numbers.</p>'
        +'<p>Transparent accounting isn\'t just good practice — it\'s the foundation of sustainable growth.</p>'
        +'</div><img class="we-img img-about-right" src="'+IMG.aboutR+'" alt="About right">'
    },
    accounting:{
      left:'<div class="we-eyebrow we-center">Accounting &amp; Financial Operations</div>'
        +'<h2 class="we-h2 we-center">Bookkeeping, Reporting <em>&amp; Financial Operations</em></h2>'
        +'<p class="we-tagline">Accurate records. Organized books. Clear reporting every month.</p>'
        +'<div class="we-rule" style="margin-left:0;"></div>'
        +'<div class="we-col" style="padding:0"><h5><span class="we-ic">'+ic(IC.why)+'</span>WHY</h5><p>We believe business owners should sleep well at night and focus on growing their companies—not worry about tax authorities or drown in paperwork. Proper accounting is not an expense; it\u2019s a powerful tool for protecting and growing your business.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.how)+'</span>HOW</h5><p>We take a proactive approach, leverage modern technologies, and develop a deep understanding of your specific business. We stay one step ahead of potential issues and explain everything in clear, straightforward language.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.what)+'</span>WHAT</h5><p><div class="we-do-grid"><ul><li>Full-service bookkeeping and accounting.</li><li>Preparation and filing of all required tax and financial reports.</li><li>Tax optimization using fully compliant and legal strategies.</li><li>Accounting cleanup and catch-up bookkeeping.</li><li>Financial consulting and audit support.</li></ul></div></p></div>',
      right:'<div class="we-eyebrow we-center">What we deliver</div>'
        +'<h2 class="we-h2 we-center">Services <em>that keep books clean</em></h2><div class="we-rule"></div>'
        +'<div class="we-cards" style="grid-template-columns:1fr 1fr">'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.bookkeeping)+'</div><h6>Bookkeeping &amp; Monthly Accounting</h6><p>Clean books, monthly close and reconciliations you can trust.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.payroll)+'</div><h6>Payroll Support</h6><p>Reliable payroll processing, taxes and compliance.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.cleanup)+'</div><h6>Accounting Cleanup</h6><p>Untangle historical books and rebuild a solid foundation.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.finrep)+'</div><h6>Financial Reporting</h6><p>Structured monthly reports that answer the questions that matter.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.cashflow)+'</div><h6>Cash Flow Management</h6><p>Visibility, forecasts and disciplined cash operations.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.apar)+'</div><h6>AP &amp; AR Management</h6><p>Steady collections, controlled payables, healthier working capital.</p></div>'
        +'</div>'
    },
    planning:{
      left:'<div class="we-eyebrow we-center">Financial Planning &amp; Business Analysis</div>'
        +'<h2 class="we-h2 we-center">Profitability, Budgeting <em>&amp; Strategic Analysis</em></h2>'
        +'<p class="we-tagline">Turn your financial data into decisions that drive growth.</p>'
        +'<div class="we-rule" style="margin-left:0;"></div>'
        +'<div class="we-col" style="padding:0"><h5><span class="we-ic">'+ic(IC.why)+'</span>WHY</h5><p>We believe money should work for the business. True financial transparency gives business owners confidence, the ability to make faster and better decisions, and the foundation to build a company that can withstand any crisis.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.how)+'</span>HOW</h5><p>We don\u2019t just calculate numbers — we transform them into a clear financial picture, identify hidden opportunities and risks, and provide specific recommendations that have a real impact on profitability.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.what)+'</span>WHAT</h5><p><div class="we-do-grid"><ul><li>In-depth financial analysis.</li><li>Management reporting.</li><li>Budgeting and financial planning.</li><li>Cash flow forecasting.</li><li>Profitability analysis (by projects, products, and customers).</li><li>Preparation of investor and financing packages.</li></ul></div></p></div>',
      right:'<div class="we-eyebrow we-center">What we deliver</div>'
        +'<h2 class="we-h2 we-center">Analysis <em>that drives growth</em></h2><div class="we-rule"></div>'
        +'<div class="we-cards" style="grid-template-columns:1fr 1fr">'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.cost)+'</div><h6>Cost Accounting &amp; Profitability</h6><p>Understand true product, service and customer margins.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.budgeting)+'</div><h6>Budgeting &amp; Forecasting</h6><p>Rolling budgets and forecasts that reflect reality.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.business)+'</div><h6>Business Performance Analysis</h6><p>Operational and financial diagnostics for growth.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.modeling)+'</div><h6>Financial Modeling</h6><p>Models for new projects, financing and scenarios.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.inventory)+'</div><h6>ABC Inventory &amp; Warehouse</h6><p>Classify inventory, tighten warehouse economics.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.kpi)+'</div><h6>KPI &amp; Workforce Performance</h6><p>Metrics that make performance visible and actionable.</p></div>'
        +'</div>'
    },
    contact:{
      left:'<div class="we-eyebrow">Contact us</div>'
        +'<h2 class="we-h2">Let\'s talk about <em>your business.</em></h2>'
        +'<p class="we-body-txt">Whether you\'re organizing accounting, improving reporting, planning growth or simply looking for clarity in your numbers, we\'re here to help.</p>'
        +'<p class="we-body-txt" style="margin-top:8px"><em>No obligation. No pressure.</em></p>'
        +'<div class="we-rule" style="margin-left:0;max-width:300px;"></div>'
        +'<h4>Book a Free Consultation</h4>'
        +'<div class="we-form">'
        +'<div class="row"><div><label>Name</label><input type="text" id="wlName"></div><div><label>Phone / WhatsApp</label><input type="text" id="wlPhone"></div></div>'
        +'<label>Email</label><input type="email" id="wlEmail">'
        +'<label>Message</label><textarea rows="3" id="wlMsg"></textarea>'
        +'<div style="margin-top:14px"><a class="we-btn" id="wlSend" href="#">Book a Free Consultation &rarr;</a></div>'
        +'<div class="we-note"><h5 style="margin-bottom:8px">Not ready to schedule?</h5><a href="mailto:innashtodina@wallledger.com">&#9993; innashtodina@wallledger.com</a><br>We reply within one business day.</div>'
        +'<p class="wl-note" id="wlNote"></p></div>',
      right:'<div class="we-eyebrow">Preferred time</div>'
        +'<h2 class="we-h2">Pick a day <em>that works.</em><div class="we-rule" style="margin-left:0;max-width:300px;"></div></h2>'
        +'<div class="we-cal" style="margin-top:16px"><div class="cal-head">&#128197; March 2026</div>'
        +'<table><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr>'
        +'<tr><td></td><td></td><td></td><td class="d">1</td><td class="d">2</td><td class="d">3</td><td class="d">4</td></tr>'
        +'<tr><td class="d">5</td><td class="d">6</td><td class="d">7</td><td class="d">8</td><td class="d">9</td><td class="d">10</td><td class="d">11</td></tr>'
        +'<tr><td class="d">12</td><td class="d">13</td><td class="d on">14</td><td class="d">15</td><td class="d">16</td><td class="d">17</td><td class="d">18</td></tr>'
        +'<tr><td class="d">19</td><td class="d">20</td><td class="d">21</td><td class="d">22</td><td class="d">23</td><td class="d">24</td><td class="d">25</td></tr>'
        +'<tr><td class="d">26</td><td class="d">27</td><td class="d">28</td><td class="d">29</td><td class="d">30</td><td class="d">31</td><td></td></tr></table></div>'
        +'<div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:1px;color:#6b6455;margin:14px 0 6px">AVAILABLE TIMES</div>'
        +'<div class="we-times"><span class="t">9:00</span><span class="t on">10:30</span><span class="t">13:00</span><span class="t">14:30</span><span class="t">16:00</span></div>'
        +'<div class="we-note we-center" style="margin-top:30px"><strong style="font-family:Georgia,serif;font-size:16px;color:#071027;display:block;margin-bottom:6px">A quiet office. A clear plan.</strong>We never pressure. Listen carefully, and follow up with a concrete next step—every time.</div>'
    },
    privacy:{
      left:'<div class="we-eyebrow we-center">Legal</div><h1 class="we-h1 we-center" style="font-size:38px">Privacy Policy</h1>'
        +'<p class="we-tagline">Effective March 1, 2026 · WallLedger</p><div class="we-rule" style="margin-left:0;max-width:300px;"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>01 &nbsp;Overview</span><br>This Privacy Policy describes how WallLedger collects, uses and safeguards information provided through our website and services.</p>'
        +'<p><span>02 &nbsp;Information We Collect</span><br>Contact details you submit, business information shared during consultations, and standard technical data such as browser type and pages viewed.</p>'
        +'<p><span>03 &nbsp;How We Use Your Information</span><br>To respond to inquiries, deliver requested services, improve our offerings and communicate about your engagement.</p>'
        +'<p><span>04 &nbsp;Cookies</span><br>We use minimal cookies for site functionality and analytics. You can control cookies through your browser settings.</p></div>',
      right:'<div class="we-eyebrow we-center">Legal</div><h1 class="we-h1 we-center" style="font-size:38px">&nbsp;</h1><div class="we-rule"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>05 &nbsp;Your Rights</span><br>You may request access, correction or deletion of your personal information at any time by contacting us.</p>'
        +'<p><span>06 &nbsp;Data Security</span><br>We use administrative, technical and physical safeguards designed to protect your information.</p>'
        +'<p><span>07 &nbsp;Children\'s Privacy</span><br>Our services are intended for businesses and are not directed to children under 13.</p>'
        +'<p><span>08 &nbsp;Changes to This Policy</span><br>We may update this policy from time to time. The effective date will be updated accordingly.</p>'
        +'<p><span>09 &nbsp;Contact Information</span><br>Questions about this policy can be sent to hello@wallledger.com.</p></div>'
    },
    terms:{
      left:'<div class="we-eyebrow we-center">Legal</div><h1 class="we-h1 we-center" style="font-size:38px">Terms &amp; Conditions</h1>'
        +'<p class="we-tagline">Effective March 1, 2026 · WallLedger</p><div class="we-rule" style="margin-left:0;max-width:300px;"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>01 &nbsp;Use of the Website</span><br>By accessing wallledger.com you agree to use the site lawfully and in accordance with these terms.</p>'
        +'<p><span>02 &nbsp;Intellectual Property</span><br>All content, marks and materials are the property of WallLedger unless otherwise noted.</p>'
        +'<p><span>03 &nbsp;Information You Submit</span><br>You are responsible for the accuracy of information submitted through forms or during consultations.</p>'
        +'<p><span>04 &nbsp;Communications</span><br>By contacting us you consent to receive replies related to your inquiry or engagement.</p>'
        +'<p><span>05 &nbsp;Third-Party Links</span><br>The website may reference third-party resources. We are not responsible for their content or practices.</p></div>',
      right:'<div class="we-eyebrow we-center">Legal</div><h1 class="we-h1 we-center" style="font-size:38px">&nbsp;</h1><div class="we-rule"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>06 &nbsp;Disclaimer</span><br>Content is provided for general information and does not constitute professional advice for your specific situation.</p>'
        +'<p><span>07 &nbsp;Limitation of Liability</span><br>To the fullest extent permitted by law, WallLedger is not liable for indirect or consequential damages arising from use of the website.</p>'
        +'<p><span>08 &nbsp;Changes to These Terms</span><br>We may revise these terms periodically. The effective date will reflect the most recent update.</p>'
        +'<p><span>09 &nbsp;Contact Information</span><br>Questions about these terms can be sent to hello@wallledger.com.</p></div>'
    }
  };}

  function RU(IMG, ic, IC){ return {
    overview:{
      left:'<div class="we-ov-left">'
        +'<div class="overview-head we-eyebrow">Финансовая ясность<br>для растущего бизнеса<div class="we-rule"></div></div>'
        +'<div class="overview-center">'
        +'<h1 class="we-h1 block">Ваши финансы.<em>Наконец под контролем.</em></h1>'
        +'<div class="we-rule" style="margin:14px 0"></div>'
        +'<p class="we-sub">Финансовая ясность, экономия времени, меньше рисков и реальные возможности для роста бизнеса.</p>'
        +'<div class="we-hero-actions"><a class="we-btn" data-tab="contact">Записаться на бесплатную консультацию &rarr;</a></div>'
        +'</div><div class="overview-footer"></div></div>',
      right:'<div class="we-page-home">'+IMG.overview
        +'<h2 class="we-h2">Ваш бизнес уже использует <em>множество систем</em>.</h2>'
        +'<p class="we-label">Мы превращаем эти данные в финансовую ясность.</p>'
        +'<div class="we-body-txt we-overview-txt">'
        +'<p>WallLedger собирает, очищает и структурирует информацию из всех ваших систем и превращает её в понятные отчёты и стратегические рекомендации.</p>'
        +'<p class="we-label" style="margin-top:10px">Что мы делаем</p>'
        +'<div class="we-do-grid"><ul>'
        +'<li>Полный бухгалтерский учёт</li><li>Налоговое планирование и оптимизация</li><li>Восстановление учёта</li><li>Управленческий учёт</li>'
        +'<li>Расчёт себестоимости</li><li>Бюджетирование и прогнозирование</li><li>Внедрение новых систем</li><li>Миграция данных и настройка отчётности</li>'
        +'</ul></div></div></div>'
    },
    about:{
      left:'<div class="we-eyebrow">О нас</div>'
        +'<h2 class="we-h2 block">Wall Ledger<em>Откуда произошло название</em></h2>'
        +'<div class="we-body-txt we-overview-txt">'
        +'<p>Купцы в Афинах и Помпеях записывали должников, цены и обязательства прямо на стенах своих лавок.</p>'
        +'<p>Позже итальянские купцы создали книги с двумя столбцами — дебет и кредит. Так родилась двойная запись — основа современного учёта.</p>'
        +'<p>Одно правило остаётся неизменным веками: кто контролирует учёт, тот контролирует бизнес. Именно поэтому мы назвали компанию Wall Ledger.</p>'
        +'<p style="margin-bottom:4px">• <b>Wall (стена)</b> — надёжность и защита</p>'
        +'<p style="margin-bottom:4px">• <b>Ledger (книга учёта)</b> — порядок и финансовая дисциплина</p>'
        +'<p>Финансовая ясность — основа любого сильного бизнеса, и наша команда помогает вам её выстроить.</p>'
        +'</div>'+IMG.aboutL,
      right:'<div class="we-eyebrow">Сегодня</div>'
        +'<h2 class="we-h2">Что мы делаем <em>сегодня</em><div class="we-rule" style="margin-left:0;max-width:200px;"></div></h2>'
        +'<div class="we-body-txt we-overview-txt">'
        +'<p>Сегодня ваши финансовые данные разбросаны по множеству систем — склад, платежи, продажи и операции.</p>'
        +'<p>В результате большинство владельцев бизнеса не видят чётко реальных затрат, настоящей маржи и фактического денежного потока. Решения принимаются на основе неполной информации.</p>'
        +'<p>В Wall Ledger мы объединяем все ваши данные в одну структурированную финансовую систему. Вы получаете точный расчёт затрат, ясный анализ прибыльности и надёжную картину денежных потоков.</p>'
        +'<p>Так вы перестаёте гадать и начинаете управлять бизнесом на основе реальных цифр.</p>'
        +'<p>Прозрачный учёт — это не просто хорошая практика, это основа устойчивого роста.</p>'
        +'</div><img class="we-img img-about-right" src="'+IMG.aboutR+'" alt="About right">'
    },
    accounting:{
      left:'<div class="we-eyebrow we-center">Бухгалтерия и финансовые операции</div>'
        +'<h2 class="we-h2 we-center">Учёт, отчётность <em>и финансовые операции</em></h2>'
        +'<p class="we-tagline">Точные записи. Порядок в учёте. Понятная отчётность каждый месяц.</p>'
        +'<div class="we-rule" style="margin-left:0;"></div>'
        +'<div class="we-col" style="padding:0"><h5><span class="we-ic">'+ic(IC.why)+'</span>ПОЧЕМУ</h5><p>Мы считаем, что владельцы бизнеса должны спать спокойно и сосредоточиться на росте компании, а не переживать о налоговых органах и не тонуть в бумагах. Правильный учёт — это не расход, а мощный инструмент защиты и роста вашего бизнеса.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.how)+'</span>КАК</h5><p>Мы действуем проактивно, используем современные технологии и глубоко разбираемся в специфике вашего бизнеса. Мы на шаг впереди возможных проблем и объясняем всё простым, понятным языком.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.what)+'</span>ЧТО</h5><p><div class="we-do-grid"><ul><li>Полный бухгалтерский учёт.</li><li>Подготовка и сдача всех необходимых налоговых и финансовых отчётов.</li><li>Налоговая оптимизация законными и полностью прозрачными методами.</li><li>Восстановление и приведение учёта в порядок.</li><li>Финансовые консультации и поддержка при аудите.</li></ul></div></p></div>',
      right:'<div class="we-eyebrow we-center">Что вы получаете</div>'
        +'<h2 class="we-h2 we-center">Услуги, <em>которые держат учёт в порядке</em></h2><div class="we-rule"></div>'
        +'<div class="we-cards" style="grid-template-columns:1fr 1fr">'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.bookkeeping)+'</div><h6>Учёт и ежемесячная бухгалтерия</h6><p>Чистый учёт, закрытие месяца и сверки, которым можно доверять.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.payroll)+'</div><h6>Расчёт зарплаты</h6><p>Надёжный расчёт зарплаты, налогов и соблюдение требований.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.cleanup)+'</div><h6>Восстановление учёта</h6><p>Приводим в порядок историю учёта и строим надёжную основу.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.finrep)+'</div><h6>Финансовая отчётность</h6><p>Структурированные ежемесячные отчёты, отвечающие на важные вопросы.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.cashflow)+'</div><h6>Управление денежным потоком</h6><p>Прозрачность, прогнозы и дисциплина в движении денег.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.apar)+'</div><h6>Дебиторка и кредиторка</h6><p>Стабильные поступления, контроль выплат, здоровый оборотный капитал.</p></div>'
        +'</div>'
    },
    planning:{
      left:'<div class="we-eyebrow we-center">Финансовое планирование и бизнес-анализ</div>'
        +'<h2 class="we-h2 we-center">Прибыльность, бюджет <em>и стратегический анализ</em></h2>'
        +'<p class="we-tagline">Превращаем финансовые данные в решения, которые двигают рост.</p>'
        +'<div class="we-rule" style="margin-left:0;"></div>'
        +'<div class="we-col" style="padding:0"><h5><span class="we-ic">'+ic(IC.why)+'</span>ПОЧЕМУ</h5><p>Мы считаем, что деньги должны работать на бизнес. Настоящая финансовая прозрачность даёт владельцам уверенность, возможность принимать более быстрые и точные решения и основу для компании, способной выстоять в любой кризис.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.how)+'</span>КАК</h5><p>Мы не просто считаем цифры — мы превращаем их в ясную финансовую картину, находим скрытые возможности и риски и даём конкретные рекомендации, реально влияющие на прибыльность.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.what)+'</span>ЧТО</h5><p><div class="we-do-grid"><ul><li>Глубокий финансовый анализ.</li><li>Управленческая отчётность.</li><li>Бюджетирование и финансовое планирование.</li><li>Прогнозирование денежных потоков.</li><li>Анализ прибыльности (по проектам, продуктам и клиентам).</li><li>Подготовка пакетов для инвесторов и финансирования.</li></ul></div></p></div>',
      right:'<div class="we-eyebrow we-center">Что вы получаете</div>'
        +'<h2 class="we-h2 we-center">Анализ, <em>который двигает рост</em></h2><div class="we-rule"></div>'
        +'<div class="we-cards" style="grid-template-columns:1fr 1fr">'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.cost)+'</div><h6>Учёт затрат и прибыльность</h6><p>Понимание реальной маржи по продуктам, услугам и клиентам.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.budgeting)+'</div><h6>Бюджет и прогнозы</h6><p>Скользящие бюджеты и прогнозы, отражающие реальность.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.business)+'</div><h6>Анализ эффективности бизнеса</h6><p>Операционная и финансовая диагностика для роста.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.modeling)+'</div><h6>Финансовое моделирование</h6><p>Модели для новых проектов, финансирования и сценариев.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.inventory)+'</div><h6>ABC-анализ запасов и склад</h6><p>Классификация запасов, оптимизация складской экономики.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.kpi)+'</div><h6>KPI и эффективность персонала</h6><p>Метрики, которые делают результативность видимой и управляемой.</p></div>'
        +'</div>'
    },
    contact:{
      left:'<div class="we-eyebrow">Контакты</div>'
        +'<h2 class="we-h2">Давайте обсудим <em>ваш бизнес.</em></h2>'
        +'<p class="we-body-txt">Организуете ли вы учёт, улучшаете отчётность, планируете рост или просто ищете ясность в цифрах — мы готовы помочь.</p>'
        +'<p class="we-body-txt" style="margin-top:8px"><em>Без обязательств. Без давления.</em></p>'
        +'<div class="we-rule" style="margin-left:0;max-width:300px;"></div>'
        +'<h4>Записаться на бесплатную консультацию</h4>'
        +'<div class="we-form">'
        +'<div class="row"><div><label>Имя</label><input type="text" id="wlName"></div><div><label>Телефон / WhatsApp</label><input type="text" id="wlPhone"></div></div>'
        +'<label>Эл. почта</label><input type="email" id="wlEmail">'
        +'<label>Сообщение</label><textarea rows="3" id="wlMsg"></textarea>'
        +'<div style="margin-top:14px"><a class="we-btn" id="wlSend" href="#">Записаться на бесплатную консультацию &rarr;</a></div>'
        +'<div class="we-note"><h5 style="margin-bottom:8px">Пока не готовы записаться?</h5><a href="mailto:innashtodina@wallledger.com">&#9993; innashtodina@wallledger.com</a><br>Мы отвечаем в течение одного рабочего дня.</div>'
        +'<p class="wl-note" id="wlNote"></p></div>',
      right:'<div class="we-eyebrow">Удобное время</div>'
        +'<h2 class="we-h2">Выберите удобный <em>день.</em><div class="we-rule" style="margin-left:0;max-width:300px;"></div></h2>'
        +'<div class="we-cal" style="margin-top:16px"><div class="cal-head">&#128197; March 2026</div>'
        +'<table><tr><th>В</th><th>П</th><th>В</th><th>С</th><th>Ч</th><th>П</th><th>С</th></tr>'
        +'<tr><td></td><td></td><td></td><td class="d">1</td><td class="d">2</td><td class="d">3</td><td class="d">4</td></tr>'
        +'<tr><td class="d">5</td><td class="d">6</td><td class="d">7</td><td class="d">8</td><td class="d">9</td><td class="d">10</td><td class="d">11</td></tr>'
        +'<tr><td class="d">12</td><td class="d">13</td><td class="d on">14</td><td class="d">15</td><td class="d">16</td><td class="d">17</td><td class="d">18</td></tr>'
        +'<tr><td class="d">19</td><td class="d">20</td><td class="d">21</td><td class="d">22</td><td class="d">23</td><td class="d">24</td><td class="d">25</td></tr>'
        +'<tr><td class="d">26</td><td class="d">27</td><td class="d">28</td><td class="d">29</td><td class="d">30</td><td class="d">31</td><td></td></tr></table></div>'
        +'<div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:1px;color:#6b6455;margin:14px 0 6px">ДОСТУПНОЕ ВРЕМЯ</div>'
        +'<div class="we-times"><span class="t">9:00</span><span class="t on">10:30</span><span class="t">13:00</span><span class="t">14:30</span><span class="t">16:00</span></div>'
        +'<div class="we-note we-center" style="margin-top:30px"><strong style="font-family:Georgia,serif;font-size:16px;color:#071027;display:block;margin-bottom:6px">Спокойный офис. Ясный план.</strong>Мы никогда не давим. Внимательно слушаем и всегда предлагаем конкретный следующий шаг.</div>'
    },
    privacy:{
      left:'<div class="we-eyebrow we-center">Юридическая информация</div><h1 class="we-h1 we-center" style="font-size:38px">Политика конфиденциальности</h1>'
        +'<p class="we-tagline">Действует с 1 марта 2026 · WallLedger</p><div class="we-rule" style="margin-left:0;max-width:300px;"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>01 &nbsp;Общие положения</span><br>Эта Политика конфиденциальности описывает, как WallLedger собирает, использует и защищает информацию, предоставленную через наш сайт и услуги.</p>'
        +'<p><span>02 &nbsp;Какие данные мы собираем</span><br>Контактные данные, которые вы предоставляете, информацию о бизнесе, переданную во время консультаций, и стандартные технические данные, такие как тип браузера и просмотренные страницы.</p>'
        +'<p><span>03 &nbsp;Как мы используем данные</span><br>Чтобы отвечать на запросы, предоставлять услуги, улучшать наши предложения и поддерживать связь по вашему проекту.</p>'
        +'<p><span>04 &nbsp;Файлы cookie</span><br>Мы используем минимальные cookie для работы сайта и аналитики. Вы можете управлять ими в настройках браузера.</p></div>',
      right:'<div class="we-eyebrow we-center">Юридическая информация</div><h1 class="we-h1 we-center" style="font-size:38px">&nbsp;</h1><div class="we-rule"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>05 &nbsp;Ваши права</span><br>Вы можете запросить доступ, исправление или удаление ваших персональных данных в любой момент, связавшись с нами.</p>'
        +'<p><span>06 &nbsp;Безопасность данных</span><br>Мы применяем административные, технические и физические меры для защиты вашей информации.</p>'
        +'<p><span>07 &nbsp;Конфиденциальность детей</span><br>Наши услуги предназначены для бизнеса и не адресованы детям младше 13 лет.</p>'
        +'<p><span>08 &nbsp;Изменения в политике</span><br>Мы можем время от времени обновлять эту политику. Дата вступления в силу будет обновляться соответственно.</p>'
        +'<p><span>09 &nbsp;Контактная информация</span><br>Вопросы по этой политике можно направлять на hello@wallledger.com.</p></div>'
    },
    terms:{
      left:'<div class="we-eyebrow we-center">Юридическая информация</div><h1 class="we-h1 we-center" style="font-size:38px">Условия использования</h1>'
        +'<p class="we-tagline">Действует с 1 марта 2026 · WallLedger</p><div class="we-rule" style="margin-left:0;max-width:300px;"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>01 &nbsp;Использование сайта</span><br>Заходя на wallledger.com, вы соглашаетесь использовать сайт законно и в соответствии с этими условиями.</p>'
        +'<p><span>02 &nbsp;Интеллектуальная собственность</span><br>Весь контент, товарные знаки и материалы являются собственностью WallLedger, если не указано иное.</p>'
        +'<p><span>03 &nbsp;Информация, которую вы отправляете</span><br>Вы несёте ответственность за достоверность информации, отправленной через формы или во время консультаций.</p>'
        +'<p><span>04 &nbsp;Коммуникации</span><br>Связываясь с нами, вы соглашаетесь получать ответы, связанные с вашим запросом или сотрудничеством.</p>'
        +'<p><span>05 &nbsp;Ссылки на сторонние ресурсы</span><br>Сайт может ссылаться на сторонние ресурсы. Мы не несём ответственности за их содержание или практики.</p></div>',
      right:'<div class="we-eyebrow we-center">Юридическая информация</div><h1 class="we-h1 we-center" style="font-size:38px">&nbsp;</h1><div class="we-rule"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>06 &nbsp;Отказ от ответственности</span><br>Контент предоставляется для общей информации и не является профессиональной консультацией по вашей конкретной ситуации.</p>'
        +'<p><span>07 &nbsp;Ограничение ответственности</span><br>В максимальной степени, допустимой законом, WallLedger не несёт ответственности за косвенный или сопутствующий ущерб от использования сайта.</p>'
        +'<p><span>08 &nbsp;Изменения условий</span><br>Мы можем периодически пересматривать эти условия. Дата вступления в силу будет отражать последнее обновление.</p>'
        +'<p><span>09 &nbsp;Контактная информация</span><br>Вопросы по этим условиям можно направлять на hello@wallledger.com.</p></div>'
    }
  };}

  function ES(IMG, ic, IC){ return {
    overview:{
      left:'<div class="we-ov-left">'
        +'<div class="overview-head we-eyebrow">Claridad financiera<br>para empresas en crecimiento<div class="we-rule"></div></div>'
        +'<div class="overview-center">'
        +'<h1 class="we-h1 block">Tus finanzas.<em>Por fin bajo control.</em></h1>'
        +'<div class="we-rule" style="margin:14px 0"></div>'
        +'<p class="we-sub">Claridad financiera, ahorro de tiempo, menos riesgos y oportunidades reales de crecimiento para tu negocio.</p>'
        +'<div class="we-hero-actions"><a class="we-btn" data-tab="contact">Reserva una consulta gratuita &rarr;</a></div>'
        +'</div><div class="overview-footer"></div></div>',
      right:'<div class="we-page-home">'+IMG.overview
        +'<h2 class="we-h2">Tu negocio ya usa <em>múltiples sistemas</em>.</h2>'
        +'<p class="we-label">Convertimos esos datos en claridad financiera.</p>'
        +'<div class="we-body-txt we-overview-txt">'
        +'<p>WallLedger recopila, depura y organiza la información de todos tus sistemas y la convierte en informes claros y recomendaciones estratégicas.</p>'
        +'<p class="we-label" style="margin-top:10px">Qué hacemos</p>'
        +'<div class="we-do-grid"><ul>'
        +'<li>Contabilidad integral</li><li>Planificación y optimización fiscal</li><li>Regularización contable</li><li>Contabilidad de gestión</li>'
        +'<li>Cálculo de costes</li><li>Presupuestos y previsiones</li><li>Implementación de nuevos sistemas</li><li>Migración de datos e informes</li>'
        +'</ul></div></div></div>'
    },
    about:{
      left:'<div class="we-eyebrow">Nosotros</div>'
        +'<h2 class="we-h2 block">Wall Ledger<em>De dónde viene el nombre</em></h2>'
        +'<div class="we-body-txt we-overview-txt">'
        +'<p>Los comerciantes de Atenas y Pompeya anotaban deudores, precios y obligaciones directamente en las paredes de sus tiendas.</p>'
        +'<p>Más tarde, los mercaderes italianos crearon libros con dos columnas — debe y haber. Así nació la partida doble, la base de la contabilidad moderna.</p>'
        +'<p>Una regla no ha cambiado en siglos: quien controla la contabilidad controla el negocio. Por eso llamamos a la empresa Wall Ledger.</p>'
        +'<p style="margin-bottom:4px">• <b>Wall (muro)</b> — fiabilidad y protección</p>'
        +'<p style="margin-bottom:4px">• <b>Ledger (libro mayor)</b> — orden y disciplina financiera</p>'
        +'<p>La claridad financiera es la base de todo negocio sólido, y nuestro equipo te ayuda a construirla.</p>'
        +'</div>'+IMG.aboutL,
      right:'<div class="we-eyebrow">Hoy</div>'
        +'<h2 class="we-h2">Qué hacemos <em>hoy</em><div class="we-rule" style="margin-left:0;max-width:200px;"></div></h2>'
        +'<div class="we-body-txt we-overview-txt">'
        +'<p>Hoy, tus datos financieros están dispersos en múltiples sistemas — inventario, pagos, ventas y operaciones.</p>'
        +'<p>Como resultado, la mayoría de los dueños de negocios no ven con claridad los costes reales, los márgenes verdaderos ni el flujo de caja real. Las decisiones se toman con información incompleta.</p>'
        +'<p>En Wall Ledger reunimos todos tus datos en un único sistema financiero estructurado. Obtienes un cálculo de costes preciso, un análisis claro de rentabilidad y una visión fiable del flujo de caja.</p>'
        +'<p>Así dejas de adivinar y empiezas a gestionar tu negocio con cifras reales.</p>'
        +'<p>La contabilidad transparente no es solo una buena práctica: es la base del crecimiento sostenible.</p>'
        +'</div><img class="we-img img-about-right" src="'+IMG.aboutR+'" alt="About right">'
    },
    accounting:{
      left:'<div class="we-eyebrow we-center">Contabilidad y operaciones financieras</div>'
        +'<h2 class="we-h2 we-center">Contabilidad, informes <em>y operaciones financieras</em></h2>'
        +'<p class="we-tagline">Registros precisos. Libros ordenados. Informes claros cada mes.</p>'
        +'<div class="we-rule" style="margin-left:0;"></div>'
        +'<div class="we-col" style="padding:0"><h5><span class="we-ic">'+ic(IC.why)+'</span>POR QUÉ</h5><p>Creemos que los dueños de negocios deben dormir tranquilos y centrarse en hacer crecer su empresa, no en preocuparse por Hacienda ni ahogarse en papeleo. Una buena contabilidad no es un gasto; es una herramienta poderosa para proteger y hacer crecer tu negocio.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.how)+'</span>CÓMO</h5><p>Adoptamos un enfoque proactivo, aprovechamos tecnologías modernas y desarrollamos un conocimiento profundo de tu negocio. Nos anticipamos a los problemas y lo explicamos todo en un lenguaje claro y sencillo.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.what)+'</span>QUÉ</h5><p><div class="we-do-grid"><ul><li>Contabilidad integral.</li><li>Preparación y presentación de todos los impuestos e informes requeridos.</li><li>Optimización fiscal con estrategias legales y conformes.</li><li>Regularización y puesta al día de la contabilidad.</li><li>Consultoría financiera y apoyo en auditorías.</li></ul></div></p></div>',
      right:'<div class="we-eyebrow we-center">Lo que entregamos</div>'
        +'<h2 class="we-h2 we-center">Servicios <em>que mantienen los libros en orden</em></h2><div class="we-rule"></div>'
        +'<div class="we-cards" style="grid-template-columns:1fr 1fr">'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.bookkeeping)+'</div><h6>Contabilidad mensual</h6><p>Libros limpios, cierre mensual y conciliaciones fiables.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.payroll)+'</div><h6>Gestión de nóminas</h6><p>Nóminas, impuestos y cumplimiento fiables.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.cleanup)+'</div><h6>Regularización contable</h6><p>Ordenamos el historial contable y reconstruimos una base sólida.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.finrep)+'</div><h6>Informes financieros</h6><p>Informes mensuales estructurados que responden a lo importante.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.cashflow)+'</div><h6>Gestión del flujo de caja</h6><p>Visibilidad, previsiones y disciplina en el manejo del efectivo.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.apar)+'</div><h6>Cuentas por cobrar y pagar</h6><p>Cobros estables, pagos controlados y mejor capital de trabajo.</p></div>'
        +'</div>'
    },
    planning:{
      left:'<div class="we-eyebrow we-center">Planificación financiera y análisis de negocio</div>'
        +'<h2 class="we-h2 we-center">Rentabilidad, presupuestos <em>y análisis estratégico</em></h2>'
        +'<p class="we-tagline">Convierte tus datos financieros en decisiones que impulsan el crecimiento.</p>'
        +'<div class="we-rule" style="margin-left:0;"></div>'
        +'<div class="we-col" style="padding:0"><h5><span class="we-ic">'+ic(IC.why)+'</span>POR QUÉ</h5><p>Creemos que el dinero debe trabajar para el negocio. Una verdadera transparencia financiera da a los dueños confianza, capacidad de decidir mejor y más rápido, y la base para construir una empresa que resista cualquier crisis.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.how)+'</span>CÓMO</h5><p>No solo calculamos números: los transformamos en una imagen financiera clara, identificamos oportunidades y riesgos ocultos y ofrecemos recomendaciones concretas con impacto real en la rentabilidad.</p></div>'
        +'<div class="we-col" style="padding:14px 0 0;border-top:1px solid rgba(7,16,39,.12);margin-top:14px"><h5><span class="we-ic">'+ic(IC.what)+'</span>QUÉ</h5><p><div class="we-do-grid"><ul><li>Análisis financiero en profundidad.</li><li>Informes de gestión.</li><li>Presupuestos y planificación financiera.</li><li>Previsión del flujo de caja.</li><li>Análisis de rentabilidad (por proyectos, productos y clientes).</li><li>Preparación de paquetes para inversores y financiación.</li></ul></div></p></div>',
      right:'<div class="we-eyebrow we-center">Lo que entregamos</div>'
        +'<h2 class="we-h2 we-center">Análisis <em>que impulsa el crecimiento</em></h2><div class="we-rule"></div>'
        +'<div class="we-cards" style="grid-template-columns:1fr 1fr">'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.cost)+'</div><h6>Costes y rentabilidad</h6><p>Comprende los márgenes reales por producto, servicio y cliente.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.budgeting)+'</div><h6>Presupuestos y previsiones</h6><p>Presupuestos y previsiones dinámicos que reflejan la realidad.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.business)+'</div><h6>Análisis de rendimiento</h6><p>Diagnóstico operativo y financiero para crecer.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.modeling)+'</div><h6>Modelización financiera</h6><p>Modelos para nuevos proyectos, financiación y escenarios.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.inventory)+'</div><h6>Inventario ABC y almacén</h6><p>Clasifica el inventario y ajusta la economía del almacén.</p></div>'
        +'<div class="we-card"><div class="we-cic">'+ic(IC.kpi)+'</div><h6>KPI y rendimiento del equipo</h6><p>Métricas que hacen visible y accionable el rendimiento.</p></div>'
        +'</div>'
    },
    contact:{
      left:'<div class="we-eyebrow">Contacto</div>'
        +'<h2 class="we-h2">Hablemos de <em>tu negocio.</em></h2>'
        +'<p class="we-body-txt">Ya sea que estés organizando la contabilidad, mejorando los informes, planificando el crecimiento o simplemente buscando claridad en tus números, estamos aquí para ayudarte.</p>'
        +'<p class="we-body-txt" style="margin-top:8px"><em>Sin compromiso. Sin presión.</em></p>'
        +'<div class="we-rule" style="margin-left:0;max-width:300px;"></div>'
        +'<h4>Reserva una consulta gratuita</h4>'
        +'<div class="we-form">'
        +'<div class="row"><div><label>Nombre</label><input type="text" id="wlName"></div><div><label>Teléfono / WhatsApp</label><input type="text" id="wlPhone"></div></div>'
        +'<label>Correo electrónico</label><input type="email" id="wlEmail">'
        +'<label>Mensaje</label><textarea rows="3" id="wlMsg"></textarea>'
        +'<div style="margin-top:14px"><a class="we-btn" id="wlSend" href="#">Reserva una consulta gratuita &rarr;</a></div>'
        +'<div class="we-note"><h5 style="margin-bottom:8px">¿Aún no quieres agendar?</h5><a href="mailto:innashtodina@wallledger.com">&#9993; innashtodina@wallledger.com</a><br>Respondemos en un día hábil.</div>'
        +'<p class="wl-note" id="wlNote"></p></div>',
      right:'<div class="we-eyebrow">Horario preferido</div>'
        +'<h2 class="we-h2">Elige un día <em>que te funcione.</em><div class="we-rule" style="margin-left:0;max-width:300px;"></div></h2>'
        +'<div class="we-cal" style="margin-top:16px"><div class="cal-head">&#128197; March 2026</div>'
        +'<table><tr><th>D</th><th>L</th><th>M</th><th>X</th><th>J</th><th>V</th><th>S</th></tr>'
        +'<tr><td></td><td></td><td></td><td class="d">1</td><td class="d">2</td><td class="d">3</td><td class="d">4</td></tr>'
        +'<tr><td class="d">5</td><td class="d">6</td><td class="d">7</td><td class="d">8</td><td class="d">9</td><td class="d">10</td><td class="d">11</td></tr>'
        +'<tr><td class="d">12</td><td class="d">13</td><td class="d on">14</td><td class="d">15</td><td class="d">16</td><td class="d">17</td><td class="d">18</td></tr>'
        +'<tr><td class="d">19</td><td class="d">20</td><td class="d">21</td><td class="d">22</td><td class="d">23</td><td class="d">24</td><td class="d">25</td></tr>'
        +'<tr><td class="d">26</td><td class="d">27</td><td class="d">28</td><td class="d">29</td><td class="d">30</td><td class="d">31</td><td></td></tr></table></div>'
        +'<div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:1px;color:#6b6455;margin:14px 0 6px">HORARIOS DISPONIBLES</div>'
        +'<div class="we-times"><span class="t">9:00</span><span class="t on">10:30</span><span class="t">13:00</span><span class="t">14:30</span><span class="t">16:00</span></div>'
        +'<div class="we-note we-center" style="margin-top:30px"><strong style="font-family:Georgia,serif;font-size:16px;color:#071027;display:block;margin-bottom:6px">Una oficina tranquila. Un plan claro.</strong>Nunca presionamos. Escuchamos con atención y siempre proponemos un siguiente paso concreto.</div>'
    },
    privacy:{
      left:'<div class="we-eyebrow we-center">Legal</div><h1 class="we-h1 we-center" style="font-size:38px">Política de Privacidad</h1>'
        +'<p class="we-tagline">En vigor desde el 1 de marzo de 2026 · WallLedger</p><div class="we-rule" style="margin-left:0;max-width:300px;"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>01 &nbsp;Introducción</span><br>Esta Política de Privacidad describe cómo WallLedger recopila, usa y protege la información proporcionada a través de nuestro sitio web y servicios.</p>'
        +'<p><span>02 &nbsp;Información que recopilamos</span><br>Datos de contacto que envías, información de negocio compartida durante las consultas y datos técnicos estándar como el tipo de navegador y las páginas vistas.</p>'
        +'<p><span>03 &nbsp;Cómo usamos tu información</span><br>Para responder consultas, prestar los servicios solicitados, mejorar nuestra oferta y comunicarnos sobre tu colaboración.</p>'
        +'<p><span>04 &nbsp;Cookies</span><br>Usamos cookies mínimas para el funcionamiento del sitio y la analítica. Puedes controlarlas desde la configuración de tu navegador.</p></div>',
      right:'<div class="we-eyebrow we-center">Legal</div><h1 class="we-h1 we-center" style="font-size:38px">&nbsp;</h1><div class="we-rule"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>05 &nbsp;Tus derechos</span><br>Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento contactándonos.</p>'
        +'<p><span>06 &nbsp;Seguridad de los datos</span><br>Aplicamos medidas administrativas, técnicas y físicas para proteger tu información.</p>'
        +'<p><span>07 &nbsp;Privacidad de menores</span><br>Nuestros servicios están dirigidos a empresas y no a menores de 13 años.</p>'
        +'<p><span>08 &nbsp;Cambios en esta política</span><br>Podemos actualizar esta política de vez en cuando. La fecha de vigencia se actualizará en consecuencia.</p>'
        +'<p><span>09 &nbsp;Información de contacto</span><br>Las preguntas sobre esta política pueden enviarse a hello@wallledger.com.</p></div>'
    },
    terms:{
      left:'<div class="we-eyebrow we-center">Legal</div><h1 class="we-h1 we-center" style="font-size:38px">Términos y Condiciones</h1>'
        +'<p class="we-tagline">En vigor desde el 1 de marzo de 2026 · WallLedger</p><div class="we-rule" style="margin-left:0;max-width:300px;"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>01 &nbsp;Uso del sitio web</span><br>Al acceder a wallledger.com aceptas usar el sitio de forma lícita y conforme a estos términos.</p>'
        +'<p><span>02 &nbsp;Propiedad intelectual</span><br>Todo el contenido, marcas y materiales son propiedad de WallLedger salvo que se indique lo contrario.</p>'
        +'<p><span>03 &nbsp;Información que envías</span><br>Eres responsable de la exactitud de la información enviada a través de formularios o durante las consultas.</p>'
        +'<p><span>04 &nbsp;Comunicaciones</span><br>Al contactarnos, aceptas recibir respuestas relacionadas con tu consulta o colaboración.</p>'
        +'<p><span>05 &nbsp;Enlaces de terceros</span><br>El sitio puede hacer referencia a recursos de terceros. No somos responsables de su contenido ni de sus prácticas.</p></div>',
      right:'<div class="we-eyebrow we-center">Legal</div><h1 class="we-h1 we-center" style="font-size:38px">&nbsp;</h1><div class="we-rule"></div>'
        +'<div class="we-body-txt pcolmargin spancolor">'
        +'<p><span>06 &nbsp;Aviso legal</span><br>El contenido se ofrece con fines informativos generales y no constituye asesoramiento profesional para tu situación concreta.</p>'
        +'<p><span>07 &nbsp;Limitación de responsabilidad</span><br>En la máxima medida permitida por la ley, WallLedger no es responsable de daños indirectos o derivados del uso del sitio.</p>'
        +'<p><span>08 &nbsp;Cambios en los términos</span><br>Podemos revisar estos términos periódicamente. La fecha de vigencia reflejará la última actualización.</p>'
        +'<p><span>09 &nbsp;Información de contacto</span><br>Las preguntas sobre estos términos pueden enviarse a hello@wallledger.com.</p></div>'
    }
  };}

  return { CHROME:CHROME, builders:{ en:EN, ru:RU, es:ES } };
})();