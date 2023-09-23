# Escrevendo as Classes de Um Jogo

## Propriedades
- `name` (nome do herói): Armazena o nome do herói.
- `age` (idade do herói): Armazena a idade do herói.
- `type` (tipo do herói): Define o tipo do herói (por exemplo, guerreiro, mago, monge, ninja).
- `fatigueLevel` (nível de cansaço): Acompanha o nível de cansaço do herói.
- `heroicAttack` (ataque heroico): Armazena o tipo de ataque que o herói realiza.

## Métodos
- `attack()`: Permite que o herói realize um ataque de acordo com seu tipo. O nível de cansaço aumenta após cada ataque.
- `rest()`: Verifica se o nível de cansaço do herói é igual ou superior a 50. Se for, o herói estará descansando; caso contrário, o tipo de ataque realizado será exibido.

## Exemplo de Uso
Aqui está um exemplo de como você pode criar e usar a classe `Hero`:

```javascript
const guerreiro = new Hero('Ironclad', 52, 'guerreiro');
const ninja = new Hero('Shadowblade', 130, 'ninja');

ninja.attack();

