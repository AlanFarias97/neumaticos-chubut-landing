import './styles.css';

const business = {
  name: 'Neumaticos Chubut',
  owner: 'Nombre del dueno',
  years: '40',
  whatsapp: 'https://wa.me/5492804000000',
  shopUrl: '#tienda-online',
  address: 'Av. principal 1234, Chubut',
  phone: '+54 9 280 400-0000',
  hours: [
    ['Lun a Vie', '8:30 a 12:30 | 16:00 a 20:00'],
    ['Sabados', '8:30 a 13:00']
  ]
};

const services = [
  'Venta de neumaticos',
  'Alineacion y balanceo',
  'Reparacion de pinchaduras',
  'Rotacion y control',
  'Valvulas y camaras',
  'Asesoramiento por medida'
];

const brands = ['Pirelli', 'Bridgestone', 'Firestone', 'Fate', 'Goodyear', 'Michelin'];

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="${business.name}">
      <span class="brand-mark">NC</span>
      <span>${business.name}</span>
    </a>
    <nav class="nav" aria-label="Secciones principales">
      <a href="#inicio">Inicio</a>
      <a href="#historia">Nuestra historia</a>
      <a href="#servicios">Servicios</a>
      <a href="#marcas">Marcas</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-copy">
        <p class="eyebrow">Gomeria de confianza en Chubut</p>
        <h1>${business.years} anos cuidando el camino de nuestros clientes.</h1>
        <p>
          Venta de neumaticos, reparaciones, alineacion y balanceo con la atencion cercana
          de un oficio que se gano su lugar trabajando dia a dia.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="${business.whatsapp}" target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
          <a class="button button-secondary" href="${business.shopUrl}">Tienda online</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="Taller de neumaticos">
        <div class="tire-ring"></div>
        <div class="hero-stat">
          <strong>${business.years}</strong>
          <span>anos de trayectoria</span>
        </div>
      </div>
    </section>

    <section class="story section" id="historia">
      <div>
        <p class="eyebrow">Nuestra historia</p>
        <h2>Un negocio hecho de trabajo, confianza y clientes de toda la vida.</h2>
      </div>
      <div class="story-card">
        <p>
          Hace cuatro decadas, ${business.owner} empezo este camino con una idea sencilla:
          atender bien, resolver rapido y decir siempre la verdad sobre cada cubierta.
        </p>
        <p>
          Con los anos, la gomeria se convirtio en un punto conocido para familias,
          trabajadores, viajantes y vecinos que buscan una recomendacion honesta antes
          de salir a la ruta.
        </p>
      </div>
    </section>

    <section class="section split" id="servicios">
      <div>
        <p class="eyebrow">Servicios</p>
        <h2>Lo que necesitas para seguir andando.</h2>
        <p class="muted">
          Atencion para autos, camionetas y vehiculos de trabajo. Consultanos por medida,
          disponibilidad y turnos.
        </p>
      </div>
      <div class="service-grid">
        ${services.map((service) => `<article><span></span><strong>${service}</strong></article>`).join('')}
      </div>
    </section>

    <section class="brands section" id="marcas">
      <div>
        <p class="eyebrow">Marcas</p>
        <h2>Trabajamos con marcas reconocidas y opciones para cada uso.</h2>
      </div>
      <div class="brand-grid">
        ${brands.map((brand) => `<span>${brand}</span>`).join('')}
      </div>
    </section>

    <section class="contact section" id="contacto">
      <div>
        <p class="eyebrow">Contacto</p>
        <h2>Pasate por la gomeria o escribinos antes de salir.</h2>
        <p class="muted">${business.address}</p>
      </div>
      <div class="contact-card">
        <a class="button button-primary" href="${business.whatsapp}" target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
        <a class="button button-secondary" href="tel:${business.phone.replace(/\s/g, '')}">${business.phone}</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div>
      <a class="brand" href="#inicio">
        <span class="brand-mark">NC</span>
        <span>${business.name}</span>
      </a>
      <p>Venta de neumaticos, gomeria, alineacion y balanceo.</p>
    </div>
    <div>
      <h3>Secciones</h3>
      <a href="#inicio">Inicio</a>
      <a href="#historia">Nuestra historia</a>
      <a href="#servicios">Servicios</a>
      <a href="#marcas">Marcas</a>
      <a href="#contacto">Contacto</a>
    </div>
    <div>
      <h3>Horarios de atencion</h3>
      ${business.hours.map(([day, time]) => `<p><strong>${day}:</strong> ${time}</p>`).join('')}
    </div>
    <div>
      <h3>Contacto</h3>
      <p>${business.address}</p>
      <p>${business.phone}</p>
    </div>
  </footer>
`;
