import { useState } from "react";
import QRCode from "./QRCode";
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
        <Logo />
        <Profile>@geumu_24pa</Profile>
        <Title>Grupo Escoteiro Ubirajara Marques Umbuzeiro</Title>
        <Button href="https://www.instagram.com/geumu_24pa/" target="_blank">
          Instagram
        </Button>
        <Button onClick={handleModal} active={isOpen}>
          Whatsapp
        </Button>
        {isOpen && (
          <Modal>
            <div style={{ width: "100%", maxWidth: "200px" }}>
              <QRCode />
            </div>
            <Title>Entre em contato conosco e seja escoteiro!</Title>
            <Title>Leia o QRCode ou clique no botão abaixo</Title>
            <Link href="https://contate.me/geumu24pa" target="_blank">Quero ser escoteiro</Link>
          </Modal>
        )}
      </Content>
    </Container>
  );
}

export default App;
