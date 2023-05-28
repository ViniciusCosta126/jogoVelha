import { useState } from "react";
import * as C from "./style";

const Jogo = () => {
  const [casas, setCasas] = useState(["", "", "", "", "", "", "", "", ""]);
  const [jogador, setJogador] = useState("X");
  const [pontuacaoX, setPontuacaoX] = useState(0);
  const [pontuacaoO, setPontuacaoO] = useState(0);

  const jogada = (index) => {
    var novasCasas = casas;
    if (novasCasas[index] !== "") {
      alert("Escolha outra casa!!");
      return;
    }
    novasCasas[index] = jogador;
    if (jogador === "X") {
      setJogador("O");
    } else {
      setJogador("X");
    }
    setCasas(novasCasas);
    validarVitoria();
    verificarVelha();
  };
  const resetarJogo = () => {
    setJogador("X");
    setCasas(["", "", "", "", "", "", "", "", ""]);
    setPontuacaoX(0);
    setPontuacaoO(0);
  };
  const novoJogo = () => {
    setCasas(["", "", "", "", "", "", "", "", ""]);
  };
  const validarVitoria = () => {
    const combinacoesVitoria = [
      // Linhas
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Colunas
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonais
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Verificar todas as combinações de vitória
    for (let combinacao of combinacoesVitoria) {
      const [a, b, c] = combinacao;
      if (casas[a] && casas[a] === casas[b] && casas[a] === casas[c]) {
        if (casas[a] === "X") {
          setPontuacaoX(pontuacaoX + 1);
          setJogador("O");
        } else {
          setPontuacaoO(pontuacaoO + 1);
          setJogador("X");
        }
        alert(`O Jogador vencedor foi ${casas[a]}`);
        setTimeout(() => {
          setCasas(["", "", "", "", "", "", "", "", ""]);
        }, 800);
        return casas[a]; // Retorna o símbolo do vencedor (X ou O)
      }
    }

    return null; // Retorna null se não houver vencedor
  };
  const verificarVelha = () => {
    // Verificar se todas as posições do tabuleiro estão preenchidas
    const todasPreenchidas = casas.every((posicao) => posicao !== "");

    // Se todas as posições estão preenchidas e não houve um vencedor, é uma velha
    if (todasPreenchidas && !validarVitoria()) {
      alert("Deu Velha!!");
      setJogador("X");
      setTimeout(() => {
        setCasas(["", "", "", "", "", "", "", "", ""]);
      }, 800);
      return true; // Velha
    }

    return false; // Não é uma velha
  };
  return (
    <C.Container>
      <C.Title>Jogo da Velha</C.Title>
      <C.ContainerJogo>
        <C.Placar>
          <h2>Placar</h2>
          <div>
            <p>Jogador X: {pontuacaoX}</p>
            <div></div>
            <p>Jogador O: {pontuacaoO}</p>
          </div>
          <h3>É a vez do jogador: {jogador}</h3>
        </C.Placar>
        <C.ContainerBtns>
          <button onClick={() => resetarJogo()}>Resetar Jogo</button>
          <button onClick={() => novoJogo()}>Novo Jogo</button>
        </C.ContainerBtns>
        <C.Tabuleiro>
          {casas.map((casa, index) => {
            return (
              <C.Casa onClick={() => jogada(index)} key={index}>
                {casa}
              </C.Casa>
            );
          })}
        </C.Tabuleiro>
      </C.ContainerJogo>
    </C.Container>
  );
};

export default Jogo;
