// Faça um “jogo da velha” criando uma matriz em duas dimensões. (Você deve criar um array com 3 arrays de 3 elementos cada dentro). O programa deve pedir as coordenadas (linha e coluna) alternadamente para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, ele deve perguntar se desejam jogar mais uma vez, e registrar quem venceu aquela rodada, se os jogadores desejarem parar, o programa deve mostrar quem ganhou mais rodadas e quem é o grande vencedor.

console.clear();
const prompt = require('prompt-sync')();

let player1Victory=0;
let player2Victory=0;
let rounds=[0,0]
let newRound= true


let tabuleiro=[['-','-','-'],['x','-','-'],['-','-','-']];


function countVictory (tabuleiro){
//VERIFICAR LINHAS
  for (let i=0; i<tabuleiro.length; i++){
    if (tabuleiro[i][0]== tabuleiro[i][1] && tabuleiro[i][0]!= '-' && tabuleiro[i][1] == tabuleiro[i][2]){
      if(tabuleiro[i][0] == 'x'){
        player1Victory+=1
      } else if(tabuleiro[i][0] == 'o'){
        player2Victory+=1
      }
    }
  }

//VERIFICAR COLUNA
  for (let i=0; i<tabuleiro.length; i++){
    if (tabuleiro[0][i]== tabuleiro[1][i] && tabuleiro[0][i]!= '-' && tabuleiro[1][i] == tabuleiro[2][i]){
      if(tabuleiro[0][i] == 'x'){
        player1Victory+=1
      } else if(tabuleiro[0][i] == 'o'){
        player2Victory+=1
      }
    }
  }

// VERIFICAR DIAGONAIS
  if ((tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[0][0]!= '-' && tabuleiro[1][1] == tabuleiro[2][2]) || (tabuleiro [0] [2] == tabuleiro[1][1] && tabuleiro[0][2]!= '-' && tabuleiro[1][1] == tabuleiro[2][0])){
      if (tabuleiro [0] [0] == 'x'){
        player1Victory+=1
      } else if (tabuleiro [0] [0] == 'o'){ 
        player2Victory+=1
      }
    }
    
    

}

//titulo do programa
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log('                             JOGO DA VELHA');
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log();

// Instruções
console.log('Em uma matrix de 3 coluna e 3 linhas, 2 jogadores escolhem as posições das colunas e das linhas que desejam marcar.');
console.log('Exemplo:')
console.table(tabuleiro);
console.log('No exemplo acima a coluna escolhida foi a 0 e a linha foi a 1.');
console.log();
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log();
console.log('Agora é a vez de vocês...');
tabuleiro[1][0]='-'

while(newRound == true){

  console.table(tabuleiro);
  
  //Pegar os inputs dos usuários
  while(player1Victory == 0 && player2Victory == 0){
    //Inputs do player1
    let player1Coluna= +prompt('Jogador 1- Qual Coluna deseja escolher? [responda com o número correspondente a coluna desejada]: ');
    let player1Linha= +prompt('Jogador 1- Qual Linha deseja escolher? [responda com o número correspondente a Linha desejada]: ');
    console.log()
  
    //verificabdo se o local já foi escolhido
    while (tabuleiro[player1Linha][player1Coluna] !== '-'){
      console.log('O local já foi escolhido. Por favor escolha um local válido.');
      console.log();
      player1Coluna= +prompt('Jogador 1- Qual Coluna deseja escolher? [responda com o número correspondente a coluna desejada]: ');
      player1Linha= +prompt('Jogador 1- Qual Linha deseja escolher? [responda com o número correspondente a Linha desejada]: ');
      console.log()
    }
  
    //Inserindo escolha do player 1 no tabuleiro
    tabuleiro[player1Linha][player1Coluna]= 'x';
  
    //chamando a função para verificar vitoria
    countVictory(tabuleiro)
    if(player1Victory != 0 || player2Victory != 0){
      console.table(tabuleiro)
      break
    }
  
    //Inputs do player2
    let player2Coluna= prompt('Jogador 2- Qual Coluna deseja escolher? [responda com o número correspondente a coluna desejada]: ');
    let player2Linha= prompt('Jogador 2- Qual Linha deseja escolher? [responda com o número correspondente a Linha desejada]: ');
  
    //verificando se o local já foi escolhido
    while (tabuleiro[player2Linha][player2Coluna] !== '-'){
      console.log('O local já foi escolhido. Por favor escolha um local válido.');
      console.log();
      player2Coluna= prompt('Jogador 2- Qual Coluna deseja escolher? [responda com o número correspondente a coluna desejada]: ');
      player2Linha= prompt('Jogador 2- Qual Linha deseja escolher? [responda com o número correspondente a Linha desejada]: ');
      console.log()
    }
  
    //Inserindo escolha do player 2 no tabuleiro
    tabuleiro[player2Linha][player2Coluna]= 'o';
    console.log();
  
    //chamando a função para verificar vitoria
    countVictory(tabuleiro)
    if(player1Victory != 0 || player2Victory != 0){
      console.table(tabuleiro)
      break
    }
    
  
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    console.log('O tabuleiro ficou assim:')
    console.table(tabuleiro)
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    console.log()
  }
  
  if (player1Victory > player2Victory){
    console.log('O jogador 1 venceu!')
  } 
  else if (player1Victory < player2Victory){
    console.log('O jogador 2 venceu!')
  }

  console.log()

  newRound= prompt('Desejam jogar novamente? [sim/não]: ').toLowerCase();

  
  if (newRound === 'sim'){
    newRound= true;
    tabuleiro=[['-','-','-'],['-','-','-'],['-','-','-']];
  }

  if (newRound !== true){
    newRound= false;
  }

  rounds=[player1Victory,player2Victory]
  player1Victory=0
  player2Victory=0
}

console.log()

console.log(`O jogador 1 ganhou ${rounds[0]} partida(s) e o jogado 2 ganhou ${rounds[1]} partida(s).`)

console.log()

if (rounds[0] > rounds[2]){
  console.log('Parabéns jogador 1! Você é o grande campeão')
} 
else if (rounds[0] < rounds[2]){
  console.log('Parabéns jogador 2! Você é o grande campeão')
} else {console.log( "Que pena que vocês não quiseram jogar novamente. Deu empate e ficamos sem saber qual de vocês dois é um verdadeiro campeão. :'( ")}

