# clone-tabnews
Reprodução de um projeto com dificuldades reais para fins de aprendizado de contextos além dos livros.

@fredcera

# Protocolos Web mais comuns.
### http: Hypertext Transfer Protocol
### FTP: File Transfer Protocol
### SMTP: Simple Mail Transfer Protocol

> Definem a forma como são transferidas as informações dentro de transações de dados.

> Define o tipo de dado, quando incia e termina, mensagem de pareamente de pacotes.


## Protocolo de transferencia de dados.

### *TCP*: 
Transmission Control Protocol (Espera pra sincronizar deixando lento a transmissão)

### *UDP*: 
User Data Protocol (Não espera a sincronização acontecer, usa interpolação para preencher cenas)


# **Camadas diferentes para controle de paginação e interação do usuário**

## Next.js 
Utiliza File-Base Routing, onde PHP utilizava como forma de Paginação nos diretórios. (back)
Faz a conexão com o mundo/rotas, e leva a camada de objetos concretos do front.

## React 
Utilizada para receber as entradas e retornos ao usuário. (front)
Componentização de objetos recebidos da camada de rotas, para a interface com o usuário.

### package.json
Arquivo de manifesto do projeto.
Armazena:
- Metadados
- Scripts
- Dependencias do projeto

### package-lock.json
Arquivo de manifesto *exclusivo* para dependencias.
Armazena:
- Dependencias  (NPM Instal -> next e react [instaladas via comandos])
    - Dependencias (Dependencias das dependeicas instaladas via comando)


## DICAS Git
Atenção ao usar comando: git push --force (pode ferrar tudo se for em projeto colaborativo)
# utilizar de forma segura da seguinte maneira
\*git push --forse-with-lease
    - O comando git push --force-with-lease é uma versão mais segura do git push --force. Ele permite que você atualize o repositório remoto com seu histórico local, mas apenas se ninguém mais tiver feito alterações na branch remota desde a última vez que você sincronizou. É uma maneira de evitar sobrescrever acidentalmente o trabalho de outras pessoas.


