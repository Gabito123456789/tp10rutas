import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  nav: {
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 15px',
  },
};

const HistoriaPage = () => (
  <Container style={styles.container}>
    <Typography variant="h1" style={styles.header}>Historia de vida</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Whitfield Diffie, nacido el 5 de junio de 1944 en Washington D.C., es un criptógrafo y matemático estadounidense de renombre. Su contribución más destacada es la creación del concepto de criptografía de clave pública, un hito revolucionario en el campo de la seguridad informática. Junto con Martin Hellman, publicó en 1976 el influyente artículo "New Directions in Cryptography" (Nuevas Direcciones en Criptografía), que sentó las bases de la criptografía moderna y cambió para siempre la forma en que aseguramos nuestras comunicaciones en línea.
    </Typography>
    <Typography variant="body1" style={styles.paragraph}>
      En 1991 se incorporó a Sun Microsystems Laboratories (en Menlo Park, California) como ingeniero distinguido y trabajó principalmente en los aspectos de política pública de la criptografía. En mayo de 2007 Diffie ascendió a jefe oficial de seguridad y vicepresidente de Sun Microsystems.
    </Typography>
    <img src="src/Whitfield_Diffie_Royal_Society.jpg" alt="Whitfield Diffie - Royal Society" />
  </Container>
);

const LogrosPage = () => (
  <Container style={styles.container}>
    <Typography variant="h1" style={styles.header}>Logros informáticos de Whitfield Diffie</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Whitfield Diffie ha logrado varios hitos importantes en el campo de la informática y la seguridad de la información. Algunos de sus logros más destacados incluyen:
    </Typography><br></br>
    <Typography variant="h1" style={styles.header}>Creación de la criptografía de clave pública</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Junto con Martin Hellman, Whitfield Diffie es reconocido por desarrollar el concepto revolucionario de la criptografía de clave pública. Su artículo de 1976, "New Directions in Cryptography" (Nuevas Direcciones en Criptografía), introdujo el concepto de intercambio de claves públicas para permitir la comunicación segura en redes no seguras.
    </Typography><br></br>
    <Typography variant="h1" style={styles.header}>Establecimiento de estándares de seguridad</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Whitfield Diffie ha sido un defensor clave para establecer estándares de seguridad en la industria. Ha trabajado en colaboración con organizaciones y ha contribuido a la creación de estándares criptográficos, como el algoritmo de intercambio de claves Diffie-Hellman y el protocolo de seguridad de capa de transporte (TLS).
    </Typography><br></br>
    <Typography variant="h1" style={styles.header}>Premio Turing</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      En 2015, Whitfield Diffie recibió el prestigioso Premio Turing, el galardón más alto en el campo de la informática. El premio reconoció su contribución fundamental al desarrollo de la criptografía de clave pública y su impacto en la seguridad de la información.
    </Typography><br></br>
    <Typography variant="h1" style={styles.header}>Avance en la seguridad de las comunicaciones</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Los logros de Whitfield Diffie en el campo de la criptografía de clave pública han sentado las bases para la seguridad en las comunicaciones digitales. Su trabajo ha sido fundamental para garantizar la confidencialidad, autenticidad e integridad de las transacciones y las comunicaciones en línea.
    </Typography><br></br>
    <Typography variant="h1" style={styles.header}>Influencia en el campo de la seguridad</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Whitfield Diffie ha sido una figura influyente y respetada en el campo de la seguridad de la información. Sus contribuciones y conocimientos han guiado y moldeado el desarrollo de sistemas y protocolos de seguridad utilizados en todo el mundo.
    </Typography><br></br>
  </Container>
);

const PremiosPage = () => (
  <Container style={styles.container}>
    <Typography variant="h1" style={styles.header}>Premios</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      En 1992 le fue otorgado el doctorado honoris causa en Technical Sciences por la Escuela Politécnica Federal de Zúrich (Eidgenössische Technische Hochschule Zürich)
    </Typography>
    <Typography variant="body1" style={styles.paragraph}>
      En 2016 recibió junto con Martin Hellman el prestigioso premio A.M. Turing de 2015 de la Association for Computer Machinery por su trabajo "Que revolucionó la seguridad informática"
    </Typography>
  </Container>
);

const ActualidadPage = () => (
  <Container style={styles.container}>
    <Typography variant="h1" style={styles.header}>Actualidad sobre Whitfield Diffie</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Whitfield Diffie continúa siendo una figura destacada en el campo de la seguridad informática. Aquí tienes algunas noticias recientes sobre su trabajo y contribuciones:
    </Typography><br></br>
    <Typography variant="h1" style={styles.header}>Avances en la criptografía</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      A medida que las amenazas de seguridad evolucionan, Whitfield Diffie ha seguido trabajando en la investigación y el desarrollo de nuevos métodos criptográficos. Sus contribuciones recientes se centran en la resistencia a los ataques cuánticos y en el fortalecimiento de la seguridad en un entorno digital en constante cambio.
    </Typography><br></br>
    <Typography variant="h1" style={styles.header}>Participación en conferencias y eventos</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Whitfield Diffie sigue siendo un conferencista destacado en conferencias y eventos relacionados con la seguridad informática. Ha compartido su experiencia y conocimientos en temas como la criptografía, la privacidad y la seguridad de la información en diversas plataformas y entornos académicos.
    </Typography><br></br>
    <Typography variant="h1" style={styles.header}>Asesoramiento y liderazgo en la industria</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Whitfield Diffie continúa asesorando a organizaciones líderes en seguridad y colaborando en proyectos relacionados con la criptografía y la seguridad informática. Su experiencia y perspectivas siguen siendo altamente valoradas y su liderazgo influyente en la industria de la seguridad.
    </Typography><br></br>
    <Typography variant="h1" style={styles.header}>Legado y reconocimiento continuo</Typography>
    <Typography variant="body1" style={styles.paragraph}>
      El legado de Whitfield Diffie en la criptografía de clave pública y la seguridad informática sigue siendo reconocido y honrado en la comunidad. Sus contribuciones han allanado el camino para garantizar la seguridad y la privacidad en el mundo digital, y su trabajo sigue siendo una referencia importante para investigadores, profesionales y entusiastas de la seguridad en todo el mundo.
    </Typography><br></br>
  </Container>
);

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static" style={styles.nav}>
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" style={styles.navLink}>
              Historia
            </Typography>
            <Typography variant="h6" component={Link} to="/logros" style={styles.navLink}>
              Logros
            </Typography>
            <Typography variant="h6" component={Link} to="/premios" style={styles.navLink}>
              Premios
            </Typography>
            <Typography variant="h6" component={Link} to="/actualidad" style={styles.navLink}>
              Actualidad
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<HistoriaPage />} />
          <Route path="/logros" element={<LogrosPage />} />
          <Route path="/premios" element={<PremiosPage />} />
          <Route path="/actualidad" element={<ActualidadPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
