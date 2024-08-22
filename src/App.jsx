import { useState } from "react";
import QRCode from "./QRCode";
import logoGeumu from "./assets/logo_geumu.jpg";
import {
  Button,
  Container,
  Content,
  Link,
  Logo,
  Modal,
  Profile,
  Title,
} from "./styles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    return setIsOpen((ref) => !ref);
  };

  return (
    <Container>
      <Content>
        <Logo>
          <img
            loading="lazy"
            src={logoGeumu}
            style={{ width: "100%", borderRadius: "100px" }}
          />
        </Logo>
        <Profile>@escoteirosubirajara</Profile>
        <Title>Grupo Escoteiro Ubirajara Marques Umbuzeiro</Title>
        <Button
          href="https://www.instagram.com/escoteirosubirajara/"
          target="_blank"
        >
          Instagram
        </Button>
        <Button onClick={handleModal} active={isOpen}>
          Whatsapp
        </Button>
        {isOpen && (
          <Modal>
            <a
              href="https://api.whatsapp.com/send?phone=5593991310661&text=Ol%C3%A1,%20quero%20ser%20escoteiro(a)"
              target="_blank"
              style={{ width: "100%", maxWidth: "150px" }}
            >
              <QRCode />
            </a>
            <Title>Entre em contato conosco e seja escoteiro!</Title>
            <Title>Leia o QRCode ou clique no botão abaixo</Title>
            <Link
              href="https://api.whatsapp.com/send?phone=5593991310661&text=Ol%C3%A1,%20quero%20ser%20escoteiro(a)"
              target="_blank"
            >
              Quero ser escoteiro
            </Link>
          </Modal>
        )}
        <Button
          href="https://maps.app.goo.gl/oyxNLQQF6AFN6tyA8"
          target="_blank"
        >
          Localização
        </Button>
      </Content>
    </Container>
  );
}

export default App;
