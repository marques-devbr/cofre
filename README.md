# Cofre: kit de segurança digital

![Tela do Cofre](capa.png)

**Veja funcionando:** https://marques-devbr.github.io/cofre/

## O que é

O Cofre é um site com ferramentas de segurança digital que rodam direto no navegador, sem login e sem guardar dados de quem usa. Ele consulta se uma senha já apareceu em vazamentos, estima a força de uma senha e cifra textos com a cifra de César. Fiz este projeto na disciplina de Introdução à Ciência da Computação, a partir de um código-base do professor.

## Ferramentas

- **Essa senha já vazou?** Consulta uma base real de senhas vazadas sem enviar a senha (k-anonimato).
- **Quantos bits tem essa senha?** Estima a força da senha.
- **Cifra de César:** desloca cada letra do alfabeto por uma chave de 1 a 25 para cifrar um texto, e volta ao texto original ao decifrar com a mesma chave.

## O que eu aprendi

- Um branch deixa eu criar uma ferramenta sem mexer na versão principal, e o merge junta tudo depois que funciona.
- Apagar o `.env` não apaga a senha do histórico: o `git show` de um commit antigo ainda mostra o conteúdo, então uma senha real teria que ser trocada.
- Um conflito acontece quando dois branches mudam a mesma linha. Resolvi escolhendo a cor final do `style.css` e apagando os marcadores do Git.
- O `git revert` desfaz um commit com um commit novo, sem apagar o histórico. Foi assim que corrigi o `*` que tinha virado `+` na calculadora de bits.
- Uma issue com `Closes #1` na mensagem do commit fecha sozinha quando o pull request é aceito.

## Tecnologias

HTML, CSS, JavaScript, Git, GitHub Pages e a API Pwned Passwords.

## Sobre o histórico

O histórico tem um arquivo `.env` com uma senha falsa, de propósito: foi um exercício para mostrar que apagar um arquivo não apaga o que já foi publicado no Git.

## Créditos

Código-base do Prof. Mario Rebello, na disciplina Introdução à Ciência da Computação (2026/2).
A ferramenta Cifra de César foi feita por mim, com apoio de IA (Claude) na escrita do código. Licença MIT.
