# App

Todo Task Arloesi

## Rfs (Requisitos funcionais)

- [X] Deve ser possível adicionar
- [X] Deve ser possível listar
- [X] Deve ser possível editar
- [X] Deve ser possível Excluir
- [X] Deve ser possível marcar tarefa como finalizada

## Rns (Regras de negócio)

- [X] Para adicionar uma nova tarefa, o usuário deverá informar a descrição e o nível de prioridade da tarefa
Os possíveis níveis de prioridade são: Baixa, Média, Alta.
- [X] Cada tarefa da listagem deverá conter a descrição, nível de prioridade, data de criação, se foi finalizado ou não e a data da finalização da tarefa (Caso tenha sido finalizada)
- [X] O usuário só poderá editar a descrição e o nível de prioridade da tarefa.
- [ ] Uma vez marcada como finalizada o usuário não poderá desmarcá-la

## RNfs (Requisitos não-funcionais)

- [ ] Aplicar princípios S.O.L.I.D.
- [X] Criar testes automatizados (unitários, e2e)
- [X] Utilizar docker
- [X] Realizar deploy
- [X] Criar documentação (swagger)